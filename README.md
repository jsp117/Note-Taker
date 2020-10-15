# Note Taker

## Description
This application is a note taker deployed via Heroku. To create this application, I began by creating get, post and listen functions to display content to the site. The first .get /notes function displays the notes.html page when a user clicks get started on the home page. From there, I created a get function to display notes previously written to the db.json file. In order to save notes to an array and delete notes, I created the store.js file in which I created the class Store. In this class, there are methods to create and delete notes, and write them to the db.json file. In order to create unique ids, I utilized the uniqid npm package, which creates ids when called. I assigned these ids to each note as it is created, and also use them to delete specific notes when needed. 

Utilizing the Store class, I created the post function that takes the user inputted text and stores it using the createNote function within Store. Similarly, the delete functions uses the deleteNote function by id to delete notes from the array of notes, and then writes the new array to the db.json file. 
  
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Code Snippets](#code_snippets)
* [Testing](#testing)
* [Built With](#built_with)
* [Author](#author)
* [License](#license)


## Installation
To install all dependencies, run Npm install in your terminal while opened to the file path you downloaded to. 

## Usage
To run this application locally, open your terminal to the folder it is located in and type "npm install". When those files are finished downloading type "node index.js" to run the application. You can then navigate on your browser to localhost:3000 to view the site. Click "get started" to navigate to the notes page. You can then type a title in the title text area, and a note in the note text area. From there, you can click the save icon on the top right to save your note. On the left hand side of the screen, you can click your previously saved notes to view them, or click the trash icon to delete them. To write a new note, you can click the pencil icon on the top right.

![gif Walkthrough](./public/assets/images/noteTaker.gif)

## Code Snippets
This code snippet displays all Express functions used to display different html files, as well as reading from and writing to the db.json file. 

![Express Functions](./public/assets/images/express.png)

## Built_with
* JavaScript
* HTML
* [Express](https://expressjs.com/)
* [Uniqid](https://www.npmjs.com/package/uniqid)
* [Bootstrap](https://getbootstrap.com/)
* [NodeJS](https://nodejs.org/en/)
* [Heroku](https://www.heroku.com)
* [Github](https://github.com/)
  
## Author
Jonathan SanPedro - Bachelors of Information Technology at Rutgers New Brunswick - Student at Berkeley Coding Bootcamp
  
![Github Profile Picture](https://github.com/jsp117.png?size=150)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright &copy; [2020] [Jonathan J. SanPedro]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.