// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it ('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter the input', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });
});

describe('isEven', function() {
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter the input', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed 8', function() {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed "true"', function() {
        expect(isEven("true")).toBe(false);
    });
    it('should return false when passed "false"', function() {
        expect(isEven("false")).toBe(false);
    });
    it('should return false when passed ()', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean', function(){
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed false', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed ()', function() {
        expect(isVowel()).toBe(false);
    });
});



// describe('sum', function(){
//     it('should be a defined function', function(){
//         expect(typeof sum).toBe('function');
//     });
//     it('should return the number 4 when passed the numbers 2 and 2', function(){
//         expect(sum(2,2)).toBe(4);
//     });
//     it('should return the number 5 when passed the numbers 2 and 3', function(){
//         expect(sum(2,3)).toBe(5);
//     });
//     it('should return false when passed two strings', function(){
//         expect(sum("black", "sheep")).toBe(false);
//     });
// });