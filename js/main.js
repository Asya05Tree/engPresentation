function createLegalTabs() {
    const container = document.createElement('div');
    container.className = 'legal-tabs-container mt-8';
    
    const legalInfo = {
        title: "Criminal Code of Ukraine",
        content: `Article 361. Unauthorized interference in the operation of information (automated), electronic communication, information and communication systems, electronic communication networks
        
        Article 361-1. Creation for the purpose of unlawful use, distribution or sale of harmful software or hardware, as well as their distribution or sale
        
        Article 361-2. Unauthorized sale or distribution of information with restricted access stored in electronic computers, automated systems, computer networks or on media of such information
        
        Article 362. Unauthorized actions with information processed in electronic computers, automated systems, computer networks or stored on media of such information, committed by a person who has the right to access it
        
        Article 363. Violation of the rules for the operation of electronic computers, automated systems, computer networks or telecommunication networks or the procedure or rules for the protection of information processed in them
        
        Article 363-1. Obstruction of the operation of electronic computers, automated systems, computer networks or telecommunications networks by mass distribution of telecommunications messages`
    };

    container.innerHTML = `
        <button class="legal-tabs-toggle">
            <span>Законодавча база України</span>
            <svg class="toggle-arrow" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" stroke="currentColor" fill="none" stroke-width="2"/>
            </svg>
        </button>
        <div class="legal-links">
            <a href="https://zakon.rada.gov.ua/laws/show/2341-14#Text">zakon.rada.gov.ua</a>
            <a href="https://sherloc.unodc.org/cld/uploads/res/document/ukr/2001/criminal-code-of-the-republic-of-ukraine-en_html/Ukraine_Criminal_Code_as_of_2010_EN.pdf">criminal-code-of-the-republic-of-ukraine-en</a>
        </div>
        <div class="legal-content">
            <h3>${legalInfo.title}</h3>
            <div class="legal-text">${legalInfo.content}</div>
        </div>
    `;

    const toggleButton = container.querySelector('.legal-tabs-toggle');
    const content = container.querySelector('.legal-content');
    const links = container.querySelector('.legal-links');
    
    content.style.display = 'none';
    links.style.display = 'none';
    
    toggleButton.addEventListener('click', () => {
        const isExpanded = content.style.display !== 'none';
        content.style.display = isExpanded ? 'none' : 'block';
        links.style.display = isExpanded ? 'none' : 'block';
        toggleButton.querySelector('.toggle-arrow').style.transform = 
            isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    });

    return container;
}

function createCard(id, data) {
    const card = document.createElement('div');
    card.className = 'cyber-card';
    card.setAttribute('data-aos', 'fade-up');
    card.innerHTML = `
        <img src="${data.image || '/api/placeholder/400/200'}" alt="${data.title}" class="card-image">
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
    
    detailImage.src = data.image || '/api/placeholder/400/200';
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
    const legalTabsRoot = document.getElementById('legalTabsRoot');
    
    if (legalTabsRoot) {
        legalTabsRoot.appendChild(createLegalTabs());
    }
    Object.entries(content).forEach(([id, data]) => {
        crimeList.appendChild(createCard(id, data));
    });
});
