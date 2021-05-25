// callback function 

 function sayMyName(name) {
     name()
 }

 sayMyName(
     () => {
         console.log('estou em uma callback');
     }
 )

 //Chamo uma função e chamo outra de volta - callback
 