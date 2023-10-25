// Datos de los videos para el ejemplo
const videosData = [
    { id: 1, doctorName: 'Juan De Dios', specialty: 'Cardiólogo', description: 'Cómo bajar el colesterol', image: 'https://www.wellingtonregional.com/sites/wellingtonregional.com/files/doctors_visit_1200x900.jpg', category: 'cardio' },
    { id: 2, doctorName: 'Tomás Ramirez', specialty: 'Dermatólogo', description: 'Cómo cuidar tu piel', image: 'https://album.mediaset.es/eimg/2022/11/08/espana-cantera-de-medicos-de-europa_42d6.png?w=1200', category: 'derma' },
    { id: 3, doctorName: 'Erick Mendoza', specialty: 'Neurólogo', description: 'Cómo manejar el estrés', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5KCVGAGSP5HFJA7KMALNP7ITS4.jpg', category: 'neuro' },
    { id: 4, doctorName: 'Marlon Sanchez', specialty: 'Oftalmólogo', description: 'Cuidados básicos para tus ojos', image: 'https://storage.googleapis.com/www-saludiario-com/wp-content/uploads/2022/05/77dddaf6-habilidades-me%CC%81dico-general.jpg', category: 'oftal' },
    { id: 5, doctorName: 'Pedro Gomez', specialty: 'Cardiólogo', description: 'Alimentos para un corazón sano', image: 'https://static.studyusa.com/article/aws_9CZM8SOpRgaVQQ1MnX8HxiuLzY8AOMoD_sm_2x.jpg?format=webp', category: 'cardio' }
];

// Generar tarjetas de video
function generateVideoCards() {
    const videoContainer = document.querySelector('.video-container');
    videosData.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.setAttribute('data-category', video.category);

        videoCard.innerHTML = `
            <img class="doctor-image" src="${video.image}">
            <div class="video-info">
                <span class="doctor-name">${video.doctorName}</span>
                <span class="doctor-specialty">${video.specialty}</span>
                <span class="video-description">${video.description}</span>
            </div>
            <button class="more-options">...</button>
        `;

        videoContainer.appendChild(videoCard);
    });
}

function filterVideos() {
    const searchQuery = document.querySelector('.search-bar').value.toLowerCase();
    const selectedChips = Array.from(document.querySelectorAll('.chip.selected')).map(chip => chip.id);

    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const doctorName = card.querySelector('.doctor-name').textContent.toLowerCase();
        const doctorSpecialty = card.querySelector('.doctor-specialty').textContent.toLowerCase();
        const videoDescription = card.querySelector('.video-description').textContent.toLowerCase();
        const isMatch = doctorName.includes(searchQuery) || doctorSpecialty.includes(searchQuery) || videoDescription.includes(searchQuery);
        const isCategoryMatch = selectedChips.length === 0 || selectedChips.includes(category);

        if (isMatch && isCategoryMatch) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Eventos
document.addEventListener("DOMContentLoaded", function() {
    // Generar tarjetas al cargar la página
    generateVideoCards();

    // Manejar la selección de chips
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            this.classList.toggle('selected');
            filterVideos();
        });
    });

    // Manejar la barra de búsqueda
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('keyup', filterVideos);
});
