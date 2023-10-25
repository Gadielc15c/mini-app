document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector('.grid-container');
    
    const actions = [
      { icon: 'fa-regular fa-address-book', text: 'Registro', action: () => window.location.href = 'https://www.example1.com/' },
      { icon: 'fas fa-video', text: 'Videos', action: () => window.location.href = 'consultar_medico.html' },

      { icon: 'fas fa-language', text: 'Idioma', action: () => window.location.href = 'https://www.example2.com/' },
      { icon: 'fas fa-envelope', text: 'Correo', action: () => window.location.href = 'https://www.example2.com/' },

    ];
  
    for (let i = 0; i < actions.length; i++) {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      gridItem.innerHTML = `
        <div class="content">
          <div class="icon-container">
            <i class="${actions[i].icon}"></i>
          </div>
          <div class="icon-text">${actions[i].text}</div>
        </div>`;
      gridItem.addEventListener('click', actions[i].action);
      gridContainer.appendChild(gridItem);
    }
  });
  