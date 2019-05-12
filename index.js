#!/usr/bin/env node

const Aboutme = require("./commands/Aboutme")
const Contactme = require("./commands/Contactme")
const inquirer = require('inquirer');
const Data = require("./data/data")

const Index = ()=> {
	console.log("Welcome to my profile")
	// Aboutme()
	// Contactme()
	inquirer.prompt([{
			type : "list",
			choices : ['summary', 'aboutme', 'contactme', 'experience', 'techstack'],
			name : "answer"
		}]).then(answer =>{
			console.log(Data[answer.answer])
		})
}

Index()
module.exports = Index