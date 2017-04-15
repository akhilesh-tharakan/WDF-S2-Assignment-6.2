/* This is the script file from where we are passing the value */	
/* Session 6 Assignment 2 */

var a = parseInt(prompt("Enter value for A: "));
var b = parseInt(prompt("Enter value for B: "));
var c = parseInt(prompt("Enter value for C: "));

/* checks a>b and a>c  if  both conditions satisfied, A is greater */
if (a>b  && a>c)
	{
		document.write("A: " + a+" is greater");
	}

	/* checks b>a  and b>c  if  both conditions satisfied, b is greater */
if (b>a  && b>c)
	{
		document.write("B: "+ b+" is greater");
	}
	/* if the above two conditions were false c is greater*/
	else
	{
		document.write("C: "+ c+" is greater");
	}
