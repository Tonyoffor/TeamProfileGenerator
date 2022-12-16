const Engineer = require("../lib/Engineer");

    describe('Engineer', () => {
      test('This will display the Engineer name', () => {
        let engineer = new Engineer("name")
        expect(engineer.getName()).toBe("name");
        
      })})

   describe('Engineer', () => {
      test('This will display the Engineer employeeID', () => {
          let engineer = new Engineer("name", 24)
          expect(engineer.getEmployeeID()).toBe(24);
          
        })})

        describe('Engineer', () => {
          test('This will display the Engineer email', () => {
              let engineer = new Engineer("name", 24, "email")
              expect(engineer.getEmail()).toBe("email");
              
            })})    

            describe('Engineer', () => {
              test('This will display the Engineer GitHub', () => {
                  let engineer = new Engineer("name",24, "email", "gitHub")
                  expect(engineer.getGitHub()).toBe("gitHub");

                
                  
                })})    