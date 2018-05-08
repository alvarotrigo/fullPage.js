QUnit.test('Testing setAllowScrolling(true) with mouseWheel up & down', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    FP.setAllowScrolling(true);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateMouseWheel('up');
    },800);

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },800*2);
});


QUnit.test('Testing setAllowScrolling(false) with mouseWheel up & down', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));
    var done = assert.async(2);

    FP.setAllowScrolling(false);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    setTimeout(function() {
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We don not expect section 2 to be active');
        done();
        simulateMouseWheel('up');
    }, 800);

    setTimeout(function() {
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We don not expect section 2 to be active');
        done();
    }, 800*2);
});

QUnit.test('Testing setAllowScrolling(false) with moveSectionUp & moveSectionDown', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    FP.setAllowScrolling(false);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    FP.moveSectionDown();

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        FP.moveSectionUp();
    },800);

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },800*2);
});

QUnit.test('Testing setAllowScrolling(false) with keydown down & up', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {scrollingSpeed:600, loopTop:true}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    FP.setAllowScrolling(false);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateKeydown('down');

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateKeydown('up');
    },800);

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },800*2);
});

QUnit.test('Testing setAllowScrolling(false, "up")', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    FP.setAllowScrolling(false, 'up');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    setTimeout(function() {
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateMouseWheel('up');
    }, 800);

    //scrolling up won't do anything
    setTimeout(function() {
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
    }, 800*2);
});

QUnit.test('Testing setAllowScrolling(false, "up, left")', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));
    var windowHeight = $(window).height();

    var done = assert.async(4);

    FP.setAllowScrolling(false, 'up, left');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    setTimeout(function() {
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateMouseWheel('up');
    }, 800);

    //scrolling up won't do anything
    setTimeout(function() {
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        FP.moveSlideRight();
    }, 800*2);

    setTimeout(function() {
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, [`-1000`, '0', '0'], `We expect slides transformation to be [-1000, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 1, 'We expect slide 2.2 to be active');
        done();

        //as we don't have horizontal scroll event, we use the control arrow to verify it
        $(SECTION_ACTIVE_SEL).find(SLIDES_ARROW_SEL + SLIDES_PREV_SEL)[0].click();
    },800*3);

    //sliding left won't do anything
    setTimeout(function() {
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['-1000', '0', '0'], `We expect slides transformation to be [-1000, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 1, 'We expect slide 2.2 to be active');
        done();
    }, 800*4);
});