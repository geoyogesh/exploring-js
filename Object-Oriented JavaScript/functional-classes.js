var Car = function(loc){
    var obj = {loc: loc};
    extends(obj, Car.methods);
    return obj;
};
Car.methods ={
    move : function(){
        this.loc++;
    }
};

var amy = Car(1);
amy.move();
var ben =  Car(9);
ben.move();