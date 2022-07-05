
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/yuanshen.png') {
      myImage.setAttribute('src', 'image/yuanshen2.png');
    } else {
      myImage.setAttribute('src', 'image/yuanshen.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    myHeading.textContent = 'Genshin Impact'
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Genshin Impact welcome every living things like ' + myName+'.';
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Genshin Impact welcome every living things like ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}