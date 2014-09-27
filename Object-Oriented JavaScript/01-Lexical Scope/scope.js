//global scope

var a = getValue1();


var b = function(){
    //function scope
    var b1=getB1();
    var b2 = b;
    var b3 = b1;
    var b4 = function (){
        console.log('b4 is called');
    };
    //global scope
    b5=1;
    
    if(1==1){
        //c variable is created in b function scope not inside if scope
        var c=1;
    }
    b4();
    b4();
    
};


function getValue1() {
    //function scope
    return 1;
}

function getB1() {
    //function scope
    return 2;
}

console.log(b);
b();
b();