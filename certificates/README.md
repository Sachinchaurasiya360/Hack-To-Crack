# Certificates Directory

This directory contains the PDF certificates for Hack to Crack 2.0 participants.

## Certificate Naming Convention

Certificates follow this naming pattern: `H2C2024XXX.pdf` where:
- H2C: Hack to Crack
- 2024: Year
- XXX: Sequential number (001, 002, etc.)

## Certificate Data Structure

The certificate data is stored in `js/certificate.js` with the following structure:

```javascript
{
    "H2C2024001": {
        name: "Participant Name",
        certificateNo: "H2C2024001",
        downloadUrl: "certificates/H2C2024001.pdf"
    }
}
```

## Adding New Certificates

1. Add the PDF certificate to this directory
2. Update the certificateData object in `js/certificate.js`
3. Follow the naming convention for consistency
