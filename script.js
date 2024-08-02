const images = [
    { src: 'image1.jpg', text: 'Tus locuras van de las manos con las mias' },
    { src: 'image2.jpg', text: 'Tu eres mi camino y siempre seras mi camino' },
    { src: 'image3.jpg', text: 'Te amo y te amo en todos los universos' },
    { src: 'image4.jpg', text: 'Solo quiero que estes bien' },
    { src: 'image5.jpg', text: 'Te amo 3 millones ' }
];

let currentIndex = 0;

document.getElementById('showImageBtn').addEventListener('click', function() {
    if (currentIndex < images.length) {
        const imageElement = document.getElementById('image');
        const textElement = document.getElementById('imageText');
        
        imageElement.src = images[currentIndex].src;
        textElement.textContent = images[currentIndex].text;
        
        document.getElementById('imageContainer').classList.remove('hidden');
        currentIndex++;
    } else {
        document.getElementById('imageContainer').classList.add('hidden');
        document.getElementById('finalMessage').classList.remove('hidden');
    }
});