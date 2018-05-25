QUnit.test('Testing moveSlideRight css3:true', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, slidesCallbacks);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 0, 'We expect slide 2.1 to be active');

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');

    FP.moveSlideRight();
    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');
    FP.moveSlideRight();

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');
});

QUnit.test('Testing moveSlideRight css3:false', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, slidesCallbacks, {css3: false}));

    function getPosition(){
        return FP.test.left[$(id).find(SECTION_ACTIVE_SEL).index()];
    }

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_WRAPPER_SEL).index(), 0, 'We expect slide 2.1 to be active');
    assert.deepEqual(getPosition(), 0, 'We expect slides position to be 0');

    FP.moveSlideRight();
    assert.deepEqual(getPosition(), 1000, 'We expect slides tranformation to be 1000');
    FP.moveSlideRight();

    assert.deepEqual(getPosition(), 2000, 'We expect slides tranformation to be 2000');
});

QUnit.test('Testing moveSlideRight single-slide', function(assert) {
    var id = '#fullpage-single-slide';
    var FP = initFullpageNew(id, slidesCallbacks);

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');

    FP.moveSlideRight();
    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');
    FP.moveSlideRight();
});

QUnit.test('Testing moveSlideRight loopHorizontal:true second-slide-active', function(assert) {
    var id = '#fullpage-second-slide-active';
    var options =   Object.assign({}, slidesCallbacks, {loopHorizontal: true });
    var FP = initFullpageNew(id, options);

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');

    FP.moveSlideRight();
    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');
    FP.moveSlideRight();
});

QUnit.test('Testing moveSlideRight loopHorizontal:false second-slide-active', function(assert) {
    var id = '#fullpage-second-slide-active';
    var options =   Object.assign({}, slidesCallbacks, {loopHorizontal: false });
    var FP = initFullpageNew(id, options);

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');

    FP.moveSlideRight();
    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');
    FP.moveSlideRight();
});

