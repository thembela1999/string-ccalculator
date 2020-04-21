let add = require("../src/string_calculator");
let Add = add.Add
describe("A  Add", function() {

    it ("should return zero to an empty string", function() {

        expect(Add("")).toEqual(0);
        
    });
    it ("should return the number itself when a single number is passed", function() {
        
                expect(Add("1")).toEqual(1);
            });
          
  
    it ("should return the sum of two numbers in a string", function() {
   
         expect(Add("1,1")).toEqual(2);
    });
  
    it("should return the sum of multiple number of integers in a string", function(){
     
          expect(Add("1,2,3,4")).toEqual(10);
    });
  
      it("should handle new lines between numbers", function(){
          expect(Add("1,\n2,3")).toEqual(6);
    });
    it("should handle different delimeters", function(){
        expect(Add("//;\n1;2").toEqual(3));
        expect(Add("//4\n142").toEqual(3));
      });
  
        it("should not allow negative numbers", function(){

          expect(function(){Add("-1,-2,3,4");}).toThrow("negatives not allowed  -1,-2");
      });
  
      
      it("should ignore numbers that are greater than or equal to 1000", function(){
          expect(Add("//;n1000,1;2")).toEqual(3);
      });
      it("should support different delimeters of any length", function(){
        expect(Add("//[:D][%]\n1:D2%3").toEqual(6));
        expect(Add("//[***][%%%]\n1***2%%%3").toEqual(6));
        expect(Add("//[(-_-')][%]\n1(-_-')2%3").toEqual(6));
        expect(Add("//[abc][777][:(]\n1abc27773:(1").toEqual(7));
    });

  
    it("should handle invalid input", function(){
        expect(Add("//;\n1000;1;2;")).toBe('ERROR: invalid input');
        expect(Add(("   //;\n1000,1;2")).toBe('ERROR: invalid input'));
        expect(Add("1,2,3//;\n1000,1;2")).toBe('ERROR: invalid input');
      });
  
      it("should allow multiple delimeters with length longer than one char" , function (){
          expect(Add("//[*$%%]9[%**]\n1*2%3")).toEqual(15);
      });
  });