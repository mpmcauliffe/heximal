
const truncate = (str) => {
    /**
     *  window is `undefined` on serverside rendering
     */

    const modifier = typeof window !== `undefined` ? Math.floor(window.innerWidth / 10) : 128


    if(str.length > modifier) {
        const newStr = str.slice(0, modifier).concat('...')
        return newStr
    }    
    return str
}


export { truncate }
