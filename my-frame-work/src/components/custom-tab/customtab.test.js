
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import CustomTab from "./index";
import sinon from "sinon";
configure({ adapter: new Adapter() });
describe("general testing for custom tab", () => {
    it("check all the tab list rendered", () => {
        let wrapper = mount(<CustomTab active={1}>
            <div title="title1">
                content 1

            </div>
            <div title="title2">
                content 2

            </div>
            <div title="title3">
                content 3

            </div>
        </CustomTab>);
        expect(wrapper.find(".tab-item")).toHaveLength(3)
    })
    it("row have two child ?", () => {
        let wrapper = mount(<CustomTab active={1}>
            <div title="title1">
                content 1

            </div>
            <div title="title2">
                content 2

            </div>
            <div title="title3">
                content 3

            </div>
        </CustomTab>);
        expect(wrapper.find(".row").children()).toHaveLength(2)

    });
    it("check active content displayed", () => {
        let wrapper = mount(<CustomTab active={1}>
            <div title="title1">  content 1 </div>
            <div title="title2">  content 2 </div>
            <div title="title3">  content 3 </div>
        </CustomTab>);


        expect(wrapper.find(".row").childAt(1).childAt(0).equals(<div title="title2">  content 2 </div>)
        ).toBeTruthy()
    });
    it("check active class set in the selected div", () => {
        let wrapper = mount(<CustomTab active={1}>
            <div title="title1">  content 1 </div>
            <div title="title2">  content 2 </div>
            <div title="title3">  content 3 </div>
        </CustomTab>);
        expect(wrapper.find(".row").childAt(0).childAt(1).hasClass('active')).toBeTruthy()
    })
    it("check renderer function is called ", () => {
        let renderer = jest.fn((text) => text);
        let wrapper = mount(<CustomTab active={1} renderer={renderer}>
            <div title="title1">  content 1 </div>
            <div title="title2">  content 2 </div>
            <div title="title3">  content 3 </div>
        </CustomTab>);
        expect(renderer).toHaveBeenCalledTimes(3)

    })
    it("change active by clicking tab", () => {
        let renderer = jest.fn((text) => text);
        let wrapper = mount(<CustomTab active={1} renderer={renderer} >
            <div title="title1">  content 1 </div>
            <div title="title2">  content 2 </div>
            <div title="title3">  content 3 </div>
        </CustomTab>);
        console.log(wrapper.instance())
        // let spy = jest.spyOn(CustomTab.instance(), 'changeTab')
        let spy =  sinon.spy(wrapper.instance(), 'changeTab');
        wrapper.setProps({
            changeTab: (i) => {
                wrapper.setProps({
                    active: i
                })
            }
        });
        let selected = 2;
        wrapper.find('.row').childAt(0).childAt(selected).simulate("click");
        wrapper.find('.row').childAt(0).childAt(selected).simulate("click");
        expect(wrapper.find(".row").childAt(0).childAt(selected).hasClass('active')).toBeTruthy()
        expect(renderer).toHaveBeenCalledTimes(9);
        wrapper.unmount();
        expect(spy.callCount).toEqual(2);


    })
})