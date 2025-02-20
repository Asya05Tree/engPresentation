// main.js
import { content } from './content.js';
import { toggleLanguage, getCurrentLanguage } from './language.js';

let currentCrime = 0;
let currentTab = 'first';

// Функція для створення карток злочинів
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

// Функція для створення табів
function createDetailTabs() {
    const tabsContainer = document.querySelector('.cyber-tabs');
    const tabs = [
        { id: 'first', en: 'First Attacks', uk: 'Перші атаки' },
        { id: 'ukraine-first', en: 'First Attacks in Ukraine', uk: 'Перші атаки в Україні' },
        { id: 'ukraine-current', en: 'Current Attacks on Ukraine', uk: 'Сучасні атаки на Україну' }
    ];

    tabsContainer.innerHTML = tabs.map(tab => `
        <button class="tab-button ${tab.id === 'first' ? 'active' : ''}" 
                data-tab="${tab.id}" 
                onclick="window.changeTab('${tab.id}')">
            <span lang="en">${tab.en}</span>
            <span lang="uk">${tab.uk}</span>
        </button>
    `).join('');
}

function showDetail(index) {
    const crimeList = document.getElementById('crimeList');
    const detailView = document.getElementById('detailView');
    
    crimeList.style.opacity = '0';
    crimeList.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        crimeList.style.display = 'none';
        detailView.style.display = 'block';
        
        detailView.offsetHeight; // Trigger reflow
        
        detailView.classList.add('active');
        currentCrime = index;
        updateDetailContent();
    }, 300);
}

function showList() {
    const crimeList = document.getElementById('crimeList');
    const detailView = document.getElementById('detailView');
    
    detailView.classList.remove('active');
    
    setTimeout(() => {
        detailView.style.display = 'none';
        crimeList.style.display = 'grid';
        
        crimeList.offsetHeight; // Trigger reflow
        
        crimeList.style.opacity = '1';
        crimeList.style.transform = 'translateY(0)';
    }, 300);
}

function changeTab(tab) {
    currentTab = tab;
    updateDetailContent();
    
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
}

function updateDetailContent() {
    const crimes = Object.keys(content);
    const crime = crimes[currentCrime];
    
    let tabContent;
    switch(currentTab) {
        case 'first':
            tabContent = content[crime].first;
            break;
        case 'ukraine-first':
            tabContent = content[crime].ukraineFirst;
            break;
        case 'ukraine-current':
            tabContent = content[crime].ukraineCurrent;
            break;
    }

    const lang = getCurrentLanguage();
    document.getElementById('detailImage').src = content[crime].image;
    document.getElementById('detailContent').innerHTML = `
        <h2>${tabContent[lang].title}</h2>
        <p>${tabContent[lang].content}</p>
        <div class="law-reference">
            <p>${content[crime].card[lang].law}</p>
        </div>
    `;
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    createCrimeCards();
    createDetailTabs();
});

// Експорт функцій для використання в HTML
window.showDetail = showDetail;
window.showList = showList;
window.changeTab = changeTab;
window.toggleLanguage = toggleLanguage;
