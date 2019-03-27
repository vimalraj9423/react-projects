import {Link} from "./index";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  * as Mockfile from"./mockfile"
import React from "react";

configure({ adapter: new Adapter() }); 

it("how many called",()=>{ 
  let myfunction=jest.spyOn(Mockfile,"myfunction")
  let callingCondition=["call","Nocall","call"];

  for(let condition of callingCondition){
  
    if(condition=="call"){
      Mockfile.myfunction();
    }
  }
  
  expect(myfunction).toHaveBeenCalledTimes(2)

})

it('should handle the click event', () => {
    window.alert = jest.fn();
    const output = shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked');
  });