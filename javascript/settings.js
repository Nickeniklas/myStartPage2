console.log("settings.js");

let isSettingsOpen = false;

const settingsButton = document.querySelector("#settingsButton");
const settingsUI = document.querySelector("#settingsUI");

settingsButton.addEventListener('click', openSettings);

// Close/Open settings function
function openSettings() {
    settingsUI.style.display = "flex";
    isSettingsOpen = true;
}

function closeSettings() {
    settingsUI.style.display = "none";
    isSettingsOpen = false;
}
function saveCloseSettings() {
    settingsUI.style.display = "none";
    isSettingsOpen = false;

    //  API key to local storage
    let key = document.querySelector("#apiInput").value;
    localStorage.setItem('weather_key', key);
    
    location.reload();
}

//  close settings from submit button
document.querySelector("#saveSettingsButton").addEventListener('click', saveCloseSettings);
//  close settings from clicking outside of the box
document.addEventListener('mouseup', function(event) {
    if (!event.target.closest("#settingsBox") && isSettingsOpen) {
        closeSettings();
    }
});



