//------------------------------------While Loop-------------------------------------------------//
let i=0;
while (i<10){
    console.log("The value of i is now:" +i);
    i++;
}

//------------------------------------Do While Loop-------------------------------------------------//
do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);


//------------------------------------For Loop-------------------------------------------------//
for (j=0; j<10; j++){
    console.log("The value of j is now:" + j);
}


//------------------------------------For In Loop-------------------------------------------------//
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}


//------------------------------------For of Loop-------------------------------------------------//
let language = "JavaScript";

let text1 = "";
for (let x of language) {
text += x;
}