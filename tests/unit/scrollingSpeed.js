QUnit.test('Testing setScrollingSpeed 0', function(assert) {
    $('#fullpage').fullpage(allBasicOptions);

    var done = assert.async(2);

    $.fn.fullpage.setScrollingSpeed(0);
    $.fn.fullpage.moveSectionDown();

    //making it syncronus
    setTimeout(function() {
        assert.ok($('.section').eq(1).hasClass('active'), 'We expect section 2 to be active');
        done();
        $.fn.fullpage.moveSectionDown();
    }, 30);

    //making it syncronus
    setTimeout(function() {
        assert.ok($('.section').eq(2).hasClass('active'), 'We expect section 3 to be active');
        done();
    }, 30);
});


QUnit.test('Testing setScrollingSpeed 1000', function(assert) {
    $('#fullpage').fullpage(allBasicOptions);
    var done = assert.async(3);

    //making it syncronus
    setTimeout(function() {
        $.fn.fullpage.setScrollingSpeed(1000);

        $.fn.fullpage.moveSectionDown();

        assert.ok(!sectionLoaded[1], 'We expect section 2 not to be loaded');
        done();
    });

    //section 2 won't be active yet
    setTimeout(function() {
        assert.ok(!sectionLoaded[1], 'We expect section 2 not to be loaded');
        done();
    }, 600);

    //section will be active in more than 1000ms
    setTimeout(function() {
        assert.ok(sectionLoaded[1], 'We expect section 2 to be loaded');
        done();
    }, 1200);
});