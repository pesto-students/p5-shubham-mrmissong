//detect a loop
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	detectLoop(ll) {
		let head = ll;
		let slow = this.head;
		let fast = this.head;
		if (slow === null || fast.next === null) return false;
		while (slow.next !== null && fast.next.next !== null) {
			fast = fast.next.next;
			slow = slow.next;
			if (fast === slow) return true;
		}
		return false;
	}
}
