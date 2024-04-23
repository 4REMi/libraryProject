


const myLibrary = [
  {

    id: Date.now().toString()+1,
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    publicationDate: "November 15, 2023",
    pages: "325 pages",
    readStatus: "Not Read.",
    imageUrl: "https://alphamarino.com/wp-content/uploads/2024/04/cover1.jpg"
  },
  {

    id: Date.now().toString()+2,
    title: "Inferno",
    author: "Dan Brown",
    publicationDate: "November 15, 2023",
    pages: "325 pages",
    readStatus: "Not Read.",
    imageUrl: "https://alphamarino.com/wp-content/uploads/2024/04/cover2.jpg"
  },
  {

    id: Date.now().toString()+3,
    title: "Diary of a Wimpy Kid",
    author: "Jeff Kinney",
    publicationDate: "November 15, 2023",
    pages: "325 pages",
    readStatus: "Read.",
    imageUrl: "https://alphamarino.com/wp-content/uploads/2024/04/cover3.jpg"
  },
  {
  
    id: Date.now().toString()+4,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    publicationDate: "November 15, 2023",
    pages: "325 pages",
    readStatus: "Read.",
    imageUrl: "https://alphamarino.com/wp-content/uploads/2024/04/cover4.jpg"
  },
  {

    id: Date.now().toString()+5,
    title: "Seneca: Letters From A Stoic",
    author: "Robert Seneca",
    publicationDate: "November 15, 2023",
    pages: "325 pages",
    readStatus: "Read.",
    imageUrl: "https://alphamarino.com/wp-content/uploads/2024/04/cover5.jpg"
  },
  {

    id: Date.now().toString()+6,
    title: "Harry Potter And the Philosopher's Stone",
    author: "J.K. Rowling",
    publicationDate: "November 15, 2023",
    pages: "325 pages",
    readStatus: "Read.",
    imageUrl: "https://alphamarino.com/wp-content/uploads/2024/04/cover6.jpg"
  },
  {

    id: Date.now().toString()+7,
    title: "Frankenstein",
    author: "Nohe Clue",
    publicationDate: "November 15, 2023",
    pages: "325 pages",
    readStatus: "Read.",
    imageUrl: "https://alphamarino.com/wp-content/uploads/2024/04/cover7.jpg"
  }
];


//Book constructor, includes all the data from the books, plus the cover image.
function Book(title, author, publicationDate, pages, readStatus, imageUrl) { // We don't use id as an argument, as each ID will be created regardless of what the user inputs
  this.id = Date.now().toString(); // Add a unique identifier to each book using the current timestamp all the way to milliseconds
  this.title = title;
  this.author = author;
  this.publicationDate = publicationDate;
  this.pages = pages;
  this.readStatus = readStatus;
  this.imageUrl = imageUrl;
}

document.getElementById('bookForm').addEventListener('submit', function(event){ //Here, we are adding a eventlistener to the New Book Modal Form and immediately preventing
  //preventing default interaction
event.preventDefault();
//We grab each of the fields to complete and get them either by ID; query, or whatever is fitting for each.
let newBookForm = document.getElementById('bookForm');
let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let publicationDate = document.getElementById('pubDate').value;
let pages = document.getElementById('pages').value;
let readStatus = document.querySelector('input[name="readStatus"]:checked').value; //Radio buttons have a special syntax, we are taking the input with the name readStatus and using the pseudoClass :checked to see which one was checked
let imageUrl = document.getElementById('coverImage').value;

let newBook = new Book(title, author, publicationDate, pages, readStatus, imageUrl); //Here, we actually call for the function using the previous data

// Add the new book to the library
myLibrary.push(newBook);
addBooktoDisplay(newBook); 
modalAddBook.style.display = "none";
newBookForm.reset();
console.log(myLibrary);

})



//Modal for the Add book 

// Get the modal and the button elements
var modalAddBook = document.getElementById('myModal');
var addBookbtn = document.querySelector('.addBook');

// When the user clicks on the button, open the modal 
addBookbtn.onclick = function() {
  modalAddBook.style.display = "block";
}

// Get the element that closes the modal
var closeNewBook = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal
closeNewBook.onclick = function() {
  modalAddBook.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalAddBook) {
    modalAddBook.style.display = "none";
  }
  if (event.target == modalDisplayBook) {
    modalDisplayBook.style.display = "none";
  }
}


var modalDisplayBook = document.getElementById('statusModal');


// Get the element that closes the modal
var closeDetails = document.querySelector('.close2');

// When the user clicks on <span> (x), close the modal
closeDetails.onclick = function() {
  modalDisplayBook.style.display = "none";
}



  // Get the book display container
  const container = document.querySelector('.bookDisplayContainer');


  function loadBooks() {

    myLibrary.forEach((book) => {
      // Create a new book display div
      const bookDisplay = document.createElement('div');
      bookDisplay.className = 'bookDisplay';
  
      // Fill the book display with details from the book
      bookDisplay.innerHTML = `
        <div class="book" id="${book.id}">
          <div class="bookCoverContainer">
            <img src="${book.imageUrl}" alt="" class="bookCover" />
          </div>
  
          <div class="bookDetailContainer">
            <div class="TitleContainer">
              <h1 class="bookTitle">${book.title}</h1>
            </div>
  
            <div class="booksubContainer" id="authorContainer">
              <i class="fi fi-rr-user"></i>
              <div class="authorName">${book.author}</div>
            </div>
  
            <div class="booksubContainer" id="readOnContainer">
              <i class="fi fi-rr-calendar"></i>
              <div class="readonDate">${book.publicationDate}</div>
            </div>
  
            <div class="booksubContainer" id="pagesContainer">
              <i class="fi fi-rr-money-check"></i>
              <div class="pages">${book.pages}</div>
            </div>
  
            <div class="booksubContainer" id="statusContainer">
              <img src="${book.readStatus === 'Read.' ? 'large-green-circle_1f7e2.png' : 'large-red-circle_1f534.png'}" alt="" class="readStatus" />
              <div class="pages">${book.readStatus}</div>
            </div>
          </div>
        </div>
      `;
  
      // Append the new book display to the container
      container.appendChild(bookDisplay);
  
      // Add event listener to open the book modal when clicked
      bookDisplay.addEventListener('click', function () {
        openBookModal(this);
      });
    });
  }


