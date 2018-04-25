class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor(arr = []) {
		arr = arr.slice();

		let prevNode = new Node(arr.pop(), null);
		while(arr.length > 0) {
			prevNode = new Node(arr.pop(), prevNode);
		}
		this.head = prevNode;
	}

	find(value) {}

	remove(value) {}

	insert(value) {}

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

// Double elements and append zeros in linked list
// Given a linked list with some two adjacent repeating nodes before a zero, task is to double the first and make next 0. After this, append all the zeros to tail.
// Input : 4 -> 4 -> 0 -> 2 -> 3 -> 4 -> 
//         3 -> 3 -> 0 -> 4 ->
// Output : 8-> 2-> 3-> 4-> 6-> 4-> 0-> 
//          0-> 0-> 0->

function doubleAndAppend(linkedList) {
	return linkedList;
}

module.exports = { LinkedList, doubleAndAppend };