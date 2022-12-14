'use strict';
// please do not delete the 'use strict' line above
const buttonObj = document.getElementsByTagName("button")[0];
buttonObj.style.position = "relative";
let emojiColor = "";
const bodyObj = document.getElementsByTagName("body")[0];

document.getElementById('color-button').addEventListener('click', changeColor);
document.getElementById('color-button').addEventListener('click', addEmoji);

function changeColor() {
  const bodyObj = document.getElementsByTagName("body")[0];
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  const color = `rgb(${R},${G},${B})`
  bodyObj.style.backgroundColor = color;
  emojiColor = color;
}

function addEmoji() {
  const emojis = ["ð","ð","ðĪŠ","ðĨģ","ðą","ðš","ðĪĄ","ðŧ","ð―",
                "ð","ðŧ","ðķ","ð§ââïļ","ð","ðĩ","ð§ââïļ","ðĻâðģ","ð§",
                "ðĻâðĻ","ðĐâð","ð","ðž","ð","ð","ð","ðķ","ðĶ",
                "ðž","ðĻ","ðŊ","ðŪ","ð·","ðļ","ð","ð§","ðĢ",
                "ðĶ","ðĶ","ð","ð","ð","ðĪ","ðĒ","ðĶ","ð",
                "ðĶ","ð ","ðģ","ðĶ","ðĶ","ðĶ§","ð","ðŦ","ðĶ",
                "ð","ð","ðĶ","ðĶĐ","ðĶĻ","ðĶĨ","ðĶ","ð","ðĩ",
                "ðī","ð","ðļ","ðŧ","ð","ð","ðŠ","âĻ","ðĶ",
                "ðĶ","ð","ðĶ","ð","â","ð","ð","ð","ð",
                "ð","ð","ð","ð","ð","ðĨ","ð","ð―","ð§",
                "ð","ðģ","ðĨ","ð","ð","ð","ð","ð","ð",
                "ðĢ","ð","ðĄ","ðĶ","ð°","ð­","ðĐ","â","ðš",
                "ðđ","ð§","ð","ðĨĒ","â―","ð","âū","âģ","ðĢ",
                "ð","ð","ðĩ","ð","ð","ðŠ","ð§","ðĨ","ðš",
                "ðļ","ðē","ðŪ","ð§Đ","ðŽ","ðī","ð","ð","ðĶ",
                "ð","ðļ","ð","â","ðŋ","ð―","ðž","ðĄ","ð",
                "ð","ðŦ","ðĒ","ðū","ð","âïļ","ðļ","ð","ðŊ",
                "ð°","ð","ðĻ","ðĢ","âïļ","ðŪ","ðĐđ","ð","ð ",
                "ð§ŧ","ð","ð","ð","ð","ð","ð","ð","ðŦ"]
  
  function makeEmoji(Top, Bottom, Left, Right) {
    const element = document.createElement("p");
    element.style.fontSize = "60px"
    element.style.height = "80px"
    element.style.width ="80px"
    element.style.position = "absolute"
    element.style.margin = "0"
    element.style.top = Top
    element.style.left = Left
    element.style.bottom = Bottom
    element.style.right = Right
    element.style.backgroundColor = emojiColor
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    element.textContent = emoji;
    bodyObj.append(element);
  }

  makeEmoji("10%","","10%","");
  makeEmoji("10%","","","10%");
  makeEmoji("","10%","10%","");
  makeEmoji("","10%","","10%");
  makeEmoji("10%","","","");
  makeEmoji("","10%","","");
  makeEmoji("","","10%","");
  makeEmoji("","","","10%");
  makeEmoji("27%","","27%","");
  makeEmoji("27%","","","27%");
  makeEmoji("","27%","27%","");
  makeEmoji("","27%","","27%");
}