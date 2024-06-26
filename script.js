// Extract the appropriate HTML elements
let intro = document.querySelector('.intro');
let introHeader = document.querySelector('.intro-header');
let splashSpan = document.querySelectorAll('.splash');

// On load, display the splash screen
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        splashSpan.forEach((span, index) => {
            // Set a timeout to handle how quickly the three intro spans will appear ("Hello", "world!", and Earth icon)
            setTimeout( () => {
                span.classList.add('active');
            }, (index + 1) * 400)
        });

        // Set a timeout for the welcome prompt text - how long it will be displayed on the screen
        setTimeout(() => {
            splashSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (index + 1) * 30)
            })
        }, 2000)    // 2 seconds

        // Set a timeout for the scroll up animation that dismisses that the splash screen
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2000)    // 2 seconds
    })
})