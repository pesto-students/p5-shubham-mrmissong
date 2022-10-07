//Queue
class Queue {
	constructor() {
		this.s1 = []; //push stack
		this.s2 = []; //pop stack
	}
	enqueue(val) {
		this.s1.push(val);
	}
	dequeue() {
		if (!this.s2.length) {
			//checks if stack s2 is empty and if yes, all popped values of the stack s1 are pushed into s2.
			while (this.s1.length) {
				this.s2.push(this.s1.pop());
			}
			return console.log(this.s2.pop());
		}
	}
	print() {
		return this.s2;
	}
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);

q.print();
q.dequeue();
q.print();

console.log(q.print());
console.log(q);
