const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

const BookFactory = function (){

    function createBook(pubYear){
        //create this function
        if(pubYear > 2007){
          const new EAN = function();
        }
        else{
          const new ISBN = function();
        }
    }

    return {createBook};
}

module.exports = BookFactory;
