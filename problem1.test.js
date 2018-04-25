const { LinkedList, doubleAndAppend } = require('./problem1');

expect.extend({
  toEndWith(received, argument) {
  	const endOfReceived = received.slice(-argument.length);
		let pass = true;
		for (var i = 0; i < endOfReceived.length; i++) {
			if (endOfReceived[i] !== argument[i]) {
				pass = false;
			}
		}
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to end with ${argument}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to end with ${argument}`,
        pass: false,
      };
    }
  },
});

const arrFrom = (ll) => {
	let a = []
	let node = ll.head
	while(node) {
		a.push(node.value)
		node = node.next;
	}
	return a;
}

test('Doubles elements', () => {
	let a = [4, 4, 0, 2, 3, 4, 3, 3, 0, 4];
	let initLl = new LinkedList(a);
	let solution = doubleAndAppend(initLl);
	let arrSolution = arrFrom(solution)
	expect(arrSolution).toEqual(expect.arrayContaining([8, 6]))
});

test('Moves zeros to the end', () => {
	let a = [4, 4, 0, 2, 3, 4, 3, 3, 0, 4];
	let initLl = new LinkedList(a);
	let solution = doubleAndAppend(initLl);
	let arrSolution = arrFrom(solution)
	expect(arrSolution).toEndWith([0, 0, 0, 0])
})

test('Returns the correct answer', () => {
	let a = [4, 4, 0, 2, 3, 4, 3, 3, 0, 4];
	let initLl = new LinkedList(a);
	let solution = doubleAndAppend(initLl);
	let arrSolution = arrFrom(solution)
	expect(arrSolution).toEqual([8, 2, 3, 4, 6, 4, 0, 0, 0, 0])
})

test('Returns the correct answer', () => {
	let a = [0, 0, 0, 0, 0, 1];
	let initLl = new LinkedList(a);
	let solution = doubleAndAppend(initLl);
	let arrSolution = arrFrom(solution)
	expect(arrSolution).toEqual([1, 0, 0, 0, 0, 0])
})