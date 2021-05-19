#!/usr/bin/env node
const { program } = require('commander');
const pl = require('tau-prolog');

program
  .description('Timeplanning')
	.version('0.0.1');

program.parse();


// Prolog testing
console.log("Prolog:");

var session = pl.create();

session.consult(`
    likes(sam, salad).
    likes(dean, pie).
    likes(sam, apples).
    likes(dean, whiskey).
`, {
    success: () => {
			console.log('success 1');
		},
    error: (err) => {
			throw err;
		}
});

session.query("likes(sam, X).", {
    success: (goal) => { console.log(goal) },
    error: (err) => { throw err; }
});
