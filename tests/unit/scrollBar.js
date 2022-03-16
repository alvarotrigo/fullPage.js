

QUnit.test('Testing scrollBar:true & fiToSection: false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {scrollBar: true, fitToSection: false});

    assert.equal($('body').css('overflow'), 'visible', 'We expect body to have overflow:visible');
    assert.equal($('html').css('overflow'), 'visible', 'We expect html to have overflow:visible');

    assert.equal($('body')[0].style.height, 'initial', 'We expect body to have overflow:visible');
    assert.equal($('html')[0].style.height, 'initial', 'We expect html to have overflow:visible');

    assert.equal(FP.test.options.recordHistory, true, 'We expect recordHistory to be false');

    assert.equal($(WRAPPER_SEL)[0].style.touchAction, '', 'We expect touchAction to be ""');
});


QUnit.test('Testing scrollBar:true & fiToSection: true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {scrollBar: true, fitToSection: true});

    assert.equal($('body').css('overflow'), 'auto scroll', 'We expect body to have overflow:visible');
    assert.equal($('html').css('overflow'), 'auto hidden', 'We expect html to have overflow:visible');

    assert.equal($('body')[0].style.height, 'initial', 'We expect body to have overflow:visible');
    assert.equal($('html')[0].style.height, 'initial', 'We expect html to have overflow:visible');

    assert.equal(FP.test.options.recordHistory, true, 'We expect recordHistory to be false');

    assert.equal($(WRAPPER_SEL)[0].style.touchAction, '', 'We expect touchAction to be ""');
});
