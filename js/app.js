function makeRed(event){
    event[`target`][`style`][`color`] = `red`;
    //event.target.style.color = `red`;
};
let spot = document.getElementById(`spots`);
spot.addEventListener(`click`, makeRed);
// Above is an event for clicking the text.


function blowUp(hover){
    hover.target.style.color = `orange`
};
let tour = document.getElementById(`tourism`);
tour.addEventListener(`mouseover`, blowUp);
// Above is an event for hovering over the tag.

function showDropdown(event){
    let dropdown = document.getElementById(`dropDown`)
    if (dropdown.style.display == `initial`){
        dropdown.style.display = `none`;
    } else{
        dropdown.style.display = `initial`;
    }
}

let dropDownActivator = document.getElementById(`dropDownActivator`);
dropDownActivator.addEventListener(`click`, showDropdown)
// Above is how to make a drop down menu.


document.body.style.backgroundColor = `bisque`;
// Above is a direct way of styling

let domeTag = document.getElementById(`dome`);
domeTag.style.textDecoration = `underline`;
domeTag[`style`][`color`] = `red`;
// Above is 2 eays to make styles with DOM.


let infoTag = document.getElementsByClassName(`info`);
for (let i=0;i<infoTag.length;i++){
    infoTag[i].innerHTML += ` Nothing but beautiful scenary.`;
}
// Above is how to add text after an element using a FOR LOOP.


let imgTag = document.querySelectorAll(`img`);
for (let i=0; i<imgTag.length; i++){
    imgTag[1].setAttribute(`src`, `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Maligne_Lake_at_night.jpg/220px-Maligne_Lake_at_night.jpg`)
}
// Above is how to change the source of Images in a FOR LOOP.


let allPTags = document.querySelectorAll(`p`);
// Forof loop used below.
for (const paragraph of allPTags) {
    console.log(paragraph);
    if (paragraph.innerText.includes(`link`)){
        paragraph.insertAdjacentHTML(`beforeend`, `<a href='https://google.ca' target='_blank'>More Images</a>`)
    }
}
// Above will add an `a` tag to the `p` tags.