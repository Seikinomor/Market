const products = [
    {
        title: "Reincarnation Of The Strongest Sword God",
        imageUrl: "https://media.lightnovelpub.me/novel/reincarnation-of-the-strongest-sword-god.jpg",
        rating: 3.8,
        author: "Qidian",
        genres: "Xianxia, Martial arts",
        chapterTitle: "Chapter 3665 - 739 - Holy Guard Arrives",
        chapterUrl: "https://lightnovelpub.me/book/reincarnation-of-the-strongest-sword-god/chapter-3665-739-holy-guard-arrives"
    },
    {
        title: "Blood Warlock: Succubus Partner In The Apocalypse",
        imageUrl: "https://media.lightnovelpub.me/novel/blood-warlock-succubus-partner-in-the-apocalypse-novel.jpg",
        rating: 4.1,
        author: "Webnovel",
        genres: "Romance, Adventure",
        chapterTitle: "Chapter 1340 Terrifying Power",
        chapterUrl: "https://lightnovelpub.me/book/blood-warlock-succubus-partner-in-the-apocalypse-novel/chapter-1340-terrifying-power"
    },
    {
        title: "Shadow Slave",
        imageUrl: "https://media.lightnovelpub.me/novel/shadow-slave.jpg",
        rating: 4.3,
        author: "Webnovel",
        genres: "Action, Adventure",
        chapterTitle: "Chapter 1280 Beauty and the Beast",
        chapterUrl: "https://lightnovelpub.me/book/shadow-slave/chapter-1280-beauty-and-the-beast"
    },
    {
        title: "Re: Evolution Online",
        imageUrl: "https://media.lightnovelpub.me/novel/re-evolution-online-novel.jpg",
        rating: 3.9,
        author: "Webnovel",
        genres: "Fantasy, Harem",
        chapterTitle: "Chapter 1159 Map of the forbidden territory",
        chapterUrl: "https://lightnovelpub.me/book/re-evolution-online-novel/chapter-1159-map-of-the-forbidden-territory"
    },
    {
        title: "Supreme Magus",
        imageUrl: "https://media.lightnovelpub.me/novel/supreme-magus-novel.jpg",
        rating: 4.0,
        author: "Webnovel",
        genres: "Fantasy, Action",
        chapterTitle: "Chapter 2818 Wayfinder (Part 2)",
        chapterUrl: "https://lightnovelpub.me/book/supreme-magus-novel/chapter-2818-wayfinder-part-2"
    },
    {
        title: "Martial God Asura",
        imageUrl: "https://media.lightnovelpub.me/novel/martial-god-asura-novel.jpg",
        rating: 4.5,
        author: "Wuxiaworld",
        genres: "Action, Fantasy",
        chapterTitle: "Chapter 5713: Old Friend Long Lin",
        chapterUrl: "https://lightnovelpub.me/book/martial-god-asura-novel/chapter-5713-old-friend-long-lin"
    },
    {
        title: "Infinite Mana In The Apocalypse",
        imageUrl: "https://media.lightnovelpub.me/novel/infinite-mana-in-the-apocalypse.jpg",
        rating: 3.9,
        author: "Webnovel",
        genres: "Adventure, Fantasy",
        chapterTitle: "Chapter 2618 Man of the Hour! I",
        chapterUrl: "https://lightnovelpub.me/book/infinite-mana-in-the-apocalypse/chapter-2618-man-of-the-hour-i"
    },
    {
        title: "Super Gene",
        imageUrl: "https://media.lightnovelpub.me/novel/super-gene.jpg",
        rating: 4.1,
        author: "Qidian International",
        genres: "Sci-fi, Mecha",
        chapterTitle: "Chapter 3462End - Epilogue",
        chapterUrl: "https://lightnovelpub.me/book/super-gene/chapter-3462"
    },
    {
        title: "I'm Secretly Married to a Big Shot",
        imageUrl: "https://media.lightnovelpub.me/novel/im-secretly-married-to-a-big-shot.jpg",
        rating: 4.0,
        author: "Webnovel",
        genres: "Romance, Josei",
        chapterTitle: "Chapter 3023 - The End (6)",
        chapterUrl: "https://lightnovelpub.me/book/im-secretly-married-to-a-big-shot/chapter-3024"
    },
    {
        title: "Reincarnated With The Strongest System",
        imageUrl: "https://media.lightnovelpub.me/novel/reincarnated-with-the-strongest-system.jpg",
        rating: 4.1,
        author: "Webnovel",
        genres: "Action, Adventure",
        chapterTitle: "Chapter 1474 Two Million Words Of Gratitude [FIN]",
        chapterUrl: "https://lightnovelpub.me/book/reincarnated-with-the-strongest-system/chapter-1474-two-million-words-of-gratitude-fin"
    },
    {
        title: "Almighty Daughter Runs The World",
        imageUrl: "https://media.lightnovelpub.me/novel/almighty-daughter-runs-the-world.jpg",
        rating: 3.9,
        author: "Webnovel",
        genres: "Josei, Romance",
        chapterTitle: "Chapter 2714 (END)",
        chapterUrl: "https://lightnovelpub.me/book/almighty-daughter-runs-the-world/chapter-2714-end"
    },
    {
        title: "My Vampire System",
        imageUrl: "https://media.lightnovelpub.me/novel/my-vampire-system.jpg",
        rating: 4.1,
        author: "Webnovel",
        genres: "Action, Fantasy",
        chapterTitle: "Chapter 2543 Everyone Changing",
        chapterUrl: "https://lightnovelpub.me/book/my-vampire-system/chapter-2543-everyone-changing"
    },
    {
        title: "Global Survival: 100 Times Cultivation Speed From The Start",
        imageUrl: "https://media.lightnovelpub.me/novel/global-survival-100-times-cultivation-speed-from-the-start-novel.jpg",
        rating: 3.9,
        author: "Webnovel",
        genres: "Action, Adventure",
        chapterTitle: "Chapter 1306 Change of Plan!",
        chapterUrl: "https://lightnovelpub.me/book/global-survival-100-times-cultivation-speed-from-the-start-novel/chapter-1306-change-of-plan"
    },
    {
        title: "Global Towers: Starting With The SSS-Rank Talent, God-Tier Extraction",
        imageUrl: "https://media.lightnovelpub.me/novel/global-towers-starting-with-the-sss-rank-talent-god-tier-extraction.jpg",
        rating: 4.0,
        author: "Webnovel",
        genres: "Action, Adventure",
        chapterTitle: "Chapter 1079 Breakthrough on the Spot",
        chapterUrl: "https://lightnovelpub.me/book/global-towers-starting-with-the-sss-rank-talent-god-tier-extraction/chapter-1079-breakthrough-on-the-spot"
    },
    {
        title: "My Three Wives Are Beautiful Vampires",
        imageUrl: "https://media.lightnovelpub.me/novel/my-three-wives-are-beautiful-vampires-novel.jpg",
        rating: 4.1,
        author: "Webnovel",
        genres: "Romance, Fantasy",
        chapterTitle: "Chapter 875: Cosmic Horror.",
        chapterUrl: "https://lightnovelpub.me/book/my-three-wives-are-beautiful-vampires-novel/chapter-875-cosmic-horror"
    },
    {
        title: "Dimensional Descent",
        imageUrl: "https://media.lightnovelpub.me/novel/dimensional-descent.jpg",
        rating: 4.0,
        author: "Webnovel",
        genres: "Fantasy, Adventure",
        chapterTitle: "Chapter 2335 True Sailor",
        chapterUrl: "https://lightnovelpub.me/book/dimensional-descent/chapter-2335-true-sailor"
    },
    {
        title: "War Sovereign Soaring The Heavens",
        imageUrl: "https://media.lightnovelpub.me/novel/war-sovereign-soaring-the-heavens-novel.jpg",
        rating: 3.9,
        author: "Qidian International",
        genres: "Xianxia, Martial arts",
        chapterTitle: "Chapter 4651 - 4651: The Divine Land and a Myriad of Daos",
        chapterUrl: "https://lightnovelpub.me/book/war-sovereign-soaring-the-heavens-novel/chapter-4651-4651-the-divine-land-and-a-myriad-of-daos"
    },
    {
        title: "Dual Cultivator Reborn [System In The Cultivation World]",
        imageUrl: "https://media.lightnovelpub.me/novel/dual-cultivator-reborn-system-in-the-cultivation-world.jpg",
        rating: 3.9,
        author: "Webnovel",
        genres: "Fantasy, Action",
        chapterTitle: "Chapter 870 Minister Hong Dao!",
        chapterUrl: "https://lightnovelpub.me/book/dual-cultivator-reborn-system-in-the-cultivation-world/chapter-870-minister-hong-dao"
    },
    {
        title: "Invincible",
        imageUrl: "https://media.lightnovelpub.me/novel/invincible-novel.jpg",
        rating: 3.9,
        author: "Qidian",
        genres: "Xuanhuan, Action",
        chapterTitle: "Chapter 3753: Finale II",
        chapterUrl: "https://lightnovelpub.me/book/invincible-novel/chapter-3753-finale-ii"
    },
    // Додайте інші продукти за аналогією
    // ...
];

function displayProducts() {
    const container = document.getElementById("productContainer");
    container.innerHTML = ""; // Очистити попередні продукти

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const imageElement = document.createElement("img");
        imageElement.src = product.imageUrl;
        imageElement.alt = product.title;
        imageElement.style.width = "200px"; // Змініть розмір зображення за потребою

        const titleElement = document.createElement("h2");
        titleElement.textContent = product.title;

        const detailsElement = document.createElement("p");
        detailsElement.innerHTML = `Rating: ${product.rating}<br>
                                    Author: ${product.author}<br>
                                    Genres: ${product.genres}<br>
                                    Chapter Title: ${product.chapterTitle}`;

        productElement.appendChild(imageElement);
        productElement.appendChild(titleElement);
        productElement.appendChild(detailsElement);

        container.appendChild(productElement);
    });
}

// Викликати функцію для відображення продуктів при завантаженні сторінки
displayProducts();
