
QUnit.test('Testing setKeyboardScrolling true', function(assert) {
    $('#fullpage').fullpage(allBasicOptions);
    var done = assert.async();

    $.fn.fullpage.setKeyboardScrolling(true);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    var e = $.Event('keydown');
    e.which = 34;
    $(document).trigger(e);

    //required timeout as its used inside fullPage.js to capture key events
    setTimeout(function() {
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
    }, 200);
});

QUnit.test('Testing setKeyboardScrolling false', function(assert) {
    $('#fullpage').fullpage(allBasicOptions);
    var done = assert.async();

    $.fn.fullpage.setKeyboardScrolling(false);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    var e = $.Event('keydown');
    e.which = 34;
    $(document).trigger(e);

    //required timeout as its used inside fullPage.js to capture key events
    setTimeout(function() {
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect expect section 1 to be active');
        done();
    }, 200);
});
