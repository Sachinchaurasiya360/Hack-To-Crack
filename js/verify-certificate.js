import { initializeNavbar } from './navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeNavbar();
    
    // Sample certificate data
    const certificateData = {
        "H2C/2024/001": {
            name: "Sachin Chaurasiya",
            certificateNo: "H2C/2024/001",
        },
        "H2C/2024/002": {
            name: "Arbaaz Khan",
            certificateNo: "H2C/2024/002"
        },
        "H2C/2024/003": {
            name: "Mike Johnson",
            certificateNo: "H2C/2024/003"
        }
    };

    // Get DOM elements
    const certificateInput = document.getElementById('certificateNo');
    const verifyBtn = document.getElementById('verifyBtn');
    const resultBox = document.getElementById('resultBox');
    const errorBox = document.getElementById('errorBox');
    const holderName = document.getElementById('holderName');
    const certNo = document.getElementById('certNo');

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
