<h1 align="center">
    <img src="https://github.com/MateusAquino/amongsprite/blob/main/assets/README.png?raw=true" align="center"></img>
    <br/>AmongSprite
</h1>
<p align="center">Package for generating custom <strong>Among Us</strong> canvas.</p>

<p align="center">
  <a aria-label="Working Node Version" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.18.4">
    <img src="https://img.shields.io/badge/node.js@lts-12.18.4-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="NPM version" href="https://badge.fury.io/js/amongsprite">
    <img src="https://badge.fury.io/js/amongsprite.svg"></img>
  </a>
  <a aria-label="Original Among Avatar Maker Art" href="amongusavatarmaker.com">
    <img src="https://img.shields.io/badge/Among%20Avatar%20Maker-art-success"></img>
  </a>
</p>

## 🚀 Install
Simply run:
```bash
npm install amongsprite
```

## 📟 How to Use
Check the [assets](./assets/) for the name of Backgrounds, hats, outfits and pets.

#### Syntax
• `resolution` in pixels  
• `hexColor` should be a 6-digit hex code (eg. `#000000`)  
• Other params should be valid names from assets.  
Note: Alternatively, you may import `const { Types } = AmongSprite` for better content assistant.
```js
const AmongSprite = require('amongsprite')

const canvas = await AmongSprite.create(resolution, hexColor, background, hat?, outfit?, pet?)
```

#### Example
Working example bellow should generate the same image above (Rick Sprite).
```js
const AmongSprite = require('amongsprite');
const { Types } = AmongSprite;

const canvas = await AmongSprite.create(
	175, 
	'#D6C9BD', 
	Types.BG["PORTAL SPACE"], 
	Types.HATS.RICK, 
	Types.OUTFITS.RICK, 
	Types.PETS.UFO
);

const fs = require('fs');
fs.writeFileSync('./result.html', `<img src='${canvas.toDataURL()}'></img>`);
```

## ⚠️ Disclaimer
This is an unofficial Among Us Sprite generator. The fan art is provided by [Among Us Avatar Maker](http://amongusavatarmaker.com) whereas [Innersloth](http://www.innersloth.com/gameAmongUs.php) owns all rights to Among Us.  