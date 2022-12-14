const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it('This will display the engineer information', () => {
        let engineer = new Engineer("John", 25, "tony@gmai.com", "TonyOffor")
        
      expect(engineer.getName()).toBe("John"
      );
    })})