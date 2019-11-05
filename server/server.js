let ex = require("express");
let fs = require("fs");
i = 0;
let urls;
fs.readFile(__dirname + "/urls.txt", "utf8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        urls = data.split("\n");
        let i = 0;
    }
});
let app = ex();
let page_number = 1;
app.get("/photo/:page/", (req, res) => {
    page_number = req.url.split("/")[2];
    let start = (page_number) * 20;
    let end = start + 20;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.send(urls.slice(start, end));
    console.log(urls.slice(start, end));
    res.end();
});
app.listen(5500);
