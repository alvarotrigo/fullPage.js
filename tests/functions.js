
var sectionLoaded = [];
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

// "Loaded" flag for each section to fill "onLoad"
$('.section').each(function(index){
    sectionLoaded.push(false);
});

QUnit.module( "module", {
    beforeEach: function( assert ) {
        //initializating fullpage.js
        $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3', 'page4'],
            afterLoad: function(anchorLink, index){
                sectionLoaded[index-1] = true;
            },
            onLeave: function(index, nextIndex, direction){
                sectionLoaded[index-1] = false;
            },
            afterRender(){
                $.each(sectionLoaded, function(index, value){
                    sectionLoaded[index] = false;
                });
            }
        });
    }, afterEach: function( assert ) {

        //destroying it if it existed
        $.fn.fullpage.destroy('all');

        //removing the  URL hash
        window.location.hash = '';

        //resetting the loaded sections array flag
        $.each(sectionLoaded, function(index, value){
            sectionLoaded[index] = false;
        });
    }
});


QUnit.test( "Testing recordHistory false", function( assert ) {
 var hash;   
 var done = assert.async();

 $.fn.fullpage.setRecordHistory(true);

 //scrolling down
 $.fn.fullpage.moveSectionDown(); 
 assert.equal( window.location.hash, "#page2", "We expect hash to be #page2" );

 $.fn.fullpage.moveSectionDown(); 
 assert.equal( window.location.hash, "#page3", "We expect hash to be #page3" );

 //now setting it to false
 setTimeout(function(){
     $.fn.fullpage.setRecordHistory(false);
 });

 setTimeout(function(){
     $.fn.fullpage.moveSectionDown(); 
     assert.equal( window.location.hash, "#page4", "We expect hash to be #page3" );
 });

 //going back in history
 setTimeout(function(){
     window.history.back()
 });

 //the 3rd secton won't be recorded in history
 setTimeout(function(){
     assert.equal( window.location.hash, "#page2", "We expect hash to be #page2" );
     done();
 }, 800);    
});


QUnit.test( "Testing recordHistory true", function( assert ) {
 var hash;   
 var done = assert.async();

 $.fn.fullpage.setRecordHistory(true);

 //scrolling down
 setTimeout(function(){
     $.fn.fullpage.moveSectionDown(); 
     assert.equal( window.location.hash, "#page2", "We expect hash to be #page2" );
 });
    
 //scrolling down again
 setTimeout(function(){
     $.fn.fullpage.moveSectionDown(); 
     assert.equal( window.location.hash, "#page3", "We expect hash to be #page3" );
 });

 //going back in history
 setTimeout(function(){
     window.history.back();
 },800);

 setTimeout(function(){
     assert.equal( window.location.hash, "#page2", "We expect hash to be #page2" );  
     done();
 },1200);
});


QUnit.test( "Testing setScrollingSpeed 0", function( assert ) {
 var done = assert.async();

 $.fn.fullpage.setScrollingSpeed(0);

 //making it syncronus
 setTimeout(function(){
     $.fn.fullpage.moveSectionDown(); 
     assert.ok( $('.section').eq(1).hasClass('active'), "We expect section 2 to be active" );
 });

 //making it syncronus
 setTimeout(function(){
     $.fn.fullpage.moveSectionDown(); 
     assert.ok( $('.section').eq(2).hasClass('active'), "We expect section 3 to be active" );
     done();
 });
});


QUnit.test( "Testing setScrollingSpeed 1000", function( assert ) {
 var done = assert.async();

 //making it syncronus
 setTimeout(function(){
     $.fn.fullpage.setScrollingSpeed(1000);

     $.fn.fullpage.moveSectionDown(); 

     assert.ok( !sectionLoaded[1], "We expect section 2 not to be loaded" ); 
 });

 //section 2 won't be active yet
 setTimeout(function(){
     assert.ok( !sectionLoaded[1], "We expect section 2 not to be loaded" ); 
 }, 600);

 //section will be active in more than 1000ms
 setTimeout(function(){
     assert.ok(sectionLoaded[1], "We expect section 2 to be loaded" );   
     done();
 }, 1200);
});


