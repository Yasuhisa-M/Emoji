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
  const emojis = ["😍","😋","🤪","🥳","😱","👺","🤡","👻","👽",
                "🎃","😻","👶","🧙‍♀️","💂","🕵","🧟‍♀️","👨‍🍳","🧛",
                "👨‍🎨","👩‍🚀","🎅","👼","💍","👑","👓","🐶","🦊",
                "🐼","🐨","🐯","🐮","🐷","🐸","🐒","🐧","🐣",
                "🦉","🦄","🐝","🐛","🐞","🤖","🐢","🦖","🐙",
                "🦞","🐠","🐳","🦈","🦓","🦧","🐘","🐫","🦘",
                "🐈","🐓","🦚","🦩","🦨","🦥","🦔","🐉","🌵",
                "🌴","🍄","🌸","🌻","🌙","🌏","🪐","✨","🦁",
                "🦆","🌈","🦇","🐌","⛄","🌊","🍎","🍋","🍉",
                "🍇","🍓","🍈","🍑","🍍","🥝","🍆","🌽","🧅",
                "🍞","🍳","🥞","🍖","🍔","🍕","🍝","🍜","🍛",
                "🍣","🍙","🍡","🍦","🍰","🍭","🍩","☕","🍺",
                "🍹","🧊","🐍","🥢","⚽","🏈","⚾","⛳","🎣",
                "🏂","🏄","🚵","🏆","🏅","🎪","🎧","🥁","🎺",
                "🎸","🎲","🎮","🧩","🐬","🛴","🚄","🚂","🦍",
                "🚀","🛸","🚁","⚓","🗿","🗽","🗼","🎡","🚙",
                "🚉","🛫","🚢","🗾","🎇","⌚️","📸","🔋","🏯",
                "💰","💎","🔨","💣","⚔️","🔮","🩹","💉","🎠",
                "🧻","🛀","🔑","🎁","🎀","🎊","🎉","📏","🔫"]
  
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