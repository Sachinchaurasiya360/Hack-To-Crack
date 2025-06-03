import { initializeNavbar } from './navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeNavbar();
    
    // Sample certificate data
    const certificateData = {
        "H2C/2024/001": {
            name: "Sachin Chaurasiya",
            certificateNo: "H2C/2024/001",
            role: "Lead Organizer"
        },
        "H2C/2024/002": {
            name: "Arbaaz Khan",
            certificateNo: "H2C/2024/002",
            role: "Organizer"
        },
        "H2C/2024/003": {
            name: "Sonam Chaurasiya",
            certificateNo: "H2C/2024/003",
            role: "Organizer"
        },
        "H2C/2024/004": {
            name: "Manasvi Patil",
            certificateNo: "H2C/2024/004",
            role: "Organizer"
        },
        "H2C/2024/005": {
            name: "Avantika Mote",
            certificateNo: "H2C/2024/005",
            role: "Organizer"
        },
        "H2C/2024/006": {
            name: "Amit Rajegaonkar",
            certificateNo: "H2C/2024/006",
            role: "Organizer"
        },
        "H2C/2025/001": {
            name: "Ritik Swaraj",
            certificateNo: "H2C/2025/001",
            role: "Participant"
       },
        "H2C/2025/002": {
            name: "Abdul Raqueeb",
            certificateNo: "H2C/2025/002",
            role: "Participant"
        },
        "H2C/2025/003": {
            name: "Vivek Suryawanshi",
            certificateNo: "H2C/2025/003",
            role: "Participant"
        },
        "H2C/2025/004": {
            name: "Himashu Raj",
            certificateNo: "H2C/2025/004",
            role: "Participant"
        },
        "H2C/2025/005": {
            name: "ADITI PATIL",
            certificateNo: "H2C/2025/005",
            role: "Participant"
        },
        "H2C/2025/006": {
            name: "Pratiksha Patil",
            certificateNo: "H2C/2025/006",
            role: "Participant"
        },
        "H2C/2025/007": {
            name: "Saee Bhanuskar",
            certificateNo: "H2C/2025/007",
            role: "Participant"
        },
        "H2C/2025/008": {
            name: "Praptee Thakur",
            certificateNo: "H2C/2025/008",
            role: "Participant"
        },
        "H2C/2025/009": {
            name: "JEEVAN THAKUR",
            certificateNo: "H2C/2025/009",
            role: "Participant"
        },
        "H2C/2025/010": {
            name: "Darshan Dalvi",
            certificateNo: "H2C/2025/010",
            role: "Participant"
        },
        "H2C/2025/011": {
            name: "Parth Throat",
            certificateNo: "H2C/2025/011",
            role: "Participant"
        },
        "H2C/2025/012": {
            name: "Amit Adhe",
            certificateNo: "H2C/2025/012",
            role: "Participant"
        },
        "H2C/2025/013": {
            name: "Sathwik Shetty",
            certificateNo: "H2C/2025/013",
            role: "Participant"
        },
        "H2C/2025/014": {
            name: "Ritvik.K",
            certificateNo: "H2C/2025/014",
            role: "Participant"
        },
        "H2C/2025/015": {
            name: "Khushbu R",
            certificateNo: "H2C/2025/015",
            role: "Participant"
        },
        "H2C/2025/016": {
            name: "Shreyas",
            certificateNo: "H2C/2025/016",
            role: "Participant"
        },
        "H2C/2025/017": {
            name: "Harsh Saindane",
            certificateNo: "H2C/2025/017",
            role: "Participant"
        },
        "H2C/2025/018": {
            name: "Pranita Bannore",
            certificateNo: "H2C/2025/018",
            role: "Participant"
        },
        "H2C/2025/019": {
            name: "Abhirat more",
            certificateNo: "H2C/2025/019",
            role: "Participant"
        },
        "H2C/2025/020": {
            name: "Joel dias",
            certificateNo: "H2C/2025/020",
            role: "Participant"
        },
        "H2C/2025/021": {
            name: "Mustafa Halvadwala",
            certificateNo: "H2C/2025/021",
            role: "Participant"
        },
        "H2C/2025/022": {
            name: "Maria Barwaniwala",
            certificateNo: "H2C/2025/022",
            role: "Participant"
        },
        "H2C/2025/023": {
            name: "TEJAS H J",
            certificateNo: "H2C/2025/023",
            role: "Participant"
        },
        "H2C/2025/024": {
            name: "Havyas M.P",
            certificateNo: "H2C/2025/024",
            role: "Participant"
        },
        "H2C/2025/025": {
            name: "DHANYASHREE U R",
            certificateNo: "H2C/2025/025",
            role: "Participant"
        },
        "H2C/2025/026": {
            name: "ABHISHEK RAO K",
            certificateNo: "H2C/2025/026",
            role: "Participant"
        },
        "H2C/2025/027": {
            name: "Shreya  Jain ",
            certificateNo: "H2C/2025/027",
            role: "Participant"
        },
        "H2C/2025/028": {
            name: "Nikita Patil",
            certificateNo: "H2C/2025/028",
            role: "Participant"
        },
        "H2C/2025/029": {
            name: "Vaishnavi Agrawal",
            certificateNo: "H2C/2025/029",
            role: "Participant"
        },
        "H2C/2025/030": {
            name: "Aisha Gujarati",
            certificateNo: "H2C/2025/030",
            role: "Participant"
        },
        "H2C/2025/031": {
            name: "Anmol Upadhyay",
            certificateNo: "H2C/2025/031",
            role: "Participant"
        },
        "H2C/2025/032": {
            name: "Vikas Kumar",
            certificateNo: "H2C/2025/032",
            role: "Participant"
        },
        "H2C/2025/033": {
            name: "Sauvir Wodehra",
            certificateNo: "H2C/2025/033",
            role: "Participant"
        },
        "H2C/2025/034": {
            name: "Adarsh Dubey",
            certificateNo: "H2C/2025/034",
            role: "Participant"
        },
        "H2C/2025/035": {
            name: "Rishabh Tripathi",
            certificateNo: "H2C/2025/035",
            role: "Participant"
        },
        "H2C/2025/036": {
            name: "Sanskrati Agrawal",
            certificateNo: "H2C/2025/036",
            role: "Participant"
        },
        "H2C/2025/037": {
            name: "Harsh Verma",
            certificateNo: "H2C/2025/037",
            role: "Participant"
        },
        "H2C/2025/038": {
            name: "Om Lakshkar",
            certificateNo: "H2C/2025/038",
            role: "Participant"
        },
        "H2C/2025/039": {
            name: "Richa Shrungarpure",
            certificateNo: "H2C/2025/039",
            role: "Participant"
        },
        "H2C/2025/040": {
            name: "Atharva Mane",
            certificateNo: "H2C/2025/040",
            role: "Participant"
        },
        "H2C/2025/041": {
            name: " Jay Dixit",
            certificateNo: "H2C/2025/041",
            role: "Participant"
        },
        "H2C/2025/042": {
            name: "Purva raut",
            certificateNo: "H2C/2025/042",
            role: "Participant"
        },
        "H2C/2025/043": {
            name: "Palak mehta",
            certificateNo: "H2C/2025/043",
            role: "Participant"
        },
        "H2C/2025/044": {
            name: "Harshil Koladiya",
            certificateNo: "H2C/2025/044",
            role: "Participant"
        },
        "H2C/2025/045": {
            name: "Priyansh Tank",
            certificateNo: "H2C/2025/045",
            role: "Participant"
        },
        "H2C/2025/046": {
            name: "Naman Sapra",
            certificateNo: "H2C/2025/046",
            role: "Participant"
        },
        "H2C/2025/047": {
            name: "Prem Patil",
            certificateNo: "H2C/2025/047",
            role: "Participant"
        },
        "H2C/2025/048": {
            name: "Pranav Rane",
            certificateNo: "H2C/2025/048",
            role: "Participant"
        },
        "H2C/2025/049": {
            name: "Rohan Patil",
            certificateNo: "H2C/2025/049",
            role: "Participant"
        },
        "H2C/2025/050": {
            name: "Jay Surywanshi",
            certificateNo: "H2C/2025/050",
            role: "Participant"
        },
        "H2C/2025/051": {
            name: "Aditya Babar",
            certificateNo: "H2C/2025/051",
            role: "Participant"
        },
        "H2C/2025/052": {
            name: "Mansi Dhumal",
            certificateNo: "H2C/2025/052",
            role: "Participant"
        },
        "H2C/2025/053": {
            name: "Siddhi More",
            certificateNo: "H2C/2025/053",
            role: "Participant"
        },
        "H2C/2025/054": {
            name: "Omkar Yadav",
            certificateNo: "H2C/2025/054",
            role: "Participant"
        },
        "H2C/2025/055": {
            name: "Atharva Rasal",
            certificateNo: "H2C/2025/055",
            role: "Participant"
        },
        "H2C/2025/056": {
            name: "Jay Chavan",
            certificateNo: "H2C/2025/056",
            role: "Participant"
        },
        "H2C/2025/057": {
            name: "Aniket Bhangale",
            certificateNo: "H2C/2025/057",
            role: "Participant"
        },
        "H2C/2025/058": {
            name: "Jidnyasa Naik",
            certificateNo: "H2C/2025/058",
            role: "Participant"
        },
        "H2C/2025/059": {
            name: "Kshitij Kale",
            certificateNo: "H2C/2025/059",
            role: "Participant"
        },
        "H2C/2025/060": {
            name: "Ajay Khot",
            certificateNo: "H2C/2025/060",
            role: "Participant"
        },
        "H2C/2025/061": {
            name: "Shrushti Jadhav",
            certificateNo: "H2C/2025/061",
            role: "Participant"
        },
        "H2C/2025/062": {
            name: "Janhvi Jha",
            certificateNo: "H2C/2025/062",
            role: "Participant"
        },
        "H2C/2025/063": {
            name: "Swayam Thakur",
            certificateNo: "H2C/2025/063",
            role: "Participant"
        },
        "H2C/2025/064": {
            name: "Siddhesh Thakur",
            certificateNo: "H2C/2025/064",
            role: "Participant"
        },
        "H2C/2025/065": {
            name: "Tanvi Patil",
            certificateNo: "H2C/2025/065",
            role: "Participant"
        },
        "H2C/2025/066": {
            name: "Yash Mhatre",
            certificateNo: "H2C/2025/066",
            role: "Participant"
        },
        "H2C/2025/067": {
            name: "Rohith Krishna",
            certificateNo: "H2C/2025/067",
            role: "Participant"
        },
        "H2C/2025/068": {
            name: "Goutham K P",
            certificateNo: "H2C/2025/068",
            role: "Participant"
        },
        "H2C/2025/069": {
            name: "Lisha S Gowda",
            certificateNo: "H2C/2025/069",
            role: "Participant"
        },
        "H2C/2025/070": {
            name: "Sharan Reddy",
            certificateNo: "H2C/2025/070",
            role: "Participant"
        },
        "H2C/2025/071": {
            name: "Gaurav Patil",
            certificateNo: "H2C/2025/071",
            role: "Participant"
        },
        "H2C/2025/072": {
            name: "Ayaan Dwivedi",
            certificateNo: "H2C/2025/072",
            role: "Participant"
        },
        "H2C/2025/073": {
            name: "Namrata Salvi",
            certificateNo: "H2C/2025/073",
            role: "Participant"
        },
        "H2C/2025/074": {
            name: "Chaitalee Patil",
            certificateNo: "H2C/2025/074",
            role: "Participant"
        },
        "H2C/2025/075": {
            name: "DAKSH PATIL",
            certificateNo: "H2C/2025/075",
            role: "Participant"
        },
        "H2C/2025/076": {
            name: "Aarti Dinkar",
            certificateNo: "H2C/2025/076",
            role: "Participant"
        },
        "H2C/2025/077": {
            name: "Harshal Bhagat",
            certificateNo: "H2C/2025/077",
            role: "Participant"
        },
        "H2C/2025/078": {
            name: "Gaurav Mhatre",
            certificateNo: "H2C/2025/078",
            role: "Participant"
        },
        "H2C/2025/079": {
            name: "RAHUL NAIR",
            certificateNo: "H2C/2025/079",
            role: "Participant"
        },
        "H2C/2025/080": {
            name: "Shreeram Sawant",
            certificateNo: "H2C/2025/080",
            role: "Participant"
        },
        "H2C/2025/081": {
            name: "Vighnesh Rane",
            certificateNo: "H2C/2025/081",
            role: "Participant"
        },
        "H2C/2025/082": {
            name: "Amit Reddy",
            certificateNo: "H2C/2025/082",
            role: "Participant"
        },
        "H2C/2025/083": {
            name: "Abhijit Ranjan",
            certificateNo: "H2C/2025/083",
            role: "Participant"
        },
        "H2C/2025/084": {
            name: "Aditya",
            certificateNo: "H2C/2025/084",
            role: "Participant"
        },
        "H2C/2025/085": {
            name: "SWARANGI SAWANT",
            certificateNo: "H2C/2025/085",
            role: "Participant"
        },
        "H2C/2025/086": {
            name: "Saloni Kashid",
            certificateNo: "H2C/2025/086",
            role: "Participant"
        },
        "H2C/2025/087": {
            name: "Charuta Kamat",
            certificateNo: "H2C/2025/087",
            role: "Participant"
        },
        "H2C/2025/088": {
            name: "Prapti Shah",
            certificateNo: "H2C/2025/088",
            role: "Participant"
        },
        "H2C/2025/089": {
            name: "Manas Ojha",
            certificateNo: "H2C/2025/089",
            role: "Participant"
        },
        "H2C/2025/090": {
            name: "Bhaumik Patil",
            certificateNo: "H2C/2025/090",
            role: "Participant"
        },
        "H2C/2025/091": {
            name: "Mangesh Bhalerao",
            certificateNo: "H2C/2025/091",
            role: "Participant"
        },
        "H2C/2025/092": {
            name: "Karan Mahapadi",
            certificateNo: "H2C/2025/092",
            role: "Participant"
        },
        "H2C/2025/093": {
            name: "Prabhat Mukhiya",
            certificateNo: "H2C/2025/093",
            role: "Participant"
        },
        "H2C/2025/094": {
            name: "Sachin Bind",
            certificateNo: "H2C/2025/094",
            role: "Participant"
        },
        "H2C/2025/095": {
            name: "Prem Chavan",
            certificateNo: "H2C/2025/095",
            role: "Participant"
        },
        "H2C/2025/096": {
            name: "Manishankar Tripathi",
            certificateNo: "H2C/2025/096",
            role: "Participant"
        },
        "H2C/2025/097": {
            name: "Piyusha Patil",
            certificateNo: "H2C/2025/097",
            role: "Participant"
        },
        "H2C/2025/098": {
            name: "Shruti Ranmale",
            certificateNo: "H2C/2025/098",
            role: "Participant"
        },
        "H2C/2025/099": {
            name: "Hemangee Patil",
            certificateNo: "H2C/2025/099",
            role: "Participant"
        },
        "H2C/2025/100": {
            name: "Raksha Patil",
            certificateNo: "H2C/2025/100",
            role: "Participant"
        },
        "H2C/2025/101": {
            name: "Devendra Gawade",
            certificateNo: "H2C/2025/101",
            role: "Participant"
        },
        "H2C/2025/102": {
            name: "Jatin Vaity",
            certificateNo: "H2C/2025/102",
            role: "Participant"
        },
        "H2C/2025/103": {
            name: "Sankalp Shrivastava",
            certificateNo: "H2C/2025/103",
            role: "Participant"
        },
        "H2C/2025/104": {
            name: "Ritik Pandey",
            certificateNo: "H2C/2025/104",
            role: "Participant"
        },
        "H2C/2025/105": {
            name: "Gopi Jagadheesh Mahamkali",
            certificateNo: "H2C/2025/105",
            role: "Participant"
        },
        "H2C/2025/106": {
            name: "Pooja Ratna Sai Sri Teku",
            certificateNo: "H2C/2025/106",
            role: "Participant"
        },
        "H2C/2025/107": {
            name: "Raghu Goddumuri",
            certificateNo: "H2C/2025/107",
            role: "Participant"
        },
        "H2C/2025/108": {
            name: "Revathi Gugulothu",
            certificateNo: "H2C/2025/108",
            role: "Participant"
        },
        "H2C/2025/109": {
            name: "Shivam Tiwari",
            certificateNo: "H2C/2025/109",
            role: "Participant"
        },
        "H2C/2025/110": {
            name: "Yadnesh Ranshevare",
            certificateNo: "H2C/2025/110",
            role: "Participant"
        },
        "H2C/2025/111": {
            name: "Ashutosh Tiwari",
            certificateNo: "H2C/2025/111",
            role: "Participant"
        },
        "H2C/2025/112": {
            name: "Zaid khan",
            certificateNo: "H2C/2025/112",
            role: "Participant"
        },
        "H2C/2025/113": {
            name: "Tanmay Chavan",
            certificateNo: "H2C/2025/113",
            role: "Participant"
        },
        "H2C/2025/114": {
            name: "Harshit Kandpal",
            certificateNo: "H2C/2025/114",
            role: "Participant"
        },
        "H2C/2025/115": {
            name: "Joshua Koshy",
            certificateNo: "H2C/2025/115",
            role: "Participant"
        },
        "H2C/2025/116": {
            name: "Swayam Gawali",
            certificateNo: "H2C/2025/116",
            role: "Participant"
        },
        "H2C/2025/117": {
            name: "JITEN PURSWANI",
            certificateNo: "H2C/2025/117",
            role: "Participant"
        },
        "H2C/2025/118": {
            name: "AJINKYA PATIL",
            certificateNo: "H2C/2025/118",
            role: "Participant"
        },
        "H2C/2025/119": {
            name: "ARYA MADHAVI",
            certificateNo: "H2C/2025/119",
            role: "Participant"
        },
        "H2C/2025/120": {
            name: "Kamraan Mulani",
            certificateNo: "H2C/2025/120",
            role: "Participant"
        },
        "H2C/2025/121": {
            name: "Aditya Singh",
            certificateNo: "H2C/2025/121",
            role: "Participant"
        },
        "H2C/2025/122": {
            name: "Rohit Gupta",
            certificateNo: "H2C/2025/122",
            role: "Participant"
        },
        "H2C/2025/123": {
            name: "Afraz Anwar Hussain",
            certificateNo: "H2C/2025/123",
            role: "Participant"
        },
        "H2C/2025/124": {
            name: "Sakshi Devadiga",
            certificateNo: "H2C/2025/124",
            role: "Participant"
        },
        "H2C/2025/125": {
            name: "Parth Bhalekar",
            certificateNo: "H2C/2025/125",
            role: "Participant"
        },
        "H2C/2025/126": {
            name: "Aarya Darne",
            certificateNo: "H2C/2025/126",
            role: "Participant"
        },
        "H2C/2025/127": {
            name: "Anmol Mahanty",
            certificateNo: "H2C/2025/127",
            role: "Participant"
        },
        "H2C/2025/128": {
            name: "Omkar Kadam",
            certificateNo: "H2C/2025/128",
            role: "Participant"
        },
        "H2C/2025/129": {
            name: "Akshay Kambli",
            certificateNo: "H2C/2025/129",
            role: "Participant"
        },
        "H2C/2025/130": {
            name: "Akanksha Bhagat",
            certificateNo: "H2C/2025/130",
            role: "Participant"
        },
        "H2C/2025/131": {
            name: "Divyam Singh",
            certificateNo: "H2C/2025/131",
            role: "Participant"
        },
        "H2C/2025/132": {
            name: "Aditya Sharma",
            certificateNo: "H2C/2025/132",
            role: "Participant"
        },
        "H2C/2025/133": {
            name: "Satyam Bhosale",
            certificateNo: "H2C/2025/133",
            role: "Participant"
        },
        "H2C/2025/134": {
            name: "Mitesh Rajesh Kamthe",
            certificateNo: "H2C/2025/134",
            role: "Participant"
        },
        "H2C/2025/135": {
            name: "Muhammed Tufayl Dalvi",
            certificateNo: "H2C/2025/135",
            role: "Participant"
        },
        "H2C/2025/136": {
            name: "Aarya Paradkar",
            certificateNo: "H2C/2025/136",
            role: "Participant"
        },
        "H2C/2025/137": {
            name: "Aditi Narkar",
            certificateNo: "H2C/2025/137",
            role: "Participant"
        },
        "H2C/2025/138": {
            name: "Manas Mishra",
            certificateNo: "H2C/2025/138",
            role: "Participant"
        },
        "H2C/2025/139": {
            name: "Pratik Shinde",
            certificateNo: "H2C/2025/139",
            role: "Participant"
        },
        "H2C/2025/140": {
            name: "Swarnadeep Singh",
            certificateNo: "H2C/2025/140",
            role: "Participant"
        },
        "H2C/2025/141": {
            name: "Aryan Ranjane",
            certificateNo: "H2C/2025/141",
            role: "Participant"
        },
        "H2C/2025/142": {
            name: "Vighnesh Vane",
            certificateNo: "H2C/2025/142",
            role: "Participant"
        },
        "H2C/2025/143": {
            name: "SOHAM PATIL",
            certificateNo: "H2C/2025/143",
            role: "Participant"
        },
        "H2C/2025/144": {
            name: "Simran Dhole",
            certificateNo: "H2C/2025/144",
            role: "Participant"
        },
        "H2C/2025/145": {
            name: "Aditi Pawar",
            certificateNo: "H2C/2025/145",
            role: "Participant"
        },
        "H2C/2025/146": {
            name: "Rajat Masanagi",
            certificateNo: "H2C/2025/146",
            role: "Participant"
        },
        "H2C/2025/147": {
            name: "Devam Desai",
            certificateNo: "H2C/2025/147",
            role: "Participant"
        },
        "H2C/2025/148": {
            name: "Preitish Fondekar",
            certificateNo: "H2C/2025/148",
            role: "Participant"
        },
        "H2C/2025/149": {
            name: "Kumar Aadarsh",
            certificateNo: "H2C/2025/149",
            role: "Participant"
        },
        "H2C/2025/150": {
            name: "Vaibhav jumale ",
            certificateNo: "H2C/2025/150",
            role: "Participant"
        },
        "H2C/2025/151": {
            name: "Aryan Bagul",
            certificateNo: "H2C/2025/151",
            role: "Participant"
        },
        "H2C/2025/152": {
            name: "Raj wagh",
            certificateNo: "H2C/2025/152",
            role: "Participant"
        },
        "H2C/2025/153": {
            name: "balkrushna ahire",
            certificateNo: "H2C/2025/153",
            role: "Participant"
        },
        "H2C/2025/154": {
            name: "Shweta Saw",
            certificateNo: "H2C/2025/154",
            role: "Participant"
        },
        "H2C/2025/155": {
            name: "Nikunja Sonawane",
            certificateNo: "H2C/2025/155",
            role: "Participant"
        },
        "H2C/2025/156": {
            name: "KeerthanaNair",
            certificateNo: "H2C/2025/156",
            role: "Participant"
        },
        "H2C/2025/157": {
            name: "Aditi Joshi",
            certificateNo: "H2C/2025/157",
            role: "Participant"
        },
        "H2C/2025/158": {
            name: "Nishant Patil",
            certificateNo: "H2C/2025/158",
            role: "Participant"
        },
        "H2C/2025/159": {
            name: "Yash Lohkhare",
            certificateNo: "H2C/2025/159",
            role: "Participant"
        },
        "H2C/2025/160": {
            name: "Avnish ranjit",
            certificateNo: "H2C/2025/160",
            role: "Participant"
        },
        "H2C/2025/161": {
            name: "Nimish Bharat Patil",
            certificateNo: "H2C/2025/161",
            role: "Participant"
        },
        "H2C/2025/162": {
            name: "Sahil Mathara",
            certificateNo: "H2C/2025/162",
            role: "Participant"
        },
        "H2C/2025/163": {
            name: "Prarambhi Kharose",
            certificateNo: "H2C/2025/163",
            role: "Participant"
        },
        "H2C/2025/164": {
            name: "Vishnupriya Sahu",
            certificateNo: "H2C/2025/164",
            role: "Participant"
        },
        "H2C/2025/165": {
            name: "Vansh Tawar",
            certificateNo: "H2C/2025/165",
            role: "Participant"
        },
        "H2C/2025/166": {
            name: "Prajyot Pawar",
            certificateNo: "H2C/2025/166",
            role: "Participant"
        },
        "H2C/2025/167": {
            name: "Aditya Kanhere",
            certificateNo: "H2C/2025/167",
            role: "Participant"
        },
        "H2C/2025/168": {
            name: "Yash Lomte",
            certificateNo: "H2C/2025/168",
            role: "Participant"
        },
        "H2C/2025/169": {
            name: "Ashish Panchal",
            certificateNo: "H2C/2025/169",
            role: "Participant"
        },
        "H2C/2025/170": {
            name: "Sahil Shivekar",
            certificateNo: "H2C/2025/170",
            role: "Participant"
        },
        "H2C/2025/171": {
            name: "Khushali Gatir",
            certificateNo: "H2C/2025/171",
            role: "Participant"
        },
        "H2C/2025/172": {
            name: "Harshala Gaykar",
            certificateNo: "H2C/2025/172",
            role: "Participant"
        },
        "H2C/2025/173": {
            name: "Vedant Kulkarni",
            certificateNo: "H2C/2025/173",
            role: "Participant"
        },
        "H2C/2025/174": {
            name: "Jeel Doshi",
            certificateNo: "H2C/2025/174",
            role: "Participant"
        },
        "H2C/2025/175": {
            name: "Vatsal Kotha",
            certificateNo: "H2C/2025/175",
            role: "Participant"
        },
        "H2C/2025/176": {
            name: "Meet Chavan",
            certificateNo: "H2C/2025/176",
            role: "Participant"
        },
        "H2C/2025/177": {
            name: "Aparna Prasad",
            certificateNo: "H2C/2025/177",
            role: "Participant"
        },
        "H2C/2025/178": {
            name: "Atharva Khetale",
            certificateNo: "H2C/2025/178",
            role: "Participant"
        },
        "H2C/2025/179": {
            name: "Dhanraj Banglurkar",
            certificateNo: "H2C/2025/179",
            role: "Participant"
        },
        "H2C/2025/180": {
            name: "Aryan Balani",
            certificateNo: "H2C/2025/180",
            role: "Participant"
        },
        "H2C/2025/181": {
            name: "Anushri Venkitaramanan",
            certificateNo: "H2C/2025/181",
            role: "Participant"
        },
        "H2C/2025/182": {
            name: "Nikki Mehta",
            certificateNo: "H2C/2025/182",
            role: "Participant"
        },
        "H2C/2025/183": {
            name: "Arya Vaidya",
            certificateNo: "H2C/2025/183",
            role: "Participant"
        },
        "H2C/2025/184": {
            name: "RUHAN TEJWANI",
            certificateNo: "H2C/2025/184",
            role: "Participant"
        },
        "H2C/2025/185": {
            name: "Atharva Jadhav",
            certificateNo: "H2C/2025/185",
            role: "Participant"
        },
        "H2C/2025/186": {
            name: "Priyank Adhav",
            certificateNo: "H2C/2025/186",
            role: "Participant"
        },
        "H2C/2025/187": {
            name: "Kehan Shaikh",
            certificateNo: "H2C/2025/187",
            role: "Participant"
        },
        "H2C/2025/188": {
            name: "Atharva Gourshete",
            certificateNo: "H2C/2025/188",
            role: "Participant"
        },
        "H2C/2025/189": {
            name: "Om Date",
            certificateNo: "H2C/2025/189",
            role: "Participant"
        },
        "H2C/2025/190": {
            name: "Aarya Bivalkar",
            certificateNo: "H2C/2025/190",
            role: "Participant"
        },
        "H2C/2025/191": {
            name: "Oomkar Agarkhed",
            certificateNo: "H2C/2025/191",
            role: "Participant"
        },
        "H2C/2025/192": {
            name: "Devishree Nadar",
            certificateNo: "H2C/2025/192",
            role: "Participant"
        },
        "H2C/2025/193": {
            name: "Advika Sawant",
            certificateNo: "H2C/2025/193",
            role: "Participant"
        },
        "H2C/2025/194": {
            name: "Ruvina Vas",
            certificateNo: "H2C/2025/194",
            role: "Participant"
        },
        "H2C/2025/195": {
            name: "Sania Joseph",
            certificateNo: "H2C/2025/195",
            role: "Participant"
        },
        "H2C/2025/196": {
            name: "Vashisht Urgonda",
            certificateNo: "H2C/2025/196",
            role: "Participant"
        },
        "H2C/2025/197": {
            name: "Soham Kadam",
            certificateNo: "H2C/2025/197",
            role: "Participant"
        },
        "H2C/2025/198": {
            name: "Pranjali Yeshwantrao",
            certificateNo: "H2C/2025/198",
            role: "Participant"
        },
        "H2C/2025/199": {
            name: "Prachi Lakhan",
            certificateNo: "H2C/2025/199",
            role: "Participant"
        },
        "H2C/2025/200": {
            name: "Miral Gopani",
            certificateNo: "H2C/2025/200",
            role: "Participant"
        },
        "H2C/2025/201": {
            name: "Arya Gawde",
            certificateNo: "H2C/2025/201",
            role: "Participant"
        },
        "H2C/2025/202": {
            name: "Sakshi Patel",
            certificateNo: "H2C/2025/202",
            role: "Participant"
        },
        "H2C/2025/203": {
            name: "Sai Thikekar",
            certificateNo: "H2C/2025/203",
            role: "Participant"
        },
        "H2C/2025/204": {
            name: "Jeet Dalal",
            certificateNo: "H2C/2025/204",
            role: "Participant"
        },
        "H2C/2025/205": {
            name: "Yash Chhaproo",
            certificateNo: "H2C/2025/205",
            role: "Participant"
        },
        "H2C/2025/206": {
            name: "M.Kaif Qureshi",
            certificateNo: "H2C/2025/206",
            role: "Participant"
        },
        "H2C/2025/207": {
            name: "Ayush Kumar",
            certificateNo: "H2C/2025/207",
            role: "Participant"
        },
        "H2C/2025/208": {
            name: "Raman Lodhi",
            certificateNo: "H2C/2025/208",
            role: "Participant"
        },
        "H2C/2025/209": {
            name: "Lohitaksha Rawte",
            certificateNo: "H2C/2025/209",
            role: "Participant"
        },
        "H2C/2025/210": {
            name: "Krishna Nema",
            certificateNo: "H2C/2025/210",
            role: "Participant"
        },
        "H2C/2025/211": {
            name: "Amruta Patil",
            certificateNo: "H2C/2025/211",
            role: "Participant"
        },
        "H2C/2025/212": {
            name: "Nilima Patil",
            certificateNo: "H2C/2025/212",
            role: "Participant"
        },
        "H2C/2025/213": {
            name: "Divya Bhadankar",
            certificateNo: "H2C/2025/213",
            role: "Participant"
        },
        "H2C/2025/214": {
            name: "Smith Patil",
            certificateNo: "H2C/2025/214",
            role: "Participant"
        },
        "H2C/2025/215": {
            name: "Omkar Patil",
            certificateNo: "H2C/2025/215",
            role: "Participant"
        },
        "H2C/2025/216": {
            name: "Atharv Bhoir",
            certificateNo: "H2C/2025/216",
            role: "Participant"
        },
        "H2C/2025/217": {
            name: "Nishant Patil",
            certificateNo: "H2C/2025/217",
            role: "Participant"
        },
        "H2C/2025/218": {
            name: "Uday naik",
            certificateNo: "H2C/2025/218",
            role: "Participant"
        },
        "H2C/2025/219": {
            name: "Himanshu Pandey",
            certificateNo: "H2C/2025/219",
            role: "Participant"
        },
        "H2C/2025/220": {
            name: "Kulsum Khan",
            certificateNo: "H2C/2025/220",
            role: "Participant"
        },
        "H2C/2025/221": {
            name: "Nishant Ghare",
            certificateNo: "H2C/2025/221",
            role: "Participant"
        },
        "H2C/2025/222": {
            name: "Rudraraj Bhatawdekar",
            certificateNo: "H2C/2025/222",
            role: "Participant"
        },
        "H2C/2025/223": {
            name: "Aayush Jadhav",
            certificateNo: "H2C/2025/223",
            role: "Participant"
        },
        "H2C/2025/224": {
            name: "Parth Choudhary",
            certificateNo: "H2C/2025/224",
            role: "Participant"
        },
        "H2C/2025/225": {
            name: "Yadnesh Bamne",
            certificateNo: "H2C/2025/225",
            role: "Participant"
        },
        "H2C/2025/226": {
            name: "Darsh Kalathiya",
            certificateNo: "H2C/2025/226",
            role: "Participant"
        },
        "H2C/2025/227": {
            name: "Avishkar Paradkar",
            certificateNo: "H2C/2025/227",
            role: "Participant"
        },
        "H2C/2025/228": {
            name: "Saish Joshi",
            certificateNo: "H2C/2025/228",
            role: "Participant"
        },
        "H2C/2025/229": {
            name: "Sumit Ade",
            certificateNo: "H2C/2025/229",
            role: "Participant"
        },
        "H2C/2025/230": {
            name: "Atharv Magdum",
            certificateNo: "H2C/2025/230",
            role: "Participant"
        },
        "H2C/2025/231": {
            name: "Ritesh Singh",
            certificateNo: "H2C/2025/231",
            role: "Participant"
        },
        "H2C/2025/232": {
            name: "Siddhesh Gupta",
            certificateNo: "H2C/2025/232",
            role: "Participant"
        },
        "H2C/2025/233": {
            name: "Raj Parihar",
            certificateNo: "H2C/2025/233",
            role: "Participant"
        },
        "H2C/2025/234": {
            name: "Nitesh Yadav",
            certificateNo: "H2C/2025/234",
            role: "Participant"
        },
        "H2C/2025/235": {
            name: "Amey Zode",
            certificateNo: "H2C/2025/235",
            role: "Participant"
        },
        "H2C/2025/236": {
            name: "Suyash Ware",
            certificateNo: "H2C/2025/236",
            role: "Participant"
        },
        "H2C/2025/237": {
            name: "Pranav Tahsildar",
            certificateNo: "H2C/2025/237",
            role: "Participant"
        },
        "H2C/2025/238": {
            name: "Tarun T",
            certificateNo: "H2C/2025/238",
            role: "Participant"
        },
        "H2C/2025/239": {
            name: "Vishnu A",
            certificateNo: "H2C/2025/239",
            role: "Participant"
        },
        "H2C/2025/240": {
            name: "Sai Arevinth Raaj B",
            certificateNo: "H2C/2025/240",
            role: "Participant"
        },
        "H2C/2025/241": {
            name: "Gokul Vijayanand",
            certificateNo: "H2C/2025/241",
            role: "Participant"
        },
        "H2C/2025/242": {
            name: "Shravani Bekawade",
            certificateNo: "H2C/2025/242",
            role: "Participant"
        },
        "H2C/2025/243": {
            name: "DIPESH GAIKAR",
            certificateNo: "H2C/2025/243",
            role: "Participant"
        },
        "H2C/2025/244": {
            name: "Hritik Giri",
            certificateNo: "H2C/2025/244",
            role: "Participant"
        },
        "H2C/2025/245": {
            name: "Riya Biswas",
            certificateNo: "H2C/2025/245",
            role: "Participant"
        },
        "H2C/2025/246": {
            name: "Rakshitha Bhat",
            certificateNo: "H2C/2025/246",
            role: "Participant"
        },
        "H2C/2025/247": {
            name: "Shravya",
            certificateNo: "H2C/2025/247",
            role: "Participant"
        },
        "H2C/2025/248": {
            name: "Rakshita Shetty",
            certificateNo: "H2C/2025/248",
            role: "Participant"
        },
        "H2C/2025/249": {
            name: "Darshan Chetan Chandavarkar",
            certificateNo: "H2C/2025/249",
            role: "Participant"
        },
        "H2C/2025/250": {
            name: "Vishesh Dwivedi",
            certificateNo: "H2C/2025/250",
            role: "Participant"
        },
        "H2C/2025/251": {
            name: "Yashpreet Singh",
            certificateNo: "H2C/2025/251",
            role: "Participant"
        },
        "H2C/2025/252": {
            name: "Mohana Krishnan",
            certificateNo: "H2C/2025/252",
            role: "Participant"
        },
        "H2C/2025/253": {
            name: "Yogeshgouda Patil",
            certificateNo: "H2C/2025/253",
            role: "Participant"
        },
        "H2C/2025/254": {
            name: "Manjushree Iyer",
            certificateNo: "H2C/2025/254",
            role: "Participant"
        },
        "H2C/2025/255": {
            name: "Hariharan Malwad",
            certificateNo: "H2C/2025/255",
            role: "Participant"
        },
        "H2C/2025/256": {
            name: "Shreeya Bhalerao",
            certificateNo: "H2C/2025/256",
            role: "Participant"
        },
        "H2C/2025/257": {
            name: "SATYAM MISTARI",
            certificateNo: "H2C/2025/257",
            role: "Participant"
        },
        "H2C/2025/258": {
            name: "Abhishek Jungade",
            certificateNo: "H2C/2025/258",
            role: "Participant"
        },
        "H2C/2025/259": {
            name: "Darshan Mistari",
            certificateNo: "H2C/2025/259",
            role: "Participant"
        },
        "H2C/2025/260": {
            name: "Jayesh Chaurasia",
            certificateNo: "H2C/2025/260",
            role: "Participant"
        },
        "H2C/2025/261": {
            name: "Parth Lagishetty",
            certificateNo: "H2C/2025/261",
            role: "Participant"
        },
        "H2C/2025/262": {
            name: "Ajay Kumbhar",
            certificateNo: "H2C/2025/262",
            role: "Participant"
        },
        "H2C/2025/263": {
            name: "Kshitij Khot",
            certificateNo: "H2C/2025/263",
            role: "Participant"
        },
        "H2C/2025/264": {
            name: "Mohd Aadil Shaikh",
            certificateNo: "H2C/2025/264",
            role: "Participant"
        },
        "H2C/2025/265": {
            name: "Vedshri Salunkhe",
            certificateNo: "H2C/2025/265",
            role: "Participant"
        },
        "H2C/2025/266": {
            name: "Sai Bhot",
            certificateNo: "H2C/2025/266",
            role: "Participant"
        },
        "H2C/2025/267": {
            name: "Sairaj Patil",
            certificateNo: "H2C/2025/267",
            role: "Participant"
        },
        "H2C/2025/268": {
            name: "Amarjeet Verma",
            certificateNo: "H2C/2025/268",
            role: "Participant"
        },
        "H2C/2025/269": {
            name: "Shweta Khariwale",
            certificateNo: "H2C/2025/269",
            role: "Participant"
        },
        "H2C/2025/270": {
            name: "Vishwesh Vishwakarma",
            certificateNo: "H2C/2025/270",
            role: "Participant"
        },
        "H2C/2025/271": {
            name: "Nikhil Kanojiya",
            certificateNo: "H2C/2025/271",
            role: "Participant"
        },
        "H2C/2025/272": {
            name: "Atharva Harane",
            certificateNo: "H2C/2025/272",
            role: "Participant"
        },
        "H2C/2025/273": {
            name: "Darsh Kamble",
            certificateNo: "H2C/2025/273",
            role: "Participant"
        },
        "H2C/2025/274": {
            name: "varad patil",
            certificateNo: "H2C/2025/274",
            role: "Participant"
        },
        "H2C/2025/275": {
            name: "Harsh Shrivastava ",
            certificateNo: "H2C/2025/275",
            role: "Participant"
        },
        "H2C/2025/276": {
            name: "Shravan Bobde",
            certificateNo: "H2C/2025/276",
            role: "Participant"
        },
        "H2C/2025/277": {
            name: "Vedant Sonawane ",
            certificateNo: "H2C/2025/277",
            role: "Participant"
        },
        "H2C/2025/278": {
            name: "Vrushali Rohokale",
            certificateNo: "H2C/2025/278",
            role: "Participant"
        },
        "H2C/2025/279": {
            name: "Atharva Deshmukh",
            certificateNo: "H2C/2025/279",
            role: "Participant"
        },
        "H2C/2025/280": {
            name: "Ahad Mulani",
            certificateNo: "H2C/2025/280",
            role: "Participant"
        },
        "H2C/2025/281": {
            name: "Harshal Borude",
            certificateNo: "H2C/2025/281",
            role: "Participant"
        },
        "H2C/2025/282": {
            name: "Pankaj Katre",
            certificateNo: "H2C/2025/282",
            role: "Participant"
        },
        "H2C/2025/283": {
            name: "Anuj Gadekar",
            certificateNo: "H2C/2025/283",
            role: "Participant"
        },
        "H2C/2025/284": {
            name: "Suraj Khairnar",
            certificateNo: "H2C/2025/284",
            role: "Participant"
        },
        "H2C/2025/285": {
            name: "Vaibhav Kolhe",
            certificateNo: "H2C/2025/285",
            role: "Participant"
        },
        "H2C/2025/286": {
            name: "Varun K A",
            certificateNo: "H2C/2025/286",
            role: "Participant"
        },
        "H2C/2025/287": {
            name: "Ganesh Madhukar Bandekar",
            certificateNo: "H2C/2025/287",
            role: "Participant"
        },
        "H2C/2025/288": {
            name: "Ajit Ramachandra Patagar",
            certificateNo: "H2C/2025/288",
            role: "Participant"
        },
        "H2C/2025/289": {
            name: "Darshan B G",
            certificateNo: "H2C/2025/289",
            role: "Participant"
        },
        "H2C/2025/290": {
            name: "Omkar Mahadik",
            certificateNo: "H2C/2025/290",
            role: "Participant"
        },
        "H2C/2025/291": {
            name: "Vedant Dhorlekar",
            certificateNo: "H2C/2025/291",
            role: "Participant"
        },
        "H2C/2025/292": {
            name: "Priti Bhoir",
            certificateNo: "H2C/2025/292",
            role: "Participant"
        },
        "H2C/2025/293": {
            name: "Valaya Dase",
            certificateNo: "H2C/2025/293",
            role: "Participant"
        },
        "H2C/2025/294": {
            name: "Praneet Poojary",
            certificateNo: "H2C/2025/294",
            role: "Participant"
        },
        "H2C/2025/295": {
            name: "Ved Tripathi",
            certificateNo: "H2C/2025/295",
            role: "Participant"
        },
        "H2C/2025/296": {
            name: "Pranay Pandey",
            certificateNo: "H2C/2025/296",
            role: "Participant"
        },
        "H2C/2025/297": {
            name: "Vishal Moota",
            certificateNo: "H2C/2025/297",
            role: "Participant"
        },
        "H2C/2025/298": {
            name: "AMIT MURKALMATH",
            certificateNo: "H2C/2025/298",
            role: "Participant"
        },
        "H2C/2025/299": {
            name: "Ilham Syed",
            certificateNo: "H2C/2025/299",
            role: "Participant"
        },
        "H2C/2025/300": {
            name: "Pavan Thakur",
            certificateNo: "H2C/2025/300",
            role: "Participant"
        },
        "H2C/2025/301": {
            name: "RISHI KOKIL",
            certificateNo: "H2C/2025/301",
            role: "Participant"
        },
        "H2C/2025/302": {
            name: "Snehal Surve",
            certificateNo: "H2C/2025/302",
            role: "Participant"
        },
        "H2C/2025/303": {
            name: "Vaishnavi Pradhan",
            certificateNo: "H2C/2025/303",
            role: "Participant"
        },
        "H2C/2025/304": {
            name: "Aditya Kadav",
            certificateNo: "H2C/2025/304",
            role: "Participant"
        },
        "H2C/2025/305": {
            name: "Kaustubh Mhatre",
            certificateNo: "H2C/2025/305",
            role: "Participant"
        },
        "H2C/2025/306": {
            name: "Pranav Ranjan",
            certificateNo: "H2C/2025/306",
            role: "Participant"
        },
        "H2C/2025/307": {
            name: "Piyush Parate",
            certificateNo: "H2C/2025/307",
            role: "Participant"
        },
        "H2C/2025/308": {
            name: "Uday Hese",
            certificateNo: "H2C/2025/308",
            role: "Participant"
        },
        "H2C/2025/309": {
            name: "Shreyas Bagate",
            certificateNo: "H2C/2025/309",
            role: "Participant"
        },
        "H2C/2025/310": {
            name: "Vaibhav Chavhan",
            certificateNo: "H2C/2025/310",
            role: "Participant"
        },
        "H2C/2025/311": {
            name: "Aditya Chorghade",
            certificateNo: "H2C/2025/311",
            role: "Participant"
        },
        "H2C/2025/312": {
            name: "Nikhil Patil",
            certificateNo: "H2C/2025/312",
            role: "Participant"
        },
        "H2C/2025/313": {
            name: "Atharva Joshi",
            certificateNo: "H2C/2025/313",
            role: "Participant"
        },
        "H2C/2025/314": {
            name: "Chetan Chaudhari",
            certificateNo: "H2C/2025/314",
            role: "Participant"
        },
        "H2C/2025/315": {
            name: "Vedant Lad",
            certificateNo: "H2C/2025/315",
            role: "Participant"
        },
        "H2C/2025/316": {
            name: "Soham Chaudhari",
            certificateNo: "H2C/2025/316",
            role: "Participant"
        },
        "H2C/2025/317": {
            name: "Karan Bhatia",
            certificateNo: "H2C/2025/317",
            role: "Participant"
        },
        "H2C/2025/318": {
            name: "Latish Adwani",
            certificateNo: "H2C/2025/318",
            role: "Participant"
        },
        "H2C/2025/319": {
            name: "Yash sharma",
            certificateNo: "H2C/2025/319",
            role: "Participant"
        },
        "H2C/2025/320": {
            name: "Darshan B G",
            certificateNo: "H2C/2025/320",
            role: "Participant"
        },
        "H2C/2025/321": {
            name: "Varun K A",
            certificateNo: "H2C/2025/321",
            role: "Participant"
        },
        "H2C/2025/322": {
            name: "Ajit Ramachandra Patagar",
            certificateNo: "H2C/2025/322",
            role: "Participant"
        },
        "H2C/2025/323": {
            name: "Ganesh Madhukar Bandekar",
            certificateNo: "H2C/2025/323",
            role: "Participant"
        },
        "H2C/2025/324": {
            name: "Leena Katkar",
            certificateNo: "H2C/2025/324",
            role: "Participant"
        },
        "H2C/2025/325": {
            name: "Ketki Mane",
            certificateNo: "H2C/2025/325",
            role: "Participant"
        },
        "H2C/2025/326": {
            name: "Yash Salunkhe",
            certificateNo: "H2C/2025/326",
            role: "Participant"
        },
        "H2C/2025/327": {
            name: "Prajyot Kinare",
            certificateNo: "H2C/2025/327",
            role: "Participant"
        },
        "H2C/2025/328": {
            name: "JAISHREE EPILI",
            certificateNo: "H2C/2025/328",
            role: "Participant"
        },
        "H2C/2025/329": {
            name: "Rahul Desai",
            certificateNo: "H2C/2025/329",
            role: "Participant"
        },
        "H2C/2025/330": {
            name: "Aniruddha Aravind Gharat",
            certificateNo: "H2C/2025/330",
            role: "Participant"
        },
        "H2C/2025/331": {
            name: "Ayush Duseja",
            certificateNo: "H2C/2025/331",
            role: "Participant"
        },
        "H2C/2025/332": {
            name: "Sahil Ahuja",
            certificateNo: "H2C/2025/332",
            role: "Participant"
        },
        "H2C/2025/333": {
            name: "Darshan Kakad",
            certificateNo: "H2C/2025/333",
            role: "Participant"
        },
        "H2C/2025/334": {
            name: "Vineet Chelani",
            certificateNo: "H2C/2025/334",
            role: "Participant"
        },
        "H2C/2025/335": {
            name: "Mayuresh Raju kadav",
            certificateNo: "H2C/2025/335",
            role: "Participant"
        },
        "H2C/2025/336": {
            name: "Pravin Rokhade",
            certificateNo: "H2C/2025/336",
            role: "Participant"
        },
        "H2C/2025/337": {
            name: "Sahil Avhad",
            certificateNo: "H2C/2025/337",
            role: "Participant"
        },
        "H2C/2025/338": {
            name: "Saurabh Singh",
            certificateNo: "H2C/2025/338",
            role: "Participant"
        },
        "H2C/2025/339": {
            name: "Gouresh Madye",
            certificateNo: "H2C/2025/339",
            role: "Participant"
        },
        "H2C/2025/340": {
            name: "Vivek Venkatachalam",
            certificateNo: "H2C/2025/340",
            role: "Participant"
        },
        "H2C/2025/341": {
            name: "Vaishnavi Sonawane",
            certificateNo: "H2C/2025/341",
            role: "Participant"
        },
        "H2C/2025/342": {
            name: "Nishika Gangwani",
            certificateNo: "H2C/2025/342",
            role: "Participant"
        },
        "H2C/2025/343": {
            name: "Pranav Karawale",
            certificateNo: "H2C/2025/343",
            role: "Participant"
        },
        "H2C/2025/344": {
            name: "Himanshu Tiwari",
            certificateNo: "H2C/2025/344",
            role: "Participant"
        },
        "H2C/2025/345": {
            name: "Sayoj Shelke",
            certificateNo: "H2C/2025/345",
            role: "Participant"
        },
        "H2C/2025/346": {
            name: "Ashirwad Jenamani",
            certificateNo: "H2C/2025/346",
            role: "Participant"
        },
        "H2C/2025/347": {
            name: "Piyush Anvekar ",
            certificateNo: "H2C/2025/347",
            role: "Participant"
        },
        "H2C/2025/348": {
            name: "Atharva Tomar",
            certificateNo: "H2C/2025/348",
            role: "Participant"
        },
        "H2C/2025/349": {
            name: "Sarthak Patil",
            certificateNo: "H2C/2025/349",
            role: "Participant"
        },
        "H2C/2025/350": {
            name: "Himanshu Ghode",
            certificateNo: "H2C/2025/350",
            role: "Participant"
        },
        "H2C/2025/351": {
            name: "Bhumika Bhavre",
            certificateNo: "H2C/2025/351",
            role: "Participant"
        },
        "H2C/2025/352": {
            name: "Shravani Saptal",
            certificateNo: "H2C/2025/352",
            role: "Participant"
        },
        "H2C/2025/353": {
            name: "Varsha Pawar",
            certificateNo: "H2C/2025/353",
            role: "Participant"
        },
        "H2C/2025/354": {
            name: "Sujal Maurya",
            certificateNo: "H2C/2025/354",
            role: "Participant"
        },
        "H2C/2025/355": {
            name: "Rasika Shinde",
            certificateNo: "H2C/2025/355",
            role: "Participant"
        },
        "H2C/2025/356": {
            name: "Kashvi Kandalkar",
            certificateNo: "H2C/2025/356",
            role: "Participant"
        },
        "H2C/2025/357": {
            name: "Soham Shimpi",
            certificateNo: "H2C/2025/357",
            role: "Participant"
        },
        "H2C/2025/358": {
            name: "Vansh Nenwani",
            certificateNo: "H2C/2025/358",
            role: "Participant"
        },
        "H2C/2025/359": {
            name: "Sahil Ahuja",
            certificateNo: "H2C/2025/359",
            role: "Participant"
        },
        "H2C/2025/360": {
            name: "Madhura Golatkar",
            certificateNo: "H2C/2025/360",
            role: "Participant"
        },
        "H2C/2025/361": {
            name: "Juhi Birare",
            certificateNo: "H2C/2025/361",
            role: "Participant"
        },
        "H2C/2025/362": {
            name: "Bhakti Santosh Zade ",
            certificateNo: "H2C/2025/362",
            role: "Participant"
        },
        "H2C/2025/363": {
            name: "Simran Bhanjinakhawa",
            certificateNo: "H2C/2025/363",
            role: "Participant"
        },
        "H2C/2025/364": {
            name: "Prerana Mhatre",
            certificateNo: "H2C/2025/364",
            role: "Participant"
        },
        "H2C/2025/365": {
            name: "Gauri Mhatre",
            certificateNo: "H2C/2025/365",
            role: "Participant"
        },
        "H2C/2025/366": {
            name: "Om Patil",
            certificateNo: "H2C/2025/366",
            role: "Participant"
        },
        "H2C/2025/367": {
            name: "Dhanyakumar Mane",
            certificateNo: "H2C/2025/367",
            role: "Participant"
        },
        "H2C/2025/368": {
            name: "Durva Dongre",
            certificateNo: "H2C/2025/368",
            role: "Participant"
        },
        "H2C/2025/369": {
            name: "Aviraj Patil",
            certificateNo: "H2C/2025/369",
            role: "Participant"
        },
        "H2C/2025/370": {
            name: "Rizvi Ahmed Abbas",
            certificateNo: "H2C/2025/370",
            role: "Participant"
        },
        "H2C/2025/371": {
            name: "Riddhi Patil",
            certificateNo: "H2C/2025/371",
            role: "Participant"
        },
        "H2C/2025/372": {
            name: "Megha Kiran Mahajan",
            certificateNo: "H2C/2025/372",
            role: "Participant"
        },
        "H2C/2025/373": {
            name: "Rushi Sawant",
            certificateNo: "H2C/2025/373",
            role: "Participant"
        },
        "H2C/2025/374": {
            name: "Tanvi Humane",
            certificateNo: "H2C/2025/374",
            role: "Participant"
        },
        "H2C/2025/375": {
            name: "Anubhav Verma",
            certificateNo: "H2C/2025/375",
            role: "Participant"
        },
        "H2C/2025/376": {
            name: "Krishna kounder",
            certificateNo: "H2C/2025/376",
            role: "Participant"
        },
        "H2C/2025/377": {
            name: "Akshay Gaikwad",
            certificateNo: "H2C/2025/377",
            role: "Participant"
        },
        "H2C/2025/378": {
            name: "Tejal Jagdish Shivale",
            certificateNo: "H2C/2025/378",
            role: "Participant"
        },
        "H2C/2025/379": {
            name: "Kashav Sharma",
            certificateNo: "H2C/2025/379",
            role: "Participant"
        },
        "H2C/2025/380": {
            name: "Shantanu Game",
            certificateNo: "H2C/2025/380",
            role: "Participant"
        },
        "H2C/2025/381": {
            name: "Siddhesh Gupta",
            certificateNo: "H2C/2025/381",
            role: "Participant"
        },
        "H2C/2025/382": {
            name: "Akshay Atul Kangude",
            certificateNo: "H2C/2025/382",
            role: "Participant"
        },
        "H2C/2025/383": {
            name: "Aaryan Gurav",
            certificateNo: "H2C/2025/383",
            role: "Participant"
        },
        "H2C/2025/384": {
            name: "Pawan Kale",
            certificateNo: "H2C/2025/384",
            role: "Participant"
        }
    };

    // Get DOM elements
    const certificateInput = document.getElementById('certificateNo');
    const verifyBtn = document.getElementById('verifyBtn');
    const resultBox = document.getElementById('resultBox');
    const errorBox = document.getElementById('errorBox');
    const holderName = document.getElementById('holderName');
    const certNo = document.getElementById('certNo');
    const holderRole = document.getElementById('holderRole');

    // Function to format certificate number
    function formatCertificateNumber(input) {
        let clean = input.replace(/[/\s]/g, '');
        if (clean.length >= 8) {
            return clean.slice(0, 3) + '/' + clean.slice(3, 7) + '/' + clean.slice(7);
        }
        return clean;
    }

    // Function to verify certificate
    function verifyCertificate() {
        const certNumber = formatCertificateNumber(certificateInput.value.trim());
        
        if (certificateData[certNumber]) {
            const data = certificateData[certNumber];
            holderName.textContent = data.name;
            certNo.textContent = data.certificateNo;
            holderRole.textContent = data.role;
            resultBox.style.display = 'block';
            errorBox.style.display = 'none';
        } else {
            resultBox.style.display = 'none';
            errorBox.style.display = 'block';
        }
    }

    // Add event listeners
    if (verifyBtn) {
        verifyBtn.addEventListener('click', verifyCertificate);
    }

    if (certificateInput) {
        certificateInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                verifyCertificate();
            }
        });

        certificateInput.addEventListener('input', (e) => {
            let value = e.target.value.toUpperCase();
            value = value.replace(/[^A-Z0-9/]/g, '');
            e.target.value = value;
        });
    }
});
