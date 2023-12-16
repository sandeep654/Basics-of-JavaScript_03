//  Immediately Invoked Function Expression (IIFE) global solution ko remove krne ke liae iife ka use krte h 

(function chai(){  // named iife
    console.log(`DB connected `);
})();

(  function aurcode() { // named iife
    console.log("DB connected 2");
})();

(( Name) => {
    console.log(`DB connected 3 ${Name}`);
})( "Sandeep bhaiya you are good guy")
