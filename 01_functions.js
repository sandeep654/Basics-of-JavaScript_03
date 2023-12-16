/*
function Myname() {
console.log("S");
console.log("a");
console.log("n");
console.log("e");
console.log("e");
console.log("P");

}

Myname //reference of function

// Myname()  //function call means execute function

function sum(num1,num2) {  //parameters
     
    let x=num1%num2  //jo x yaha pe isko function ki body mai hi access kar skte h 
    return x
     console.log("sandeep yadav");
     return num1*num2 //return keyword chalte hi function ki body se out ho jaate h 
}
function sum2(num,num0){    //arguments
    console.log(num/num0);
}

const x=sum(10,20)   // iss x variable ko hum function ki body mai nahi likh skte h ...
console.log(x);
*/

function loginUserMessage(username = "Sandy"){ // default value
    if(username === undefined){  //undefined= false (!username)  username =undefined=false toh ye change ! se true ho jaaega phir if block chal jaaega  
        console.log("Please enter a valid number: ");
        return 
    }
    return `${username} , Welcome to our channel `
}
const Sandeep=loginUserMessage("Sandeep") //when not passing any argument you get undefined in output but not null

console.log(Sandeep);



function CalculateCartPrice(...num1) {   //  ...rest , ...spread
       return num1   // all values are inserted into an array
}

console.log(CalculateCartPrice(200,300,400,500));


const user={
    Name:"hitesh",
    price:199,
    location:"jaipur",
    college:"jecrc"
}

function AccessObject( anyobject ){
    console.log( `${ anyobject.Name} is best mentor of js and in just of price ${ anyobject.price }` );
}

// AccessObject(user)
AccessObject({
    Name:"Sandeep",
    price:1234
})


const arr = [10,20,30,40,50,60,70,80,90,100]

function findArrayvalues( getarray){
      return getarray[3]
}

// console.log(findArrayvalues(arr[9])); 
console.log(findArrayvalues([34,34,100,200,32]));