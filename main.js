let images = document.getElementsByClassName("img");
let bag = document.getElementById("bag");
let g = document.getElementById("g");
let mor = document.getElementById("more");
let box;
let img;
let path;
let y=0;
let f;
let page = 1;
let urle = [];
let fetchLenght;
let targets;
let state;
let cr = 0;
let i;
let imageURL = [];
let title = document.createElement("p");
let imageArray = [];
getImageURL();
check();
let close = document.getElementById("close");
function showImage(path) {
    box = document.createElement("div");
    box.className = "box";
    img = document.createElement("img");
    img.className = "imgv";
    ss = document.createElement("div");
    ss.className = "ss";
    close = document.createElement("span");
    close.className = "close";
    close.id = "close";
    close.innerHTML = "×";
    img.src = path;
    back = document.createElement("button");
    back.className = "next";
    back.id = "back";
    back.innerHTML = "<";
    next = document.createElement("button");
    next.className = "back";
    next.id = "back";
    title.className = "title";
    title.innerHTML = "empty";
    next.innerHTML = ">";
    ss.appendChild(img);
    ss.appendChild(next);
    ss.appendChild(back);
    ss.appendChild(close);
    ss.appendChild(title);
    box.appendChild(ss);
    back.setAttribute("click", "1");
    next.setAttribute("click", "1");
    document.body.appendChild(box);
    close.addEventListener("click", r => {
    alert("soon...");
    });
    next.addEventListener("click", r => {
        if (targets == images.length - 1) {
            targets = images.length - 1;
        } else {
            img.src = urle[targets = targets + 1];
            title.innerHTML = "img" + targets;
            console.log(urle[targets = targets + 1]);
        }
    });
    back.addEventListener("click", r => {
        if (targets == 0) {
            targets = 0;
        } else {
            img.src = urle[targets = targets - 1];
            console.log(urle[targets = targets - 1]);
            title.innerHTML = "img" + targets;
        }
    });
}
function getImageURL() {
    fetch("http://localhost:5500/photo/" + page+++"/", {
        method: 'GET'
    }).then(data => {
        mor.innerHTML = "Loading...";
        return data.json();
    }).then(re => {
        urle=re;
        mor.innerHTML = "More";
        for(let e=0;e<urle.length;e++){
            check();
            downloadNewImageAndSet(e);
            mor.innerHTML = "More";
            }
            console.log(urle)

    });
}
function downloadNewImageAndSet(u) {
    g.innerHTML+=`<div class="s">
    <img src="${urle[u]}" class="img" state=1> 
    </div>
    `;
    for (let y = 0; y < images.length; y++) {
        images[y].addEventListener("click", t => {
            path = t.target.src;
            showImage(path);
        });
    }
}
function more() {
    getImageURL();
    // for(let e=0;e<urle.length;e++){
    // downloadNewImageAndSet(e);
    // check();
    mor.innerHTML = "More";

    // }

    if (page == 4) {
    mor.setAttribute("disabled","");
    mor.innerHTML = "finish";

}
}
function check() {
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("state", "0");
        images[i].addEventListener("click", s => {
            path = images[i].src;
            images[i].setAttribute("state", "1");
            targets = i;
            console.log("Clisck on:" + targets);
            title.innerHTML = "img" + targets;
        });
    }
}
