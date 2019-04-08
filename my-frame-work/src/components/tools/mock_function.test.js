import * as app from "./utils";
import * as math from "./math";

// Set all module functions to jest.fn
jest.mock("./math.js");

test("calls math.add", () => {
    // math.add = jest.fn()
    // math.subtract = jest.fn()
    app.doAdd(1, 2);


    //for the spy
    // const addMock = jest.spyOn(math, "add");
    // expect( app.doAdd(1, 2)).toEqual(3)
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
    math.subtract = jest.fn()
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});