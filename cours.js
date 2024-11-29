class Queue {

    constructor() {
        this.items =[]    
    }
    
    enqueue(item) {
        this.items.push(item); 
    }
    
    dequeue() {
        return this.items.shift();
    }
    
    size() {
        return this.items.length;
    }
    
    peek() {
    return this.items[0];
    }
    
}

const queue = new Queue();
queue.enqueue()