## TeamProfileGenerator


  Team Profile Generator <br />


  ## Description
  This code application can be used by an organization to keep track of their employees. It is designed to start run on the command line terminal and create a HTML page showing the different variables that where provided.
   <br />
 
  ## Table of Contents
  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
For this project I installed Node.js <br> Npm <br> Package.json <br> Inquirer

## Usage
It is meant to be used my a company that wants to check/add members to its team. The user will start by typing in the name of the manager they are looking for and then they will be prompted to add a new employee or intern, after they are done filling out all the needed information then a HTML page showing the information will be generated.

[Click Me to see walkthrough](https://drive.google.com/file/d/1NjHB0um0ioJPmCRT3MXwCD9Tk5rj4nHU/view)  <br />
## License

This application is not covered by any license. 


## Contributors
In this I, Anthony Offor, was the primary contributor to the application; secondary contributor was Sachin the teaching assistants during the program who helped me correct some errors in my code from time to time.

## Testing
I used Jest to test my applications for the employee, engineer, manager and intern variables

## Questions
If you have any further questions you can contact me on:<br />
  -GitHub: [Tonyoffor](https://github.com/Tonyoffor)<br />
<br />
  -Email: tonyc.offor@gmail.com<br /><br />
  

















GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated