console.log("wallpaper.js");

const baseUrl = window.location.origin;

console.log(window.location.origin);

function randomWallpaper() {
    const images = [
        "/images/barcelona-sky_view_lowRes.jpg",
        "/images/inkoon_saaristo_salmi.jpg",
        "/images/wallpaper.png",
        "/images/arabianranta_spring_EDIT_compressed.jpg",
        "/images/kabböleterassi_sunset.jpg",
        "/images/kim_mökki.jpg",
        "/images/berlin1.jpg",
        "/images/berlin2.jpg",
        "/images/berlin3.jpg",
        "/images/berlin4.jpg",
        "/images/berlin5.jpg",
        "/images/berlin6.jpg",
        "/images/airplane_view.jpg",
        "/images/airplane_view2.jpg",
        "/images/kalasatama-sompasaari.jpg",
        "/images/kabbole_sea.jpg",
        "/images/arabiankirjaston-puut.jpg",
        "/images/kabbole_sea.jpg",

    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = baseUrl + images[randomIndex];

    document.querySelector('body').style.backgroundImage = "url(" + selectedImage + ")";
    console.log("todays background check: " + selectedImage)
}

randomWallpaper();
