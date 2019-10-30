let images = document.getElementsByClassName("img");
let bag = document.getElementById("bag");
let g = document.getElementById("g");
let mor=document.getElementById("more");
let box;
let path;
let page=1;
let urle=[];
let fetchLenght;
let targets;
let state;
let i;
let imageURL = [];
let title = document.createElement("p");
let imageArray = [];
getImageURL();
let close = document.getElementById("close");
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("state", "0");
    images[i].addEventListener("click", s => {
        path = images[i].src;
        images[i].setAttribute("state", "1");
        targets = i;
        showImage(path);
        console.log("Clisck on:" + targets);
        title.innerHTML = "img" + targets;
    });
}
function showImage(path) {
    box = document.createElement("div");
    box.className = "box";
    let img = document.createElement("img");
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
        // document.body.remove(box);
        document.body.remove(box);

    });
    next.addEventListener("click", r => {
        if (targets == imageArray.length - 1) {
            targets = imageArray.length - 1;
        } else {
            img.src = urle[0][1].url;
            title.innerHTML = "img" + targets;
            console.log(targets);


        }

    });
    back.addEventListener("click", r => {
        if (targets == 0) {
            targets = 0;
        } else {
            img.src = imageArray[targets = targets - 1];
            title.innerHTML = "img" + targets;
        }
    });
}

function getImageURL() {
    let h = new Headers();
    h.append("Authorization", "Bearer CJTuUpJoLIuvXyrfOz6aAFhf3q2B6VbLfgrp");
    fetch("https://gorest.co.in/public-api/photos?page="+page++, {
        method: "GET",
        headers: h
    }).then(data => {
        mor.innerHTML="Loading...";

        return data.json();
    }).then(re => {
      console.log(re.result);
      fetchLenght=re.result.length;
      urle.push(re.result);
      console.log(fetchLenght);
      for(let p=0;p<fetchLenght;p++){
    downloadNewImage(urle[0][p].url);
    console.log(urle[0][p].url);

    }
    for(let i=0;i<fetchLenght;i++){
    images[i].src=urle[0][i].url;
    console.log(urle[0][i].url);
    }
    mor.innerHTML="More";

    });
}
function downloadNewImage(urls) {
    let div1 = document.createElement("div");
    let imgd = document.createElement("img");
    imgd.setAttribute("state", "1");
    div1.className = "s";
    imgd.className = "img";
    imgd.setAttribute("src", urls);
    div1.appendChild(imgd);
    g.appendChild(div1);
    images = document.getElementsByTagName("img");
    for (let y = 0; y < images.length; y++) {
        images[y].addEventListener("click", t => {
        path = t.target.src;
        showImage(path);
        });
    }
    return urls;
}
function more() {
    getImageURL();
    mor.innerHTML="Loading...";

}    