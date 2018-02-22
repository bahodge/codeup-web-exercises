"use strict";

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });

function wait (num) {

   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
}


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function getLastCommit(username){
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token 7c66db3d09881724b06d6f6233e085d5e5d56dfb'}})
        .then((response) => response.json())
        .then(data => {
            let lastCommit = data[0].created_at.substring(0, 10);
            console.log(`${username}'s last commit was on: ${lastCommit}`)
        })
        .catch(() => console.error('BAD REQUEST!'));
}


getLastCommit('bahodge');



