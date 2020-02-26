import { UI } from './ui';
import { Book } from './book';

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', event => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields');
  } else {
    const book = new Book(title, author, isbn);

    UI.addBookToList(book);
    UI.clearFields();
  }
});

document.querySelector('#book-list').addEventListener('click', event => {
  UI.deleteBook(event.target);
});
