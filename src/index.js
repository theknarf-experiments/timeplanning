#!/usr/bin/env node
const { program } = require('commander');
const pl = require('tau-prolog');
require("tau-prolog/modules/promises.js")(pl);

program
  .description('Timeplanning')
	.version('0.0.1');

program.parse();


// Prolog testing
console.log("Prolog:");

(async () => {

	const program = `
		plus(z, Y, Y).
		plus(s(X), Y, s(Z)) :- plus(X, Y, Z).
	`;

	const goal = "plus(X, Y, s(s(s(z)))).";
	const session = pl.create();
	await session.promiseConsult(program);
	await session.promiseQuery(goal);

	for await (let answer of session.promiseAnswers())
		console.log(session.format_answer(answer));
})();
