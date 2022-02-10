export const hiddenDuration = (sizeScreen:any, focus:any):boolean | undefined => {
    if(sizeScreen > 768) {
        return focus.input
    }

    setTimeout(() => {
        return true
    }, 500)
}