// Sample certificate data (in production, this would come from a server)
const certificateData = {
    "H2C/2024/001": {
        name: "Sachin Chaurasiya",
        certificateNo: "H2C/2024/001",
        Role:"Lead Organiser"
    },
    "H2C/2024/002": {
        name: "Arbaaz Khan",
        certificateNo: "H2C/2024/002",
        Role:"Organizer"
    },
    "H2C/2024/003": {
        name: "Sonam Chaurasiya",
        certificateNo: "H2C/2024/003",
        Role:"Organizer"
    }
};

// Get DOM elements
const certificateInput = document.getElementById('certificateNo');
const verifyBtn = document.getElementById('verifyBtn');
const resultBox = document.getElementById('resultBox');
const errorBox = document.getElementById('errorBox');
const holderName = document.getElementById('holderName');
const certNo = document.getElementById('certNo');

// Add event listener for verify button
verifyBtn.addEventListener('click', verifyCertificate);

// Add event listener for Enter key
certificateInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verifyCertificate();
    }
});

// Function to format certificate number
function formatCertificateNumber(input) {
    // Remove any existing slashes and spaces
    let clean = input.replace(/[/\s]/g, '');
    
    // If the input is at least 8 characters (H2C2024001)
    if (clean.length >= 8) {
        // Insert slashes at appropriate positions
        return clean.slice(0, 3) + '/' + clean.slice(3, 7) + '/' + clean.slice(7);
    }
    return clean;
}

// Function to verify certificate
function verifyCertificate() {
    const certNumber = formatCertificateNumber(certificateInput.value.trim());
    
    // Hide both result and error boxes initially
    resultBox.style.display = 'none';
    errorBox.style.display = 'none';
    
    // Check if certificate exists
    if (certificateData[certNumber]) {
        const data = certificateData[certNumber];
        
        // Update certificate details
        holderName.textContent = data.name;
        certNo.textContent = data.certificateNo;
        
        // Show result box
        resultBox.style.display = 'block';
        
        // Add success animation
        resultBox.classList.add('fade-in');
        setTimeout(() => {
            resultBox.classList.remove('fade-in');
        }, 500);
    } else {
        // Show error box
        errorBox.style.display = 'block';
        
        // Add error animation
        errorBox.classList.add('shake');
        setTimeout(() => {
            errorBox.classList.remove('shake');
        }, 500);
    }
}

// Add input validation and auto-formatting
certificateInput.addEventListener('input', (e) => {
    let value = e.target.value.toUpperCase();
    
    // Format the certificate number
    if (value.length > 0) {
        value = formatCertificateNumber(value);
        e.target.value = value;
        verifyBtn.classList.add('active');
    } else {
        verifyBtn.classList.remove('active');
    }
});
