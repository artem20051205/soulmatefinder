let photos_mens = [
    "man/Albert Einstein.png",
    "man/Atkinson_Rowan_crop.jpg",
    "man/Batman (fictional character).jpg",
    "man/Cristiano Ronaldo.jpg",
    "man/Darth Vader (Star Wars).jpg",
    "man/Deadpoo.jpg",
    "man/Dwayne Johnson.jpg",
    "man/Elon Musk.jpg",
    "man/GordonFreeman.jpg",
    "man/Gru.png",
    "man/Gru’s Minions (Despicable Me).jpg",
    "man/Homer_Simpson.png",
    "man/Iron_Man.jpg",
    "man/IShowSpeed.jpg",
    "man/Jack_Black.jpg",
    "man/John_Wick_Keanu.jpeg",
    "man/Kanye West.jpg",
    "man/Keanu_Reeves_at_TIFF_2025_02_(Cropped).jpg",
    "man/Kratos.png",
    "man/KSI.png",
    "man/Lionel Messi.jpg",
    "man/Luigi.png",
    "man/Mario.jpg",
    "man/MrBeast.jpg",
    "man/Peter Griffin.jpg",
    "man/Rick_Sanchez.png",
    "man/Saul Goodman.png",
    "man/Shaquille O’Neal.jpg",
    "man/Shrek.png",
    "man/Snoop_Dogg.jpg",
    "man/Sonic the Hedgehog.png",
    "man/Spider_man.png",
    "man/Thanos.jpeg",
    "man/Walter_White.png",
    "man/Will_s.jpg",
    "man/Yoda.png"
];

let fotos_vrouw = [
    "vrouw/Cleopatra.png"
];


function getRandomPhoto(choice) {
    const photos1 = photos_mens;
    const photos2 = fotos_vrouw;
    if (choice === "man") {
        if (photos1.length === 0) return;
        const randomIndex = Math.floor(Math.random() * photos1.length);
        const photo = photos1[randomIndex];
        const img = document.getElementById('photo');
        img.src = photo;
        console.log(photo);
    } else if (choice === "vrouw") {
        if (photos2.length === 0) return;
        const randomIndex = Math.floor(Math.random() * photos2.length);
        const photo = photos2[randomIndex];
        const img = document.getElementById('photo');
        img.src = photo;
        console.log(photo);
    }
}

let previousimages = [];


function storePreviousImage() {
    console.log("storePreviousImage called");
    const img = document.getElementById('photo');
    const currentSrc = img.src;
    console.log(currentSrc);
    if (currentSrc) {
        previousimages.push(currentSrc);
        console.log("previousimages");
    }
}

