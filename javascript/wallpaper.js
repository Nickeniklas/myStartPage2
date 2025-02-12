console.log("wallpaper.js");

const baseUrl = "https://people.arcada.fi/~savonhen/startpage";

function randomWallpaper() {
    const images = [
        /*"/images/barcelona-sky_view_lowRes.jpg",
        "/images/Cafe-Wallpapers-HD-Free-download.jpg",
        "/images/stromso_picture_collab1_lowRes.png",
        "/images/stromso_picture_collab2_lowRes.png",
        "/images/inkoon_saaristo_salmi.jpg",
        "/images/wallpaper.png"*/
        "/images/kabböleterassi_sunset.jpg",
        "/images/kim_mökki.jpg"
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = baseUrl + images[randomIndex];

    document.querySelector('body').style.backgroundImage = "url(" + selectedImage + ")";
    console.log("todays background check: " + selectedImage)
}

randomWallpaper();
