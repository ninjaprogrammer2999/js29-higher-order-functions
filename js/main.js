// high order functions 
/* A high order function is a function which does atleast one of these⬇️
 ==>> Takes one or more functions as a argument (parameter)
 ==>> Returns a function as the result */

import {userData} from './userData.js';

userData.forEach( userData => {
    console.log(userData);
});
console.clear();
// let's move on to the next method or function
// which is filter function

const filteredUserData = userData.filter((userData) => {
    return userData.id === 7;
})
console.log(filteredUserData);














