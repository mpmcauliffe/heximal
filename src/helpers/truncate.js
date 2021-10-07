
const truncate = (str) => {
    /**
     *  window is `undefined` on serverside rendering
     */

    if (typeof str === `undefined` || typeof str !== 'string' || str === null) { return '' }
    
    
    const modifier = typeof window !== `undefined` ? Math.floor(window.innerWidth / 13) : 116

    if(str.length > modifier) {
        const newStr = str.slice(0, modifier).concat('...')
        return newStr
    }    
    return str
    
}


export { truncate }
