/** Problem 05 - ( PH Email Generator )  */
var student={ name: "jhankar" , roll: 1014 ,department: "cse"  };
//write your code here
if (student.department === "cse") {
    var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";
    console.log(email);
} else if (student.department === "eee") {
    var email=student.name+student.roll+ "."+student.department + "@ph.ac.bd";
    console.log(email);
}else{
    console.log("!invalid email.Please input the correct formate.")
}
