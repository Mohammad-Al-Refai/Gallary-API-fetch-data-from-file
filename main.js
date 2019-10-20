let images = document.getElementsByTagName("img");
let path;
let targets;
let state;
let title=document.createElement("p");
let imageArray = [];
let close = document.getElementById("close");
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("state", "0");
    images[i].addEventListener("click", s => {
        path = images[i].src;
        images[i].setAttribute("state", "1");
        targets = i;
        showImage(path);
        console.log("Clisck on:" + targets);
        title.innerHTML="img"+targets;

    });
}
getImages();
function showImage(path) {
    let box = document.createElement("div");
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
    title.className="title";
    title.innerHTML="empty";
    next.innerHTML = ">";
    ss.appendChild(img);
    ss.appendChild(next);
    ss.appendChild(back);
    ss.appendChild(close);
    ss.appendChild(title);
    box.appendChild(ss);
    back.setAttribute("click","1");
    next.setAttribute("click","1");
    document.body.appendChild(box);
    close.addEventListener("click", r => {
        images[targets].setAttribute("state", "0");
        document.body.removeChild(box);

    });
    next.addEventListener("click", r => {
        if(targets==imageArray.length-1){
            targets=imageArray.length-1;
        }else{
            img.src = imageArray[targets=targets+1].src;
            title.innerHTML="img"+targets;
            console.log(targets);
           
        
        }
       
    });

    back.addEventListener("click", r => {
        if(targets==0){
            targets=0;
        }else{
            img.src = imageArray[targets=targets-1].src;
            title.innerHTML="img"+targets;

        }
        
      
    });
}
function getImages() {
    for (let i = 0; i < images.length; i++) {
        imageArray.push(images[i]);
    }

}