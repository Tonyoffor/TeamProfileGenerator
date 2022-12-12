// 


//  ├── __tests__/             //jest tests
//│   ├── Employee.test.js
//  │   ├── Engineer.test.js
//  │   ├── Intern.test.js
//  └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet      
// ├── lib/                   // classes
// ├── src/                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json           




var fs = require("fs"); 
const generateTeaminfo = require('./TeamInfo')


const inquirer = require('inquirer');
// this section prompts the user for information on the terminal that is then used to generate the team member info
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of the Manager you are looking for?',
      name: 'ManagerName',
    },
    {
        type: 'input',
        message: 'What is their ID number?',
        name: 'EmployeeID',
      },
      {
        type: 'input',
        message: 'What is their email address?',
        name: 'Email',
      },
      {
        type: 'input',
        message: 'What is their office number?',
        name: 'OfficeNumber',
      },


]).then((response) =>{
        let Readmestring = generateTeaminfo(response)
        fs.writeFile('ReadMe.md', Readmestring ,  function (err) {
          if (err) throw err;
          console.log(response);
        })
      });
    