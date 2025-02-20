import React, { useState } from 'react';

const LegalTabs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const legalInfo = [
    {
      title: "Кримінальний кодекс України",
      content: `Стаття 361. Несанкціоновані втручання в роботу комп'ютерів, автоматизованих систем, комп'ютерних мереж чи мереж електрозв'язку...
      
      Стаття 361-1. Створення з метою використання, розповсюдження або збуту шкідливих програмних засобів чи технічних пристроїв...
      
      Стаття 361-2. Несанкціоновані збут або розповсюдження інформації з обмеженим доступом...`
    },
    {
      title: "Закон України 'Про основні засади забезпечення кібербезпеки України'",
      content: "Цей Закон визначає правові та організаційні основи забезпечення захисту життєво важливих інтересів людини і громадянина, суспільства та держави, національних інтересів України у кіберпросторі..."
    },
    {
      title: "Закон України 'Про захист інформації в інформаційно-телекомунікаційних системах'",
      content: "Цей Закон регулює відносини у сфері захисту інформації в інформаційних, телекомунікаційних та інформаційно-телекомунікаційних системах..."
    }
  ];

  return (
    <div className="legal-tabs-container mt-8">
      <button 
        className="w-full bg-gray-100 p-4 rounded-t-lg font-semibold text-left flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>Законодавча база України</span>
        <svg 
          className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[800px]' : 'max-h-0'}`}>
        <div className="bg-white border border-t-0 rounded-b-lg p-4">
          <div className="flex border-b">
            {legalInfo.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 font-medium transition-colors duration-200 ${
                  activeTab === index 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title.split(' ')[0]}
              </button>
            ))}
          </div>
          
          <div className="mt-4 transition-opacity duration-300">
            <h3 className="text-xl font-semibold mb-3">{legalInfo[activeTab].title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{legalInfo[activeTab].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalTabs;
