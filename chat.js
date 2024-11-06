// chat.js

document.addEventListener('DOMContentLoaded', () => {
    const chatSection = document.getElementById('chat');
    
    // Basic chat UI
    chatSection.innerHTML = `
        <h2>Community Chat</h2>
        <p>Chat with your neighbors!</p>
        <div id="chatWindow" style="border: 1px solid #ccc; padding: 10px; height: 200px; overflow-y: auto;">
            <div><strong>John:</strong> Hello everyone! Excited for the upcoming events?</div>
            <div><strong>Sarah:</strong> Yes! Can't wait to meet everyone!</div>
        </div>
        <form id="chatForm" style="margin-top: 10px;">
            <input type="text" id="chatInput" placeholder="Type your message here" required>
            <button type="submit">Send</button>
        </form>
    `;

    // Handle chat message submission
    document.getElementById('chatForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const chatInput = document.getElementById('chatInput');
        const chatWindow = document.getElementById('chatWindow');

        // Append message to chat window
        const message = chatInput.value;
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<strong>You:</strong> ${message}`;
        chatWindow.appendChild(messageDiv);

        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Clear the input field
        chatInput.value = '';
    });
});
