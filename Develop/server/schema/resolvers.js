// server/schema/resolvers.js

const books = [
    {
      id: '1',
      title: '1984',
      author: 'George Orwell',
      description: 'Dystopian novel',
      publishedDate: '1949-06-08',
    },
    // Add more book objects as needed
  ];
  
  const resolvers = {
    Query: {
      books: () => books,
      book: (parent, { id }) => books.find(book => book.id === id),
    },
    Mutation: {
      addBook: (parent, { title, author, description, publishedDate }) => {
        const newBook = {
          id: String(books.length + 1),
          title,
          author,
          description,
          publishedDate,
        };
        books.push(newBook);
        return newBook;
      },
      updateBook: (parent, { id, title, author, description, publishedDate }) => {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) return null;
  
        const updatedBook = {
          ...books[bookIndex],
          title: title || books[bookIndex].title,
          author: author || books[bookIndex].author,
          description: description || books[bookIndex].description,
          publishedDate: publishedDate || books[bookIndex].publishedDate,
        };
  
        books[bookIndex] = updatedBook;
        return updatedBook;
      },
      deleteBook: (parent, { id }) => {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) return null;
  
        const deletedBook = books.splice(bookIndex, 1);
        return deletedBook[0];
      },
    },
  };
  
  module.exports = resolvers;