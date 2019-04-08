
import { configure, shallow ,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import React from "react";
import toJson from 'enzyme-to-json';
import ShallowComponent,{StateFull} from "./shallowcomponent";
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
    console.log(wrapper.instance().state);
    expect(wrapper.instance()).toBeInstanceOf(StateFull)
})