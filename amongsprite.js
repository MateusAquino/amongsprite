const canvas = require('./canvas');

class AmongSprite {
    create = async (resolution=600, playerColor, bgName, hatName = undefined, outfitName = undefined, petName = undefined) => {
        if (bgName===undefined || playerColor===undefined)
            throw new ReferenceError('Background and Player Color must not be undefined.');

        const basePlayer = `./assets/PLAYER/BASE.png`;
        bgName = `./assets/BG/${bgName}.png`;
        hatName = hatName ? `./assets/HATS/${hatName}.png` : hatName;
        outfitName = outfitName ? `./assets/OUTFITS/${outfitName}.png` : outfitName;
        petName = petName ? `./assets/PETS/${petName}.png` : petName;
        return await canvas(resolution, playerColor, bgName, basePlayer, hatName, outfitName, petName);
    }
    
    getBackground = async bgName => {
        return await canvas(null, `./assets/BG/${bgName}.png`)
    }

    getPlayer = async playerColor => {
        return await canvas(playerColor, `./assets/PLAYER/BASE.png`)
    }

    getHat = async (hatName, color=null) => {
        return await canvas(color, `./assets/HATS/${hatName}.png`)
    }

    getOutfit = async outfitName => {
        return await canvas(null, `./assets/OUTFITS/${outfitName}.png`)
    }

    getPet = async (petName, color=null) => {
        return await canvas(color, `./assets/PETS/${petName}.png`)
    }
}

module.exports = AmongSprite;