var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/heyson.jpg') {
      myImage.setAttribute ('src','images/shaynelovesme.jpg');
    } else {
      myImage.setAttribute ('src','images/heyson.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '軒丞最愛我, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = '軒丞最愛我, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}