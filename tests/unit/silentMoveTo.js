QUnit.test('Testing silentMoveTo vertical with anchor', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {scrollingSpeed: 1000}));
    var windowHeight = $(window).height();

    FP.silentMoveTo('page3');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*2)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*2)}, 0]`);
    assert.ok(FP.test.options.scrollingSpeed, 1000, 'We expect scrollingSpeed to be the samea s the initial one after the silent move');
});

QUnit.test('Testing silentMoveTo vertical with index', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {scrollingSpeed: 1000}));
    var windowHeight = $(window).height();

    FP.silentMoveTo('2');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
    assert.ok(FP.test.options.scrollingSpeed, 1000, 'We expect scrollingSpeed to be the samea s the initial one after the silent move');
});

QUnit.test('Testing silentMoveTo verticall + horizontal with anchors', function(assert) {
    var id = '#fullpage-slides-with-anchor';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {scrollingSpeed: 1000}));
    var windowHeight = $(window).height();

    //moving to a specific slide within a section
    FP.silentMoveTo('page2', 'slide3');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

    assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 2.3 to be active');
    var slidesTranforms = getTransformFromElement($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');

    assert.ok(FP.test.options.scrollingSpeed, 1000, 'We expect scrollingSpeed to be the samea s the initial one after the silent move');
});

QUnit.test('Testing silentMoveTo verticall + horizontal with index', function(assert) {
    var id = '#fullpage-slides-with-anchor';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {scrollingSpeed: 1000}));
    var windowHeight = $(window).height();

    //moving to a specific slide within a section
    FP.silentMoveTo('2', '2');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

    assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 2.3 to be active');
    var slidesTranforms = getTransformFromElement($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');

    assert.ok(FP.test.options.scrollingSpeed, 1000, 'We expect scrollingSpeed to be the samea s the initial one after the silent move');
});

QUnit.test('Testing silentMoveTo horizontal only with anchor', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {scrollingSpeed: 1000}));
    var windowHeight = $(window).height();

    //moving to a specific slide within a section
    FP.silentMoveTo('1', 'slide3');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);

    assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 1.3 to be active');
    var slidesTranforms = getTransformFromElement($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');

    assert.ok(FP.test.options.scrollingSpeed, 1000, 'We expect scrollingSpeed to be the samea s the initial one after the silent move');
});

QUnit.test('Testing silentMoveTo horizontal only with index', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {scrollingSpeed: 1000}));
    var windowHeight = $(window).height();

    //moving to a specific slide within a section
    FP.silentMoveTo('1', '2');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);

    assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 1.3 to be active');
    var slidesTranforms = getTransformFromElement($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');

    assert.ok(FP.test.options.scrollingSpeed, 1000, 'We expect scrollingSpeed to be the samea s the initial one after the silent move');
});