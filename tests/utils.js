var sectionLoaded = [];
var slideLoaded = [];

// keeping central set of classnames and selectors
var WRAPPER =               'fullpage-wrapper';
var WRAPPER_SEL =           '.' + WRAPPER;

// slimscroll
var SCROLLABLE =            'fp-scrollable';
var SCROLLABLE_SEL =        '.' + SCROLLABLE;
var OVERFLOW =              'fp-overflow';
var OVERFLOW_SEL =              '.' + OVERFLOW;

// util
var RESPONSIVE =            'fp-responsive';
var NO_TRANSITION =         'fp-notransition';
var DESTROYED =             'fp-destroyed';
var ENABLED =               'fp-enabled';
var VIEWING_PREFIX =        'fp-viewing';
var ACTIVE =                'active';
var ACTIVE_SEL =            '.' + ACTIVE;
var COMPLETELY =            'fp-completely';
var COMPLETELY_SEL =        '.' + COMPLETELY;

// section
var SECTION_DEFAULT_SEL =   '.section';
var SECTION =               'fp-section';
var SECTION_SEL =           '.' + SECTION;
var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
var SECTION_LAST_SEL =      SECTION_SEL + ':last';
var TABLE =                 'fp-table';
var TABLE_SEL =             '.' + TABLE;
var TABLE_CELL =            'fp-tableCell';
var TABLE_CELL_SEL =        '.' + TABLE_CELL;
var AUTO_HEIGHT =           'fp-auto-height';
var AUTO_HEIGHT_SEL =       '.fp-auto-height';
var NORMAL_SCROLL =         'fp-normal-scroll';
var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';

// section nav
var SECTION_NAV =           'fp-nav';
var SECTION_NAV_SEL =       '#' + SECTION_NAV;
var SECTION_NAV_TOOLTIP =   'fp-tooltip';
var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

// slide
var SLIDE_DEFAULT_SEL =     '.slide';
var SLIDE =                 'fp-slide';
var SLIDE_SEL =             '.' + SLIDE;
var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
var SLIDES_WRAPPER =        'fp-slides';
var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
var SLIDES_CONTAINER =      'fp-slidesContainer';
var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
var TABLE =                 'fp-table';

// slide nav
var SLIDES_NAV =            'fp-slidesNav';
var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
var SLIDES_ARROW =          'fp-controlArrow';
var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
var SLIDES_PREV =           'fp-prev';
var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
var SLIDES_NEXT =           'fp-next';
var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

var new_fullpage;
var oldConsole = console;

var lazyLoadElements =  `
    <img id="img-src" data-src="https://www.w3schools.com/html/pulpitrock.jpg" />

    <img id="img-srcet" data-srcset="https://www.w3schools.com/html/pulpitrock.jpg 320w, https://www.w3schools.com/html/pulpitrock.jpg 420w" />

    <video width="320" height="240" controls>
        <source class="source-src" data-src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        <source class="source-src" data-src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>

    <video id="source-srcset" width="320" height="240" controls>
        <source class="source-srcset" data-srcset="https://www.w3schools.com/html/mov_bbb.mp4 768w, videos/tablet-video.mp4 1200w">
        <source class="source-srcset" data-srcset="https://www.w3schools.com/html/mov_bbb.mp4 768w, videos/tablet-video.mp4 1200w">
    </video>

    <video id="video-src" data-src="https://www.w3schools.com/html/mov_bbb.ogg" controls>
        Your browser does not support the video tag.
    </video>

    <audio id="audio-src" data-src="https://www.w3schools.com/html/horse.ogg" controls>
        Your browser does not support the audio element.
    </audio>

    <iframe id="iframe-src" data-src="http://google.com"></iframe>

    <picture>
        <source data-srcset="https://www.w3schools.com/html/pulpitrock.jpg?v=1" media="(min-width: 1440px)">
        <source data-srcset="https://www.w3schools.com/html/pulpitrock.jpg?v=2" media="(min-width: 1024px)">
        <img class="background-image background-image-lazy" data-src="https://www.w3schools.com/html/pulpitrock.jpg?v=3">
    </picture>
`;

function areAllLazyLoaded(element){
    var lazyLoadElements = element.find('[data-src], [data-srcset]');
    return !lazyLoadElements.length;
}

function isAnyLazyLoaded(element){
    return element.find('[src], [srcset]').length;
}

function areOthersLazyLoaded(){
    var isAnyOtherLoaded = false;
    $(SECTION_SEL).each(function(){
        var section = $(this);
        var slides = $(this).find(SLIDE_SEL);
        if(slides.length){

            slides.each(function(){
                var slide = $(this);
                if(!section.hasClass(ACTIVE) || section.hasClass(ACTIVE) && !slide.hasClass(ACTIVE)){
                    isAnyOtherLoaded = isAnyOtherLoaded || isAnyLazyLoaded(slide);
                }
            });

        }
        else if(!section.hasClass(ACTIVE)){
            isAnyOtherLoaded = isAnyOtherLoaded || isAnyLazyLoaded(section);
        }
    });
    return isAnyOtherLoaded;
}

