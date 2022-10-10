//detect a loop
class LinkedList {
	constructor(data, next) {
		this.data = data;
		this.next = null;
	}
	detectLoop(ll) {
		let head = ll;
		let slow = this.head;
		let fast = this.head;
		if (slow == null || fast.next == null) return false;
		while (slow.next !== null && fast.next.next !== null) {
			fast = fast.next.next;
			slow = slow.next;
			if (fast === slow) return true;
		}
		return false;
	}
}
const one = new LinkedList("a");
const two = new LinkedList("b");
const three = new LinkedList("c");
const four = new LinkedList("d");
const five = new LinkedList("e");
const six = new LinkedList("f");
one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = three;
// one.detectLoop(one);
console.log(one.detectLoop(one));
