class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw TypeError('Not enough space in the collection.');
        }

        const book = {
            bookName,
            bookAuthor,
            payed: false,
        }

        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        const givenBook = this.books.find(b => b.bookName == bookName);
        if (givenBook == undefined) {
            throw Error(`${bookName} is not in the collection.`); //idk
        }
        else if (givenBook.payed) {
            throw Error(`${bookName} has already been paid.`);
        }
        else if (!givenBook.payed) {
            givenBook.payed = true;
            return `${bookName} has been successfully paid.`;
        }
    }
    removeBook(bookName) {
        const index = this.books.findIndex(b => b.bookName == bookName);
        const givenBook = this.books[index];
        if (givenBook == undefined) {
            throw Error(`The book, you're looking for, is not found.`);
        }
        else if (!givenBook.payed) {
            throw Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let emptySlots = this.capacity > this.books.length ? this.capacity - this.books.length : 0;
            this.books.sort((a, b) => a.bookName - b.bookName);
            const result = this.books.map(c => `${c.bookName} == ${c.bookAuthor} - ${c.payed ? 'Has Paid' : 'Not Paid'}.`);
            result.unshift(`The book collection has ${emptySlots} empty spots left.`);
            return result.join('\n');
        }

        const resultWithAuthor = [];
        for (const book of this.books) {
            if(book.bookAuthor == bookAuthor){
                resultWithAuthor.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);
            }
        }
        

        if (resultWithAuthor.length != 0) {
            return resultWithAuthor.join('\n');
        }
        throw TypeError(`${bookAuthor} is not in the collection.`);

    }
}

const library = new LibraryCollection(2)
library.addBook("Don Quixote", "Miguel de Cervantes");
library.getStatistics("Miguel de Cervantes");
