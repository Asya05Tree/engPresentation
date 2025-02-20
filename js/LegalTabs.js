import React, { useState } from 'react';

const LegalTabs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const legalInfo = [
    {
      title: "Criminal Code of Ukraine",
      content: `Article 361. Unauthorized interference in the operation of information (automated), electronic communication, information and communication systems, electronic communication networks
      
      Article 361-1. Creation for the purpose of unlawful use, distribution or sale of harmful software or hardware, as well as their distribution or sale
      
      Article 361-2. Unauthorized sale or distribution of information with restricted access stored in electronic computers, automated systems, computer networks or on media of such information
      
      Article 362. Unauthorized actions with information processed in electronic computers, automated systems, computer networks or stored on media of such information, committed by a person who has the right to access it
      
      Article 363. Violation of the rules for the operation of electronic computers, automated systems, computer networks or telecommunication networks or the procedure or rules for the protection of information processed in them
      
      Article 363-1. Obstruction of the operation of electronic computers, automated systems, computer networks or telecommunications networks by mass distribution of telecommunications messages`
    },
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
      <a href = "https://zakon.rada.gov.ua/laws/show/2341-14#Text"> zakon.rada.gov.ua</a>
      <a href = "https://sherloc.unodc.org/cld/uploads/res/document/ukr/2001/criminal-code-of-the-republic-of-ukraine-en_html/Ukraine_Criminal_Code_as_of_2010_EN.pdf">criminal-code-of-the-republic-of-ukraine-en</a>
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
