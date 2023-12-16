// global scope
let x=20
const y=30
var z=40  

if(true){
   const x=30
   let y=40
   var z=50  // var sabse latest value ko assign kar leta variable mai koi fark nahi pdta local and global variable mai 
   console.log(x+y+z);
//local scope  = if scope 
}

console.log(x+y+z,z,y);

// nested scope 

function one(){
   const username="Hitesh chaudhary "
    function two(){
        const Youtuber="Chai aur code"
        console.log(username + Youtuber);
    }

    two()
}

one()


// outside() //hoisting 

// const storefunct = function outside(){ // execution contest 
//    console.log("sandeep you can do it ..invest your time in practice.");
// }