//appends lazy elements to all sections and slides
function appendLazyElements(id){
    $(id).find('.section').each(function(index, section){
        var slides = $(section).find('.slide');
        if(slides.length){
            slides.append(lazyLoadElements);
        }
        else{
            $(section).append(lazyLoadElements);
        }
    });
}

var sectionsCallbacks = {
    afterLoad: function(anchorLink, index) {
        sectionLoaded[index - 1] = true;
        afterLoad = `${anchorLink}, ${index}`;
    },
    onLeave: function(index, nextIndex, direction) {
        sectionLoaded[index - 1] = false;
        onLeave = `${index}, ${nextIndex}, ${direction}`;
    },
    afterRender() {
        afterRender = [$(SECTION_ACTIVE_SEL).index(), $(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index()];
    },
    afterResponsive: function(isResponsive){
        afterResponsive = isResponsive;
    },
    afterResize: function(){
        afterResize = true;
    },
    afterReBuild: function(){
        afterReBuild = true;
    }
};


var sectionsCallbacksV3 = {
    afterLoad: function(origin, destination, direction) {
        sectionLoaded[destination.index ] = true;
        afterLoad = {
            origin: origin,
            destination: destination,
            direction: direction
        };
    },
    onLeave: function(origin, destination, direction) {
        sectionLoaded[origin.index] = false;
        console.log(origin);
        console.log(destination);
        onLeave = {
            origin: origin,
            destination: destination,
            direction: direction
        };
        console.log("-------");
    },
    afterRender() {
        afterRender = [$(SECTION_ACTIVE_SEL).index(), $(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index()];
    },
    afterResponsive: function(isResponsive){
        afterResponsive = isResponsive;
    },
    afterResize: function(width, height){
        afterResize = `${width}, ${height}`;
    },
    afterReBuild: function(){
        afterReBuild = true;
    }
};


$('html').click(function(){
    $(window).trigger('pepe');
});

var onSlideLeave = new_fullpage ? {} : ``;
var onLeave = new_fullpage ? {} : ``;
var afterLoad = new_fullpage ? {} : ``;
var afterSlideLoad = new_fullpage ? {} : ``;

var afterResponsive = false;
var afterResize = false;
var afterReBuild = false;
var afterRender = [];
var locationReplace = null;

var slidesCallbacks = {
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        slideLoaded[slideIndex] = true;
        afterSlideLoad = `${anchorLink}, ${index}, ${slideAnchor}, ${slideIndex}`;
    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        slideLoaded[slideIndex] = false;
        onSlideLeave = `${anchorLink}, ${index}, ${slideIndex}, ${direction}, ${nextSlideIndex}`;
    }
};


var slidesCallbacksV3 = {
    afterSlideLoad: function(section, origin, destination, direction){
        slideLoaded[destination.index] = true;
        afterSlideLoad = {
            section: section,
            origin: origin,
            destination: destination,
            direction: direction
        };
    },
    onSlideLeave: function(section, origin, destination, direction){
        slideLoaded[origin.index] = false;
        onSlideLeave = {
            section: section,
            origin: origin,
            destination: destination,
            direction: direction
        };
    }
};

var anchors = { anchors: ['page1', 'page2', 'page3', 'page4']};

var sectionsAndSlidesCallbacks = Object.assign({}, sectionsCallbacks, slidesCallbacks);
var sectionsAndSlidesCallbacksV3 = Object.assign({}, sectionsCallbacksV3, slidesCallbacksV3);

var allBasicOptions =  Object.assign({}, anchors, sectionsCallbacks, slidesCallbacks);
var allBasicOptionsV3 =  Object.assign({}, anchors, sectionsCallbacksV3, slidesCallbacksV3);


function getTransform(translate) {
    var translateRegex = new RegExp('translate3d\\((.*)px,\\s(.*)px,\\s(.*)px\\)');
    var parts = translateRegex.exec(translate);

    parts = parts.map(function(item){
        return item == '-0' ? 0: item;
    });

    return [''+parts[1]+'', ''+parts[2]+'', ''+parts[3]+''];
}

function getTransformFromElement($el) {
    var results = $el.css('-webkit-transform').match(/matrix(?:(3d)\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))(?:, (-{0,1}\d+)), -{0,1}\d+\)|\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))\))/);

    if(!results) return ["0", "0", "0"];
    if(results[1] == '3d') return results.slice(2,5);

    results.push("0");
    return results.slice(5, 8);
}

