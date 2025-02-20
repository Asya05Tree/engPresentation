import { content } from './content.js';
import { toggleLanguage, getCurrentLanguage } from './language.js';

let currentCrime = 0;
let currentTab = 'first';

function showDetail(index) {
    currentCrime = index;
    document.getElementById('crimeList').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';
    updateDetailContent();
    window.scrollTo(0, 0);
}

function showList() {
    document.getElementById('crimeList').style.display = 'grid';
    document.getElementById('detailView').style.display = 'none';
}

function changeTab(tab) {
    currentTab = tab;
    updateDetailContent();
    
    // Update active tab styling
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