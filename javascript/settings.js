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

    // weather API key to local storage
    let weatherKey = document.querySelector("#weatherApiKey").value;
    if (weatherKey != "") {
        localStorage.setItem('weather-api-key', weatherKey);
    }
    // news API
    let newsKey = document.querySelector("#newsApiKey").value;
    if (newsKey != "") {
        localStorage.setItem('news-api-key', newsKey);
    }    
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

// news hotlinks toggle
newsHotlinks = document.querySelector('#newsHotlinksContainer')
newsToggle = document.querySelector('#newsToggle')

newsToggle.addEventListener('click', (event)=> {
    // toggle visibility
    const isVisible = window.getComputedStyle(newsHotlinks).display !== "none";
    newsHotlinks.style.display = isVisible ? "none" : "flex";
    // scroll down the page
    if (!isVisible) newsHotlinks.scrollIntoView({ behavior: "smooth" }); 
})

