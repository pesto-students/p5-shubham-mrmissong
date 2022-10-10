//Queue
class Queue {
	constructor() {
		this.s1 = [];
		this.s2 = [];
	}
	enqueue(val) {
		this.s1.push(val);
	}
	dequeue() {
		if (this.s1 !== null) {
			this.s2.push(this.s1.pop());
		} else if (this.s2 !== null) {
			this.s1.push(this.s2.pop());
		}
	}
	print() {
		return [this.s1, this.s2];
	}
}
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.print();
q.dequeue();
q.dequeue();
console.log(q);
