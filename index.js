var rect = require('./rectangle');

function solveRect(l,b){
console.log("Solving for rectangle with l= " + l + " and b " + b);
rect(l,b,(err,rect)=>{
 if (err) {
	        console.log("ERROR: ", err.message);
	    }
else{
	console.log("area of the Rect with l = " + l +" and b = "+ b + " area = "+rect.area());
	console.log("perimeter of the Rect with l = " + l +" and b = "+ b + " Perimeter = "+rect.perimeter());	
}
});
 console.log("This statement after the call to rect()");
};


solveRect(10,15);