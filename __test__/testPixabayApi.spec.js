import { pictureData } from "../src/client/js/pixabayApi"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the pictureData() function", () => {
        expect(pictureData).toBeDefined();
    })
});