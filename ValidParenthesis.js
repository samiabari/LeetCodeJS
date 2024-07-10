/**
 * @param {string} s
 * @return {boolean}
 */

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

var isValid = function(s) {
    let b = new Stack();
    var r = true; // Change initial value of r to true

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            b.push(s[i]); // Change to push
        } else if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
            if (b.isEmpty()) {
                r = false;
                break;
            }
            var top = b.peek(); // Change to peek
            if ((top == '(' && s[i] == ')') || 
                (top == '{' && s[i] == '}') || 
                (top == '[' && s[i] == ']')) {
                b.pop(); // Change to pop
            } else {
                r = false;
                break;
            }
        }
    }

    if (!b.isEmpty()) {
        r = false;
    }

    return r;
};

module.exports = isValid;