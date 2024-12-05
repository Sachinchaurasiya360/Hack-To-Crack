let countdownInterval = null;

export function initializeCountdown() {
    // Stop any existing countdown
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }

    const countdownElement = document.querySelector('.countdown');
    if (!countdownElement) {
        console.error('Countdown element not found');
        return;
    }

    const countdownDate = new Date('2025-03-15T09:00:00').getTime();
    
    function updateCountdown() {
        try {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                if (countdownInterval) {
                    clearInterval(countdownInterval);
                    countdownInterval = null;
                }
                countdownElement.innerHTML = '<h2>Event Started!</h2>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const elements = {
                days: document.getElementById('days'),
                hours: document.getElementById('hours'),
                minutes: document.getElementById('minutes'),
                seconds: document.getElementById('seconds')
            };

            // Check if all elements exist
            const missingElements = Object.entries(elements)
                .filter(([_, element]) => !element)
                .map(([id]) => id);

            if (missingElements.length > 0) {
                console.error('Missing countdown elements:', missingElements);
                return;
            }

            // Update the elements
            elements.days.textContent = String(days).padStart(2, '0');
            elements.hours.textContent = String(hours).padStart(2, '0');
            elements.minutes.textContent = String(minutes).padStart(2, '0');
            elements.seconds.textContent = String(seconds).padStart(2, '0');
        } catch (error) {
            console.error('Error updating countdown:', error);
            if (countdownInterval) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            }
        }
    }

    // Initial update
    updateCountdown();
    
    // Start the interval
    countdownInterval = setInterval(updateCountdown, 1000);

    // Return a cleanup function
    return () => {
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    };
}
