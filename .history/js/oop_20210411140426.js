const date = new Date();
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
        const [unreadBooks] = this.unreadBooks;
        if (book.read) {
            this.markedRead += 1;
            this.readBooks.push(book);
            this.lastBook = this.readBooks[this.readBooks.length -1];
        }
        if (!book.read) {
            this.markedNotReadYet += 1;
            this.unreadBooks.push(book);
            this.nextRead = unreadBooks;
        }
        if (!book.read && book.readDate === date) {
            this.currentRead = book;
        }  
    }
    finishCurrentBook() {
       if (!this.currentRead.read) {
           this.currentRead.read = true;
           this.lastBook = this.currentRead;
           this.currentRead = this.nextRead;
           this.currentRead.readDate = new Date(Date.now());
       }
    }
    getNextRead() {
        console.log(this.nextRead);
    }
    getLastBook() {
        console.log(this.lastBook);
    }
    getCurrentRead() {
        console.log(this.currentRead);
    }
    getMarkedRead() {
        console.log(this.markedRead);
    }
    getMarkedNotReadYet() {
        console.log(this.markedNotReadYet);
    }
    getAllBooks() {
        console.log(this.allBooks);
    }
}
class Book {
    constructor(title, genre, author, readable, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.readable = readable;
        this.readDate = readDate;
    }
}

const book1 = new Book('Little Women', 'Novel', 'Louisa May Alcott', true,);
const book2 = new Book('The Adventures of Tom Sawyer', 'Adventures', 'Mark Twain', false);
const book3 = new Book('Shantaram','Novel', 'Gregory David Roberts', true);
const book4 = new Book('Good Wives', 'Novel', 'Louisa May Alcott', false)
const listOfBooks = new BookList();
listOfBooks.add(book1);
listOfBooks.add(book2);
listOfBooks.add(book3);
listOfBooks.add(book4);
console.log(listOfBooks);

listOfBooks.getCurrentRead();
listOfBooks.getLastBook();
listOfBooks.getNextRead();
listOfBooks.getMarkedRead();
listOfBooks.getMarkedNotReadYet();
listOfBooks.getAllBooks();