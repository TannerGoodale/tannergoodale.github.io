/* Description: This JavaScript code calculates the wind chill and displays it to the page it is called on in the appropriate section.

Input: The code will take info from the page that is entered manually or gathered via a query.

Processing: The code is a JavaScript version of the wind chill formula.  Processing will be according to that formula.

Output: The code will output to the "f" id in the summary grid.
*/

//Declare variables
var f;

var t = parseInt(document.getElementById("t").innerHTML);
    
var s = parseInt(document.getElementById("s").innerHTML);

//Preform arithmetic
 var f = parseInt(35.74 + 0.6215*t - 35.75*(Math.pow(s, 0.16)) + 0.4275*t*(Math.pow(s, 0.16)));

//Push result to the page
document.getElementById("f").innerHTML = f + "&#176;F";