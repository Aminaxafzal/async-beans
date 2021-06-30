const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');


// In the following checkpoints, I will create an async function that handles the 
// three dependent promises we just walked through. It will simulate shopping for, 
// soaking, and then cooking the beans. To get started, i will declare an async function, 
// makeBeans(). 

// Write your code below:
async function makeBeans() {
    let type = await shopForBeans(); 
    console.log(type);
    let isSoft = await soakTheBeans(type);
    console.log(isSoft);
    let dinner = await cookTheBeans(isSoft); 
  console.log(dinner);
  
  }
  
  makeBeans(); 


  const cookBeanSouffle = require('./library.js');

// error handling
async function hostDinnerParty() {
  try {
 let dinner = await cookBeanSouffle();
 console.log(`${dinner} is served!`);
}
  
  catch(error) {
    console.log(error);
console.log('Ordering a pizza!');
  }
}



hostDinnerParty();