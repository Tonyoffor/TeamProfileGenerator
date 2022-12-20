const team = "";

//This function creates the team info based on what is filled out
function generateHTML(team){
const html = []

team.map(team=>{
  if (team.getRole()==="manager"){
    html.push(generateManager(team))
  }else if (team.getRole()==="engineer"){
    html.push(generateEngineer(team))
  }else if (team.getRole()==="intern"){
    html.push(generateIntern(team))
  }
})


//This generates the HTML page that the public will see it has the functions that generate each individual varibale
return generateFinalHTML(html)
}

    function generateManager(manager){
      return `
      <div id="Manager" class="col-12 col-sm-6 col-lg-4 mb-3 center ">
        <div class="card">
          <h3 class="card-header">
            Manager
          </h3>
          <div class="card-body">
            <p class="card-text">
              <div class="vstack gap-3">
                <div class="bg-light border">name: ${manager.getName()}</div>
                <div class="bg-light border">EmployeeID: ${manager.getEmployeeID()}</div>
                <div class="bg-light border">Email: ${manager.getEmail()}</div>
                <div class="bg-light border">OfficeNumber: ${manager.getofficeNumber()}</div>
              </div>
            </p>
            <button class="btn btn-block btn-info">Learn more.</button>
          </div>
        </div>
      </div>
      `
    }
    
  
  
  
  
  
    function generateEngineer(engineer){
      return `
      <div id="Engineer" class="col-12 col-sm-6 col-lg-4 mb-3">
        <div class="card">
          <h3 class="card-header">
            Engineer
          </h3>
          <div class="card-body">
            <p class="card-text">
              <div class="vstack gap-3">
                <div class="bg-light border">name: ${engineer.getName()}</div>
                <div class="bg-light border">EmployeeID: ${engineer.getEmployeeID()}</div>
                <div class="bg-light border">Email: ${engineer.getEmail()}</div>
                <div class="bg-light border">GitHub:  (https://github.com/${engineer.getGitHub()}) </div>
              </div>
            </p>
            <button class="btn btn-block btn-info">Learn more.</button>
          </div>
        </div>
      </div>
    `}
  
  
  
  
 
    function generateIntern(intern){
      return  `
      <div id="Intern" class="col-12 col-sm-6 col-lg-4 mb-3">
        <div class="card">
          <h3 class="card-header">
            Intern
          </h3>
          <div class="card-body">
            <p class="card-text">
              <div class="vstack gap-3">
                <div class="bg-light border">name: ${intern.getName()}</div>
                <div class="bg-light border">EmployeeID: ${intern.getEmployeeID()}</div>
                <div class="bg-light border">Email: ${intern.getEmail()}</div>
                <div class="bg-light border">School: ${intern.getschool()}</div>
              </div>
            </p>
            <button class="btn btn-block btn-info">Learn more.</button>
          </div>
        </div>
      </div>
      `
    }
  
//Based on what the user selects will now be placed inside the cards section of this function 
function generateFinalHTML(cards){
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


module.exports = generateHTML;





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

    