function getWindowPosition(){
    return $(window).scrollTop();
}

function getTop(selector){
    return $(selector).css('top');
}

//overwritting the scrollTop function of jQuery to simulate scroll
//when using autoScrolling:false or scrollBar:true
function simulateScroll(scrollValue, FP){
    if(FP && FP.test.options.fitToSection){
        console.warn("-. ENTRA.....................");
        document.body.scrollTo(0, scrollValue);
    }
    else{
        window.pageYOffset = (function(){
            return scrollValue;
        })();
    }

    trigger(window, 'scroll');
}

function showFullpage(id){
    console.log("showing...");
    jQuery(id).show();
    $('#qunit').hide();
    $('#qunit-fixture').addClass('show-fixture');
}
window.showFullpage = showFullpage;

function showQunit(id){
    $(id).hide();
    $('#qunit').show();
    $('#qunit-fixture').removeClass('show-fixture');
}
window.showQunit = showQunit;

function simulateMouseWheel(type){
    var multiplier = type === 'up' ? -1 : 1;

    //moving down with mouse wheel
    var mouseWheel = new Event('wheel', { 'bubbles': true });
    mouseWheel.deltaY = 10 * multiplier;
    document.dispatchEvent(mouseWheel);
}

function simulateKeydown(type){
    var keyCode = type === 'up' ? 38 : 40;

    //moving down with mouse wheel
    var keydownEvent = new Event('keydown', { 'bubbles': true });
    keydownEvent.keyCode = keyCode;
    document.dispatchEvent(keydownEvent);
}

//not used yet
function simulateTouchMove(target, type){
    var pageY = 100, pageX = 100, differenceX = 0, differenceY = 0;

    switch(type){
        case 'down': differenceY = 500; break;
        case 'up': differenceY = -500; break;
        case 'left': differenceX = 500;break;
        case 'right': differenceX = -500; break;
    }

    //touch start
    var touchStartEvent = new Event('touchstart', { 'bubbles': true });
    touchStartEvent.pageX = pageX + differenceX;
    touchStartEvent.pageY = pageY + differenceY;
    target.dispatchEvent(touchStartEvent);

    //moving down with mouse wheel
    var touchMoveEvent = new Event('touchmove', { 'bubbles': true });
    touchMoveEvent.pageX = pageX;
    touchMoveEvent.pageY = pageY;
    target.dispatchEvent(touchMoveEvent);
}


function trigger(el, eventName, data){
    var event;
    data = typeof data === 'undefined' ? {} : data;

    var windowEvents = ['resize', 'focus', 'blur'];

    debugger;
    if(windowEvents.indexOf(eventName) > -1){
        
        event = new Event(eventName);
        event.details = data;
    }
    // Native
    else if (window.CustomEvent) {
        event = new CustomEvent(eventName, {detail: data});
    }
    else{
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
    }

    el.dispatchEvent(event);
}

function destroyTest(){
    //destroying it if it existed
    if(window.fullpage_api != null){
        window.fullpage_api.destroy('all');
    }

    else if($.fn.fullpage != null){
        $.fn.fullpage.destroy('all');
    }

    console.warn = oldConsole.warn;
    console.log = oldConsole.log;
    console.error = oldConsole.error;

    //removing the  URL hash
    window.location.hash = '';

    //resetting the loaded sections array flag
    $.each(sectionLoaded, function(index, value) {
        sectionLoaded[index] = false;
    });

    $('.fullpage-layout.active').removeClass('active');
    onSlideLeave = ``;
    onLeave = ``;
    afterLoad = ``;
    afterSlideLoad = ``;
    afterResponsive = false;
    afterResize = false;
    afterReBuild = false;
    afterRender = [];
    locationReplace = null;
}

function setLoadedState(){
    sectionLoaded = [];
    slideLoaded = [];

    // "Loaded" flag for each section to fill "onLoad"
    $('.section:visible').each(function(index) {
        sectionLoaded.push(false);
    });
    $('.slide:visible').each(function(index){
        slideLoaded.push(false);
    });
}

function areOthersLoaded(elements){
    return elements.filter(function(x){
        return x === true;
    }).length;
}

function initFullpage(id, options){
    $(id).addClass('active');
    setLoadedState();
    $(id).fullpage(options);
}

function initFullpageNew(id, options){
    $(id).addClass('active');
    setLoadedState();

    new_fullpage = new window.fullpage(id, options);
    new_fullpage.test.isTesting = true;
    return new_fullpage;
}

QUnit.module("module", {
    beforeEach: function(assert) {
        console.warn(assert.test.testName);
    },
    afterEach: function(assert) {
        destroyTest();
    }
});