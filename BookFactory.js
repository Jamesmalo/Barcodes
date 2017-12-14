const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

const BookFactory = function (){

    function createBook(pubYear){
        //create this function
        if(pubYear >= 2007){
          return new EAN();
        }
        else{
          return new ISBN();
        }
    }

    return {createBook};
}

module.exports = BookFactory;

function test(){
  let factory = new BookFactory();
  let bf1 = factory.createBook(2007);
  console.log(bf1.read());

  let bf2 = factory.createBook(2000);
  console.log(bf2.read());
}

//test()
