
var sectionLoaded = [];

var WRAPPER =               'fullpage-wrapper';
var WRAPPER_SEL =           '.' + WRAPPER;

var ACTIVE =                'active';
var ACTIVE_SEL =            '.' + ACTIVE;
var ENABLED =               'fp-enabled';
var SECTION =               'fp-section';
var SECTION_SEL =           '.' + SECTION;
var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
var SLIDE =                 'fp-slide';
var SLIDE_SEL =             '.' + SLIDE;
var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
var VIEWING_PREFIX =        'fp-viewing';

$html = $('html'), // listed separately because we should check each individually
$body = $('body');
$window = $(window);

// "Loaded" flag for each section to fill "onLoad"
$('.section').each(function(index){
    sectionLoaded.push(false);
});

function getTransform(el) {
    var results = $(el).css('-webkit-transform').match(/matrix(?:(3d)\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))(?:, (\d+)), \d+\)|\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))\))/)

    if(!results) return [0, 0, 0];
    if(results[1] == '3d') return results.slice(2,5);

    results.push(0);
    return results.slice(5, 8);
}


QUnit.module("autoScrolling:false", function(hooks){

    hooks.beforeEach(function(assert){   
        $('#fullpage').fullpage({
            autoScrolling:false
        });
    });

    hooks.afterEach(function(assert){
        //destroying it if it existed
        $.fn.fullpage.destroy('all');

        //removing the  URL hash
        window.location.hash = '';

        //resetting the loaded sections array flag
        $.each(sectionLoaded, function(index, value){
            sectionLoaded[index] = false;
        });
    });

    QUnit.test( "Testing option autoScrolling:false", function(assert) {
        assert.equal( $html.css('overflow'), 'visible', 'We expect html to have overflow:visible');
        assert.equal( $html[0].style.height, 'initial', 'We expect html to have height:initial');

        assert.equal( $body.css('overflow'), 'visible', 'We expect body to have overflow:visible');
        assert.equal( $body[0].style.height, 'initial', 'We expect body to have height:initial');

        assert.equal( $(WRAPPER_SEL).css('touch-action'), 'auto', 'We expect the wrapper to have touch-action:auto');
    });

    QUnit.test( "Testing option setAutoScrolling(true)", function(assert) {
        $.fn.fullpage.setAutoScrolling(true);

        assert.equal( $html.css('overflow'), 'hidden', 'We expect html to have overflow:hidden');
        assert.equal( $html[0].style.height, '100%', 'We expect html to have height :100%');

        assert.equal( $body.css('overflow'), 'hidden', 'We expect body to have overflow:hidden');
        assert.equal( $body[0].style.height, '100%', 'We expect body to have height:100%');

        assert.equal( $(WRAPPER_SEL).css('touch-action'), 'none', 'We expect the wrapper to have touch-action:none');
    });
});


QUnit.module("autoScrolling:true", function(hooks){

    hooks.beforeEach(function(assert){   
        $('#fullpage').fullpage({
            autoScrolling:true
        });
    });

    hooks.afterEach(function(assert){
        //destroying it if it existed
        $.fn.fullpage.destroy('all');

        //removing the  URL hash
        window.location.hash = '';

        //resetting the loaded sections array flag
        $.each(sectionLoaded, function(index, value){
            sectionLoaded[index] = false;
        });
    });

    QUnit.test( "Testing option autoScrolling:true", function(assert) {
        assert.equal( $html.css('overflow'), 'hidden', 'We expect html to have overflow:hidden');
        assert.equal( $html[0].style.height, '100%', 'We expect html to have height :100%');

        assert.equal( $body.css('overflow'), 'hidden', 'We expect body to have overflow:hidden');
        assert.equal( $body[0].style.height, '100%', 'We expect body to have height:100%');

        assert.equal( $(WRAPPER_SEL).css('touch-action'), 'none', 'We expect the wrapper to have touch-action:none');
    });

    QUnit.test( "Testing option setAutoScrolling(false)", function(assert) {
        $.fn.fullpage.setAutoScrolling(false);

        assert.equal( $html.css('overflow'), 'visible', 'We expect html to have overflow:visible');
        assert.equal( $html[0].style.height, 'initial', 'We expect html to have height:initial');

        assert.equal( $body.css('overflow'), 'visible', 'We expect body to have overflow:visible');
        assert.equal( $body[0].style.height, 'initial', 'We expect body to have height:initial');

        assert.equal( $(WRAPPER_SEL).css('touch-action'), 'auto', 'We expect the wrapper to have touch-action:auto');
    });

    QUnit.test( "Testing option setAutoScrolling(false) - not 1st section active", function(assert) {
        $.fn.fullpage.silentMoveTo(2);
        $.fn.fullpage.setAutoScrolling(false);

        assert.equal( $(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');

        var sectionBottomPosition = $(SECTION_ACTIVE_SEL).position().top + $(SECTION_ACTIVE_SEL).height();
        var viewportBottomPosition = $window.scrollTop() + $(SECTION_ACTIVE_SEL).height();

        console.log('$window.scrollTop()', $window.scrollTop());
        console.log('viewportBottomPosition', viewportBottomPosition);
        console.log('sectionBottomPosition', sectionBottomPosition);

        assert.equal($(WRAPPER_SEL).css('transform')[5], 0, 'We expect no transform3d');
        assert.equal(sectionBottomPosition , viewportBottomPosition, 'We expect section 2 bottom to be at the bottom of the viewport');

    });

});


