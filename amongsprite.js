const canvas = require('./canvas');

class AmongSprite {
    constructor() {
        this.Types = {
            BG: {'1':'1','10':'10','11':'11','12':'12','13':'13','15':'15','16':'16','17':'17','18':'18','19':'19','2':'2','20':'20','3':'3','30':'30','4':'4','40':'40','5':'5','50':'50','6':'6','7':'7','8':'8','9':'9','Agender':'Agender','amonguslogo':'amonguslogo','Aromantic':'Aromantic','Asexual':'Asexual','B1':'B1','B10':'B10','B11':'B11','B12':'B12','B13':'B13','B15':'B15','B16':'B16','B17':'B17','B18':'B18','B2':'B2','B3':'B3','B4':'B4','B5':'B5','B6':'B6','B7':'B7','B8':'B8','B9':'B9','BASE':'BASE','Bisexual':'Bisexual','BLUEFLAMES':'BLUEFLAMES','Demisexual':'Demisexual','DOWNLOAD':'DOWNLOAD','Gay':'Gay','Genderfluity':'Genderfluity','Genderqueer':'Genderqueer','grid1':'grid1','grid2':'grid2','grid3':'grid3','grid4':'grid4','HEARTSBLACK':'HEARTSBLACK','HEARTSBW':'HEARTSBW','HEARTSRB':'HEARTSRB','HEARTSRW':'HEARTSRW','Intersex':'Intersex','Lesbian':'Lesbian','MILITARAZ':'MILITARAZ','MILITARBYN':'MILITARBYN','Nonbinary':'Nonbinary','OUTERSPACE':'OUTERSPACE','Pansexuality':'Pansexuality','PINKFLAMES':'PINKFLAMES','Polysexuality':'Polysexuality','PORTAL SPACE':'PORTAL SPACE','PORTAL':'PORTAL','REDHEARTS':'REDHEARTS','SPACE':'SPACE','stars1':'stars1','stars2':'stars2','Transgender':'Transgender','WAVE1':'WAVE1','WAVE2':'WAVE2','WAVE3':'WAVE3',},
            HATS: {'ALICE':'ALICE','ALIEN':'ALIEN','ANTHENA':'ANTHENA','ASTRO':'ASTRO','BAG':'BAG','BALLOON':'BALLOON','BANANA':'BANANA','BANDANA':'BANDANA','BAT':'BAT','BEANIE':'BEANIE','BEAR':'BEAR','BERET':'BERET','BIRTHDAY':'BIRTHDAY','BLACK':'BLACK','BROWS':'BROWS','CANE':'CANE','CAP':'CAP','CAPTAIN':'CAPTAIN','CAT':'CAT','CHEESE':'CHEESE','CHEF':'CHEF','CHERRY':'CHERRY','COP':'COP','COWBOY':'COWBOY','CREWMATE':'CREWMATE','CROWN':'CROWN','CUERVO':'CUERVO','DEVIL':'DEVIL','DOCTOR':'DOCTOR','DOUBLE':'DOUBLE','DRAIN':'DRAIN','EGG':'EGG','ELMER':'ELMER','EYE':'EYE','FEZ':'FEZ','FLAMINGO':'FLAMINGO','FLOWER':'FLOWER','FLOWERPOT':'FLOWERPOT','FREEZE':'FREEZE','GASMASK':'GASMASK','GOGGLES':'GOGGLES','GOGGLES2':'GOGGLES2','GREEN':'GREEN','HADES':'HADES','HALO':'HALO','HAWK':'HAWK','HEADBAND':'HEADBAND','HEADPHONES':'HEADPHONES','HELMET':'HELMET','HERCULES':'HERCULES','HORNS':'HORNS','JASON':'JASON','KNIFE':'KNIFE','LIGHTS':'LIGHTS','LINK':'LINK','MADHATTER':'MADHATTER','MASK':'MASK','MEGARA':'MEGARA','MILITARY':'MILITARY','MINER':'MINER','MORTY':'MORTY','NEST':'NEST','NINJA':'NINJA','PAPER':'PAPER','PAPERHAT':'PAPERHAT','PARTY':'PARTY','PILOT':'PILOT','PIRATE':'PIRATE','PLANT':'PLANT','POLICE':'POLICE','POMPADOUR':'POMPADOUR','POSTIT':'POSTIT','PRESENT':'PRESENT','REDQUEEN':'REDQUEEN','RENO':'RENO','RICK':'RICK','SAFARI':'SAFARI','SANTA':'SANTA','SECURITY':'SECURITY','SHERIFF':'SHERIFF','SIGN':'SIGN','SNORKEL':'SNORKEL','SNOW':'SNOW','SNOWMAN':'SNOWMAN','SOLDIER':'SOLDIER','STICKMAN':'STICKMAN','STPATRICK':'STPATRICK','SUNGLASSES':'SUNGLASSES','TOPHAT':'TOPHAT','TOWEL':'TOWEL','USHANKA':'USHANKA','VIKING':'VIKING','WHITEHAT':'WHITEHAT','WHITERABBIT':'WHITERABBIT','WILDWEST':'WILDWEST','WINTER':'WINTER','WITCH':'WITCH','WOLF':'WOLF','WORKER':'WORKER','XMAS':'XMAS'},
            OUTFITS: {'ALICE':'ALICE','ASTRO':'ASTRO','BALLERINA':'BALLERINA','BALLERINAazul':'BALLERINAazul','BALLERINAmorada':'BALLERINAmorada','BLACKSUIT':'BLACKSUIT','CAPTAIN':'CAPTAIN','DOCTOR':'DOCTOR','EXPLORER':'EXPLORER','HADES':'HADES','HEARTS':'HEARTS','HERCULES':'HERCULES','JACKET':'JACKET','LATEX':'LATEX','MADHATTER':'MADHATTER','MECHANIC':'MECHANIC','MEGARA':'MEGARA','MILITARY':'MILITARY','MINER':'MINER','MORTY':'MORTY','POLICE':'POLICE','REDQUEEN':'REDQUEEN','RICK':'RICK','SECURITY':'SECURITY','WHITERABBIT':'WHITERABBIT','WHITESUIT':'WHITESUIT','WINTER':'WINTER','WORKER':'WORKER'},
            PETS: {'BEDCRAB':'BEDCRAB','BEDCRAB2':'BEDCRAB2','BRAINSLUG':'BRAINSLUG','DOG':'DOG','HAMSTER':'HAMSTER','MINICREWMATE':'MINICREWMATE','PANICO':'PANICO','PEGASUS':'PEGASUS','PENA':'PENA','ROBOT':'ROBOT','STICKMAN':'STICKMAN','STICKWOMAN':'STICKWOMAN','UFO':'UFO'},
            COLORS: { RED: 'C71110', BLUE: '132ED2', DARKGREEN: '11802D', PINK: 'EE54BB', ORANGE: 'F07D0D', YELLOW: 'F6F657', BLACK: '3F474E', WHITE: 'D7E1F1', PURPLE: '6B2FBC', BROWN: '71491E', CYAN: '38FFDD', GREEN: '50F039'}
        }
    }
    
    create = async (resolution=600, playerColor, bgName, hatName = undefined, outfitName = undefined, petName = undefined, ...overlays) => {
        if (bgName===undefined || playerColor===undefined)
            throw new ReferenceError('Background and Player Color must not be undefined.');

        const basePlayer = `./assets/PLAYER/BASE.png`;
        bgName = this.Types.BG[bgName] ? `./assets/BG/${bgName}.png` : bgName;
        hatName = this.Types.HATS[hatName] ? `./assets/HATS/${hatName}.png` : hatName;
        outfitName = this.Types.OUTFITS[outfitName] ? `./assets/OUTFITS/${outfitName}.png` : outfitName;
        petName = this.Types.PETS[petName] ? `./assets/PETS/${petName}.png` : petName;
        return await canvas(resolution, playerColor, bgName, basePlayer, hatName, outfitName, petName, overlays)
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