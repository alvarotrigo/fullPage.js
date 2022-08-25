import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const licenseContent = `/*!
* fullPage 4.0.11
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
`;

const terserOptions = {
    compress: {
        passes: 2,
        drop_console: true,
    },
    mangle: {
        properties: {
            // regex: /_$/,
            keep_quoted: true,
            reserved: [
                'fullpage',
                'jQuery',
                '$',
                'fn',
                
                // options
                'menu',
                'anchors',
                'lockAnchors',
                'navigation',
                'navigationPosition',
                'navigationTooltips',
                'showActiveTooltip',
                'slidesNavigation',
                'slidesNavPosition',
                'scrollBar',
                'hybrid',
                'licenseKey',
                'credits',
                'css3',
                'scrollingSpeed',
                'autoScrolling',
                'fitToSection',
                'easing',
                'easingcss3',
                'loopBottom',
                'loopTop',
                'loopHorizontal',
                'continuousVertical',
                'continuousHorizontal',
                'scrollHorizontally',
                'interlockedSlides',
                'dragAndMove',
                'offsetSections',
                'resetSliders',
                'fadingEffect',
                'normalScrollElements',
                'scrollOverflow',
                'scrollOverflowReset',
                'touchSensitivity',
                'touchWrapper',
                'bigSectionsDestination',
                'keyboardScrolling',
                'animateAnchor',
                'recordHistory',
                'allowCorrectDirection',
                'scrollOverflowMacStyle',
                'controlArrows',
                'controlArrowsHTML',
                'controlArrowColor',
                'verticalCentered',
                'sectionsColor',
                'paddingTop',
                'paddingBottom',
                'fixedElements',
                'responsive',
                'responsiveWidth',
                'responsiveHeight',
                'responsiveSlides',
                'parallax',
                'parallaxOptions',
                'type',
                'percentage',
                'property',
                'cards',
                'cardsOptions',
                'perspective',
                'fadeContent',
                'fadeBackground',
                'sectionSelector',
                'slideSelector',

                // Callbacks
                'afterLoad',
                'beforeLeave',
                'onLeave',
                'afterRender',
                'afterResize',
                'afterReBuild',
                'afterSlideLoad',
                'onSlideLeave',
                'afterResponsive',
                'onScrollOverflow',

                'lazyLoading',
                'observer',

                // Public API
                'version',
                'setAutoScrolling',
                'setRecordHistory',
                'setScrollingSpeed',
                'setFitToSection',
                'setLockAnchors',
                'setMouseWheelScrolling',
                'setAllowScrolling',
                'setKeyboardScrolling',
                'moveSectionUp',
                'moveSectionDown',
                'silentMoveTo',
                'moveTo',
                'moveSlideRight',
                'moveSlideLeft',
                'fitToSection',
                'reBuild',
                'setResponsive',
                'getFullpageData',
                'destroy',
                'getActiveSection',
                'getActiveSlide',
                'getScrollY',
                'getScrollX',
                'landscapeScroll',
                'test',
                'shared',
                'internals',
                'fullpage_api',
                'fullpage_extensions',
                'fp_easings',
                'easeInOutCubic',

                // Callbacks params
                'anchor',
                'index',
                'item',
                'isFirst',
                'isLast',

                // directions
                'up',
                'down',
                'left',
                'right',
                'all',
                'k',
                'm'

            ]
        }
    }
   
};

// ([a-zA-Z0-9]+\.)+(\w+)
// https://jsfiddle.net/kut3oh5j/
module.exports = [
    {
        input: "src/js/app.js",
        external: [
            'fullpage',
            'fullpage_api',
            'window',
            'document'
        ],
        globals: {
            'document': 'document',
            'window': 'window'
        },
      
        output: [
            {
                file: "dist/fullpage.js",
                name: "fullpage",
                format: "umd",
                banner: licenseContent,
                globals: {
                    'document': 'document',
                    'window': 'window'
                },
            },
            {
                file: "dist/fullpage.min.js",
                name: "fullpage",
                format: "umd",
                banner: licenseContent,
                plugins: [terser(terserOptions)],
                globals: {
                    'document': 'document',
                    'window': 'window'
                },
            },
           
        ],
        plugins: [
            resolve(),
            babel({
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                "ie": "11"
                            }
                        }
                    ]
                    
                ],
                babelHelpers: "bundled",
                exclude: "node_modules/**"
            })
        ]
    }
];


