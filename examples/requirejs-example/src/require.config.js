var require = {
    baseUrl: ".",
    app: "./",
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min",
        "fullpage": "./src/pepe",
        "fullpage.query": "./src/pepe",
    },
    shim: {
        "fullpage": { deps: ["jquery"] },
        "fullpage.query": { deps: ["fullpage"] }
    }
};