QUnit.test( "Testing setLockAnchors true", function( assert ) {
 var done = assert.async();

 //scrolling down won't change the anchor
 $.fn.fullpage.setLockAnchors(true);
 $.fn.fullpage.moveSectionDown();
 assert.equal('', window.location.hash, "Anchor link should be an empty string");
 assert.ok( $('.section').eq(1).hasClass('active'), "We expect section 2 to be active" );    


 //changing the URL won't scroll to the given section
 setTimeout(function(){
     window.location.hash = "#page3";
 });
 setTimeout(function(){
     assert.ok( !$('.section').eq(2).hasClass('active'), "We don't expect section 3 to be active" ); 
     done();
 },20);
});


QUnit.test( "Testing setLockAnchors false", function( assert ) {
 var done = assert.async();

 //scrolling down will change the anchor
 setTimeout(function(){
     $.fn.fullpage.setLockAnchors(false);
     $.fn.fullpage.moveSectionDown();
     assert.equal('#page2', window.location.hash, "Anchor link should not be an empty");
     assert.ok( $('.section').eq(1).hasClass('active'), "We expect section 2 to be active" );    
 });

 //changing the URL will scroll to the given section
 setTimeout(function(){
     window.location.hash = "#page3";
 });

 setTimeout(function(){
     assert.ok( $('.section').eq(2).hasClass('active'), "We expect section 3 to be active" );
     done();
 }, 20);
});


// QUnit.test( "Testing setAllowScrolling true", function( assert ) {
//     var done = assert.async();

//     $.fn.fullpage.setAllowScrolling(true);
//     assert.equal( $(SECTION_ACTIVE_SEL).index(), 0, "We expect section 1 to be active" );   

//     $.fn.fullpage.moveSectionDown();
//     assert.equal( $(SECTION_ACTIVE_SEL).index(), 1, "We expect section 2 to be active" );
//     done();
// });


// QUnit.test( "Testing setAllowScrolling false", function( assert ) {
//     var done = assert.async();

//     $.fn.fullpage.setAllowScrolling(false);
//     assert.equal( $(SECTION_ACTIVE_SEL).index(), 0, "We expect section 1 to be active" );   

//     $.fn.fullpage.moveSectionDown();
//     assert.equal( $(SECTION_ACTIVE_SEL).index(), 0, "We don't expect section 2 to be active" );
//     done();
// });

QUnit.test( "Testing setKeyboardScrolling true", function( assert ) {
    var done = assert.async();

    $.fn.fullpage.setKeyboardScrolling(true);
    assert.equal( $(SECTION_ACTIVE_SEL).index(), 0, "We expect section 1 to be active" );   

    var e = $.Event('keydown');
    e.which = 34;
    $(document).trigger(e);

    //required timeout as its used inside fullPage.js to capture key events
    setTimeout(function(){
        assert.equal( $(SECTION_ACTIVE_SEL).index(), 1, "We expect section 2 to be active" );
        done();
    },200);
});

QUnit.test( "Testing setKeyboardScrolling false", function( assert ) {
    var done = assert.async();

    $.fn.fullpage.setKeyboardScrolling(false);
    assert.equal( $(SECTION_ACTIVE_SEL).index(), 0, "We expect section 1 to be active" );   

    var e = $.Event('keydown');
    e.which = 34;
    $(document).trigger(e);

    //required timeout as its used inside fullPage.js to capture key events
    setTimeout(function(){
        assert.equal( $(SECTION_ACTIVE_SEL).index(), 0, "We expect expect section 1 to be active" );
        done();
    },200);
});

