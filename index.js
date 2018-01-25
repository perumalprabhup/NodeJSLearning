var rect ={
perimeter:(x,y)=>(2*(x+y)),
area:(x,y)=>(x*y)
};

function solveRect(l,b){
console.log("Solving for rectangle with l= " + l + " and b " + b);
if(l<=0 || b<=0){
	console.log("Rec dimentions should be greater than zero: l "+l +" and b "+b);
}
else{
	console.log("area of the Rect with l = " + l +" and b = "+ b + " area = "+rect.area(l,b));
	console.log("perimeter of the Rect with l = " + l +" and b = "+ b + " Perimeter = "+rect.perimeter(l,b));	
}
}

solveRect(10,15);