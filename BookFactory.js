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
