"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var es6_promise_1 = require("es6-promise");
var books = [
    {
        id: 1,
        series: 'Harry Potter',
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J. K. Rowling',
        image: "https://m.media-amazon.com/images/I/61v6w7YbLJL._SL500_.jpg",
        tags: ['fantasy', 'magic', 'puberty']
    },
    {
        id: 2,
        series: 'Lord of the Rings',
        title: 'The fellowship of the Ring',
        author: 'J. R. R. Tolkien',
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Fellowship_of_the_Ring_cover.gif/220px-The_Fellowship_of_the_Ring_cover.gif",
        tags: ['fantasy', 'magic', 'jewelry']
    },
    {
        id: 3,
        series: 'Game of Thrones',
        title: 'A Song of Ice and Fire',
        author: 'George R. R. Martin',
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg/220px-A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
        tags: ['fantasy', 'killing everyone you will care about']
    },
    {
        id: 4,
        series: 'Sherlock Holmes',
        title: 'The adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        image: "https://images.gr-assets.com/books/1328739610l/10047597.jpg",
        tags: ['detective', 'crime', 'drug abuse']
    },
    {
        id: 5,
        series: '',
        title: 'Murder on the Orient Express',
        author: 'Agatha Cristie',
        image: "https://images-na.ssl-images-amazon.com/images/I/51JVXAbb2pL._SX302_BO1,204,203,200_.jpg",
        tags: ['detective', 'crime', 'tourism']
    },
    {
        id: 6,
        series: '',
        title: 'Neuromancer',
        author: 'William Gibson',
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Neuromancer_%28Book%29.jpg/220px-Neuromancer_%28Book%29.jpg",
        tags: ['science fiction', 'matrix', 'cowboys']
    },
    {
        id: 7,
        series: '',
        title: 'Ready Player One',
        author: 'Ernest Cline',
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Ready_Player_One_cover.jpg/220px-Ready_Player_One_cover.jpg",
        tags: ['science fiction', 'matrix', 'insert coin']
    },
    {
        id: 8,
        series: '',
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        image: "https://images-na.ssl-images-amazon.com/images/I/51OHrXAh0EL._SX303_BO1,204,203,200_.jpg",
        tags: ['science fiction', 'dystopian', 'fire']
    },
];
var fetchBooks = function () {
    return fakeRequest(books);
};
var fetchBook = function (id) {
    var book = books.find(function (book) { return book.id === id; });
    return fakeRequest(book);
};
var fetchBooksByTags = function (tags) {
    var similar = books.filter(function (p) { return lodash_1.intersection(p.tags, tags).length > 0; });
    return fakeRequest(similar);
};
var getUser = function () {
    return fakeRequest({ id: 1, name: 'cassiozen', token: 'k536kh36kh456h4536' });
};
var addToCart = function (data) {
    return fakeRequest(data);
};
// Returns a promise for data that resolves after a random timeout (0 to 500 ms).
function fakeRequest(data) {
    return new es6_promise_1.Promise(function (resolve) {
        setTimeout(function () {
            resolve(data);
        }, (Math.random() * 100));
    });
}
;
exports["default"] = { fetchBooks: fetchBooks, fetchBook: fetchBook, fetchBooksByTags: fetchBooksByTags, getUser: getUser, addToCart: addToCart };
