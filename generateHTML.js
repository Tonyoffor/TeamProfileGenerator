function insertcard(team){
const html = []
generateManager()
generateEngineer()
generateIntern()
}




function generateHTML(response){
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
       
        (
          <div id ="Manager" class="col-12 col-sm-6 col-lg-4 mb-3">
          <div class="card">
            <h3 class="card-header">
              Manager
            </h3>
            <div class="card-body">
              <p class="card-text">
                <div class="vstack gap-3">
                    <div class="bg-light border">name  </div>
                    <div class="bg-light border">EmployeeID</div>
                    <div class="bg-light border"> Email</div>
                    <div class="bg-light border"> OfficeNumber</div>
                  </div>
              </p>
              <button class="btn btn-block btn-info">Learn more.</button>
            </div>
          </div>
        </div>
        )
      
  
           

            <div id="Engineer" class="col-12 col-sm-6 col-lg-4 mb-3">
              <div class="card">
                <h3 class="card-header">
                  Engineer
                </h3>
                
                <div class="card-body">
                  <p class="card-text">
                    <div class="vstack gap-3">
                        <div class="bg-light border">name</div>
                        <div class="bg-light border">EmployeeID</div>
                        <div class="bg-light border"> Email</div>
                        <div class="bg-light border">  GitHub</div>
                      </div>
                  </p>
                  <button class="btn btn-block btn-info">Learn more.</button>
                </div>
              </div>
            </div>

            <div id="Intern" class="col-12 col-sm-6 col-lg-4 mb-3">
              <div class="card">
                <h3 class="card-header">
                  Intern
                </h3>
                <div class="card-body">
                  <p class="card-text">
                    <div class="vstack gap-3">
                        <div class="bg-light border">name </div>
                        <div class="bg-light border">EmployeeID</div>
                        <div class="bg-light border"> Email</div>
                        <div class="bg-light border"> School </div>
                      </div>
                  </p>
                  <button class="btn btn-block btn-info">Learn more.</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-12 col-md-3">
          
      </section>
    
</body>
</html>
    
    
    
    
    `}




    function generateManager(response){
      return `
    
      ${ (response.role = "manager")}
      (
        <div id ="Manager" class="col-12 col-sm-6 col-lg-4 mb-3">
        <div class="card">
          <h3 class="card-header">
            Manager
          </h3>
          <div class="card-body">
            <p class="card-text">
              <div class="vstack gap-3">
                  <div class="bg-light border"> Name: ${response.Manager.name}  </div>
                  <div class="bg-light border">EmployeeID: ${response.Manager.employeeID} </div>
                  <div class="bg-light border"> Email ${response.Manager.email} </div>
                  <div class="bg-light border"> OfficeNumber ${response.Manager.officeNumber} </div>
                </div>
            </p>
          </div>
        </div>
      </div>
      )
      
      `}

      function generateEngineer(response){
        return `
        ${ (response.role = "engineer")}
        (
          <div id ="Manager" class="col-12 col-sm-6 col-lg-4 mb-3">
          <div class="card">
            <h3 class="card-header">
              Engineer
            </h3>
            <div class="card-body">
              <p class="card-text">
                <div class="vstack gap-3">
                    <div class="bg-light border"> Name: ${response.Engineer.name}  </div>
                    <div class="bg-light border">EmployeeID: ${response.Engineer.employeeID} </div>
                    <div class="bg-light border"> Email: ${response.Engineer.email} </div>
                    <div class="bg-light border"> GitHub: ${response.Engineer.gitHub} </div>
                  </div>
              </p>
            </div>
          </div>
        </div>
        )
        
        `}

        function generateIntern(response){
          return `
          ${ (response.role = "intern")}
          (
            <div id ="Manager" class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header">
                Intern
              </h3>
              <div class="card-body">
                <p class="card-text">
                  <div class="vstack gap-3">
                      <div class="bg-light border"> Name: ${response.Intern.name}  </div>
                      <div class="bg-light border">EmployeeID: ${response.Intern.employeeID} </div>
                      <div class="bg-light border"> Email: ${response.Intern.email} </div>
                      <div class="bg-light border"> School: ${response.Intern.school} </div>
                    </div>
                </p>
              </div>
            </div>
          </div>
          )
          
          `}







    module.exports = generateHTML



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

    