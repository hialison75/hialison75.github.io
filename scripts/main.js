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
  var myName = prompt('芝寧.');
  localStorage.setItem('芝寧', myName);
  myHeading.innerHTML = '軒丞超愛' + myName;
}

if(!localStorage.getItem('芝寧')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('芝寧');
  myHeading.innerHTML = '軒丞超愛' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
