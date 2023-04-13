// Array implementation

class MyArray {
    constructor() {
        this.length = 0;
        this.data = [];
    }

    //O(1)
    get(index) {
        return this.data[index];
    }

    //O(1)
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    //O(n)
    pop() {
        let lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    //O(n)
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index)
        return item;
    }

    //O(n)
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}
 
const arr = new MyArray()
arr.push('hi')
arr.push('hello')
arr.push('you')
console.log(arr.pop());
console.log(arr.data);
