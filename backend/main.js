const mongoose = require('mongoose');
const {Schemes} = require('./database/schemes')


mongoose.connect('mongodb+srv://amitlpatil282006:azaDXBYoOz7ryKwI@cluster1.h8gyl.mongodb.net')

const schemesData = [
    {
      "id": "",
      "title": "MANAGE Internship Programme",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Open to students from Extension Education, Economics, Sociology, Psychology, MSW, Journalism, Communication, and Environmental Science. Internships are year-round, 3-6 months duration.",
      "tags": ["Agriculture", "Environment", "Internship", "Management", "Student"],
      "location": "India",
      "eligibility": "Students from specified disciplines."
    },
    {
      "id": "",
      "title": "ICAR - Post Matric Scholarship For Scheduled Caste / Scheduled Tribes Candidates",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Post-Matric Scholarship for SC/ST students to complete undergraduate courses in agriculture.",
      "tags": ["Agriculture", "Post Matric", "Scheduled Caste", "Scheduled Tribe", "Scholarship"],
      "location": "India",
      "eligibility": "SC/ST students pursuing undergraduate courses in agriculture."
    },
    {
      "id": "",
      "title": "National Talent Scholarship Undergraduate",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Scholarship for students pursuing a Bachelor's or Master's degree in an ICAR-recognized agricultural university outside their state of domicile.",
      "tags": ["Agriculture", "Education", "Scholarship", "Student"],
      "location": "India",
      "eligibility": "Students pursuing agricultural degrees outside their state."
    },
    {
      "id": "",
      "title": "Indian Agricultural Research Institute - Scholarship",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "IARI Junior and Senior Scholarship for M.Sc. and Ph.D. students admitted under General Open Competition Scheme.",
      "tags": ["Education", "IARI", "PhD", "Scholarship"],
      "location": "India",
      "eligibility": "M.Sc. and Ph.D. students at IARI."
    },
    {
      "id": "",
      "title": "Kisan Credit Card",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Provides Kisan Credit Cards to farmers for purchasing agricultural inputs and meeting production needs.",
      "tags": ["Credit Card", "Kisan"],
      "location": "India",
      "eligibility": "Farmers."
    },
    {
      "id": "",
      "title": "National Bamboo Mission",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Promotes bamboo plantation, marketing, product development, and quality planting material.",
      "tags": ["Bamboo Marketing", "Bamboo Plantation", "Product Development", "Quality Planting Material"],
      "location": "India",
      "eligibility": "Relevant stakeholders."
    },
    {
      "id": "",
      "title": "ICAR Post Matric Scholarship For Scheduled Caste / Scheduled Tribes Candidates",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Post-matric scholarship for SC/ST candidates for Bachelor's Degree programs in Agriculture and allied sciences.",
      "tags": ["Agriculture", "Post Matric", "Scheduled Caste", "Scheduled Tribe", "Scholarship"],
      "location": "India",
      "eligibility": "SC/ST candidates pursuing agricultural degrees."
    },
    {
      "id": "",
      "title": "Merit·cum·Means Scholarships For Under Graduate Studies In Various Branches Of Agriculture And Animal Science Subjects",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Merit-cum-means scholarship for undergraduate studies in Agriculture and Animal Science.",
      "tags": ["Agriculture", "Financial", "Scholarship", "Student"],
      "location": "India",
      "eligibility": "Meritorious undergraduate students in agriculture and animal science."
    },
    {
      "id": "",
      "title": "India Afghanistan Fellowship",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Supports agricultural human resource development in Afghanistan through fellowships for studies in India.",
      "tags": ["Afghanistan", "Agricultural", "Fellowship", "Overseas Education"],
      "location": "India",
      "eligibility": "Afghan students pursuing agricultural degrees."
    },
    {
      "id": "",
      "title": "India Africa Fellowship",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Supports agricultural resource development in Africa through education of African scientists, faculty, and students in India.",
      "tags": ["Africa", "Agriculture", "Education", "Fellowship"],
      "location": "India",
      "eligibility": "African scientists, faculty, and students in agriculture."
    },
    {
      "id": "",
      "title": "Agri-Clinics And Agri-Business Centres Scheme",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Aims at agricultural development by providing extension and other services to farmers.",
      "tags": ["Agriculture", "Business", "Employment", "Entrepreneur", "Student", "Training"],
      "location": "India",
      "eligibility": "Relevant stakeholders in agriculture and business."
    },
    {
      "id": "",
      "title": "Netaji Subhas - ICAR International Fellowship",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Develops competent human resources through training in the best laboratories worldwide.",
      "tags": ["Agriculture", "Fellowship", "ICAR"],
      "location": "India",
      "eligibility": "Indian and overseas candidates."
    },
    {
      "id": "",
      "title": "ICAR National Professor And National Fellow",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Promotes excellence by recognizing outstanding scientists in the National Agricultural Research System (NARS).",
      "tags": ["Agricultural", "ICAR", "National Fellow", "National Professor"],
      "location": "India",
      "eligibility": "Outstanding scientists in NARS."
    },
    {
      "id": "",
      "title": "Krishi Unnati Yojana - MOVCDNER",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Promotes organic farming in the North Eastern Region.",
      "tags": ["Krishi", "KUY", "MOVCDNER", "Unnati"],
      "location": "North Eastern Region, India",
      "eligibility": "Farmers in the North Eastern Region."
    },
    {
      "id": "",
      "title": "National Mission on Edible Oils- Oil Palm",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Enhances edible oilseeds production and oil availability through Oil Palm area expansion.",
      "tags": ["Area Expansion", "Oil Palm", "Oil Palm Mill", "Processor", "Seed Garden", "Seed Nursery"],
      "location": "India",
      "eligibility": "Relevant stakeholders in oil palm cultivation."
    },
    {
      "id": "",
      "title": "Agricultural Marketing Infrastructure",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Develops agricultural value chain, focusing on post-harvest linkages.",
      "tags": ["Agricultural Marketing", "Farmer", "Promoter", "Storage Infrastructure"],
      "location": "India",
      "eligibility": "Farmers and other stakeholders in agricultural marketing."
    },
    {
      "id": "",
      "title": "National Mission on Natural Farming",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Promotes chemical-free and natural farming practices.",
      "tags": ["Agro Ecology", "Chemical-free Farming", "Natural Farming"],
      "location": "India",
      "eligibility": "Farmers."
    },
    {
      "id": "",
      "title": "Krishonnati Yojana - Sub Mission On Seed And Planting Material (SMSP)",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Increases production of certified/quality seed, upgrades farm-saved seeds, and promotes new technologies in seed production.",
      "tags": ["Agriculture", "Farmer", "Subsidy"],
      "location": "India",
      "eligibility": "Farmers."
    },
    {
      "id": "",
      "title": "Students Ready",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Student Rural Entrepreneurship Awareness Development Yojana.",
      "tags": ["Ready", "Student"],
      "location": "India",
      "eligibility": "Students."
    },
    {
      "id": "",
      "title": "SAHAKAR MITRA: NCDC’s Scheme on Internship Programme",
      "organization": "Ministry Of Agriculture and Farmers Welfare",
      "description": "Provides internship opportunities to professional graduates in areas of NCDC's functioning.",
      "tags": ["Graduate", "Intern", "Internship", "Professional", "SIP", "Student"],
      "location": "India",
      "eligibility": "Professional graduates."
    },
];

const insertSchemes = async () => {
    try {
        await Schemes.insertMany(schemesData);
        console.log("Data successfully inserted!");
        mongoose.connection.close(); // Close the connection after insertion
    } catch (error) {
        console.error("Error inserting data:", error);
    }
};

insertSchemes();