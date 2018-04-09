var sectionLoaded = [];
var slideLoaded = [];

// keeping central set of classnames and selectors
var WRAPPER =               'fullpage-wrapper';
var WRAPPER_SEL =           '.' + WRAPPER;

// slimscroll
var SCROLLABLE =            'fp-scrollable';
var SCROLLABLE_SEL =        '.' + SCROLLABLE;

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

var lazyLoadElements =  `
    <img id="img-src" data-src="demo.jpg" />

    <img id="img-srcet" data-srcset="demo.jpg 320w.jpg, demo2.jpg 420w" />

    <video width="320" height="240" controls>
        <source class="source-src" data-src="movie.mp4" type="video/mp4">
        <source class="source-src" data-src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>

    <video id="source-srcset" width="320" height="240" controls>
        <source class="source-srcset" data-srcset="videos/mobile-video.mp4 768w, videos/tablet-video.mp4 1200w">
        <source class="source-srcset" data-srcset="videos/mobile-video.mp4 768w, videos/tablet-video.mp4 1200w">
    </video>

    <video id="video-src" data-src="movie.ogg" controls>
        Your browser does not support the video tag.
    </video>

    <audio id="audio-src" data-src="horse.ogg" controls>
        Your browser does not support the audio element.
    </audio>

    <iframe id="iframe-src" data-src="http://google.com"></iframe>
`;

function areAllLazyLoaded(element){
    var lazyLoadElements = element.find('[data-src], [data-srcset]');
    console.log("lazyLoadElements.length", lazyLoadElements.length);
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
                    isAnyOtherLoaded = isAnyOtherLoaded || isAnyLazyLoaded(slide);
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


$('html').click(function(){
    $(window).trigger('pepe');
});

var onSlideLeave = ``;
var onLeave = ``;
var afterLoad = ``;
var afterSlideLoad = ``;
var afterResponsive = false;
var afterResize = false;
var afterReBuild = false;
var afterRender = [];

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

var anchors = { anchors: ['page1', 'page2', 'page3', 'page4']};

var sectionsAndSlidesCallbacks = Object.assign({}, sectionsCallbacks, slidesCallbacks);
var allBasicOptions =  Object.assign({}, anchors, sectionsCallbacks, slidesCallbacks);

function getTransform($el) {
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

function destroyTest(){
    //destroying it if it existed
    $.fn.fullpage.destroy('all');

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

QUnit.module("module", {
    beforeEach: function(assert) {
        console.warn(assert.test.testName);
    },
    afterEach: function(assert) {
        destroyTest();
    }
});