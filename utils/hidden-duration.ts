export const hiddenDuration = (sizeScreen:any, focus:boolean) => {
    if(sizeScreen > 768) {
        return focus
    }

    setTimeout(() => {
        return true
    }, 500)
}