document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.background-container');
    const pageBackground = document.querySelector('.page-background');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            pageBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';  
        });

        button.addEventListener('mouseout', () => {
            pageBackground.style.backgroundColor = 'rgba(0, 0, 0, 0)';  
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-links a');
    const pageBackground = document.querySelector('.body-color');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            pageBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';  
        });

        button.addEventListener('mouseout', () => {
            pageBackground.style.backgroundColor = 'rgba(0, 0, 0, 0)';  
        });
    });
});
