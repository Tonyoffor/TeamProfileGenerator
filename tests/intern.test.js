const Intern = require("../lib/Intern");

describe('Intern', () => {
    it('This will display the intern information', () => {
      let intern = new Intern("name", 12, "email", "school")
      expect(intern.getName()).toBe("John");
      expect(intern.getEmployeeID()).toBe(33);
      expect(intern.getEmail()).toBe("tonyc.offor@gmail.com");
      expect(intern.getschool()).toBe("University");
    })})


    