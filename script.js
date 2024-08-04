document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.background-container');
    const pageBackground = document.querySelector('.page-background');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            pageBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Dark background on hover
        });

        button.addEventListener('mouseout', () => {
            pageBackground.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Transparent background when not hovering
        });
    });
});
