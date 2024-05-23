const posts = [
    {
        "articleId": "article-1",
        "author":"Author Arthurito",
        "title": "En el principio todo fue creado desde el caos",
        "image": "post-1-image.jpg",
        "prevText": "Texto preview. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["alfa", "beta","epsyle", "gamma", "delta","oo","phi"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-2",
        "author":"Author Arthurito",
        "title": "Tohu wa-Bohu, Versiculo.",
        "image": "post-2-image.jpg",
        "prevText": "Texto preview 2. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["epsyle", "phi","aa", "ghee"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-3",
        "author":"Author Arthurito",
        "title": "Top 10 Paginas de tutoriales de programación",
        "image": "post-3-image.jpg",
        "prevText": "Texto preview 3. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["eich", "ii", "jota", "kha"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-4",
        "author":"Author Arthurito",
        "title": "Probervios de William Blake",
        "image": "post-4-image.jpg",
        "prevText": "Texto preview 4. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["eru", "emu", "enu","aa", "oo", "pha","epsyle"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-5",
        "author":"Author Arthurito",
        "title": "Este titulo tiene cinco palabras",
        "image": "post-5-image.jpg",
        "prevText": "Texto preview 4. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["qiu", "ere"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    , {
        "articleId": "article-6",
        "author":"Author Arthurito",
        "title": "Post 6",
        "image": "post-6-image.jpg",
        "prevText": "Texto preview 4. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["es", "ti","epsyle", "uu"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    , {
        "articleId": "article-7",
        "author":"Author Arthurito",
        "title": "Post 7",
        "image": "post-7-image.jpg",
        "prevText": "Texto preview 4. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["wu", "ex", "ye", "omega"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-8",
        "author":"Author Arthurito",
        "title": "Post 8",
        "image": "post-8-image.jpg",
        "prevText": "Texto preview 8. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["wu", "ex", "ye", "omega"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-9",
        "author":"Author Arthurito",
        "title": "Post 9. El final!",
        "image": "post-7-image.jpg",
        "prevText": "Texto preview 4. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["wu", "ex", "ye", "omega"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

const imageCarrousel = [
    {
        "articleId":"article-1",
        "imageSet":["image.png","image2.png","image3.png","image4.png"]
    },
    {
        "articleId":"article-3",
        "imageSet":["image.png","image2.png","image3.png","image4.png"]
    }
]

export { posts, imageCarrousel };