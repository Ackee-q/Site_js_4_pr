
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/pxArt.png') {
    myImage.setAttribute ('src','images/pxArt2.png');
  } else {
    myImage.setAttribute ('src','images/pxArt.png');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

document.body.addEventListener('click', function() {
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); /* Генерація випадкового кольору */
  document.body.style.backgroundColor = randomColor; /* Зміна кольору фону */
});