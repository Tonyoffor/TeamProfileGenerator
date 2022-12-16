const Manager = require ("../lib/Manager")


      describe('Manager', () => {
        test('This will display the Manager name', () => {
            let manager = new Manager("name")
            expect(manager.getName()).toBe("name");
            
          })})    

          describe('Manager', () => {
            test('This will display the Manager employeeID', () => {
                let manager = new Manager("name", 14)
                expect(manager.getEmployeeID()).toBe(14);
                
              })})    


              describe('Manager', () => {
                test('This will display the Manager email', () => {
                    let manager = new Manager("name",14,"Email")
                    expect(manager.getEmail()).toBe("Email")
                    
                  })})    

                  describe('Manager', () => {
                    test('This will display the Manager officeNumber', () => {
                        let manager = new Manager("name",14,"Email", 14)
                        expect(manager.getofficeNumber()).toBe(14)
                        
                      })})    