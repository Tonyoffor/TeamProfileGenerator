const team = "";


function insertcard(team){
const html = []

html.push(generateManager(team.manager))
html.push(generateEngineer(team.engineer))
html.push(generateIntern(team.intern))
return generateHTML(html.join(''))
}

insertcard(team)
module.exports = generateHTML(cards)
function generateHTML(cards){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Team Information </title>
</head>
<body>
    <header>
        <h1>Team Members</h1>
    </header>
    <section class="row">
        <div class="col-12 col-md-9">
          <section class="row justify-content-around">
            ${cards}
          </section>
        </div>
        <div class="col-12 col-md-3">
        </div>
    </section>
</body>
</html>
`
};

function generateManager(manager){
  return (`
  <div id="Manager" class="col-12 col-sm-6 col-lg-4 mb-3">
    <div class="card">
      <h3 class="card-header">
        Manager
      </h3>
      <div class="card-body">
        <p class="card-text">
          <div class="vstack gap-3">
            <div class="bg-light border">name: ${manager.name}</div>
            <div class="bg-light border">EmployeeID: ${manager.employeeId}</div>
            <div class="bg-light border">Email: ${manager.email}</div>
            <div class="bg-light border">OfficeNumber: ${manager.officeNumber}</div>
          </div>
        </p>
        <button class="btn btn-block btn-info">Learn more.</button>
      </div>
    </div>
  </div>
  `).join('')



}



function generateEngineer(engineers){
  return engineers.map(engineer => `
  <div id="Engineer" class="col-12 col-sm-6 col-lg-4 mb-3">
    <div class="card">
      <h3 class="card-header">
        Engineer
      </h3>
      <div class="card-body">
        <p class="card-text">
          <div class="vstack gap-3">
            <div class="bg-light border">name: ${engineer.name}</div>
            <div class="bg-light border">EmployeeID: ${engineer.employeeId}</div>
            <div class="bg-light border">Email: ${engineer.email}</div>
            <div class="bg-light border">School: ${engineer.gitHub}</div>
          </div>
        </p>
        <button class="btn btn-block btn-info">Learn more.</button>
      </div>
    </div>
  </div>
`).join('')}



function generateIntern(interns){
  return interns.map(intern => `
  <div id="Intern" class="col-12 col-sm-6 col-lg-4 mb-3">
    <div class="card">
      <h3 class="card-header">
        Intern
      </h3>
      <div class="card-body">
        <p class="card-text">
          <div class="vstack gap-3">
            <div class="bg-light border">name: ${intern.name}</div>
            <div class="bg-light border">EmployeeID: ${intern.employeeId}</div>
            <div class="bg-light border">Email: ${intern.email}</div>
            <div class="bg-light border">School: ${intern.school}</div>
          </div>
        </p>
        <button class="btn btn-block btn-info">Learn more.</button>
      </div>
    </div>
  </div>
  `).join('')
}



// module.exports = generateHTML







  
      // if (response.role === "manager") {
      //   return html
      // }}
    










    



    // .manager-card {
    //     background-color: rgba(14, 138, 211, 0.548);
    // }
    
    // .intern-card {
    //     background-color: rgba(242, 245, 107, 0.5);
    // }
    
    // .engineer-card {
    //     background-color: rgba(53, 247, 137, 0.5);
    // }
    
    // .card {
    //     padding: 08px;
    //     margin: 15px;
    //     margin-top: 22px;
    // }

    