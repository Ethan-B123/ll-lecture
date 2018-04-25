const { LinkedList, isSortedR, isSortedI } = require('./problem2');


test('Returns the correct answer', () => {
	let array = [0, 1, 2, 3, 4, 5];
	let initLl = new LinkedList({ array });
	let solution = isSortedR(initLl);
	expect(solution).toEqual(true);

	array = [0, 1, 2, 3, 5, 4];
	initLl = new LinkedList({ array });
	solution = isSortedR(initLl);
	expect(solution).toEqual(false);

	array = [0, 0, 0];
	initLl = new LinkedList({ array });
	solution = isSortedR(initLl);
	expect(solution).toEqual(true);

	array = [1, 0, 1];
	initLl = new LinkedList({ array });
	solution = isSortedR(initLl);
	expect(solution).toEqual(false);
});

test('Returns the correct answer', () => {
	let array = [0, 1, 2, 3, 4, 5];
	let initLl = new LinkedList({ array });
	let solution = isSortedI(initLl);
	expect(solution).toEqual(true);

	array = [0, 1, 2, 3, 5, 4];
	initLl = new LinkedList({ array });
	solution = isSortedI(initLl);
	expect(solution).toEqual(false);

	array = [0, 0, 0];
	initLl = new LinkedList({ array });
	solution = isSortedI(initLl);
	expect(solution).toEqual(true);

	array = [1, 0, 1];
	initLl = new LinkedList({ array });
	solution = isSortedI(initLl);
	expect(solution).toEqual(false);
});