const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it('This will display the engineer information', () => {
        let engineer = new Engineer("John", 25, "tony@gmai.com", "TonyOffor")
        
      expect(engineer.getName()).toBe("John");
      expect(engineer.getEmployeeID()).toBe(33);
      expect(engineer.getEmail()).toBe("tonyc.offor@gmail.com");
      expect(engineer.getGitHub()).toBe("Tony");

    })})


     