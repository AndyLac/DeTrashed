const path = '/images/'

const gloves = 'Make sure to protect yourself by wearing thick gloves before picking up trash.'
const trash_grab = 'For extra precaution, consider using a trash picker so that you\'re not actively touching trash'
const needles = 'Needles can carry dangerous diseases! Make sure you do not pick these up by hand.'


export default {
    gloves: {
        img:  path + 'gloves400.png',
        description: gloves
    },
    trash_grab: {
        img: path + 'trash-grabber300.png',
        description: trash_grab
    },
    needles: {
        img: path + 'needle512.png',
        description: needles
    }
}