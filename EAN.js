const Random = require('./Random.js');

const EAN = function(){

    let sysCode = makeSysCode();//3 digits
    let manCode = Random().digit(5);//5 digits
    let proCode = Random().digit(4);//4 digits
    let code = sysCode+manCode+proCode;
    let checkDigit = check();


    function makeSysCode(){
        //create this function
        let n = Random().discreteRangeIn(1,8);
        if(n == 1){
          return "040";
        }
        else if(n == 2){
          return "073";
        }
        else if(n == 3){
          return "013";
        }
        else if(n == 4){
          return "590";
        }
        else if(n == 5){
          return "076";
        }
        else if(n == 6){
          return "084";
        }
        else if(n == 7){
          return "087";
        }
        else if(n == 8){
          return "050";
        }
    }

    function check(){
        //create this function
        let code = sysCode+manCode+proCode;
        let sum = 0;
        for(let c=0;c<12;c++){
            if(c%2 ==0){
                sum += 1*code[c];
            }
            else{
                sum += 3*code[c];
            }
        }
        console.log("the sum is = "+sum);
        let remainder = sum %10;
        if(remainder == 0){
            return 0;
        }
        return 10-remainder;
    }

    function read(){
        //create this function
        return code+"-"+checkDigit;
    }
    return {sysCode,manCode,proCode,checkDigit,read};
};

function test(){
    let e = new EAN();
    console.log(e.checkDigit);
    console.log(e.read());

}
test();
module.exports = EAN;
