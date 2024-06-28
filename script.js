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

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const headerNavContainer = document.querySelector(".header-nav-container");

    hamburgerMenu.addEventListener("click", function() {
        headerNavContainer.classList.toggle("active");
    });
});

// Fetch and display education data
document.addEventListener("DOMContentLoaded", function() {
    fetch('json/education.json')
        .then(response => response.json())
        .then(data => displayEducationData(data))
        .catch(error => console.error('Error fetching education data:', error));
});

// Handle fetching the education data from the JSON file and adding it to the HTML
function displayEducationData(data) {
    const container = document.getElementById('education-container');

    data.forEach(school => {
        const schoolDiv = document.createElement('div');
        schoolDiv.classList.add('school');

        const schoolInfo = document.createElement('div');
        schoolInfo.classList.add('school-info');

        const schoolName = document.createElement('div');
        schoolName.textContent = school.SchoolName;
        schoolName.classList.add('school-name');
        schoolInfo.appendChild(schoolName);

        const dates = document.createElement('div');
        dates.textContent = school.Dates;
        dates.classList.add('school-dates');
        schoolInfo.appendChild(dates);

        const degreeInfo = document.createElement('div');
        degreeInfo.classList.add('degree-info');

        const degree = document.createElement('div');
        degree.textContent = school.Degree;
        degree.classList.add('school-degree');
        degreeInfo.appendChild(degree);

        const gpa = document.createElement('div');
        gpa.textContent = `GPA: ${school.GPA.toFixed(2)}`;
        gpa.classList.add('school-gpa');
        degreeInfo.appendChild(gpa);

        schoolDiv.appendChild(schoolInfo);
        schoolDiv.appendChild(degreeInfo);

        container.appendChild(schoolDiv);
    });
}