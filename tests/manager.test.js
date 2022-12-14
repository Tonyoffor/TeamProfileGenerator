const Manager = require ("../lib/Manager")
describe('Manager', () => {
    it('This will display the managers information', () => {
      let manager = new Manager("name", 14, "Email", 14);
      expect(new Employee()).toBe(
        
      );
    })})



    describe('Intern', () => {
      it('This will display the intern information', () => {
        let intern = new Intern("name", 12, "email", "school")
        expect(intern.getName()).toBe("John");
        expect(intern.getEmployeeID()).toBe(33);
        expect(intern.getEmail()).toBe("tonyc.offor@gmail.com");
        expect(intern.getschool()).toBe("University");
      })})

      