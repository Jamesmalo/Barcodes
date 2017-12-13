const BookFactory = require('./BookFactory.js')
const sort = require('./sort.js')

function client(){
  let list = [];
  let b = new BookFactory()
  for(let i=0;i<list.length;i++){
    let year = discreteRangeIn(1900,2017)
    list[i] = b.createBook(year)
  }
  
}
