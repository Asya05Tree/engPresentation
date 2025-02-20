import { content } from './content.js';
import { toggleLanguage, getCurrentLanguage } from './language.js';

let currentCrime = 0;
let currentTab = 'first';

function createCrimeCards() {
    const container = document.getElementById('crimeList');
    
    Object.entries(content).forEach(([crimeKey, crimeData], index) => {
        const card = document.createElement('div');
        card.className = 'cyber-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', index * 100);
        card.onclick = () => showDetail(index);

        card.innerHTML = `
            <img src="${crimeData.image}" alt="${crimeData.card.en.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title" lang="en">${crimeData.card.en.title}</h3>
                <h3 class="card-title" lang="uk">${crimeData.card.uk.title}</h3>
                <p class="card-description" lang="en">${crimeData.card.en.description}</p>
                <p class="card-description" lang="uk">${crimeData.card.uk.description}</p>
                <div class="law-reference">
                    <p lang="en">${crimeData.card.en.law}</p>
                    <p lang="uk">${crimeData.card.uk.law}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}
