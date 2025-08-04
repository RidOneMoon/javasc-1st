/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
if(area > 0 && area <= Math.pow(10,9)){
    const out=area/2;
    console.log(out);
}

/* ________________________________________________________________________________ /*
/* ________________________________________________________________________________ /*

/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
//write your code here
if (money === 25000 || money >25000 ){
    console.log("Laptop")
}else if(money === 10000 || money > 10000){
    console.log("Cycle")
}else{
    console.log("Chocolate")
}

/* ________________________________________________________________________________ /*
/* ________________________________________________________________________________ /*

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here

for (var day = 1; day <= lastDay; day++) {
    if (day % 3 === 0) {
        console.log(day + " - medicine");
    } else {
        console.log(day + " - rest");
    }
}

/* ________________________________________________________________________________ /*
/* ________________________________________________________________________________ /*

/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";
//write your code here
if(
    fileName.startsWith("#") ||
    fileName.endsWith(".pdf") ||
    fileName.endsWith(".docx")
){
console.log("Store");
}else{
console.log("Delete");
}

/* ________________________________________________________________________________ /*
/* ________________________________________________________________________________ /*

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

/* ________________________________________________________________________________ /*
/* ________________________________________________________________________________ /*

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
if(startingSalary < 45000 && experience <30){
    let nowSalary=startingSalary/experience;
    console.log("Simple salary calculation:",nowSalary.toFixed(2));
}else{
    let currentSlary=startingSalary;
    for(var i=1;i<=experience;i++){
        currentSlary+=currentSlary*0.05;
    }
    console.log("Starting Salary:",startingSalary);
    console.log("Experience:",experience);
    console.log("Current Salary:",currentSlary.toFixed(2));
}
