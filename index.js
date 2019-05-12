#!/usr/bin/env node

const inquirer = require('inquirer');
const Data = require("./data/data")

const Mapping = {
	'Summary' : 'summary',
	'About Me' : 'aboutme',
	'Contact Me' : 'contactme',
	'Experience' : 'experience',
	'TechStack' : 'techstack',
	'Education' : 'education',
	'Roles and Responsibilities' : 'roles'
}

const Index = ()=> {
	console.log("\tGood Day, Welcome! to Suresh Kumar's profile")
	console.log("\n")
	inquirer.prompt([{
			type : "list",
			choices : ['Summary', 'About Me', 'Roles and Responsibilities', 'Contact Me', 'Experience', 'TechStack','Education'],
			name : "answer"
		}]).then(answer =>{
			const mapping_answer = Mapping[answer.answer]
			console.log('\n \t')
			console.log(answer.answer)
			console.log(Data[mapping_answer])
		})
}

Index()
module.exports = Index


