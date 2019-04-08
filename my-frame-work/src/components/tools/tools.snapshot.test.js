import {List,Menutools} from "./index";
import renderer from 'react-test-renderer';
import React from "react";

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
configure({ adapter: new Adapter() }); 
it('renders correctly for menutools', () => {
    const tree = renderer
      .create(<Menutools/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for List without props data', () => {

    const tree = renderer
      .create(<List/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('renders correctly for List with props list', () => {

    const tree = renderer
      .create(<List items={['item1','item2']}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for List with props list with enzyme', () => {

    const wrapper = shallow(<List items={['item1','item2']}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });