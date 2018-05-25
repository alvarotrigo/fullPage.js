

QUnit.test('Testing setAllowScrolling true', function(assert) {
    $('#fullpage').fullpage(allBasicOptions);
    var done = assert.async();

    $.fn.fullpage.setAllowScrolling(true);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    $.fn.fullpage.moveSectionDown();
    setTimeout(function() {
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
    }, 800);
});


QUnit.test('Testing setAllowScrolling false', function(assert) {
    $('#fullpage').fullpage(allBasicOptions);
    var done = assert.async();

    $.fn.fullpage.setAllowScrolling(false);
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    //moving down with mouse wheel
    var mouseWheel = new Event('wheel', { 'bubbles': true });
    mouseWheel.deltaY = 10;
    document.dispatchEvent(mouseWheel);

    setTimeout(function() {
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We don't expect section 2 to be active');
        done();
    }, 800);
});