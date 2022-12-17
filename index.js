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
const Manager = require("./lib/Manager")
// const team = []

const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")

const path = require("path")
function mainMenu(){  //this function start when index.js is called, it calls the manager, and other options from a main menu
inquirer.prompt({
  type:"list",
  name:"direction",
  messsage: "What type fo employee would you like to create?",
  choices: ["manager", "engineer", "intern", "done" ] 
}).then( //based on the users choice it calls the correspnding function
  response => {
    if(response.direction==="manager"){
      askManager()
    }else if (response.direction==="engineer"){
      askEngineer()
    }else if (response.direction==="intern"){
      askIntern()
    }
  else{
    fs.writeFileSync(path.join(__dirname, "/Dis/team.html"),generateHTML(team))
   // process.exit()
  }
  }
)

}
function askManager(){



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
  console.log(response)
        let manager = new Manager(response.ManagerName, response.EmployeeID, response.Email, response.OfficeNumber)
        team.push(manager)
        console.log(team)
        mainMenu()
        
      });
}

function askEngineer(){



  // this section prompts the user for information on the terminal that is then used to generate the team member info
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the Engineer you are looking for?',
        name: 'EngineerName',
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
          message: 'What is their GitHub?',
          name: 'GitHub',
        },
  
  
  ]).then((response) =>{
    console.log(response)
          let engineer = new Engineer(response.EngineerName, response.EmployeeID, response.Email, response.GitHub)
          team.push(engineer)
          console.log(team)
          mainMenu()
          // fs.writeFile('Employee', Readmestring ,  function (err) {
          //   if (err) throw err;
          //   console.log(response);
          // })
        });
  }

  function askIntern(){



    // this section prompts the user for information on the terminal that is then used to generate the team member info
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the name of the Intern?',
          name: 'InternName',
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
            message: 'What is their school?',
            name: 'School',
          },
    
    
    ]).then((response) =>{
      console.log(response)
            let intern = new Intern(response.InternName, response.EmployeeID, response.Email, response.School)
            team.push(intern)
            console.log(team)
            mainMenu()
            
            // fs.writeFile('Employee', Readmestring ,  function (err) {
            //   if (err) throw err;
            //   console.log(response);
            // })
          });
    }
    mainMenu()



    const generateHTML = require("./generateHTML");