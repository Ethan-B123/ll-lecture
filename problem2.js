class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor({ array = [], headNode = null }) {
		if (headNode) {
			this.head = headNode
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

// Check if linked list is sorted (Iterative and Recursive)
// Given a Linked List, your task is to check whether the Linked List is sorted in descending or ascending order or not?

// input: 1 -> 2 -> 3 -> 4
// output: true

// input: 4 -> 3 -> 2 -> 1
// output: true

// input: 4 -> 3 -> 3 -> 4
// output: false


function isSortedR(linkedList) {
}

function isSortedI(linkedList) {
}

module.exports = { LinkedList, isSortedR, isSortedI };