function openBookModal(bookDisplay) {
  const bookId = bookDisplay.querySelector('.book').id;
  const book = myLibrary.find(book => book.id == bookId); 
  
  //const bookId = bookDisplay.querySelector('.book').id;:
  //bookDisplay is the parameter received by the openBookModal function, which represents the clicked book display element.
  //bookDisplay.querySelector('.book') searches within the bookDisplay element for an element with the class .book. In this case, it assumes that the book display element contains a child element with the class .book that holds the book's information
//.id retrieves the id attribute value of the element found by querySelector('.book'). The id attribute is expected to contain the unique identifier of the book.
  //The retrieved book ID is then assigned to the bookId variable using const bookId = .... This variable now holds the unique identifier of the clicked book.
  //myLibrary is assumed to be an array that contains book objects, where each book object has an id property representing its unique identifier.
//find() is an array method that searches through the myLibrary array to find a book object that matches a specific condition.
//The condition is specified using an arrow function book => book.id == bookId:

//For each book object in the myLibrary array, the arrow function compares the id property of the book object (book.id) with the bookId obtained from the clicked book display element.
//The double equals operator == is used for comparison. It checks if the book.id is equal to the bookId, even if they have different data types (e.g., string vs. number).


//If a book object in the myLibrary array satisfies the condition (i.e., its id matches the bookId), the find() method returns that book object.
//The found book object is then assigned to the book variable using const book = .... This variable now holds the book object corresponding to the clicked book display element.
  if (!book) {
    console.error('Book not found');
    return;
  }

  let bookCover = document.querySelector('.bookCoverModal');
  let bookTitle = document.querySelector('.bookTitle');
  let bookAuthor = document.querySelector('.authorName');
  let readonDate = document.querySelector('.readonDate');
  let bookPages = document.querySelector('.pages');
  let readStatus = document.querySelector('.readStatus');
  let readStatusText = document.querySelector('.readStatusText');

  let deleteBtn = document.querySelector('.Deletebtn');

  deleteBtn.addEventListener('click', function () {
    deleteBook(bookId);
  });

  bookCover.src = book.imageUrl;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  readonDate.textContent = book.publicationDate;
  bookPages.textContent = book.pages;
  readStatusText.textContent = book.readStatus;

  if (readStatusText.textContent.trim() === 'Not Read.') {
    readStatus.src = 'large-red-circle_1f534.png';
  } else {
    readStatus.src = 'large-green-circle_1f7e2.png';
  }

  modalDisplayBook.style.display = "block";
}

function deleteBook(bookId) { //We use the argument of the previously created BookID retrieved from the BookDisplay id
  const index = myLibrary.findIndex(book => book.id === bookId);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    console.log(myLibrary);

    // Remove the corresponding bookDisplay element from the DOM
    const bookDisplays = document.querySelectorAll('.bookDisplay');
    bookDisplays.forEach(bookDisplay => {
      const book = bookDisplay.querySelector('.book');
      if (book.id === bookId) {
        bookDisplay.remove();
      }
    });

    // Close the modal after deleting the book
    modalDisplayBook.style.display = "none";
  }
}



function addBooktoDisplay(book) {
  // Create a new book display div
  const newbookDisplay = document.createElement('div');
  newbookDisplay.className = 'bookDisplay';

  // Fill the book display with details from the book
  newbookDisplay.innerHTML = `
    <div class="book" id="${book.id}"> 
      <div class="bookCoverContainer">
        <img src="${book.imageUrl}" alt="" class="bookCover" />
      </div>

      <div class="bookDetailContainer">
        <div class="TitleContainer">
          <h1 class="bookTitle">${book.title}</h1>
        </div>

        <div class="booksubContainer" id="authorContainer">
          <i class="fi fi-rr-user"></i>
          <div class="authorName">${book.author}</div>
        </div>

        <div class="booksubContainer" id="readOnContainer">
          <i class="fi fi-rr-calendar"></i>
          <div class="readonDate">${book.publicationDate}</div>
        </div>

        <div class="booksubContainer" id="pagesContainer">
          <i class="fi fi-rr-money-check"></i>
          <div class="pages">${book.pages}</div>
        </div>

        <div class="booksubContainer" id="statusContainer">
          <img src="${book.readStatus === 'Read.' ? 'large-green-circle_1f7e2.png' : 'large-red-circle_1f534.png'}" alt="" class="readStatus" />
          <div class="pages">${book.readStatus}</div>
        </div>
      </div>
    </div>
  `;

  newbookDisplay.addEventListener('click', function () {
    openBookModal(this); // "this" makes reference to the callback function of the event listener attached to the new book displayed
  });

  // Append the new book display to the container
  container.appendChild(newbookDisplay);
}
  

  // Call the function with your library
loadBooks();
console.log("What the fuck big boi");
