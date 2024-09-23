document.getElementById('reminderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;

    if (!time) {
        alert('Please select a valid time.');
        return;
    }

    const reminderText = `${day}, ${time} - ${activity}`;

    const reminderList = document.getElementById('reminderItems');
    const listItem = document.createElement('li');
    listItem.textContent = reminderText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        reminderList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    reminderList.appendChild(listItem);

    alert('Reminder Set: ' + reminderText);

    // Optionally, play a sound
    setTimeout(function() {
        alert('Time for: ' + activity);
    }, calculateTimeDifference(time));
});

function calculateTimeDifference(reminderTime) {
    const currentTime = new Date();
    const reminder = new Date();
    
    const [hours, minutes] = reminderTime.split(':');
    reminder.setHours(hours, minutes, 0);

    const timeDifference = reminder - currentTime;
    return timeDifference > 0 ? timeDifference : 0;
}
