import { SECTION_DEFAULT_SEL, SLIDES_STYLED_ARROW, SLIDE_DEFAULT_SEL } from "./common/selectors.js";

export const defaultOptions = {
    //navigation
    menu: false,
    anchors:[],
    lockAnchors: false,
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: [],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    scrollBar: false,
    hybrid: false,

    licenseKey: '',
    credits: {
        "enabled": true,
        "label": 'Made with fullPage.js',
        "position": 'right'
    },

    //scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 600,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: null,
    scrollOverflow: true,
    scrollOverflowReset: false,
    touchSensitivity: 5,
    touchWrapper: null,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    allowCorrectDirection: false,

    //design
    scrollOverflowMacStyle: true,
    controlArrows: true,
    controlArrowsHTML: ['<div class="' + SLIDES_STYLED_ARROW + '"></div>', '<div class="' + SLIDES_STYLED_ARROW + '"></div>'],
    controlArrowColor: '#fff',
    verticalCentered: true,
    sectionsColor : [],
    paddingTop: 0,
    paddingBottom: 0,
    fixedElements: null,
    responsive: 0, //backwards compabitility with responsiveWiddth
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
    },
    cards: false,
    cardsOptions: {
        perspective: 100,
        fadeContent: true,
        fadeBackground: true
    },

    //Custom selectors
    sectionSelector: SECTION_DEFAULT_SEL,
    slideSelector: SLIDE_DEFAULT_SEL,

    //events
    afterLoad: null,
    beforeLeave: null,
    onLeave: null,
    afterRender: null,
    afterResize: null,
    afterReBuild: null,
    afterSlideLoad: null,
    onSlideLeave: null,
    afterResponsive: null,
    onScrollOverflow: null,

    lazyLoading: true,
    observer: true,
    scrollBeyondFullpage: true
};