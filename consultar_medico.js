// Datos de los doctores para el ejemplo
const doctorsData = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist', rating: 4.5, reviews: 200, price: 139.06 },
    { id: 2, name: 'Dr. Jane', specialty: 'Dermatologist', rating: 4.0, reviews: 150, price: 120.00 },
    // ... otros doctores
];

// Manejar la selección de chips (filtros)
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
    chip.addEventListener('click', function() {
        this.classList.toggle('selected');
        this.classList.toggle('text-white');
        filterDoctors();
    });
});

// Manejar la selección de tarjetas de doctor
let selectedDoctor = null; // Para almacenar el doctor seleccionado
const doctorCards = document.querySelectorAll('.doctor-card');
doctorCards.forEach(card => {
    card.addEventListener('click', function() {
        // Si ya hay un doctor seleccionado y es el mismo que el actual, deseleccionarlo
        if (selectedDoctor === this) {
            this.classList.remove('selected');
            this.classList.remove('text-white');
            selectedDoctor = null;
            // Esconder el botón para hacer la cita
            document.querySelector('.appointment-button').style.display = 'none';
        } else {
            // Si hay un doctor diferente seleccionado, deseleccionarlo primero
            if (selectedDoctor) {
                selectedDoctor.classList.remove('selected');
                selectedDoctor.classList.remove('text-white');
            }
            // Seleccionar el nuevo doctor
            this.classList.add('selected');
            this.classList.add('text-white');
            selectedDoctor = this;
            // Mostrar el botón para hacer la cita
            document.querySelector('.appointment-button').style.display = 'block';
        }
    });
});


// Función de búsqueda
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('keyup', function() {
    filterDoctors();
});

// Función para filtrar los doctores
function filterDoctors() {
    const searchQuery = searchBar.value.toLowerCase();
    const selectedChips = Array.from(document.querySelectorAll('.chip.selected')).map(chip => chip.textContent.toLowerCase());

    doctorCards.forEach(card => {
        const doctorName = card.querySelector('.doctor-name').textContent.toLowerCase();
        const doctorSpecialty = card.querySelector('.doctor-specialty').textContent.toLowerCase();
        const isNameMatch = doctorName.includes(searchQuery);
        const isSpecialtyMatch = selectedChips.length === 0 || selectedChips.includes(doctorSpecialty);

        if (isNameMatch && isSpecialtyMatch) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Acción del botón de cita
const appointmentButton = document.querySelector('.appointment-button');
appointmentButton.addEventListener('click', function() {
    if (selectedDoctor) {
        const doctorId = selectedDoctor.getAttribute('data-id');
        const doctorInfo = doctorsData.find(doc => doc.id === parseInt(doctorId));
        alert(`Has seleccionado al doctor ${doctorInfo.name}, especializado en ${doctorInfo.specialty} para tu cita.`);
    }
});

// Esconder inicialmente el botón de hacer cita
document.querySelector('.appointment-button').style.display = 'none';
