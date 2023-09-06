const booksBtn = document.getElementById('booksBtn');
const moviesBtn = document.getElementById('moviesBtn');
const contentDiv = document.getElementById('content');
const slideshow = document.getElementById('slideshow');

booksBtn.addEventListener('click', () => {
    window.location.href = 'books.html';  
});


moviesBtn.addEventListener('click', () => {
    window.location.href = 'movies.html';
});




const imageUrls = [
    'image1.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
    

    
    
];

let currentImageIndex = 0;

function changeSlide() {
    slideshow.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageUrls[currentImageIndex];
    slideshow.appendChild(img);
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

// Initially, display the first image
changeSlide();

// Set an interval to change the slide every 3 seconds (adjust as needed)
setInterval(changeSlide, 3000);

