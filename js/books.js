const bookGrid = document.querySelector('.book-grid');

const favoriteBooks = [
    {
        title: 'A Little Life',
        author: 'Hanya Yanagihara',
        coverImage: 'image11.jpg',
        description: 'A Little Life (2015) follows the lives of four friends in New York City: aspiring actor Willem, moody painter JB, quiet architect Malcolm, and the brilliant, mysterious litigator Jude. Over the years, the four friends grow together, drift apart, find love and success, and struggle with loss and addiction.',
    },
    // Add more book objects for your other favorite books
    {
        title: 'On Earth We are Briefly Gorgerous',
        author: 'Ocean Voung',
        coverImage: 'image12.jpg',
        description: 'At once a witness to the fraught yet undeniable love between a single mother and her son, it is also a brutally honest exploration of race, class, and masculinity.',
    },

    {
        title: 'The Seven Moons of Maali Almeda',
        author: 'Shehan Karunathilaka',
        coverImage: 'image14.jpg',
        description: 'The novel is set in Sri Lanka in the 1980s, and written in the second person. The central character, Maali Almeida, is a dead photographer who sets out to solve the mystery of his own death and is given one week ("seven moons") during which he can travel between the afterlife and the real world.',
    },
];

favoriteBooks.forEach((book, index) => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <img src="${book.coverImage}" alt="${book.title}">
        <p>${book.description}</p>
    `;

    // Add a click event listener to show more details if needed

    bookGrid.appendChild(bookItem);
});
