//detect a loop
function detectLoop() {
	if (this.head === null || this.head.next === null) return false;
	let slow = this.head;
	let fast = this.head;
	while (fast.next != null && fast.next.next != null) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) return true;
	}
	return false;
}
