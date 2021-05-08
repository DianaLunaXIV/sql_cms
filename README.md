# sql_cms

![MIT](https://img.shields.io/badge/license-MIT-green.svg)

[Repository](https://github.com/BrenniusXIV/sql_cms/)

## Table of Contents
  1. [sql_cms](#sql_cms)

  2. [Description](#description)

  3. [Installation](#installation)

  4. [Usage](#usage)

  5. [Issues](#issues)

  6. [Contribution](#contribution)

  7. [License](#license)

  8. [Credits](#credits)

  9. [Contact](#contact)

  

## Description
 > This is a Content Management System written with JavaScript, Inquirer, and other packages. It uses a MySQL server as its database.

## Installation
 > Make sure you have installed MySQL and Node.js. 1. Clone the repo. 2. Before anything else, make sure you have root access to your MySQL server. Use the provided .sql files to import the Schema and Seeds. 3. Navigate to the app/ subfolder in the cloned repo, and run `npm i` to install dependencies. 4. Create a file called `config.env` in the app/ subfolder. Assign DB_USER, DB_HOST, and DB_PASS according to your MySQL specifications. e.g. DB_USER=root DB_HOST=localhost DB_PASS=yourpasswordhere 5. Once these are installed, you should be able to run `npm start` from the app/ folder and run the program.

## Usage
 > The app is an inquirer-based command line interface. It will ask questions to which you provide answers. Avoid extra spaces or funky characters; while they may pose no threat to the stability of the app, it may provide unwanted input to your MySQL database.

## Issues
 > Some of the logging to the console within the app is a little strange, because the logs run into the last line of the inquirer list prompt that serves as the main menu of the app. `index.js` contains some empty functions which I plan to add soon. Stay tuned!

## Contribution
 > Feel free to make pull requests if you would like to try your hand at improving the way my app works, or if you find bugs or other issues you wish to have addressed.

## License
 [MIT](https://choosealicense.com/licenses/mit/)


    MIT License
  
    Copyright (c) [year] [fullname]
    
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

## Credits
 > Thank you to all the authors of the packages used in this app. Without you, I could not have figured this out!

## Contact
 > If you have questions about my project, please reach out to me on [GitHub](github.com/BrenniusXIV) or send me an e-mail at brentbaughan1@gmail.com.