QUnit.test( "Testing moveSectionDown", function( assert ) {
    var done = assert.async();

    $.fn.fullpage.moveSectionDown();
    assert.equal( $(SECTION_ACTIVE_SEL).index(), 1, "We expect section 2 to be active" );   

    $.fn.fullpage.moveSectionDown();
    assert.ok(!$(SECTION_SEL).first().hasClass(ACTIVE), "We don't expect section 1 to be active anymore" );  

    assert.equal( $(SECTION_ACTIVE_SEL).index(), 2, "We expect section 3 to be active" );  

    assert.equal( $(SECTION_ACTIVE_SEL).length, 1, "We expect a single active section" );  

    setTimeout(function(){
        assert.ok( sectionLoaded[1], "We expect section 2 to be loaded" );  
    }, 1000);

    setTimeout(function(){
        assert.ok( sectionLoaded[2], "We expect section 3 to be loaded" );  
        done();
    }, 2000);
});

QUnit.test( "Testing moveSectionUp", function( assert ) {
    var done = assert.async();

    //setting last section as active to start from the bottom
    $(SECTION_ACTIVE_SEL).removeClass(ACTIVE);
    $(SECTION_SEL).last().addClass(ACTIVE);

    $.fn.fullpage.moveSectionUp();
    assert.equal( $(SECTION_ACTIVE_SEL).index(), 2, "We expect section 3 to be active" );   

    $.fn.fullpage.moveSectionUp();
    assert.ok(!$(SECTION_SEL).last().hasClass('active'), "We don't expect the last section to be active anymore" );  

    assert.equal( $(SECTION_ACTIVE_SEL).index(), 1, "We expect section 2 to be active" );  

    assert.equal( $(SECTION_ACTIVE_SEL).length, 1, "We expect a single active section" );  

    setTimeout(function(){
        assert.ok( sectionLoaded[2], "We expect section 3 to be loaded" );  
    }, 1000);

    setTimeout(function(){
        assert.ok( sectionLoaded[1], "We expect section 2 to be loaded" );  
        done();
    }, 2000);
});

QUnit.test( "Testing silentMoveTo", function( assert ) {
    var done = assert.async();

    //moving to another section
    $.fn.fullpage.silentMoveTo('page3');
    assert.equal( $(SECTION_ACTIVE_SEL).index(), 2, "We expect section 3 to be active" );
    assert.ok( sectionLoaded[2], "We expect section 3 to be loaded" );  

    //moving to a specific slide within a section
    $.fn.fullpage.silentMoveTo(2, 3); //section 2 slide 4
    assert.equal( $(SECTION_ACTIVE_SEL).index(), 1, "We expect section 2 to be active" );
    assert.ok( sectionLoaded[1], "We expect section 2 to be loaded" ); 

    assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 3, "We expect section 2 slide 4 to be active");

    done();
});

QUnit.test(".destroy('all') removes all inline CSS and fullpage classes", function (assert) {
    var $SECTION_SEL = $(SECTION_SEL),
        $SLIDE_SEL = $(SLIDE_SEL),
        $html = $('html'), // listed separately because we should check each individually
        $body = $('body');

    $.fn.fullpage.destroy('all');

    // and make sure we cleaned it up. note: this requires checking the uncomputed
    // CSS or jQuery will give us computed values, which are unhelpful here
    assert.equal($SECTION_SEL.get(0).style.height, '', SECTION_SEL + ' should have an empty string height');
    assert.equal($SECTION_SEL.get(0).style.backgroundColor, '', SECTION_SEL + ' should have an empty string background-color');
    assert.equal($SECTION_SEL.get(0).style.padding, '', SECTION_SEL + ' should have an empty string padding');
    assert.equal($SLIDE_SEL.get(0).style.width, '', SLIDE_SEL + ' should have an empty string width');
    assert.equal($html.get(0).style.overflow, '', 'html should have an empty string overflow');
    assert.equal($html.get(0).style.height, '', 'html should have an empty string height');
    assert.equal($body.get(0).style.overflow, '', 'body should have an empty string overflow');
    assert.equal($body.get(0).style.height, '', 'body should have an empty string height');

    // check for <html/> classes
    assert.equal($html.hasClass(ENABLED), false, 'html should not have the ' + ENABLED + ' class');

    // check for <body/> classes
    $.each($body.get(0).className.split(/\s+/), function (index, className) {
        assert.equal(className.indexOf(VIEWING_PREFIX), -1, 'body should not have a ' + VIEWING_PREFIX + '-* class');
    });
});

// MORE TO DO