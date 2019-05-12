const constructStack = t_stack => {
	let return_string = "\n"
	t_stack.forEach((ele,index) => {
		return_string += `\n${index+1}. ${ele}`
	})
	return return_string
}

const techStack = ['Ruby', 'Ruby on Rails', 'RSpec (Unit Testing)', 'Cucumber (Automation)', 'JavaScript', 'Jest (Unit Testing)', 'Python', 'Pytest (Automation)', 'NodeJS', 'Jenkins', 'GitHub']

const roles = [
	"Ensure Unit testing coverage for newly implemented API's",
	"Implementing Automation for the newly added features",
	"To ensure Daily Sanity build is Green",
	"Mentoring Team"
]

const data = {
	summary:
    "Hello!! I am Suresh Kumar from India. I work at Mirafra as a Software Engineer-II. Apart from my work you can see me in any MeetUp || in any Coffee shop || Cooking || Sleeping",
  aboutme:
    "Suresh Kumar, currently working as Software Engineer-II at Mirafra Technologies\nDate Of Birth           : 24th Jan,1991\nPlace                   : Nellore, Andhra Pradesh\nMarital status          : Single\nCompanies Worked so far : Mirafra(current-2018), Jifflenow(2016-2018), IBM(2016-2014)",
  contactme:
    "EMail : psureshkumarece@gmail.com\nGitHub : https://github.com/sureshpathipati\nLinkedin : https://www.linkedin.com/in/suresh-kumar-175791a2/\nContact number : 7406252346",
  experience:
    "I have 5+ years of experience as a FullStack-QA. Currently I am working as Software Engineer-II at Mirafra Technologies.\nPreviously I worked at \n   Jifflenow (2016-2018),\n   IBM (2014-2016)",
  techstack:
    constructStack(techStack),
  education:
  	"M.E from PSG Tech, Coimbatore - 2014\nB.Tech from Narayana Engineering College, Nellore - 2012",
  roles:
  	constructStack(roles)
}

module.exports = data