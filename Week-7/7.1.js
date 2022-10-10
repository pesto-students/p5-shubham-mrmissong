//reverse a linked list
class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.size = 1;
	}
	length() {
		return this.size;
	}
	append(element) {
		let node = new Node(element);

		let current;

		if (this.head === null) this.head = node;
		else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}
		this.size++;
	}
	printList() {
		let arr = ["head"];
		let current = this.head;
		while (current !== null) {
			console.log(current.element);
			arr.push(current.element);
			current = current.next;
		}
		arr.push("null");
		// arr.join("<-->");
		console.log(arr.join("<-->"));
		return;
	}
	reverse() {
		let first = this.head;
		let second = first.next;
		while (second) {
			let temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;
	}
}

const ll = new LinkedList("A");
ll.append("B");
ll.append("C");
ll.append("D");
ll.printList();
ll.reverse();
ll.printList();
