// events.js

document.addEventListener('DOMContentLoaded', () => {
    const eventsSection = document.getElementById('events');
    
    // Placeholder content for events section
    eventsSection.innerHTML = `
        <h2>Neighborhood Events</h2>
        <p>Stay updated with events happening in your community!</p>
        <div>
            <h3>Upcoming Events</h3>
            <ul>
                <li>Community Clean-Up - Saturday, Nov 10</li>
                <li>Potluck Gathering - Sunday, Nov 18</li>
                <li>Book Club Meeting - Wednesday, Nov 21</li>
                <li>Holiday Craft Fair - Saturday, Dec 1</li>
            </ul>
        </div>
        <div>
            <h3>Register for an Event</h3>
            <form id="eventRegistrationForm">
                <input type="text" id="eventName" placeholder="Enter event name" required>
                <button type="submit">Register</button>
            </form>
            <div id="eventRegistrationMessage"></div>
        </div>
    `;

    // Handle event registration
    document.getElementById('eventRegistrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const eventName = document.getElementById('eventName').value;
        const message = `You have successfully registered for ${eventName}. See you there!`;
        document.getElementById('eventRegistrationMessage').textContent = message;
    });
});
