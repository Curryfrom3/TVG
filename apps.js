let name = prompt("What is your name?");
let age = prompt("What is your age?");
let city = prompt("What city do you live in?");
if (parseInt(age) > 18 && parseInt(age)< 50){
document.write("you are old enough to know not to trust spiders <br>");
 } else {document.write("go to sleep you have school in the morning! <br>");}
document.write("Name: " + name + "<br>");
// document.write("Age: " + age + "<br>"); 
document.write("City: " + city + "<br>");