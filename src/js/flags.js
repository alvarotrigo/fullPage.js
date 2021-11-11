let flags = {
    isBeyondFullpage: false,
    aboutToScrollToFullPage: false
};

export function setFlag(prop, value){
    flags[prop] = value;
}

export function getFlag(prop){
    return flags[prop];
}