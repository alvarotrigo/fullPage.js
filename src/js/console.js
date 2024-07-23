import * as utils from './common/utils.js';
import { getOptions } from './common/options.js';
import { doc, extensions } from './common/constants.js';
import { $html } from './common/cache.js';
import {
    ENABLED
} from './common/selectors.js';
import { state } from './common/state.js';

const isOK = function(){
    return getOptions() && state.isValid || doc.domain.indexOf('al'+'varotri' +'go' + '.' + 'com') > -1;
};

/**
* Displays warnings
*/
export function displayWarnings(){
    var l = getOptions()['li' + 'c' + 'enseK' + 'e' + 'y'];
    var msgStyle = 'font-size: 15px;background:yellow;';

    if(getOptions().licenseKey.trim() === ''){
        utils.showError('error', 'Fullpage.js requires a `licenseKey` option. Read about it on the following website:');
        utils.showError('error', 'https://alvarotrigo.com/fullPage/docs/#licensekey');
    }
    else if(!isOK()){
        utils.showError('error', 'Incorrect `licenseKey`. Get one for fullPage.js version 4 here:');
        utils.showError('error', 'https://alvarotrigo.com/fullPage/pricing');
    }
    else if(l && l.length < 20){
        console.warn('%c This website was made using fullPage.js slider. Learn more on the following website:', msgStyle);
        console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
    }

    if(utils.hasClass($html, ENABLED)){
        utils.showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
        return;
    }

    // Disable mutually exclusive settings
    if (getOptions().continuousVertical &&
        (getOptions().loopTop || getOptions().loopBottom)) {
        getOptions().continuousVertical = false;
        utils.showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
    }

    if(getOptions().scrollOverflow &&
        (getOptions().scrollBar || !getOptions().autoScrolling)){
        utils.showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
    }

    if(getOptions().continuousVertical && (getOptions().scrollBar || !getOptions().autoScrolling)){
        getOptions().continuousVertical = false;
        utils.showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
    }

    //using extensions? Wrong file!
    extensions.forEach(function(extension){
        //is the option set to true?
        if(getOptions()[extension]){
            utils.showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: '+ extension);
        }
    });

    //anchors can not have the same value as any element ID or NAME
    getOptions().anchors.forEach(function(name){

        //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
        var nameAttr = [].slice.call(utils.$('[name]')).filter(function(item) {
            return utils.getAttr(item, 'name') && utils.getAttr(item, 'name').toLowerCase() == name.toLowerCase();
        });

        var idAttr = [].slice.call(utils.$('[id]')).filter(function(item) {
            return utils.getAttr(item, 'id') && utils.getAttr(item, 'id').toLowerCase() == name.toLowerCase();
        });

        if(idAttr.length || nameAttr.length ){
            utils.showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
            var propertyName = idAttr.length ? 'id' : 'name';

            if(idAttr.length || nameAttr.length){
                utils.showError('error', '"' + name + '" is is being used by another element `'+ propertyName +'` property');
            }
        }
    });
}


