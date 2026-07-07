// --- 1. Image Slider Functionality ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // স্লাইড ইনডেক্স বাউন্ডারি চেক
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // সব স্লাইড থেকে 'active' ক্লাস রিমুভ করা
    slides.forEach(slide => slide.classList.remove('active'));
    
    // শুধু বর্তমান স্লাইডে 'active' ক্লাস যোগ করা
    slides[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// প্রতি ৫ সেকেন্ড পর পর অটোমেটিক স্লাইড চেঞ্জ হওয়ার জন্য (Optional)
setInterval(() => {
    changeSlide(1);
}, 5000);


// --- 2. Category Filter Functionality ---
function filterCategory(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex'; // প্রোডাক্ট দেখাবে
        } else {
            card.style.display = 'none'; // প্রোডাক্ট হাইড করবে
        }
    });
}


// --- 3. Live Search Functionality ---
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const productName = card.querySelector('.product-info h3').textContent.toLowerCase();
            
            // যদি নাম মিলে যায় তবে দেখাবে, নয়তো হাইড করবে
            if (productName.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
