const axios = require("axios");

// Task 10: Get all books using async callback function
async function getAllBooks() {
  try {
    const response = await axios.get("http://localhost:5000/");
    console.log("Task 10 — All Books:");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Task 11: Search by ISBN using Promises
function getBookByISBN(isbn) {
  return axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
      console.log("Task 11 — Search by ISBN:");
      console.log(response.data);
    })
    .catch(error => console.error(error));
}

// Task 12: Search by Author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    console.log("Task 12 — Search by Author:");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Task 13: Search by Title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    console.log("Task 13 — Search by Title:");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  await getAllBooks();
  await getBookByISBN(1);
  await getBooksByAuthor("Chinua Achebe");
  await getBooksByTitle("Things Fall Apart");
})();
