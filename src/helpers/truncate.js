
const truncate = (str) => {
    const modifier = Math.floor(window.innerWidth / 6.6)

    if(str.length > modifier) {
        str = str.slice(0, modifier).concat('...')
    }    
    return str;
}


export { truncate }
