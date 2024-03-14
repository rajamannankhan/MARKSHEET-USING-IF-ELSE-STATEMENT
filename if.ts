let mathmarks:number=67
let urdumarks:number=80
let chemistrymarks:number=70
let englishmarks:number=75
let obtainedmarks:number=mathmarks+urdumarks+chemistrymarks+englishmarks;
let totalmarks:number=400;
let percentage:number=(obtainedmarks/totalmarks)*100;
console.log("Marks Gained In Maths:"+mathmarks)
console.log("Marks Gained In Urdu:"+urdumarks)
console.log("Marks Gained In chemistry:"+chemistrymarks)
console.log("Marks Gained In English:"+englishmarks)
console.log("Marks Obtained By Students:"+obtainedmarks)
console.log("Total Marks:"+totalmarks)
console.log("PERCANTAGE:"+percentage);
if (percentage>=80){
    console.log("grade A+");
}else if (percentage>=70){
    console.log("Grade A");

}else if (percentage>=60){
    console.log("Grade B");
}else if (percentage>=50){
    console.log("Grade C");
}else {
    console.log("Congratulations you are fail");
} 
console.log("<<CONGRATULATIONS YOU ARE PASS>>");