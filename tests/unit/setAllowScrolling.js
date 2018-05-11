QUnit.test('Testing setAllowScrolling(true) with mouseWheel up & down', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));
    var windowHeight = $(window).height();

    FP.setAllowScrolling(true);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    simulateMouseWheel('up');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
});


QUnit.test('Testing setAllowScrolling(false) with mouseWheel up & down', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));

    FP.setAllowScrolling(false);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We don not expect section 2 to be active');
    simulateMouseWheel('up');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We don not expect section 2 to be active');
});

QUnit.test('Testing setAllowScrolling(false) with moveSectionUp & moveSectionDown', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));
    var windowHeight = $(window).height();

    FP.setAllowScrolling(false);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    FP.moveSectionDown();

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    FP.moveSectionUp();

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
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
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        simulateKeydown('up');
        done();
    },200);

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },200*2);
});

QUnit.test('Testing setAllowScrolling(false, "up")', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));
    var windowHeight = $(window).height();

    FP.setAllowScrolling(false, 'up');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    simulateMouseWheel('up');

//scrolling up won't do anything
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
});

QUnit.test('Testing setAllowScrolling(false, "up, left")', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true}));
    var windowHeight = $(window).height();

    FP.setAllowScrolling(false, 'up, left');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    simulateMouseWheel('up');

//scrolling up won't do anything
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    FP.moveSlideRight();

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, [`-1000`, '0', '0'], `We expect slides transformation to be [-1000, 0, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 1, 'We expect slide 2.2 to be active');

    //as we don't have horizontal scroll event, we use the control arrow to verify it
    $(SECTION_ACTIVE_SEL).find(SLIDES_ARROW_SEL + SLIDES_PREV_SEL)[0].click();

//sliding left won't do anything
    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-1000', '0', '0'], `We expect slides transformation to be [-1000, 0, 0]`);
    assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 1, 'We expect slide 2.2 to be active');
});