(async () => {
    const AmongSprite = require('amongsprite') || require('./index');
    const { Types } = AmongSprite;

    await AmongSprite.create(175, '#D6C9BD', Types.BG["PORTAL SPACE"], Types.HATS.RICK, Types.OUTFITS.RICK, Types.PETS.UFO);
})();