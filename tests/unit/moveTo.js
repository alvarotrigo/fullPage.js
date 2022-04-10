QUnit.test('Testing moveTo vertical with anchor', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();

    FP.moveTo('page3');
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*2)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*2)}, 0]`);
});

QUnit.test('Testing moveTo vertical with index', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();

    FP.moveTo('2');
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
});

QUnit.test('Testing moveTo verticall + horizontal with anchors', function(assert) {
    var id = '#fullpage-slides-with-anchor';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();
    var done = assert.async(1);

    //moving to a specific slide within a section
    FP.moveTo('page2', 'slide3');
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 2.3 to be active');
        var slidesTranforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
        assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');
        done();
    }, 800);
});

QUnit.test('Testing moveTo verticall + horizontal with index', function(assert) {
    var id = '#fullpage-slides-with-anchor';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();
    var done = assert.async(1);

    //moving to a specific slide within a section
    FP.moveTo('2', '2');
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

    setTimeout(function(){
        assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 2.3 to be active');
        var slidesTranforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
        assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');
        done();
    }, 800);
});

QUnit.test('Testing moveTo horizontal only with anchor', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();

    //moving to a specific slide within a section
    FP.moveTo('1', 'slide3');
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 1.3 to be active');
    var slidesTranforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');
});

QUnit.test('Testing moveTo horizontal only with index', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();

    //moving to a specific slide within a section
    FP.moveTo('1', '2');
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 1.3 to be active');
    var slidesTranforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');
});