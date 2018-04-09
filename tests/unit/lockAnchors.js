
QUnit.test('Testing setLockAnchors true', function(assert) {
    $('#fullpage').fullpage(allBasicOptions);
    var done = assert.async(1);

    //scrolling down won't change the anchor
    $.fn.fullpage.setLockAnchors(true);
    $.fn.fullpage.moveSectionDown();
    assert.equal('', window.location.hash, 'Anchor link should be an empty string');
    assert.ok($('.section').eq(1).hasClass('active'), 'We expect section 2 to be active');

    //changing the URL won't scroll to the given section
    setTimeout(function() {
        window.location.hash = '#page3';
    }, 20);

    setTimeout(function() {
        assert.ok(!$('.section').eq(2).hasClass('active'), 'We don't expect section 3 to be active');
        done();
    }, 50);
});


QUnit.test('Testing setLockAnchors false', function(assert) {
    $('#fullpage').fullpage(allBasicOptions);
    var done = assert.async(2);

    //scrolling down will change the anchor
    setTimeout(function() {
        $.fn.fullpage.setLockAnchors(false);
        $.fn.fullpage.moveSectionDown();
        assert.equal('#page2', window.location.hash, 'Anchor link should not be an empty');
        assert.ok($('.section').eq(1).hasClass('active'), 'We expect section 2 to be active');
        done();
    });

    //changing the URL will scroll to the given section
    setTimeout(function() {
        window.location.hash = '#page3';
    });

    setTimeout(function() {
        assert.ok($('.section').eq(2).hasClass('active'), 'We expect section 3 to be active');
        done();
    }, 20);
});
