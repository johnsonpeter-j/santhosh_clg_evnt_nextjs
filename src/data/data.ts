export const siteData = {
    // app bar data
    menuItems: [
        {
            name: "About",
            href: "/",
            submenus: [
                { name: "About the Conference", href: "#about_the_conference" },
                { name: "Key Dates", href: "#key_dates" },
                { name: "About TSM Madurai", href: "#about_tsm_madurai" },
                { name: "Collaborating Institutions", href: "#collaborating-institutions" },
                
                
                
            ],
        },
        {
            name: "Programme",
            href: "/programme",
            submenus: [
                { name: "Conference Tracks & Themes", href: "#tracks" },
                { name: "Day-wise Schedule", href: "#schedule" },
                { name: "Preconference Workshop", href: "#workshop" },
            ],
        },
        {
            name: "Committee",
            href: "/conference-team",
            submenus: [

                { name: "Organizing Committee", href: "#organizing" },
                { name: "Advisory Board", href: "#advisory" },
                { name: "Internal Committee", href: "#advisory" },
            ],
        },
        {
            name: "Speakers",
            href: "/conference-team",
            submenus: [
                { name: "Keynote Speakers", href: "#speakers" },
            ],
        },
        {
            name: "Submission",
            href: "/guidelines",
            submenus: [
                { name: "Call for Papers", href: "#call-for-papers" },
                { name: "Abstract Submission Guidelines", href: "#abstract-guidelines" },
                { name: "Full Paper Submission Guidelines", href: "#paper-guidelines" },
                { name: "Presentation Guidelines", href: "#presentation-guidelines" },
                { name: "Publication Avenue", href: "#publication-avenue" },
            ],
        },
        {
            name: "Registration",
            href: "/registration",
            submenus: [
                { name: "Registration Details", href: "#registration-details" },
                { name: "Payment Info", href: "#payment" },

            ],
        },
        {
            name: "Accommodation",
            href: "/registration",
            submenus: [
                { name: "Accommodation", href: "#accommodation" },
                { name: "List of Hotels ", href: "#accommodation" },
                { name: "Discover Madurai", href: "#accommodation" },
                
            ],
        },

        {
            name: "Contact",
            href: "/contact",
            submenus: [
                { name: "Contact Form & Emails", href: "#contact-form" },
                { name: "FAQ", href: "#faq" }
            ],
        },
    ],

    // home page data
    heroSlideImages: [
        "/images/hero-slides/thiyagaraja_1.jpg",
        "/images/hero-slides/thiyagaraja_2.jpg",
        "/images/hero-slides/thiyagaraja_3.jpg",
        "/images/hero-slides/thiyagaraja_4.jpg",
    ],

    aboutData: [
        {
            title: "Thiagarajar School of Management, India",
            description: "Established in 1962, Thiagarajar School of Management (TSM) is a renowned institution that aims to provide professional education to managers and entrepreneurs. Initially starting with an Executive Development Program, TSM quickly gained recognition and launched the MBA course in 1972. Today, the institute offers MBA and PGDM programs that are approved by AICTE and accredited by NBA. TSM has been conferred autonomous status by UGC and Madurai Kamaraj University. With a focus on practical training and industry connections, TSM equips students with the skills needed to excel in their careers. The institute also emphasizes holistic education, providing students with a well-rounded curriculum and soft skill training."
        },
        {
            title: "The Conference",
            description: "The International Conference, Frontiers of Sustainability - Innovation, Research, and Global Responsibility, aims to explore cutting-edge strategies for a sustainable future. It brings together global researchers, innovators, practitioners, and policymakers to foster collaborative solutions. The event promotes interdisciplinary dialogue addressing climate change, social equity, and digital transformation. Participants will engage in thought-provoking discussions on sustainable innovation and inclusive development. It will highlight responsible practices across sectors, aligning with the UN Sustainable Development Goals (SDGs). Research papers and Research pitch will be presented for academic and practical relevance. This platform will empower institutions and individuals to rethink sustainability in a globalized, digital world."
        }
    ],

    aboutTsmVideoLink: "https://www.youtube.com/embed/y5kbWpMq4xE?si=qcskFS3wrkivShsG",

    brochurePdfPath: "/pdfs/brochure.pdf",

    collabtaorData: [
        {
            name: "ICN Business School, France",
            desc: "A French Business School known for its interdisciplinary ATM approach and triple crown accreditation.",
            img: "/images/collabrators/icn bs.png",
            link: "https://www.icn-artem.com/en/",
        },
        {
            name: "Universita Delgi Studi Di Napoli Federico II, Italy",
            desc: "One of the world’s oldest academic institutions promoting extensive research activities.",
            img: "/images/collabrators/Universita Delgi Studi Di.jpg",
            link: "https://www.international.unina.it/",
        },
        {
            name: "University of Sussex, United Kingdom",
            desc: "A public research university recognized for its research excellence and teaching quality.",
            img: "/images/collabrators/sussex.jpg",
            link: "https://www.sussex.ac.uk/",
        },
        {
            name: "Universiti Teknologi Brunei, Brunei",
            desc: "An Engineering and Technology University with a five-star QS ranking.",
            img: "/images/collabrators/bruneiuniv.jpg",
            link: "https://www.utb.edu.bn/",
        },
        {
            name: "Center for Applied Economics Research and Training (CAER), Ton Duc Thang University",
            desc: "The Center for Applied Economics Research and Training (CAER) at Ton Duc Thang University in Ho Chi Minh City, Vietnam, is committed to promoting superior research, education, and policy discourse in the fields of economics and finance. CAER encourages interdisciplinary collaboration.",
            img: "/images/collabrators/Ton Duc Thang University.jpg",
            link: "https://www.tdtu.edu.vn/en",
        },
    ],

    keyDates: [
        {
            label: "Submission Deadline",
            value: "21st November 2025",
        },
        {
            label: "Author Notification",
            value: "12th December 2025",
        },
        {
            label: "Camera Ready Deadline",
            value: "19th December 2025",
        },
        {
            label: "Final Registration Deadline",
            value: "12th January 2026",
        },
        {
            label: "International Conference Venue",
            value: "Thiagarajar School of Management, Madurai, Tamil Nadu, India",
        },
    ],

    maduraiPlaces: [
        { src: "/images/mennakshi_amman_temple.jpeg", title: "Meenakshi Amman Temple" },
        { src: "/images/alagar_koil.jpeg", title: "Alagar Koil" },
        { src: "/images/gandhi_museum.jpg", title: "Gandhi Museum" },
        { src: "/images/thirupparankundram.jpeg", title: "Thirupparankundram" },
        { src: "/images/othakadai_samanar_hills.jpg", title: "Othakadai Samanar Hills" },
        { src: "/images/thirumalai_nayakkar_palace.jpg", title: "Thirumalai Nayakkar Palace" },
    ],

    // programme page data
    conferenceTracks: [
        {
            title: "Sustainable Marketing & Responsible Consumer Engagement (SMRCE)",
            desc: "Focusing on responsible consumerism and marketing strategies aligned with sustainability.",
            sdg_link: "SDG 12 (Responsible Consumption & Production), SDG 8 (Decent Work & Economic Growth)",
            path: "/pdfs/tracks/temp_track_1.pdf",
            fileName:"temp_track_1.pdf",
        },
        {
            title: "Sustainable Supply Chain, Operations & Circular Economy Practices (SSCOCEP)",
            desc: "Exploring sustainable logistics, production processes, and circular economy practices to minimize waste and optimize resource use.",
            sdg_link: "SDG 9 (Industry, Innovation & Infrastructure), SDG 12 (Responsible Consumption & Production)",
            path: "/pdfs/tracks/temp_track_2.pdf",
            fileName:"temp_track_2.pdf",
        },
        {
            title: "Sustainable Finance, Impact Investing & Green Economics (SFII&GE)",
            desc: "Leveraging finance and investments to drive sustainability, green projects, and inclusive economic growth.",
            sdg_link: "SDG 8 (Decent Work & Economic Growth), SDG 17 (Partnerships for the Goals",
            path: "/pdfs/tracks/track.pdf",
            fileName:"track.pdf",
        },
        {
            title: "Sustainable Entrepreneurship & Innovative Business Models (SEIBM)",
            desc: "Encouraging entrepreneurs to adopt innovative, eco-friendly, and socially responsible business models.",
            sdg_link: "SDG 8 (Decent Work & Economic Growth), SDG 9 (Industry, Innovation & Infrastructure).",
            path: "/pdfs/tracks/track.pdf",
            fileName:"track.pdf",
        },
        {
            title: "Sustainability Education, Training & Capacity Building (SETCB)",
            desc: "Building awareness and skills through education, training, and capacity development for a sustainable future.",
            sdg_link: "SDG 4 (Quality Education), SDG 17 (Partnerships for the Goals)",
            path: "/pdfs/tracks/track.pdf",
            fileName:"track.pdf",
        },
        {
            title: "Sustainable Human Resource Management, Workplace Well-being & Ethical Leadership (SHRMWWEL)",
            desc: "Promoting employee well-being, diversity, ethics, and responsible leadership in organizations.",
            sdg_link: "SDG 3 (Good Health & Well-being), SDG 8 (Decent Work & Economic Growth), SDG 5 (Gender Equality)",
            path: "/pdfs/tracks/track.pdf",
            fileName:"track.pdf",
        },
        {
            title: "Technological Innovations & Digital Transformation for Sustainability (TIDTS)",
            desc: "Harnessing technology, digitalization, and innovation to accelerate sustainable solutions.",
            sdg_link: "SDG 9 (Industry, Innovation & Infrastructure), SDG 7 (Affordable & Clean Energy)",
            path: "/pdfs/tracks/track.pdf",
            fileName:"track.pdf",
        },
        {
            title: "Sustainable Policy, Regulation, Governance & Global Responsibility (SPRGGR)",
            desc: "Strengthening governance, regulatory frameworks, and international collaboration for sustainability.",
            sdg_link: "SDG 16 (Peace, Justice & Strong Institutions), SDG 17 (Partnerships for the Goals)",
            path: "/pdfs/tracks/track.pdf",
            fileName:"track.pdf",
        },
        {
            title: "Sustainability Impact Measurement, Scalability & Growth Strategies (SIMSGS)",
            desc: "Measuring, scaling, and evaluating the impact of sustainability initiatives for long-term growth.",
            sdg_link: "SDG 12 (Responsible Consumption & Production), SDG 17 (Partnerships for the Goals)",
            path: "/pdfs/tracks/track.pdf",
            fileName:"track.pdf",
        },
        {
            title: "Climate Action, Low-Carbon Strategies & Sustainable Future Economies (CALCS&SFE)",
            desc: "Advancing climate solutions, carbon reduction strategies, and future-proof sustainable economies.",
            sdg_link: "SDG 13 (Climate Action), SDG 7 (Affordable & Clean Energy), SDG 11 (Sustainable Cities & Communities)",
            path: "/pdfs/tracks/track.pdf",
            fileName:"track.pdf",
        }

    ],

    dayWiseData: {
        title: "International Conference on Frontiers of Sustainability - FOS 2026-GRIE",
        tHeadData: [["", "Day 1 22.01.2026", "Day 2 23.01.2026", "Day 3 24.01.2026"], ["Time Slot", "Event", "Event", "Event"]],
        tBodyData: [
            [
                "09:30 AM to 11:00 AM",
                "Inauguration and Keynote Address",
                "Guest Speaker Session 1",
                "Guest Speaker Session 1"
            ],
            [
                "11:00 AM to 11:30 AM",
                "Hi -Tea",
            ],
            [
                "11:30 AM to 12:45 PM",
                "Meet the editor",
                "Conference Presentation offline",
                "Conference Presentation offline"
            ],
            [
                "12:45 PM to 01:30 PM",
                "Lunch Break",
            ],
            [
                "01:30 PM to 02:45 PM",
                "Advanced Multivariate Analysis & SEM for HighImpact Publications: Do’s, Don’ts, and Cutting-Edge Techniques",
                "Conference Presentation Online",
                "Conference Presentation Online"
            ],
            [
                "02:45 PM to 04:30 PM",
                "From Rejection to Recognition: An Editor’s Guide to Writing Papers that Get Published",
                "TSM campus walk",
                "Guest Speaker Session (Internal)"
            ],
            [
                "04:30 PM to 05:45 PM",
                "High tea and Networking session",
                "High tea and Networking session",
                "Valediction"
            ]
        ]
    },

    preConferenceWorkshop: {
        title:
            "International Conference on Frontiers of Sustainability - Global Responsibility for Innovation & Entrepreneurship FOS 2026 - GRIE",
        tHeadData: [["", "Day 1", "Day 2", "Day"], ["Time Slot", "Session Room A", "Session Room B", "Session Room", "Session Room"]],
        tBodyData: [
            {
                time: "9.30 AM to 10.50 AM",
                day_1_roomA: "Inauguration and Keynote Address",
                day_2_roomA: "Guest Speaker Session (Based on FOS 2026)",
                day_3_roomA: "Guest Speaker Session (Based on trends in Sustainability)"
            },
            {
                time: "10.50 AM to 11.00 AM",
                day_1_roomA: "Hi-Tea",
                day_2_roomA: "Hi-Tea",
                day_3_roomA: "Hi-Tea"
            },
            {
                time: "11.00 AM to 12.30 PM",
                day_1_roomA: "Meet the Editor (1.5 hours)",
                day_2_roomA: "Conference Presentation offline/Online (National level)",
                day_3_roomA: "Conference Presentation offline/Online"
            },
            {
                time: "12.45 PM to 1.30 PM",
                day_1_roomA: "Lunch Break",
                day_2_roomA: "Lunch Break",
                day_3_roomA: "Lunch Break"
            },
            {
                time: "1.30 PM to 2.45 PM",
                day_1_roomA: "Meta analysis and systematic review OR Applying Hybrid MCDM Methods (AHP-TOPSIS) to Real-World Research Problems (Session Chair: [Name])",
                day_1_roomB: "Impact Publications: Do's, Don'ts, and Cutting-Edge Techniques (Session Chair: [Name])",
                day_2_roomA: "Conference Presentation offline/Online",
                day_3_roomA: "Conference Presentation offline/Online"
            },
            {
                time: "2.45 PM to 4.30 PM",
                day_1_roomA: "Break / Transition",
                day_2_roomA: "Break / Transition",
                day_3_roomA: "Break / Transition"
            },
            {
                time: "4.45 PM to 5.45 PM",
                day_1_roomA: "Advanced Multivariate Analysis & SEM (Session Speaker: Dr. Murgan Pattusamy)",
                "day_1_roomB": "From Rejection to Recognition: An Editor’s Guide to Writing Papers that Get Published (Session Chair: [Name])",
                day_2_roomA: "TSM campus walk",
                day_3_roomA: "Guest Speaker Session"
            }
        ]
        ,
    },

    // conference team data
    keySpeakersData: [
        {
            src: "/images/vanhaverbeke.jpg",
            name: "Prof. W. Vanhaverbeke",
            role: "Editor in Chief of Technovation (Elsevier) (ABS – 3, ABDC-A, Q1, IF-10.9)",
            place: "University of Antwerp, Belgium",
        },
        {
            src: "/images/britta linnea.jpg",
            name: "Prof. Britta Linnea Gammelgaard ",
            role: "Editor in Chief of International Journal of Logistics Management (Emerald) (ABDC- A, Q1, IF- 6.4)",
            place: "University of Southern Denmark, Denmark",
        },
        {
            src: "/images/andrea patrucco.jpg",
            name: "Dr. Andrea Patrucco",
            role: "Associate Editor for the Journal of Supply Chain Management (Wiley) (ABDC-A*, Q1, IF 9.9),Associate Editor for the Journal of Purchasing and Supply Management (Elsevier) (ABDC-A, Q1, IF 8.7),Senior Associate Editor and the Editorial Assistant for the International Journal of Physical Distribution and Logistics Management (Emerald) (ABDC-A, Q1, IF 8.2)",
            place: "Florida International University, USA",
        },
        {
            src: "/images/sunil luthra.jpg",
            name: "Dr. Sunil Luthra",
            role: "Associate Editor at Journal of Cleaner Production (Elsevier) (ABDC- A, Q1, IF 10.0)",
            place: "Director at the All-India Council for Technical Education (AICTE) in New Delhi, India",
        }, {
            src: "/images/sachin mangla.jpg",
            name: "Dr. Sachin Mangla",
            role: "Associate Editor, IJLM (ABDC A) & Corporate Social Responsibility and Environmental Management (Q1, Scopus)",
            place: "O.P. Jindal Global University, Haryana, India",
        },

    ],

    organizationBoardData: [
        {
            src: "/images/11.webp",
            name: "Dr. K. Mathiyazhagan",
            role: "Conference Convenor ",
            place: "Head of the Research Centre & Professor,Thiagarajar School of Management, Madurai",
        },
        {
            src: "/images/Isotilia.png",
            name: "Dr. Isotilia Costa Melo",
            role: "Assistant Professor",
            place: "ICN Business School- Paris, France",
        },
        {
            src: "/images/veronica.jpg",
            name: "Dr. Veronica Scuotto",
            role: "Second-Tier Tenured Professor",
            place: "Head of Research Centre & Professor, ",
        },
        {
            src: "/images/nachiappan.jpg",
            name: "Dr. Nachiappan Subramanian",
            role: "Professor",
            place: "University of Sussex, United Kingdom",
        },
        {
            src: "/images/mohammad saleem.jpg",
            name: "Dr. Mohamed Saleem Haja Nazmudeen",
            role: "Dean of Graduate Studies & Senior Assistant Professor",
            place: "Universiti Teknologi Brunei, Brunei",
        },

    ],

    advisoryBoardData: [
        {
            name: "Dr. Paulo Nocera Alves Junior",
            image: "https://placehold.co/100x100/BCAAA4/FFF.png?text=Dr.+P.A.J.",
            profession: "Associate Professor",
            university: "Catholic University of the North"
        },
        {
            name: "Dr. Paulo Nocera Alves Junior",
            image: "https://placehold.co/100x100/BCAAA4/FFF.png?text=Dr.+P.A.J.",
            profession: "Associate Professor",
            university: "Catholic University of the North"
        },
        {
            name: "Dr. Paulo Nocera Alves Junior",
            image: "https://placehold.co/100x100/BCAAA4/FFF.png?text=Dr.+P.A.J.",
            profession: "Associate Professor",
            university: "Catholic University of the North"
        }
    ],

    sponsorsData: [
        {
            image: "/images/9.webp",
            title: "Dr. Murali Sambasivan",
            description: "Chief Patron & Professor",
        },
        {
            image: "/images/10.webp",
            title: "Dr. M. Selvalakshmi",
            description: "Patron & Professor",
        },
        {
            image: "/images/11.webp",
            title: "Dr. K. Mathiyazhagan",
            description: "Conference Chairperson",
        },
    ],

    // guidelines data

    callForPaperDescription: "Ph.D. Research Scholars, Postdoctoral Researchers, Early-Career and Senior Faculty Members across disciplines such as Management, Engineering, Computer Science, Social Sciences, and Sustainability, seeking collaboration, visibility to build their publication portfolio, and gain international exposure.",

    AbstractSubmissionGuidelinesData: {
        title: "Abstract Submission Guidelines",
        tHeadData: ['SubmissionType', 'Research Idea Pitch'],
        tBodyData: [
            [
                'Purpose',
                'For participation in the 3-minute pitch session during the Conference'
            ],
            ['WordLimit', 'Extended Abstract 1500 Words'],
            [
                'Format',
                'Purpose – Design / Methodology / Approach – Findings – Originality – Research Limitations / Implications / Practical / Societal Implications'
            ],
            ['FileType', 'Word Document (.doc/.docx)'],
            [
                'ReviewProcess',
                'Reviewed for pitch quality, originality, and impact'
            ],
            ['Support', '3-month editorial and research mentoring']
        ]
    },

    fullPaperSubmissionGuidelinessData: {
        title: "Full Paper Submission Guidelines",
        tHeadData: ['SubmissionType', 'Full Paper Submission'],
        tBodyData: [
            [
                'Purpose',
                'For consideration in the edited volume (Springer Book Chapter or equivalent)'
            ],
            ['WordLimit', '5,000 to 6,000 Words'],
            [
                'Format',
                'Introduction & Problem Statement - Literature Review - Methodology - Findings - Discussion & Implications'
            ],
            [
                'FileType',
                'Word Document (.doc/.docx) – as per Springer formatting guidelines'
            ],
            [
                'ReviewProcess',
                'Peer-reviewed for academic quality and publication readiness'
            ],

            [
                'Eligibility',
                'Eligible for Best Paper with Societal Impact & Publication Opportunity'
            ],
            [
                'Support',
                'Editorial guidance and publication processing support'
            ]
        ]

    },

    presentationGuidelines: [
        "3-Minute Research Presentation for research pitch and 15 minutes for full paper Presentation.",
        "Strictly time-bound.",
        "Research Pitch – maximum 3 slides or poster.",
        "Full Paper – 10 minutes Presentation and 5 minutes for feedback and discussion with the panel."
    ],

    publicationAvenuesData: {
        confirmedList: [
            "International Journal of Global Business and Competitiveness (ABDC C; Springer)",
            "The International Journal of Logistics Management (ABDC A; Emerald)",
            "Corporate Social Responsibility and Environmental Management (ABDC C; Wiley)",
            "Environment, Development and Sustainability (SCOPUS, SCIE, Springer)",
        ],
        underProgress: [
            "Journal of Entrepreneurship",
            "Journal of Intellectual Capital",
            "The International Journal of Management Education",
            "Journal of Business and Society Review",
            "Technology in Society",
            "TRE Journal",
            "International Journal of Emerging Trends",
            "Conference Proceedings in Springer",
        ]
    },

    // registration details data
    registrationDetailsData: [
        "Submission open to Research Scholars, Early - Career Faculty Members / Assistant Professors, and Postdoctoral Researchers",
        "Scholars from disciplines such as Management, Engineering, Computer Science, Social Sciences, and Sustainability",
        
        "Submission Link < To be Updated Shortly >"
    ],

    paymentDetails: [
        
        "<b>150 EUR for International Participants</b>",
        "INR 1500 (inclusive of GST) for Pre Conferencce Workshop",
        "INR 4000 (inclusive of GST) for Research Pitch",
        "INR 5000 (inclusive of GST) for Full paper"
    ],

    accommodationDetails: [
        "Affordable Package: Comfortable stay at just ₹4500 for 3 days (AC - double occupancy).",
        "All-Inclusive Meals: Enjoy daily breakfast, lunch, and dinner - no extra hassle!",
        "Value for Money: Works out to only ₹1500 per day per person.",
        "Convenience Guaranteed: Stay and meals bundled together for a stress-free experience.",
        "Comfort Assured: Relax in a cozy environment designed for rest after your day's activities."
    ],

    //  venue data
    venueDetails: [
        {
            title: "Reaching Madurai:",
            description: "Madurai is well connected to other parts of India through air, rail, and road. There are daily flights to major cities like Chennai, Bengaluru, and Hyderabad. Train services are available to Mumbai, Delhi, Kolkata, and Chennai, with computerized reservation facilities. Madurai also has bus connections through state-run and private operators from nearby cities in Tamil Nadu and neighboring states."
        },
        {
            title: "Reaching the Venue:	",
            description: "Thiagarajar School of Management (TSM) is located approximately 15 minutes’ drive from Madurai Airport and about 10–15 minutes from Madurai Junction Railway Station. Upon arrival in the city, you can hire a taxi or auto-rickshaw to “Thiagarajar School of Management, Thirupparankundram Road, Madurai.” Local city buses are also available and operated by the Madurai Municipal Transport Service (MMS)."
        },
        {
            title: "Reaching Weather:",
            description: "Participants and attendees traveling to Madurai in January can expect temperatures between 20°C to 32°C. Light cotton or casual wear is recommended during the day, with a light jacket or shawl for cooler mornings or evenings. Madurai generally maintains good air quality during this time."
        }
    ],

    FaqsData: [
        {
            question: "What are the dates for the conference?",
            answer: "The International Conference on Frontiers of Sustainability will take place from <b>January 22nd to 24th, 2026</b>."
        },
        {
            question: "Is the registration fee refundable?",
            answer: "Registration fees are <b>non-refundable</b>. Please ensure all details are correct before completing your payment."
        },
        {
            question: "Who is eligible to participate?",
            answer: "The conference is open to <b> Master&apos;s Degree, Ph.D. Research Scholars, Postdoctoral Researchers, and Early-Career &amp; Senior Faculty Members </b> across a wide range of disciplines."
        }
    ],

}