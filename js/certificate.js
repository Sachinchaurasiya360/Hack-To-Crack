// Sample certificate data (in production, this would come from a server)
const certificateData = {
    "H2C2024001": {
        name: "John Doe",
        certificateNo: "H2C2024001",
        downloadUrl: "certificates/H2C2024001.pdf"
    },
    "H2C2024002": {
        name: "Jane Smith",
        certificateNo: "H2C2024002",
        downloadUrl: "certificates/H2C2024002.pdf"
    },
    "H2C2024003": {
        name: "Mike Johnson",
        certificateNo: "H2C2024003",
        downloadUrl: "certificates/H2C2024003.pdf"
    }
};

// Get DOM elements
const certificateInput = document.getElementById('certificateNo');
const verifyBtn = document.getElementById('verifyBtn');
const resultBox = document.getElementById('resultBox');
const errorBox = document.getElementById('errorBox');
const holderName = document.getElementById('holderName');
const certNo = document.getElementById('certNo');
const downloadLink = document.getElementById('downloadLink');

// Add event listener for verify button
verifyBtn.addEventListener('click', verifyCertificate);

// Add event listener for Enter key
certificateInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verifyCertificate();
    }
});

// Function to verify certificate
function verifyCertificate() {
    const certNumber = certificateInput.value.trim();
    
    // Hide both result and error boxes initially
    resultBox.style.display = 'none';
    errorBox.style.display = 'none';
    
    // Check if certificate exists
    if (certificateData[certNumber]) {
        const data = certificateData[certNumber];
        
        // Update certificate details
        holderName.textContent = data.name;
        certNo.textContent = data.certificateNo;
        downloadLink.href = data.downloadUrl;
        
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

// Add input validation
certificateInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase();
    if (e.target.value.length > 0) {
        verifyBtn.classList.add('active');
    } else {
        verifyBtn.classList.remove('active');
    }
});
