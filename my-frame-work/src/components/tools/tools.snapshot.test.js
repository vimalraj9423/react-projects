import {List,Menutools} from "./index";
import renderer from 'react-test-renderer';
import React from "react";
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