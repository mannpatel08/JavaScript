let marks = parseInt(prompt(`Enter Your Marks : `));


if(marks < 0 || marks > 100 ){
    console.log(`Inavalid Choice`);
}else if(marks >= 90){
   console.log(`you have scored ${marks}.... A+ Garded`);
}else if(marks >= 80){
    console.log(`you have scored ${marks}.... A Garded`);
}else if(marks >= 70){
    console.log(`you have scored ${marks}.... B Garded`);
}else if(marks >= 60){
    console.log(`you have scored ${marks}.... C Garded`);
}else if(marks >= 50){
    console.log(`you have scored ${marks}.... D Garded`);
}else if(marks >= 34){
    console.log(`you have scored ${marks}.... E Garded`);
}else{
    console.log(`you have scored ${marks}....Fail....`);
}