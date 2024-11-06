// resourcesharing.js

document.addEventListener('DOMContentLoaded', () => {
    const resourceSharingSection = document.getElementById('resourceSharing');
    
    // Placeholder content for resource sharing section
    resourceSharingSection.innerHTML = `
        <h2>Resource Sharing</h2>
        <p>Share and find resources within the community to help each other out!</p>
        <div>
            <h3>Available Resources</h3>
            <ul id="resourceList">
                <li>Books on loan</li>
                <li>Gardening tools</li>
                <li>Extra chairs for events</li>
            </ul>
        </div>
        <div>
            <h3>Share a Resource</h3>
            <form id="resourceForm">
                <input type="text" id="resourceName" placeholder="Enter resource name" required>
                <button type="submit">Share Resource</button>
            </form>
            <div id="resourceMessage"></div>
        </div>
    `;

    // Handle resource form submission
    document.getElementById('resourceForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const resourceName = document.getElementById('resourceName').value;
        const resourceList = document.getElementById('resourceList');
        
        // Add the new resource to the list
        const newResource = document.createElement('li');
        newResource.textContent = resourceName;
        resourceList.appendChild(newResource);

        // Display confirmation message
        const message = `Resource "${resourceName}" has been shared successfully!`;
        document.getElementById('resourceMessage').textContent = message;

        // Clear the input field
        document.getElementById('resourceName').value = '';
    });
});
