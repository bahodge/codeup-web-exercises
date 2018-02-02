(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Ben",
    //     lastName: "Hodge"
    // }


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */

    var person = {
        firstName: "Ben",
        lastName: "Hodge",
        sayHello: function (name, surName) {
            return ("Hello, " + name + " " + surName);
        }
    };

    console.log(person.sayHello(person.firstName, person.lastName));

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach(function(shopper){
       if (shopper.amount > 200) {
           var newAmount = 0;
           newAmount = shopper.amount - (shopper.amount * .12);
           console.log(shopper.name + " is getting a discount of 12%. They would have paid " + shopper.amount + " but will now pay " + newAmount);
       }
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [];

    var book1 = {
        title: "Salmon Murderer",
        author: "Douglas Adams"
    };

    var book2 = {
        title: "Walkaway",
        author: "Cory Doctorow"
    };

    var book3 = {
        title: "A Brief History of Time",
        author: "Stephen Hawking"
    };


    var treats = [
        {
            treat: "cookies",
            calories: 100
        },
        {
            treat: "candy",
            calories: 150
        },
        {
            treat: "oatmeal",
            calories: 130
        },
        {
            treat: "panda thigh",
            calories: 2020
        }
    ];


    console.log(treats);


    books.push(book1);
    books.push(book2);
    books.push(book3);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    var output = "";
    function showBookInfo(array){
        for (var i = 0; i < array.length; i++){
            output = ("Book #" + (i + 1) + "\nAuthor: " + books[i].author + "\nTitle: " + books[i].title + "\n---");
        }
        console.log(output);
        return output;
    }




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook (title, author) {

        var book = {
            title: title,
            author: author
        };

        books.push(book);
    }

    createBook("Harry Potter", "J.K. Rowling");

    showBookInfo(books);



    // var coolNames = [
    //
    //     {
    //         firstName: "Ben",
    //         lastName: "Hodge"
    //     },
    //
    //     {
    //         firstName: "Steven",
    //         lastName: "Garis"
    //     },
    //     {
    //         firstName: "Ben",
    //         lastName: "Garis"
    //     },
    //     {
    //         firstName: "Steven",
    //         lastName: "Hodge"
    //     }
    //
    // ];
    //
    // //ADD NEW PROPERTY TO EACH ELEMENT
    // coolNames.forEach(function(name){
    //     name.middleName = "Derpington";
    // });
    //
    //
    // console.log(coolNames);
    //
    // coolNames.forEach(function(name){
    //     delete name.middleName;
    // });
    //
    // console.log (coolNames);
    // return coolNames;
})();
