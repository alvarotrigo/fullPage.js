QUnit.test('Testing moveSlideLeft css3:true', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    var FP = initFullpageNew(id, slidesCallbacks);
    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 3, 'We expect slide 2.4 to be active');

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-3000', '0', '0'], 'We expect slides tranformation to be [-3000, 0, 0]');

    FP.moveSlideLeft();
    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-2000', '0', '0'], 'We expect slides tranformation to be [-2000, 0, 0]');

    FP.moveSlideLeft();
    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');

});


QUnit.test('Testing moveSlideLeft css3:false', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    var FP = initFullpageNew(id, Object.assign({}, slidesCallbacks, {css3: false}));

    function getPosition(){
        return FP.test.left[$(id).find(SECTION_ACTIVE_SEL).index()];
    }

    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 3, 'We expect slide 2.4 to be active');
    assert.deepEqual(getPosition(), 3000, 'We expect slides position to be 3');

    FP.moveSlideLeft();
    assert.deepEqual(getPosition(), 2000, 'We expect slides tranformation to be 2000');
    FP.moveSlideLeft();

    assert.deepEqual(getPosition(), 1000, 'We expect slides tranformation to be 1000');
});

QUnit.test('Testing moveSlideLeft single-slide', function(assert) {
    var id = '#fullpage-single-slide';
    var FP = initFullpageNew(id, slidesCallbacks);

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');

    FP.moveSlideLeft();
    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');
});

QUnit.test('Testing moveSlideLeft loopHorizontal:true first-slide-active', function(assert) {
    var id = '#fullpage-first-slide-active';
    var options =  Object.assign({}, slidesCallbacks, {loopHorizontal: true });
    var FP = initFullpageNew(id, options);

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');

    FP.moveSlideLeft();

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['-1000', '0', '0'], 'We expect slides tranformation to be [-1000, 0, 0]');
});

QUnit.test('Testing moveSlideLeft loopHorizontal:false first-slide-active', function(assert) {
    var id = '#fullpage-first-slide-active';
    var options =   Object.assign({}, slidesCallbacks, {loopHorizontal: false });
    var FP = initFullpageNew(id, options);

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');

    FP.moveSlideLeft();

    var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
    assert.deepEqual(transforms, ['0', '0', '0'], 'We expect slides tranformation to be [0, 0, 0]');
});
