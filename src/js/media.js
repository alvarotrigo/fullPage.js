import * as utils from './common/utils.js'; 
import { getSlideOrSection } from './common/utilsFP.js';
import { getContainer } from './common/options.js';

// let g_mediaLoadedId;

/**
* Callback firing when a lazy load media element has loaded.
* Making sure it only fires one per section in normal conditions (if load time is not huge)
*/
export function onMediaLoad(section){
// if(getOptions().scrollOverflow){
//     clearTimeout(g_mediaLoadedId);
//     g_mediaLoadedId = setTimeout(function(){
//         if(!utils.hasClass($body, RESPONSIVE)){
//             scrollBarHandler.createScrollBar(section);
//         }
//     }, 200);
// }
}


/**
* Plays video and audio elements.
*/
export function playMedia(destiny){
    var panel = getSlideOrSection(destiny);

    //playing HTML5 media elements
    utils.$('video, audio', panel).forEach(function(element){
        if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
            element.play();
        }
    });

    //youtube videos
    utils.$('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
        if ( element.hasAttribute('data-autoplay') ){
            playYoutube(element);
        }

        //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
        element.onload = function() {
            if ( element.hasAttribute('data-autoplay') ){
                playYoutube(element);
            }
        };
    });
}

/**
* Plays a youtube video
*/
function playYoutube(element){
    element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

/**
* Stops video and audio elements.
*/
export function stopMedia(destiny){
    var panel = getSlideOrSection(destiny);

    //stopping HTML5 media elements
    utils.$('video, audio', panel).forEach(function(element){
        if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
            element.pause();
        }
    });

    //youtube videos
    utils.$('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
        if( /youtube\.com\/embed\//.test(utils.getAttr(element, 'src')) && !element.hasAttribute('data-keepplaying')){
            element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
        }
    });
}

/*
* Enables the Youtube videos API so we can control their flow if necessary.
*/
export function enableYoutubeAPI(){
    utils.$('iframe[src*="youtube.com/embed/"]', getContainer()).forEach(function(item){
        addURLParam(item, 'enablejsapi=1');
    });
}

/**
* Adds a new parameter and its value to the `src` of a given element
*/
function addURLParam(element, newParam){
    var originalSrc = utils.getAttr(element, 'src');
    element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
}


/*
* Returns the prefix sign to use for a new parameter in an existen URL.
*
* @return {String}  ? | &
*/
function getUrlParamSign(url){
    return ( !/\?/.test( url ) ) ? '?' : '&';
}