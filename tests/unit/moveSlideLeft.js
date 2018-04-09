QUnit.test('Testing moveSlideLeft css3:true', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    initFullpage(id, slidesCallbacks);
    var done = assert.async(2);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 3, 'We expect slide 2.4 to be active');
    assert.ok(slideLoaded[3], 'We expect slide 2.4 to be loaded');

    var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(transforms, ['-3000', '0', '0'], 'We expect slides tranformation to be ['-3000', '0', '0']');


    $.fn.fullpage.moveSlideLeft();
    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['-2000', '0', '0'], 'We expect slides tranformation to be ['-2000', '0', '0']');
        done();
        $.fn.fullpage.moveSlideLeft();
    }, 800);

    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be ['-1000', '0', '0']');
        done();
    }, 800 * 2);

});

QUnit.test('Testing moveSlideLeft css3:false', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    initFullpage(id, Object.assign({}, slidesCallbacks, {css3: false}));
    var done = assert.async(2);

    function getPosition(){
        return $(id).find(SECTION_ACTIVE_SEL).find(SLIDES_WRAPPER_SEL).scrollLeft();
    }

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 3, 'We expect slide 2.4 to be active');
    assert.deepEqual(getPosition(), 3000, 'We expect slides position to be 3');

    $.fn.fullpage.moveSlideLeft();
    setTimeout(function(){
        assert.deepEqual(getPosition(), 2000, 'We expect slides tranformation to be 2000');
        done();
        $.fn.fullpage.moveSlideLeft();
    }, 800);

    setTimeout(function(){
        assert.deepEqual(getPosition(), 1000, 'We expect slides tranformation to be 1000');
        done();
    }, 800 * 2);
});

QUnit.test('Testing moveSlideLeft single-slide', function(assert) {
    var id = '#fullpage-single-slide';
    initFullpage(id, slidesCallbacks);
    var done = assert.async(1);

    var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be ['0', '0', '0']');

    $.fn.fullpage.moveSlideLeft();
    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be ['0', '0', '0']');
        done();
        $.fn.fullpage.moveSlideLeft();
    }, 800);
});

QUnit.test('Testing moveSlideLeft loopHorizontal:true first-slide-active', function(assert) {
    var id = '#fullpage-first-slide-active';
    var options =  Object.assign({}, slidesCallbacks, {loopHorizontal: true });
    initFullpage(id, options);
    var done = assert.async(1);

    var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be ['0', '0', '0']');

    $.fn.fullpage.moveSlideLeft();

    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be ['-1000', '0', '0']');
        done();
    }, 800 );
});

QUnit.test('Testing moveSlideLeft loopHorizontal:false first-slide-active', function(assert) {
    var id = '#fullpage-first-slide-active';
    var options =   Object.assign({}, slidesCallbacks, {loopHorizontal: false });
    initFullpage(id, options);
    var done = assert.async(1);

    var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be ['0', '0', '0']');

    $.fn.fullpage.moveSlideLeft();

    setTimeout(function(){
        var transforms = getTransform($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL));
        assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be ['0', '0', '0']');
        done();
    }, 800 * 2);
});

