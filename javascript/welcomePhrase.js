console.log("welcomePhrase.js");

function randomPhrase() {
    const phrases = [
        "Hello There!",
        "Welcome back!",
        "Good Day, Sir!",
        "Greetings, Traveler!",
        "Live, Love, Laugh <3",
        "Welcome to the fun zone! Let's get this party started!",
        "Greetings, friend! Ready to have some fun?",
        "Welcome aboard! Get ready for a wild ride!",
        "Step right up and make yourself at home! The fun is about to begin!",
        "Welcome to the club! Let's make some memories together!",
        "Hello there! Get comfy and let's enjoy some good times!",
        "Welcome, welcome, welcome! It's great to have you here!",
        "Hey, glad you made it! Let's dive into the fun!",
        "Welcome, new friend! Let's create some awesome moments together!",
        "Step into the joy zone! Fun times await!",
        "Hey there, stranger! Ready to have a blast?",
        "Welcome to the party! Get ready for some laughs and good vibes!",
        "Greetings, lovely human! Let's make today amazing!",
        "Welcome to the family! Let's make some unforgettable memories!",
        "Hello, hello, hello! It's wonderful to see you here!",
        "Hey, hey, hey! Let's kick back and enjoy some good times!",
        "Welcome to the good life! Let's make the most of it!",
        "Hey, friend! Get ready for some awesome adventures!",
        "Welcome, adventurer! Let's embark on a journey of fun and laughter!",
        "Greetings and salutations! Let's make today a day to remember!",
        "Welcome, sunshine! Let's brighten up this day!",
        "Hey there, superstar! Ready to shine bright?",
        "Welcome to the good vibes zone! Let's spread some positivity!",
        "Hello, happiness! Let's make today a joyful one!",
        "Hey, rockstar! Ready to conquer the day?",
        "Welcome to the land of smiles! Let's make each other grin!",
        "Hello, happiness! Let's sprinkle some joy around!",
        "Hey, sparkplug! Let's ignite some excitement!",
        "Welcome to the joyride! Let's buckle up and enjoy the journey!",
        "Hey there, ray of sunshine! Let's bask in the warmth of good times!",
        "Welcome to the laughter factory! Let's crack some jokes and giggle together!",
        "Hey, smiley face! Let's turn that frown upside down!",
        "Welcome to the laughter club! Let's LOL our way through the day!",
        "Hey, joy generator! Let's power up and spread some happiness!",
        "Welcome to the happiness hub! Let's create some cheerful memories!",
        "Hey there, happiness hero! Ready to save the day with smiles?",
        "Welcome to the joy junction! Let's hop on the happiness express!",
        "Hey, happiness architect! Let's construct some joyful moments!",
        "Welcome to the cheer squad! Let's cheer each other on to victory!",
        "Hey, joy juggler! Let's keep those smiles in the air!"
    ];

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const selectedPhrase = phrases[randomIndex];

    document.querySelector('#welcomePhrase').innerHTML = selectedPhrase;
}

randomPhrase();