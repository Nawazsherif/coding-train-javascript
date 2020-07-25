import express from "express";

async function initApp() {
    const app= express();

    app.use(express.static('public'));

    app.listen(3000);

    return app;
}

initApp().then(() => console.log("Listening on port 3000")).catch((err) => console.log(err));


