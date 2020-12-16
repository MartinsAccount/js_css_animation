function pageLoad() {
    let rootE = document.getElementById("root");

    let myObjects = [
        {
            tag: "h1",
            content: "Mészáros Martin",
        },
        {
            tag: "p",
            content: "Frontend developer",
        },
    ];

    // for (let i = 0; i < myObjects.length; i++) {}
    // Ha az "i" -re nincs szükségünk csak az elemekre akkor lehet egyszerűbben is :
    for (myObject of myObjects) {
        // root elemhez html elementet adunk az objektumból és hozzá a content
        let createTag = document.createElement(myObject.tag);
        rootE.appendChild(createTag);
        createTag.insertAdjacentHTML("beforeend", myObject.content);

        // Rövidebb verzió, ugyanúgy működik
        /* document.getElementById("root").insertAdjacentHTML(
            "beforeend",
            `
            <${myObject.tag}>${myObject.content}</${myObject.tag}
        `
        ); */
    }

    rootE.addEventListener("click", function () {
        rootE.classList.toggle("clicked");
    });
}

window.addEventListener("load", pageLoad);
