const Intern = require("../lib/Intern");

describe('Intern', () => {
    test('This will display the intern name', () => {
      let intern = new Intern("name")
      expect(intern.getName()).toBe("name");
      
    })})

    describe('Intern', () => {
      test('This will display the intern employeeID', () => {
        let intern = new Intern("name" , 24)
        expect(intern.getEmployeeID()).toBe(24);
        
      })})

      describe('Intern', () => {
        test('This will display the intern email', () => {
          let intern = new Intern("name", 24, "email")
          expect(intern.getEmail()).toBe("email");
          
        })})


        describe('Intern', () => {
          test('This will display the intern school', () => {
            let intern = new Intern("name",24, "email", "school")
            expect(intern.getschool()).toBe("school");
            
          })})
  



