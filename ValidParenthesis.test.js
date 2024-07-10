const isValid=require('./ValidParenthesis');

test('isValid(()) should return true',()=>{
    expect(isValid("()")).toEqual(true);
});

test('isValid(()) should return true',()=>{
    expect(isValid("(){}")).toEqual(true);
});

test('isValid(()) should return true',()=>{
    expect(isValid("(")).toEqual(false);
});