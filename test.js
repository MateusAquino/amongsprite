(async () => {
    let AmongSprite;
    try { AmongSprite = require('amongsprite') } catch(err) { AmongSprite = require('./index') }
    const { Types } = AmongSprite;

    x = await AmongSprite.create(575, '#D6C9BD', Types.BG["PORTAL SPACE"], null, Types.OUTFITS.RICK, null);
})();