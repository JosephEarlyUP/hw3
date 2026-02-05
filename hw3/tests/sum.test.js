/**
 * Joseph Early
 * CS341 Homework Assignment 3
 */

const sum = require('../public/javascripts/sum.js');
test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});