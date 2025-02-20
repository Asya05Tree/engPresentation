function createCard(id, data) {
    const card = document.createElement('div');
    card.className = 'cyber-card';
    card.innerHTML = `
        <img src="${data.image}" alt="${data.title}" class="card-image">
        <div class="card-content">
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
        </div>
    `;
    card.addEventListener('click', () => showDetail(id));
    return card;
}

function showDetail(id) {
    const data = content[id];
    const detailView = document.getElementById('detailView');
    const detailImage = document.getElementById('detailImage');
    const crimeTabs = document.getElementById('crimeTabs');
    
    detailImage.src = data.image;
    detailImage.alt = data.title;
    
    crimeTabs.innerHTML = '';
    Object.entries(data.tabs).forEach(([tabId, tabData], index) => {
        const tabButton = document.createElement('button');
        tabButton.className = `tab-button ${index === 0 ? 'active' : ''}`;
        tabButton.textContent = tabData.title;
        tabButton.addEventListener('click', () => switchTab(id, tabId));
        crimeTabs.appendChild(tabButton);
    });
    
    switchTab(id, Object.keys(data.tabs)[0]);
    
    detailView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function switchTab(crimeId, tabId) {
    const data = content[crimeId].tabs[tabId];
    const detailContent = document.getElementById('detailContent');
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent === data.title) {
            button.classList.add('active');
        }
    });
    
    detailContent.style.opacity = '0';
    detailContent.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        detailContent.innerHTML = `
            <h2>${data.title}</h2>
            <div class="tab-content active">${data.content}</div>
        `;
        detailContent.style.opacity = '1';
        detailContent.style.transform = 'translateY(0)';
    }, 300);
}

function showList() {
    const detailView = document.getElementById('detailView');
    detailView.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const crimeList = document.getElementById('crimeList');
    Object.entries(content).forEach(([id, data]) => {
        crimeList.appendChild(createCard(id, data));
    });
});
