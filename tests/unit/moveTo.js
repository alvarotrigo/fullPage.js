QUnit.test('Testing moveTo vertical with anchor', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();
    var done = assert.async(1);

    FP.moveTo('page3');
    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*2)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*2)}, 0]`);

        done();
    }, 800);

});

QUnit.test('Testing moveTo vertical with index', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();
    var done = assert.async(1);

    FP.moveTo('2');
    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

        done();
    },800);
});

QUnit.test('Testing moveTo verticall + horizontal with anchors', function(assert) {
    var id = '#fullpage-slides-with-anchor';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();
    var done = assert.async(2);

    //moving to a specific slide within a section
    FP.moveTo('page2', 'slide3');
    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

        done();
    },800);

    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 2.3 to be active');
        var slidesTranforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');

        done();
    }, 800*2);
});

QUnit.test('Testing moveTo verticall + horizontal with index', function(assert) {
    var id = '#fullpage-slides-with-anchor';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();
    var done = assert.async(2);

    //moving to a specific slide within a section
    FP.moveTo('2', '2');
    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

        done();
    }, 800);

    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 2.3 to be active');
        var slidesTranforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');

        done();
    }, 800*2);
});

QUnit.test('Testing moveTo horizontal only with anchor', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();
    var done = assert.async(2);

    //moving to a specific slide within a section
    FP.moveTo('1', 'slide3');
    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);

        done();
    }, 800);

    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 1.3 to be active');
        var slidesTranforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');

        done();
    }, 800*2);
});

QUnit.test('Testing moveTo horizontal only with index', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, allBasicOptions);
    var windowHeight = $(window).height();
    var done = assert.async(2);

    //moving to a specific slide within a section
    FP.moveTo('1', '2');
    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);

        done();
    }, 800);

    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 2, 'We expect slide 1.3 to be active');
        var slidesTranforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(slidesTranforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');

        done();
    },800*2);

});