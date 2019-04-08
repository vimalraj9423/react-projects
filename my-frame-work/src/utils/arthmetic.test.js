import ArithMetic from "./arithmetic.util"; 
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 

configure({ adapter: new Adapter() }); 

test('the data is peanut butter', done => {
    let callback=(data='peanut butter') =>{
      expect(data).toBe('peanut butter');
      done();
    }
  
    setTimeout(callback,2000);
  });
describe("addition",()=>{
    test("adds 1 + 2 to equal 3",()=>{
        const value=ArithMetic.add(1, 2); 
        expect(value).toBeGreaterThan(0);
        expect(value).toBeGreaterThanOrEqual(2.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);

        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(3);
        expect(value).toEqual(3);
    })
    test('adding positive numbers is not zero', () => {
        for (let a = 1; a < 10; a++) {
          for (let b = 0; b < 10; b++) {
            expect(ArithMetic.add(a, b)).not.toBe(0);
          }
        }
      });
    
      test('adding floating point numbers', () => {
        const value =ArithMetic.add(0.1,0.2);
        // expect(value).toBe(0.3);      //     This won't work because of rounding error
        expect(value).toBeCloseTo(0.3); // This works.
      });
});
describe("testing zero and null",()=>{
    test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
      });
      test('zero', () => {
        let z=0  ;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
      });
      test('tobe',()=>{
        let b={
          a:10
        }
        let a={
          a:10 
        }
        expect(a).toEqual(b)
      }) 
        test('adding floating point numbers', () => {
          const value = 0.1 + 0.2;
          //expect(value).toBe(0.3);           This won't work because of rounding error
          expect(3.9).toBeCloseTo(3.901); // This works.
        });
    
});

