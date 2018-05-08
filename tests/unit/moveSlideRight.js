QUnit.test('Testing moveSlideRight css3:true', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, slidesCallbacks);
    var done = assert.async(2);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 0, 'We expect slide 2.1 to be active');

    var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');

    FP.moveSlideRight();
    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');
        done();
        FP.moveSlideRight();
    }, 800);

    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');
        done();
    }, 800 * 2);
});

QUnit.test('Testing moveSlideRight css3:false', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, slidesCallbacks, {css3: false}));
    var done = assert.async(2);

    function getPosition(){
        return $(id).find(SECTION_ACTIVE_SEL).find(SLIDES_WRAPPER_SEL).scrollLeft();
    }

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_WRAPPER_SEL).index(), 0, 'We expect slide 2.1 to be active');
    assert.deepEqual(getPosition(), 0, 'We expect slides position to be 0');

    FP.moveSlideRight();
    setTimeout(function(){
        assert.deepEqual(getPosition(), 1000, 'We expect slides tranformation to be 1000');
        done();
        FP.moveSlideRight();
    }, 800);

    setTimeout(function(){
        assert.deepEqual(getPosition(), 2000, 'We expect slides tranformation to be 2000');
        done();
    }, 800 * 2);
});

QUnit.test('Testing moveSlideRight single-slide', function(assert) {
    var id = '#fullpage-single-slide';
    var FP = initFullpageNew(id, slidesCallbacks);
    var done = assert.async(1);

    var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');

    FP.moveSlideRight();
    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');
        done();
        FP.moveSlideRight();
    }, 800);
});

QUnit.test('Testing moveSlideRight loopHorizontal:true second-slide-active', function(assert) {
    var id = '#fullpage-second-slide-active';
    var options =   Object.assign({}, slidesCallbacks, {loopHorizontal: true });
    var FP = initFullpageNew(id, options);
    var done = assert.async(1);

    var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');

    FP.moveSlideRight();
    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');
        done();
        FP.moveSlideRight();
    }, 800);
});

QUnit.test('Testing moveSlideRight loopHorizontal:false second-slide-active', function(assert) {
    var id = '#fullpage-second-slide-active';
    var options =   Object.assign({}, slidesCallbacks, {loopHorizontal: false });
    var FP = initFullpageNew(id, options);
    var done = assert.async(1);

    var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');

    FP.moveSlideRight();
    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');
        done();
        FP.moveSlideRight();
    }, 800);
});

