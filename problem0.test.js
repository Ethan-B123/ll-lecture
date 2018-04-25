const { LinkedList, reverseI, reverseR } = require('./problem0');

const arrFrom = ({ll, headNode = null}) => {
	let a = []
	let node = headNode ? headNode : ll.head
	while(node) {
		a.push(node.value)
		node = node.next;
	}
	return a;
}

test('Reverses a LinkedList iteratively', () => {
	let array = [0, 1, 2, 3, 4, 5];
	let initLl = new LinkedList({ array });
	let solution = reverseI(initLl);
	let arrSolution = arrFrom({ ll: solution });
	expect(arrSolution).toEqual(expect.arrayContaining(array.reverse()));
});

test('Reverses a LinkedList recursively', () => {
	let array = [0, 1, 2, 3, 4, 5];
	let initLl = new LinkedList({ array });
	let solution = reverseR(initLl.head);
	let arrSolution = arrFrom({ headNode: solution });
	expect(arrSolution).toEqual(expect.arrayContaining(array.reverse()));
});