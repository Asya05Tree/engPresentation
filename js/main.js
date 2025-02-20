import { content } from './content.js';
import { toggleLanguage, getCurrentLanguage } from './language.js';

let currentCrime = 0;
let currentTab = 'first';

function showDetail(index) {
    const crimeList = document.getElementById('crimeList');
    const detailView = document.getElementById('detailView');
    crimeList.style.opacity = '0';
    crimeList.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        crimeList.style.display = 'none';
        detailView.style.display = 'block';
    
        detailView.offsetHeight;
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
        crimeList.offsetHeight;
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
    const crimes = ['malware', 'phishing', 'ddos'];
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
    `;
}

// Export functions for use in HTML
window.showDetail = showDetail;
window.showList = showList;
window.changeTab = changeTab;
window.toggleLanguage = toggleLanguage;
