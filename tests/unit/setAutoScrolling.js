
QUnit.test('Testing setAutoScrolling(true, external) {autoScrolling:true}', function(assert) {
    var id = '#fullpage-2nd-active-section';
    var FP = initFullpageNew(id, {autoScrolling:true, recordHistory:true});
    var windowHeight = $(window).height();

    FP.test.setAutoScrolling(true, 'external');

    assert.equal($('body').css('overflow'), 'hidden', 'body overflow should be hidden');
    assert.equal($('html').css('overflow'), 'hidden', 'html should be hidden');

    assert.equal(FP.test.options.recordHistory, true, 'recordHistory should be true');
    assert.equal(FP.test.options.autoScrolling, true, 'autoScrolling should be true');

    assert.equal($(id).css('touch-action'), 'none', 'touch action should be none');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
});


QUnit.test('Testing setAutoScrolling(false, external) {autoScrolling:false}', function(assert) {
    var id = '#fullpage-2nd-active-section';
    var FP = initFullpageNew(id, {autoScrolling:false, recordHistory:true});

    FP.test.setAutoScrolling(false, 'external');

    assert.equal($('body').css('overflow'), 'visible', 'overflow should be visible');
    assert.equal($('html').css('overflow'), 'visible', 'html should be visible');

    assert.equal(FP.test.options.recordHistory, false, 'recordHistory should be false');
    assert.equal(FP.test.options.autoScrolling, false, 'autoScrolling should be false');

    assert.equal($(id).css('touch-action'), 'auto', 'touch action should be auto');
});


QUnit.test('Testing setAutoScrolling(true, external) {scrollBar:true}', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {scrollBar:true, recordHistory: true});

    FP.test.setAutoScrolling(true, 'external');

    assert.equal($('body').css('overflow'), 'visible', 'overflow should be visible');
    assert.equal($('html').css('overflow'), 'visible', 'html should be visible');

    assert.equal($(id).css('touch-action'), 'auto', 'touch action should be auto');

    assert.equal(FP.test.options.recordHistory, false, 'recordHistory should be false');
    assert.equal(FP.test.options.autoScrolling, true, 'autoScrolling should be true');
});