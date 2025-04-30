// Small example - you can make icons clickable
document.getElementById('add').addEventListener('click', function() {
    alert("Upload feature coming soon!");
});
// Old listener for "add" button
document.getElementById('add').addEventListener('click', function() {
    alert("Upload feature coming soon!");
});

// Popup logic
const popup = document.getElementById('timePopup');
const closeBtn = document.getElementById('closePopup');

// Show popup after some time (example: 1 minute = 60000ms)
setTimeout(() => {
    popup.style.display = 'flex';
}, 60000); // Currently set to 60 seconds

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
