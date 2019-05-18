
import { configure, shallow ,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import React from "react";
import toJson from 'enzyme-to-json';
import ShallowComponent,{StateFull,DummyComponent} from "./shallowcomponent";
configure({ adapter: new Adapter() }); 

it("shallow component test",()=>{
    let wrapper = shallow(<ShallowComponent/>);
    expect(wrapper.find('.foo')).toHaveLength(2);
    expect(toJson(wrapper)).toMatchSnapshot();
})


it("shallow component test",()=>{
    let wrapper = mount(<ShallowComponent/>);
    
    console.log(wrapper.instance()) 
    expect(wrapper.find('.foo')).toHaveLength(2);
    expect(toJson(wrapper)).toMatchSnapshot();
    console.log(wrapper.html())
})
it("statefull",()=>{
    let wrapper = shallow(<StateFull/>);
    console.log("hello",wrapper.instance().state);
    expect(wrapper.instance()).toBeInstanceOf(StateFull)
})
it("select child by dive",()=>{
    let wrapper = shallow(<ShallowComponent/>);
    expect(wrapper.find(DummyComponent).dive().find('.state-class')).toHaveLength(1);
    expect(wrapper.find(DummyComponent)).toHaveLength(1);

})
it("get text in shallow",()=>{
    let Dummy=()=><div className="cls">...</div>
    let wrapper = mount(<div><Dummy/><div>hello</div> world</div>);
    console.log("sss",wrapper.text())
    expect(wrapper.text()).toEqual("<Dummy />hello world");
})