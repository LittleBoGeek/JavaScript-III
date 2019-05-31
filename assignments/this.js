/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'This' refers to the window/console object when in global scope.
* 2. 'This' referes to the object to the left of the dot when binding is implicit.
* 3. 'This' referes to the specific instance of the object created and returned by a constructor function. This type of binding is accomplished using the New keyword.
* 4. 'This' is explicitly define when the in-built methods call or apply are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function whatsThis() {
    console.log(this);
};
// Principle 2

// code example for Implicit Binding

const thisObj = {
    implicit: function(adj) {
      console.log(`The ${adj} is real`);
      console.log(this);
      
    } 
    
    
  };
  
  thisObj.implicit('struggle');
// Principle 3

// code example for New Binding
function Person (){
    this.height = 'tall',
    this.weight = 'healthy',
    this.isHealthy = function(name) {
      console.log(`${name} is ${this.height}  and a ${this.weight} weight.`);
      console.log(this);
    };
  }
  
  const newPerson = new Person();
  newPerson.isHealthy('Alex');

// Principle 4

// code example for Explicit Binding
function Person (){
    this.height = 'tall',
    this.weight = 'healthy',
    this.isHealthy = function(name) {
      console.log(`${name} is ${this.height}  and a ${this.weight} weight.`);
      console.log(this);
    };
  }
  
  const newPerson = new Person();
  newPerson.isHealthy('Alex');

  const anotherPerson = new Person;
  anotherPerson.isHealthy('Tom');

  anotherPerson.isHealthy.call(newPerson);