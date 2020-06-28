
const truncate = (str) => {
    /**
     *  window is `undefined` on serverside rendering
     */

    const modifier = typeof window !== `undefined` ? Math.floor(window.innerWidth / 6.6) : 128

    if(str.length > modifier) {
        str = str.slice(0, modifier).concat('...')
    }    
    return str;
}


export { truncate }
