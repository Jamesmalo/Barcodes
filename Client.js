const BookFactory = require('./BookFactory.js')
const Sort = require('./Sort.js')
const Random = require('./Random.js')

function client(){
  let list = [];
  let b = new BookFactory()
  for(let i=0;i<10;i++){
    let year = discreteRangeIn(1900,2017)
    list[i] = b.createBook(year)
  }
  let ibsnlist = [];
  for(let i=0;isbnlist.length;i++){
    isbnlist[i] = Number(list[i].code);
  }
  sort.insertion(isbnlist[i])
  return list;
}

client()
