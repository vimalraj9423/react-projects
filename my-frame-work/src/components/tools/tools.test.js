import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { List } from './index';

configure({ adapter: new Adapter() }); 
    test('List checking ', () => {
        const items = ['one', 'two', 'three'];
        const wrapper = shallow(<List items={items} />);

        // Expect the wrapper object to be defined
        expect(wrapper.find('.list-itddems')).toBeDefined();
        // expect(wrapper.find('.item')).toHaveLength(items.length); 
    });
    test('List checking ', () => {
        const items = ['one', 'two', 'three'];
        let listTypeMap={
            circle:"a",
            square:"b",
            upperRoman:"c",
            lowerAlpha:"d"
        }
        let listType=["circle","square","upperRoman","lowerAlpha"];
         
            let wrapper = shallow(<List items={items} listType={"circle"} />);
            
                    // Expect the wrapper object to be defined
                    expect(wrapper.find('.list-items.'+listTypeMap["circle"]).exists()).toEqual(true);
                    expect(wrapper.find('.item')).toHaveLength(items.length);
      
    }); 