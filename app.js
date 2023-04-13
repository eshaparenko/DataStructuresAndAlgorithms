//Array implementation

// class MyArray {
//     constructor() {
//         this.length = 0;
//         this.data = [];
//     }

//     get(index) {
//         return this.data[index];
//     }

//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }

//     pop() {
//         let lastItem = this.data[this.length - 1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return lastItem;
//     }

//     delete(index) {
//         const item = this.data[index];
//         this.shiftItems(index)
//         return item;
//     }

//     shiftItems(index) {
//         for (let i = index; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length - 1];
//         this.length--;
//     }
// }
 
// const arr = new MyArray()
// arr.push('hi')
// arr.push('hello')
// arr.push('you')
// console.log(arr.pop());
// console.log(arr.data);


//Hash Table implementation
// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) %
//             this.data.length;
//         }
//         return hash;
//     }

//     set(key, value) {
//         let address = this._hash(key);
//         if (!this.data[address]) {
//             this.data[address] = []
//             this.data[address].push([key, value])
//         } 
//     }
    
//     get(key) {
//         let address = this._hash(key);
//         const currentBucket = this.data[address]
//         if (currentBucket) {
//             for (let i = 0; currentBucket.length; i++) {
//                 if (currentBucket[i][0] === key) {
//                     return currentBucket[i][1]
//                 }
//             }
//         }
//         return undefined
//     }

//     keys() {
//         const keysArray = []
//         for (let i = 0; i < this.data.length; i++) {
//             if (this.data[i]) {
//                 keysArray.push(this.data[i][0][0])
//             }
//         }
//         return keysArray
//     }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 1000);
// myHashTable.get('grapes')

let a = [1, 4, 6, 4, 5, 5, 4, 2, 1]

function firstRecuring(arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            return arr[i]
        } 
        map[arr[i]] = i
    }
    return undefined;
}
console.log(firstRecuring(a));