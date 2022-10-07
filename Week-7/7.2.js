class LinkedList {
	constructor(data) {
		this.head = {
			value: data,
			next: null,
		};
		this.tail = this.head;
	}
	append(data) {
		const newNode = {
			value: data,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
	}
	printList() {
		let arr = ["head"];
		let current = this.head;
		while (current !== null) {
			console.log(current.value);
			arr.push(current.value);
			current = current.next;
		}
		arr.push("null");
		console.log(arr.join("<-->"));
		return;
	}
	rotate(k) {
		this.tail.next = this.head;
		let curr = this.head;
		for (let i = 1; i < k; i++) {
			this.tail = this.tail.next;
			curr = curr.next;
		}
		this.tail = this.tail.next;
		this.head = curr.next;
		curr.next = null;
	}
}

const ll = new LinkedList("a");
ll.append("b");
ll.append("c");
ll.append("d");
ll.append("e");
ll.append("f");
ll.printList();
ll.rotate();
ll.rotate();
ll.rotate();
ll.printList();

console.log(ll);
