class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor({ array = [], headNode = null }) {
		if (headNode) {
			this.head = headNode;
		} else {
			array = array.slice();

			let prevNode = new Node(array.pop(), null);
			while(array.length > 0) {
				prevNode = new Node(array.pop(), prevNode);
			}
			this.head = prevNode;
		}
	}

	find(value) {}

	remove(value) {}

	insert(value, position) {}

	findKth(k) {}

	toString() {
		let string = '';
		let currentNode = this.head;
		let counter = 0;
		while (currentNode && counter < 30) {
			string += currentNode.value + ' -> ';
			currentNode = currentNode.next;
			counter++;
		}
		return string + (counter < 30 ? 'null' : '...');
	}
}

// reverse a singly-linked list  

function reverseI(linkedList) {
	return linkedList;
}

function reverseR(headNode) {
	return headNode;
}

module.exports = { LinkedList, reverseI, reverseR };

