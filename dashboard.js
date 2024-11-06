// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        taskBoard: document.getElementById('taskBoard'),
        resourceSharing: document.getElementById('resourceSharing'),
        skillSharing: document.getElementById('skillSharing'),
        events: document.getElementById('events'),
        chat: document.getElementById('chat'),
    };

    function showSection(sectionId) {
        Object.values(sections).forEach(section => section.classList.remove('active'));
        sections[sectionId].classList.add('active');
    }

    document.getElementById('taskBoardBtn').addEventListener('click', () => showSection('taskBoard'));
    document.getElementById('resourceSharingBtn').addEventListener('click', () => showSection('resourceSharing'));
    document.getElementById('skillSharingBtn').addEventListener('click', () => showSection('skillSharing'));
    document.getElementById('eventsBtn').addEventListener('click', () => showSection('events'));
    document.getElementById('chatBtn').addEventListener('click', () => showSection('chat'));

// Logout button functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    // Firebase Auth logout
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            console.log("User logged out");
            window.location.href = "login.html"; // Redirect to login page after logout
        })
        .catch((error) => {
            console.error("Logout error:", error); // Log errors
        });
});
});

