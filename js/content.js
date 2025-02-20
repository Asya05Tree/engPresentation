const content = {
    malware: {
        image: "",
        title: "Malware Distribution",
        description: "Creation and distribution of malicious software designed to damage or gain unauthorized access to computer systems",
        tabs: {
            first: {
                title: "First Malware Attack",
                content: "The first known computer virus was the Creeper virus in 1971. It was created as an experimental self-replicating program by Bob Thomas at BBN Technologies. The virus displayed the message 'I'm the creeper, catch me if you can!' on infected computers. Interestingly, the first antivirus program, called Reaper, was created to remove it."
            },
            ukraineFirst: {
                title: "First Major Malware Attack in Ukraine",
                content: "One of the first significant malware attacks in Ukraine was reported in 2014 during the Snake/Ouroboros campaign, which targeted government institutions and organizations. This sophisticated cyber espionage tool had capabilities for stealing data and gaining remote access to systems."
            },
            ukraineCurrent: {
                title: "Recent Malware Attacks in Ukraine",
                content: "In 2023, Ukraine faced sophisticated malware attacks targeting critical infrastructure. The most notable was the Somnia ransomware campaign, which specifically targeted the transportation and logistics sectors. The malware employed advanced encryption techniques and demanded cryptocurrency payments for data recovery."
            },
            legislation: {
                title: "Legal Framework",
                content: "PLACE YOUR COMPREHENSIVE LEGAL TEXT HERE"
            }
        }
    },

    ddos: {
        image: "",
        title: "DDoS Attacks",
        description: "Distributed Denial of Service attacks that flood systems, networks, or servers with traffic to exhaust resources and bandwidth",
        law: "Article 361 of CCU: Unauthorized interference with the operation of computers, automated systems, computer networks or telecommunications networks",
        tabs: {
            first: {
                title: "First DDoS Attack",
                content: "The first major DDoS attack occurred in 1996 when Panix, New York's oldest Internet service provider, was hit with a SYN flood attack. The attack overwhelmed their servers with connection requests, making their services inaccessible for several days."
            },
            ukraineFirst: {
                title: "First Major DDoS Attack in Ukraine",
                content: "Ukraine experienced its first significant DDoS attack in 2008 during rising political tensions. The attack targeted government websites and major news portals, making them inaccessible for several hours."
            },
            ukraineCurrent: {
                title: "Recent DDoS Attacks in Ukraine",
                content: "In late 2023, Ukraine's critical infrastructure faced massive DDoS attacks reaching up to 1.2 Tbps. The attacks targeted government services, banking systems, and energy sector websites. Ukrainian CERT reported these attacks were among the most powerful in the country's history."
            }
        }
    },

    ransomware: {
        image: "",
        title: "Ransomware Attacks",
        description: "Malicious software that encrypts victims' files, with attackers demanding ransom for decryption",
        law: "Articles 361-1, 189 of CCU: Creation of malicious software combined with extortion",
        tabs: {
            first: {
                title: "First Ransomware Attack",
                content: "The first ransomware attack was the AIDS Trojan (PC Cyborg) in 1989, distributed by Joseph Popp on 20,000 floppy disks. It encrypted file names and demanded $189 payment to 'PC Cyborg Corporation' for decryption tools."
            },
            ukraineFirst: {
                title: "First Ransomware Attack in Ukraine",
                content: "Ukraine's first major ransomware incident was reported in 2015 with the appearance of BlackEnergy malware, which targeted the energy sector. While primarily designed for cyber espionage, it included components for data encryption and system destruction."
            },
            ukraineCurrent: {
                title: "Recent Ransomware Attacks in Ukraine",
                content: "In 2023, Ukraine faced targeted ransomware attacks from the Russia-linked Sandworm group, particularly affecting the energy sector and government institutions. The attacks used sophisticated encryption methods and demanded payments in cryptocurrency."
            }
        }
    },

    phishing: {
        image: "",
        title: "Phishing Attacks",
        description: "Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity",
        law: "Article 190 of CCU: Fraud committed using electronic computing devices, systems, and computer networks",
        tabs: {
            first: {
                title: "First Phishing Attack",
                content: "The first phishing attack was described in 1987, detailed in a paper presented at the International HP Users Group. However, the first widespread phishing case occurred in the mid-1990s targeting AOL users, where scammers posed as AOL staff to steal account credentials."
            },
            ukraineFirst: {
                title: "First Phishing Attacks in Ukraine",
                content: "The first documented wave of phishing attacks in Ukraine occurred in 2008, primarily targeting banking customers. Criminals used fake bank websites to collect login credentials and financial information."
            },
            ukraineCurrent: {
                title: "Recent Phishing Campaigns in Ukraine",
                content: "In 2023, Ukraine experienced sophisticated phishing campaigns targeting government officials and military personnel. The attacks used advanced social engineering techniques and convincing document attachments to steal sensitive information."
            }
        }
    },

    identityTheft: {
        image: "",
        title: "Identity Theft",
        description: "Unauthorized acquisition and use of personal identification information for fraudulent purposes",
        law: "Articles 190, 361-2 of CCU: Fraud through unauthorized access to personal data and its illegal collection",
        tabs: {
            first: {
                title: "First Digital Identity Theft",
                content: "The first documented case of digital identity theft occurred in 1971 when John Draper discovered that a whistle from a Cap'n Crunch cereal box could be used to make free long-distance phone calls by mimicking AT&T's system tones."
            },
            ukraineFirst: {
                title: "First Identity Theft Cases in Ukraine",
                content: "Ukraine's first major digital identity theft cases were reported in 2006, primarily involving unauthorized access to personal data in banking systems and government databases."
            },
            ukraineCurrent: {
                title: "Recent Identity Theft Trends in Ukraine",
                content: "In 2023, Ukraine saw a surge in identity theft cases related to digital payment systems and mobile banking. Criminals used sophisticated methods to bypass two-factor authentication and steal digital identities."
            }
        }
    },

    cryptojacking: {
        image: "",
        title: "Cryptojacking",
        description: "Unauthorized use of computing resources for cryptocurrency mining",
        law: "Article 361 of CCU: Unauthorized interference with the operation of computers, automated systems, and networks",
        tabs: {
            first: {
                title: "First Cryptojacking Attack",
                content: "The first documented cryptojacking attacks emerged in 2017 with the rise of cryptocurrency prices. The Coinhive JavaScript miner was one of the first widely used tools for cryptojacking, originally intended as a legitimate alternative to advertising."
            },
            ukraineFirst: {
                title: "First Cryptojacking Incidents in Ukraine",
                content: "Ukraine first encountered cryptojacking in 2018 when several government websites were compromised to mine cryptocurrency. The attacks used compromised WordPress plugins to inject mining code."
            },
            ukraineCurrent: {
                title: "Recent Cryptojacking Activities in Ukraine",
                content: "In 2023, Ukraine detected large-scale cryptojacking operations targeting cloud infrastructure and compromised IoT devices. The attacks used advanced techniques to evade detection and maximize mining efficiency."
            }
        }
    },

    socialEngineering: {
        image: "",
        title: "Social Engineering",
        description: "Psychological manipulation techniques used to deceive users into revealing confidential information",
        law: "Article 190 of CCU: Fraud through deception or abuse of trust",
        tabs: {
            first: {
                title: "First Social Engineering Attack",
                content: "While social engineering has existed for centuries, the first documented digital social engineering attack was Kevin Mitnick's 1979 breach of Digital Equipment Corporation's systems by convincing an employee to share access credentials."
            },
            ukraineFirst: {
                title: "First Social Engineering Cases in Ukraine",
                content: "The first major social engineering attacks in Ukraine were documented in 2009, targeting corporate employees through elaborate phone scams and email deception."
            },
            ukraineCurrent: {
                title: "Recent Social Engineering Trends in Ukraine",
                content: "In 2023, Ukraine faced sophisticated social engineering attacks using AI-generated voice cloning and deepfake technology to impersonate executives and government officials."
            }
        }
    },

    dataTheft: {
        image: "",
        title: "Data Theft",
        description: "Unauthorized access and extraction of sensitive or confidential data from computer systems",
        law: "Article 361-2 of CCU: Unauthorized sale or dissemination of restricted information stored in computers",
        tabs: {
            first: {
                title: "First Major Data Theft",
                content: "One of the first significant digital data theft cases occurred in 1984 with the TRW Information Systems breach, where credit file data of 90 million Americans was exposed through stolen passwords."
            },
            ukraineFirst: {
                title: "First Data Theft Incidents in Ukraine",
                content: "Ukraine's first significant data theft case was reported in 2005 when a database containing citizen's personal information was illegally accessed and distributed."
            },
            ukraineCurrent: {
                title: "Recent Data Theft Cases in Ukraine",
                content: "In 2023, Ukraine investigated major data theft incidents involving state registries and medical databases. The attacks used sophisticated methods to bypass security measures and exfiltrate sensitive information."
            }
        }
    }
};

export { content };
