function showWorkExperience() {
    const workExperienceSection = document.getElementById('experience');
    if (workExperienceSection.style.display === 'none' || workExperienceSection.style.display === '') {
        workExperienceSection.style.display = 'block';
    } else {
        workExperienceSection.style.display = 'none';
    }
}

function downloadResume() {
    alert('Resume download triggered!');
    // Here you can implement the download functionality using JavaScript or link to the file
}

function contactMe() {
    alert('Contact form or email action triggered!');
    // Implement the contact functionality here
}