
//overwritting the scrollTop function of jQuery to simulate scroll
//when using autoScrolling:false or scrollBar:true
function simulateScroll(scrollValue){
    window.pageYOffset = (function(){
        return scrollValue;
    })();
    trigger(window, 'scroll');
}


QUnit.test('Testing fitToSection:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {autoScrolling:false, fitToSection: true, scrollingSpeed: 50}));
    var done = assert.async(1);

    $(SECTION_ACTIVE_SEL)[0].offsetTop = window.innerHeight * 0.6;
    simulateScroll(window.innerHeight * 0.6);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 1 to be active');

    assert.ok($(SECTION_SEL).eq(0).hasClass(COMPLETELY), '1st section has class COMPLETELY_SEL');

    setTimeout(function(){
        assert.ok($(SECTION_SEL).eq(1).hasClass(COMPLETELY), '2nd section has class COMPLETELY_SEL');
        done();
    },100 + 1000);
});

QUnit.test('Testing fitToSection:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {autoScrolling:false, fitToSection: false, scrollingSpeed: 50}));
    var done = assert.async(1);

    $(SECTION_ACTIVE_SEL)[0].offsetTop = window.innerHeight * 0.6;
    simulateScroll(window.innerHeight * 0.6);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 1 to be active');

    assert.ok($(SECTION_SEL).eq(0).hasClass(COMPLETELY), '1st section has class COMPLETELY_SEL');

    setTimeout(function(){
        assert.ok(!$(SECTION_SEL).eq(1).hasClass(COMPLETELY), '2nd section does not have the class COMPLETELY_SEL');
        done();
    },200 + 1000);
});

QUnit.test('Testing fitToSection:true & fitToSectionDelay:100', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {autoScrolling:false, fitToSection: true, fitToSectionDelay:100, scrollingSpeed: 50}));
    var done = assert.async(1);

    $(SECTION_ACTIVE_SEL)[0].offsetTop = window.innerHeight * 0.6;
    simulateScroll(window.innerHeight * 0.6);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 1 to be active');

    assert.ok($(SECTION_SEL).eq(0).hasClass(COMPLETELY), '1st section has class COMPLETELY_SEL');

    setTimeout(function(){
        assert.ok($(SECTION_SEL).eq(1).hasClass(COMPLETELY), '2nd section has class COMPLETELY_SEL');
        done();
    },200 + 100);
});

