QUnit.test('Testing setScrollingSpeed 1000', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {scrollingSpeed: 1000});

    FP.moveSectionDown();
    assert.equal($(id).css('transition-duration'), '1s', 'We expect transition-duration to be 1s');
});

QUnit.test('Testing setScrollingSpeed 0', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {scrollingSpeed: 0});

    FP.moveSectionDown();
    assert.equal($(id).css('transition-duration'), '0s', 'We expect transition-duration to be 0s');
});

QUnit.test('Invalid scrollingSpeed falls back to the default', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {scrollingSpeed: '900ms'});

    assert.equal(FP.getFullpageData().options.scrollingSpeed, 700, 'We expect the default speed to be used');
    FP.moveSectionDown();
    assert.equal($(id).css('transition-duration'), '0.7s', 'We expect the default transition duration');
});

QUnit.test('Invalid scrollingSpeed passed to the API falls back to the default', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {scrollingSpeed: 1000});

    FP.setScrollingSpeed('900ms');
    assert.equal(FP.getFullpageData().options.scrollingSpeed, 700, 'We expect the default speed to be used');
});

QUnit.test('Testing setScrollingSpeed for slides', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, {scrollingSpeed: 1000});

    FP.moveSlideRight();
    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDES_CONTAINER_SEL).css('transition-duration'), '1s', 'We expect transition-duration to be 1s');
});