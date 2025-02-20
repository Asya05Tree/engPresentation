const content = {
    malware: {
        image: 'https://example.com/path/to/malware-image.jpg',
        title: "Malware Distribution",
        description: "Creation and distribution of malicious software",
        law: "Article 361-1 of CCU: Creation of malicious software for the purpose of its use, distribution or sale",
        tabs: {
            first: {
                title: "First Malware Attacks",
                content: "The first computer virus, called 'Creeper', was created in 1971..."
            },
            ukraineFirst: {
                title: "First Malware Attacks in Ukraine",
                content: "Ukraine faced its first significant malware attacks..."
            },
            ukraineCurrent: {
                title: "Current Malware Attacks on Ukraine",
                content: "Modern malware attacks on Ukraine have become more sophisticated..."
            }
        }
    },
};

function createCard(id, data) {
    const card = document.createElement('div');
    card.className = 'cyber-card';
    card.innerHTML = `
        <img src="${data.image}" alt="${data.title}" class="card-image">
        <div class="card-content">
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="law-reference">${data.law}</div>
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
