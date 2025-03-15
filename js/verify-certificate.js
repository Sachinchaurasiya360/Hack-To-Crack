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
