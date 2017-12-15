const BookFactory = require('./BookFactory.js')
const Sort = require('./Sort.js')
const Random = require('./Random.js')
const IsbnEanAdapter = require('./IsbnEanAdapter.js')

function client(){
  let list = [];
  let b = new BookFactory()
  for(let i=0;i<10;i++){
    let year = Random().discreteRangeIn(1900,2017)
    if(year <= 2007){
      list[i] = new IsbnEanAdapter(b.createBook(year))
    }
    else{
      list[i] = b.createBook(year)
    }
  }
  let isbnlist = [];
  for(let i=0;i<10;i++){
    isbnlist[i] = Number(list[i].code);
  }
  return Sort.insertion(isbnlist)

}

console.log(client());
