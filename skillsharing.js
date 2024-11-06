// skillsharing.js

document.addEventListener('DOMContentLoaded', () => {
    const skillSharingSection = document.getElementById('skillSharing');
    
    // Placeholder content for skill-sharing section
    skillSharingSection.innerHTML = `
        <h2>Skill Sharing</h2>
        <p>Share your skills with the community or find someone who can help you learn a new skill.</p>
        <div>
            <h3>Available Skills</h3>
            <ul>
                <li>Cooking Classes</li>
                <li>Gardening Tips</li>
                <li>Basic Computer Skills</li>
                <li>Language Exchange</li>
            </ul>
        </div>
        <div>
            <h3>Request a Skill</h3>
            <form id="skillRequestForm">
                <input type="text" id="requestedSkill" placeholder="Enter a skill you want to learn" required>
                <button type="submit">Request Skill</button>
            </form>
            <div id="skillRequestMessage"></div>
        </div>
    `;

    // Handle skill request submission
    document.getElementById('skillRequestForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const requestedSkill = document.getElementById('requestedSkill').value;
        const message = `Skill requested: ${requestedSkill}. We’ll try to match you with a mentor soon!`;
        document.getElementById('skillRequestMessage').textContent = message;
    });
});
