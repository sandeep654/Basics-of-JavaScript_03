  const user={
      username:"Sandeep Yadav",
      age:23,

      Welcomemessage : function show(){
        console.log(`${this.username} and his age is ${this.age}`)  // this keyword is used for current context ko access kar skte h 
      }
      
  }

user.Welcomemessage();

console.log(this) // this keyword used outside the block output will be {}.
  
// -------------------this keyword in function block -------------------
function chai(){
    const username="Sandeep Yadav"
    console.log(this);
}
chai()    //output is undefined (this keyword work in object) 


const code = function (){
    let username="Yadav"
    console.log(this.username);
}

code()   //output = undefined

// +++++++++++++++++++++ Arrow Functions +++++++++++++++++++    ()=>{}

// const code1 = () => {
//     let username="Yadav"
//     // console.log(this.username);
//     console.log(this);
// }
// code1() 

// const codewithchai = (num1,num2) => {
//         return num1+num2 // explicit return
//  }


//implicit return 
//  const codewithchai = (num1,num2) =>  console.log(num1+num2)

//  const codewithchai = (num1 , num2 ) => ( num1 + num2)   // bracket mai return keyword nhi likhna pdta...{} likhn pdta h

 const codewithchai = (num1 , num2 ) => ( {username:"sandeep"})

 console.log(codewithchai(4,98));
