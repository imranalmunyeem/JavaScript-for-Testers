//-------------------------------------Conditional(Logical) Operator----------------------------------------------//
const age =28;
let ageMoreThan18;

if(age>18){
    ageMoreThan18 = true;
}

else if(age==18){
    ageMoreThan18 = false;
}
else{
    ageMoreThan18 = false;
}

console.log('Result:' + ageMoreThan18);

//-------------------------------------Conditional(Ternary) Operator----------------------------------------------//
let ageIsMoreThan18 = (age>18) ? True:False
console.log('Result:' + ageIsMoreThan18);