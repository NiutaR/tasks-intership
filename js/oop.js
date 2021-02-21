class Book {
    constructor(title, genre, author, readable = true, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.readable = readable;
        this.readDate = readDate;
    }
}
class BookList {
    constructor(markedRead, markedNotReadYet, readBooks, unreadBooks, nextRead, currentRead, lastBook, allBooks) {
        this.markedRead = 0;
        this.markedNotReadYet = 0;
        this.readBooks = [];
        this.unreadBooks = [];
        this.nextRead = nextRead;
        this.currentRead = currentRead;
        this.lastBook = lastBook;
        this.allBooks = [];
    }
    add(book) {
        if (this.allBooks.length === 0) {
          this.currentRead = book;
        }
        this.allBooks.push(book);
        this.nextRead = this.allBooks[this.markedRead + 1];
        this.markedNotReadYet++;
    }
    finishCurrentBook() {
        this.currentRead.readable = true;
        this.currentRead.readDate = new Date(Date.now());
        this.lastBook = this.currentRead;
        this.currentRead = this.nextRead;
    }
}


const book1 = new Book('Little Women', 'Novel', 'Louisa May Alcott', true,);
const book2 = new Book('The Adventures of Tom Sawyer', 'Adventures', 'Mark Twain', true);
const book3 = new Book('Shantaram','Novel', 'Gregory David Roberts', true);
const listOfBooks = new BookList();
listOfBooks.add(book1);
listOfBooks.add(book2);
listOfBooks.add(book3);
console.log(listOfBooks);

  

