

QUnit.test('Testing scrollBar:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {scrollBar: true});

    assert.equal($('body').css('overflow'), 'visible', 'We expect body to have overflow:visible');
    assert.equal($('html').css('overflow'), 'visible', 'We expect html to have overflow:visible');

    assert.equal($('body')[0].style.height, 'initial', 'We expect body to have overflow:visible');
    assert.equal($('html')[0].style.height, 'initial', 'We expect html to have overflow:visible');

    assert.equal(FP.test.options.recordHistory, false, 'We expect recordHistory to be false');

    assert.equal($(WRAPPER_SEL)[0].style.touchAction, '', 'We expect touchAction to be ""');
});
