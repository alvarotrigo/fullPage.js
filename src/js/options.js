import * as utils from './common/utils.js';
import { defaultOptions } from './optionsDefault.js';

let container = null;
let g_initialAnchorsInDom = false;
let originals;

export function getInitialAnchorsInDom(){
    return g_initialAnchorsInDom;
}

export function setContainer(value){
    container = value;
}

export function getContainer(value){
    return container;
}

export function getOptions(){
    return defaultOptions;
}

export function setOptions(options){
    utils.deepExtend(defaultOptions, options);
    originals = {...options};
}

export function getOriginals(){
    return originals;
}

export function setOption(name, value){
    defaultOptions[name] = value;
}

/*
* Sets the state for a variable with multiple states (original, and temporal)
* Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
* This function is used to keep track of both states, the original and the temporal one.
* If type is not 'internal', then we assume the user is globally changing the variable.
*/
export function setVariableState(variable, value, type){
    defaultOptions[variable] = value;
    if(type !== 'internal'){
        originals[variable] = value;
    }
}

/**
* Setting options from DOM elements if they are not provided.
*/
export function setOptionsFromDOM(){

    //no anchors option? Checking for them in the DOM attributes
    if(!getOptions().anchors.length){
        var anchorsAttribute = '[data-anchor]';
        var anchors = utils.$(getOptions().sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container);
        if(anchors.length && anchors.length === utils.$(getOptions().sectionSelector, container).length){
            g_initialAnchorsInDom = true;
            anchors.forEach(function(item){
                getOptions().anchors.push(item.getAttribute('data-anchor').toString());
            });
        }
    }

    //no tooltips option? Checking for them in the DOM attributes
    if(!getOptions().navigationTooltips.length){
        var tooltipsAttribute = '[data-tooltip]';
        var tooltips = utils.$(getOptions().sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container);
        if(tooltips.length){
            tooltips.forEach(function(item){
                getOptions().navigationTooltips.push(item.getAttribute('data-tooltip').toString());
            });
        }
    }
}
