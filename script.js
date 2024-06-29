// Find the key.
let secret1 = 'cmVk'
let secret2 = 'SSdt'
let secret3 = 'IGhp'
let secret4 = 'IQ=='

// On page load, set up a listener for the menu button and fetch all the appropriate json files
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const headerNavContainer = document.querySelector(".header-nav-container");

    hamburgerMenu.addEventListener("click", function() {
        headerNavContainer.classList.toggle("active");
    });

    fetch('json/education.json')
        .then(response => response.json())
        .then(data => displayEducationData(data))
        .catch(error => console.error('Error fetching education data:', error));

    fetch('json/experience.json')
        .then(response => response.json())
        .then(data => displayExperienceData(data))
        .catch(error => console.error('Error fetching experience data:', error));

    fetch('json/projects.json')
        .then(response => response.json())
        .then(data => displayProjectsData(data))
        .catch(error => console.error('Error fetching projects data:', error));

    fetch('json/achievements.json')
        .then(response => response.json())
        .then(data => displayAchievementsData(data))
        .catch(error => console.error('Error fetching achievements data:', error));

    fetch('json/skills.json')
        .then(response => response.json())
        .then(data => displaySkillsData(data))
        .catch(error => console.error('Error fetching skills data:', error));
});

// Extract the education data from the json file, then add it to the page
function displayEducationData(data) {
    const container = document.getElementById('education-container');
    data.forEach(school => {
        const schoolDiv = document.createElement('div');
        schoolDiv.classList.add('school');

        const schoolNameAndDateContainer = document.createElement('div');
        schoolNameAndDateContainer.classList.add('school-name-and-date-container');

        const schoolName = document.createElement('span');
        schoolName.textContent = school.SchoolName;
        schoolName.classList.add('school-name');
        schoolNameAndDateContainer.appendChild(schoolName);

        const dates = document.createElement('span');
        dates.textContent = school.Dates;
        dates.classList.add('school-dates');
        schoolNameAndDateContainer.appendChild(dates);

        const degreeAndGpaContainer = document.createElement('div');
        degreeAndGpaContainer.classList.add('degree-and-gpa-container');

        const degree = document.createElement('span');
        degree.textContent = school.Degree;
        degree.classList.add('school-degree');
        degreeAndGpaContainer.appendChild(degree);

        const gpa = document.createElement('span');
        gpa.textContent = `GPA: ${school.GPA.toFixed(1)}`;
        gpa.classList.add('school-gpa');
        degreeAndGpaContainer.appendChild(gpa);

        schoolDiv.appendChild(schoolNameAndDateContainer);
        schoolDiv.appendChild(degreeAndGpaContainer);

        container.appendChild(schoolDiv);
    });
}

// Extract the experience data from the json file, then add it to the page
function displayExperienceData(data) {
    const container = document.getElementById('experience-container');
    data.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job');

        const jobTitleAndDatesContainer = document.createElement('div');
        jobTitleAndDatesContainer.classList.add('job-title-and-dates-container');

        const role = document.createElement('span');
        role.textContent = job.role;
        role.classList.add('job-title');
        jobTitleAndDatesContainer.appendChild(role);

        const duration = document.createElement('span');
        duration.textContent = job.duration;
        duration.classList.add('job-dates');
        jobTitleAndDatesContainer.appendChild(duration);

        const companyAndLocationContainer = document.createElement('div');
        companyAndLocationContainer.classList.add('company-and-location-container');

        const company = document.createElement('span');
        company.textContent = job.company;
        company.classList.add('job-company');
        companyAndLocationContainer.appendChild(company);

        const location = document.createElement('span');
        location.textContent = job.location;
        location.classList.add('job-location');
        companyAndLocationContainer.appendChild(location);

        jobDiv.appendChild(jobTitleAndDatesContainer);
        jobDiv.appendChild(companyAndLocationContainer);

        const dutiesList = document.createElement('ul');
        dutiesList.classList.add('job-duties');
        job.duties.forEach(duty => {
            const dutyItem = document.createElement('li');
            dutyItem.textContent = duty;
            dutiesList.appendChild(dutyItem);
        });

        jobDiv.appendChild(dutiesList);
        container.appendChild(jobDiv);
    });
}

// Extract the projects data from the json file, then add to the page
function displayProjectsData(data) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    data.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectHeader = document.createElement('div');
        projectHeader.classList.add('project-header');

        const projectName = document.createElement('span');
        projectName.textContent = project.projectName;
        projectName.classList.add('project-name');
        projectHeader.appendChild(projectName);

        // Conditionally add GitHub link if repoLink is provided
        if (project.repoLink) {
            const repoLink = document.createElement('a');
            repoLink.href = project.repoLink;
            repoLink.target = "_blank";
            repoLink.innerHTML = '<i class="ci ci-github ci-2x"></i>';
            projectHeader.appendChild(repoLink);
        }

        projectDiv.appendChild(projectHeader);

        const skillsUsed = document.createElement('div');
        skillsUsed.classList.add('skills-used');
        skillsUsed.innerHTML = `<span class="skills-label">Skills Used: </span>${project.skillsUsed}`;
        projectDiv.appendChild(skillsUsed);

        const description = document.createElement('p');
        description.textContent = project.description;
        description.classList.add('project-description');
        projectDiv.appendChild(description);

        container.appendChild(projectDiv);
    });
}

//Extract the achievements data from the json file, then add it to the page
function displayAchievementsData(data) {
    const container = document.getElementById('achievements-container');
    container.innerHTML = ''; // Clear any existing content

    data.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.classList.add('achievement');

        const achievementName = document.createElement('div');
        achievementName.textContent = achievement.achievementName;
        achievementName.classList.add('achievement-name');
        achievementDiv.appendChild(achievementName);

        const issuer = document.createElement('div');
        issuer.textContent = achievement.issuer;
        issuer.classList.add('issuer');
        achievementDiv.appendChild(issuer);

        const description = document.createElement('div');
        description.textContent = achievement.description;
        description.classList.add('description');
        achievementDiv.appendChild(description);

        container.appendChild(achievementDiv);
    });
}

// Extract the skills data from the json file, then add it to the page
function displaySkillsData(data) {
    const container = document.getElementById('skills-container');
    const categoryNames = {
        languages: "Languages",
        frameworks: "Frameworks",
        databases: "Databases",
        cloudPlatforms: "Cloud Platforms",
        devTools: "Developer Tools"
    };

    for (const category in data) {
        if (data.hasOwnProperty(category)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skill-category');

            const categoryHeader = document.createElement('h3');
            categoryHeader.textContent = categoryNames[category] || category;
            categoryDiv.appendChild(categoryHeader);

            const skillsList = document.createElement('p');
            skillsList.classList.add('skills-list');
            skillsList.textContent = data[category];
            categoryDiv.appendChild(skillsList);

            container.appendChild(categoryDiv);
        }
    }
}