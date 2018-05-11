
QUnit.test('Testing continuousVertical:false from 1st section to last', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {continuousVertical: false, scrollingSpeed: 50});
    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');

    FP.moveSectionUp();

    setTimeout(function(){
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        assert.deepEqual(getTransformFromElement($(id)), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');
        done();
    }, 100);
});


QUnit.test('Testing continuousVertical:true & autoScrolling:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {continuousVertical: true, autoScrolling:false, scrollingSpeed: 50});
    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');

    FP.moveSectionUp();

    setTimeout(function(){
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        assert.deepEqual(getTransformFromElement($(id)), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');
        done();
    }, 100);
});


QUnit.test('Testing continuousVertical:true from 1st section to last', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {continuousVertical: true, scrollingSpeed: 50});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');

    FP.moveSectionUp();

    setTimeout(function(){
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
        assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);
        done();
    }, 100);
});

QUnit.test('Testing continuousVertical:true scroll normal down', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {continuousVertical: true, scrollingSpeed: 50});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');

    FP.moveSectionDown();

    setTimeout(function(){
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        done();
    }, 100);
});

QUnit.test('Testing continuousVertical:true scroll normal up', function(assert) {
    var id = '#fullpage-last-section-active';
    var FP = initFullpageNew(id, {continuousVertical: true, scrollingSpeed: 50});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);

    FP.moveSectionUp();

    setTimeout(function(){
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');
        assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*2)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*2)}, 0]`);
        done();
    }, 100);
});


QUnit.test('Testing continuousVertical:false from last section to first', function(assert) {
    var id = '#fullpage-last-section-active';
    var FP = initFullpageNew(id, {continuousVertical: false, scrollingSpeed: 50});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);

    FP.moveSectionDown();

    setTimeout(function(){
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
        assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);
        done();
    }, 100);
});


QUnit.test('Testing continuousVertical:true from last section to first', function(assert) {
    var id = '#fullpage-last-section-active';
    var FP = initFullpageNew(id, {continuousVertical: true, scrollingSpeed: 50});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getTransformFromElement($(id)), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);

    FP.moveSectionDown();

    setTimeout(function(){
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        assert.deepEqual(getTransformFromElement($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        done();
    }, 100);
});


QUnit.test('Testing continuousVertical:true with css3:false Checking middle slide stills in the middle', function(assert) {
    var id = '#fullpage-middle-slide-active';
    var FP = initFullpageNew(id, {continuousVertical: true, css3:false, scrollingSpeed: 50});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    function getPosition(){
        return $(id).find(SECTION_ACTIVE_SEL).find(SLIDES_WRAPPER_SEL).scrollLeft();
    }

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 1, 'We expect slide 1.2 to be active');
    assert.deepEqual(getPosition(), 1000, 'We expect slides position to be 1000');

    FP.moveSectionUp();

    setTimeout(function(){
        var position = $(id).find(SECTION_SEL).eq(0).find(SLIDES_WRAPPER_SEL).scrollLeft();
        assert.equal($(id).find(SECTION_SEL).eq(0).find(SLIDE_ACTIVE_SEL).index(), 1, 'We expect slide 1.2 to be active');
        assert.deepEqual(position, 1000, 'We expect slides position to be 1000');
        done();
    }, 100);
});