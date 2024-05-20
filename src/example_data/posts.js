const posts = [
    {
        "articleId": "article-1",
        "title": "En el principio todo fue creado desde el caos",
        "image": "image.png",
        "prevText": "Texto preview. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["alfa", "beta", "gamma", "delta"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-2",
        "title": "Tohu wa-Bohu, Versiculo.",
        "image": "image.png",
        "prevText": "Texto preview 2. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["epsyle", "phi", "ghee"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-3",
        "title": "Salmo 98",
        "image": "image.png",
        "prevText": "Texto preview 3. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["eich", "ii", "jota", "kha"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-4",
        "title": "Probervios de William Blake",
        "image": "image.png",
        "prevText": "Texto preview 4. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["eru", "emu", "enu", "oo", "pha"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "articleId": "article-5",
        "title": "Post 5",
        "image": "image.png",
        "prevText": "Texto preview 4. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["qiu", "ere"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    , {
        "articleId": "article-6",
        "title": "Post 6",
        "image": "image.png",
        "prevText": "Texto preview 4. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        "keywords": ["es", "ti", "uu"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    , {
        "articleId": "article-7",
        "title": "Post 7",
        "image": "image.png",
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