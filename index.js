const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const vincentSection = document.getElementById("vincent");
const gustavSection = document.getElementById("gustav");
const josephSection = document.getElementById("joseph");

vincentSection.innerHTML += `
    <div class="container">
        <header>
                <img class="logo" src="images/logo.png">
                <img class="user-avatar" src="images/user-avatar.png">
        </header>

        <section>
                <div class="user">
                    <img class="user-avatar" src="${posts[0].avatar}"> 
                    <div class="name-location">
                        <p class="name">${posts[0].name}</p>
                        <p>${posts[0].location}</p>
                    </div>
                </div>
                <img class="post" src="${posts[0].post}"> 
                <div class="buttons">
                    <img id="like-btn-vincent" class="icons" src="${"images/icon-heart.png"}">
                    <img class="icons" src="${"images/icon-comment.png"}">
                    <img class="icons" src="${"images/icon-dm.png"}">
                </div>
                <p id="vincentLikes" class="likes-counter">${posts[0].likes} likes</p>
                <p class="comment"><span>${posts[0].username}</span> ${posts[0].comment}</p>
        </section>
    </div>
    `
gustavSection.innerHTML += `
    <div class="container">
        <section>
                <div class="user">
                    <img class="user-avatar" src="${posts[1].avatar}"> 
                    <div class="name-location">
                        <p class="name">${posts[1].name}</p>
                        <p>${posts[1].location}</p>
                    </div>
                </div>
                <img class="post" src="${posts[1].post}"> 
                <div class="buttons">
                    <img id="like-btn-gustav" class="icons" src="${"images/icon-heart.png"}">
                    <img class="icons" src="${"images/icon-comment.png"}">
                    <img class="icons" src="${"images/icon-dm.png"}">
                </div>
                <p id="gustavLikes" class="likes-counter">${posts[1].likes} likes</p>
                <p class="comment"><span>${posts[1].username}</span> ${posts[1].comment}</p>
        </section>
    </div>
`
josephSection.innerHTML += `
    <div class="container">
        <section>
                <div class="user">
                    <img class="user-avatar" src="${posts[2].avatar}"> 
                    <div class="name-location">
                        <p class="name">${posts[2].name}</p>
                        <p>${posts[2].location}</p>
                    </div>
                </div>
                <img class="post" src="${posts[2].post}"> 
                <div class="buttons">
                    <img id="like-btn-joseph" class="icons" src="${"images/icon-heart.png"}">
                    <img class="icons" src="${"images/icon-comment.png"}">
                    <img class="icons" src="${"images/icon-dm.png"}">
                </div>
                <p id="josephLikes" class="likes-counter">${posts[2].likes} likes</p>
                <p class="comment"><span>${posts[2].username}</span> ${posts[2].comment}</p>
        </section>
    </div>
`

const addLikesVincent = document.getElementById("like-btn-vincent");
const addLikesGustav = document.getElementById("like-btn-gustav");
const addLikesJoseph = document.getElementById("like-btn-joseph")

const vincentLikes = document.getElementById("vincentLikes");
const gustavLikes = document.getElementById("gustavLikes");
const josephLikes = document.getElementById("josephLikes");

let likesCountVincent = posts[0].likes
let likesCountGustav = posts[1].likes
let likesCountJoseph = posts[2].likes

addLikesVincent.addEventListener ("click", function() {

    addLikesVincent.setAttribute("src", "images/fill-heart.png");

    while(likesCountVincent === likesCountVincent) {
        likesCountVincent += 1
        if (likesCountVincent = 22){
            break;
        } else {
            likesCountVincent++
        }
    }
    vincentLikes.innerHTML =`
        ${likesCountVincent} likes
    `
});

addLikesGustav.addEventListener ("click", function() {

    addLikesGustav.setAttribute("src", "images/fill-heart.png");

    while(likesCountGustav === likesCountGustav) {
        likesCountGustav += 1
        if (likesCountGustav = 5){
            break;
        } else {
            likesCountGustav++
        }
    }
    gustavLikes.innerHTML =`
    ${likesCountGustav} likes
    `
});

addLikesJoseph.addEventListener ("click", function() {

    addLikesJoseph.setAttribute("src", "images/fill-heart.png");

    while(likesCountJoseph === likesCountJoseph) {
        likesCountJoseph += 1
        if (likesCountJoseph = 153){
            break;
        } else {
            likesCountJoseph++
        }
    }
    josephLikes.innerHTML =`
    ${likesCountJoseph} likes
    `
});

