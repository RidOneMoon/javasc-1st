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
