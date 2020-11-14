const { createCanvas, loadImage } = require("canvas");
var path = require('path');

function shadeColor(color, percent) {
	let [R, G, B] = hexToRGB(color);
	R = parseInt((R * (100 + percent)) / 100);
	G = parseInt((G * (100 + percent)) / 100);
	B = parseInt((B * (100 + percent)) / 100);
	R = R < 255 ? R : 255;
	G = G < 255 ? G : 255;
	B = B < 255 ? B : 255;
	return rgbToHex([R, G, B]);
}

function hexToRGB(hex) {
	var R = parseInt(hex.substring(1, 3), 16);
	var G = parseInt(hex.substring(3, 5), 16);
	var B = parseInt(hex.substring(5, 7), 16);
	return [R, G, B];
}

function rgbToHex([R, G, B]) {
	var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
	var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
	var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
	return "#" + RR + GG + BB;
}

function replaceColor(context, oldColor, newColor) {
	const [oldRed, oldGreen, oldBlue] = hexToRGB(oldColor);
	const [newRed, newGreen, newBlue] = hexToRGB(newColor);

	var imageData = context.getImageData(0, 0, 600, 600);
	for (var i = 0; i < imageData.data.length; i += 4) {
		if (
			imageData.data[i] == oldRed &&
			imageData.data[i + 1] == oldGreen &&
			imageData.data[i + 2] == oldBlue
		) {
			imageData.data[i] = newRed;
			imageData.data[i + 1] = newGreen;
			imageData.data[i + 2] = newBlue;
		}
	}
	context.putImageData(imageData, 0, 0);
}

async function load(resolution, color, images) {
	const canvas = createCanvas(600, 600);
	const ctx = canvas.getContext("2d");

	for (let url of images) {
		if (!url) continue;
		try {
			const absolutePath = path.join(__dirname, ...url.substr(1).split('/'));
			const image = await loadImage(absolutePath);
			const offset = url.includes('/assets/PETS/') ? 40 : 0;
			ctx.drawImage(image, -offset, offset/2);
		} catch(err) {
			throw new ReferenceError('Asset does not exists: ' + absolutePath)
		}
	}

	if (color) {
		if (!color.startsWith('#') || color.length!==7) 
			throw new TypeError('Color must be a 6-digit hex (eg. #ffffff)')
		const shadow = shadeColor(color, -25);
		replaceColor(ctx, '#123456', color);
		replaceColor(ctx, '#654321', shadow);
	}

	if (resolution!==600) {
		const canvasResize = createCanvas(resolution, resolution);
		const ctxResize = canvasResize.getContext("2d");
		ctxResize.drawImage(canvas, 0, 0, resolution, resolution);
		return canvasResize
	}

	return canvas;
}

module.exports = async (resolution, hexColor, ...image) => await load(resolution, hexColor, image);
