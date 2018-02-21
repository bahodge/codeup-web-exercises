const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

//Problem 1

// const languageArray = users.filter(function(person){
//    return person.languages.length >= 3;
// });

//Same as: -----------------------------------//
// const languageArray = users.filter((person) => person.languages.length >= 3);

//Same as: -----------------------------------//
const languageArray = users.filter(({ languages }) => languages.length >= 3);


//Problem 2

// const emailArray = users.map(function(person){
//     return person.email;
// });

// //Same as: -----------------------------------//
// const emailArray = users.map((person) => person.email);

//Same as: -----------------------------------//
const emailArray = users.map(({ email }) => email);



//Problem 3
//
// const idArray = users.reduce(function(acc, user){
//     acc[user.id] = user;
//     return acc;
// }, {});

// Same as: -----------------------------------//
// const idArray = users.reduce( (acc, user) => {
//     acc[user.id] = user;
//     return acc;
// }, {});

// Better way:  -----------------------------------//
const idArray = users.reduce( (acc, {id, name, email, languages}) => {
    acc[id] = {
        name,
        email,
        languages
    };
    return acc;
}, {});



console.log(languageArray);
console.log(emailArray);
console.log(idArray);