QUnit.test('Testing moveSectionDown first section active with slides {css3:true, autoScrolling:true}', function(assert) {
    var id = '#fullpage';
    initFullpage(id, {css3: true, autoScrolling: true});
    var windowHeight = $(window).height();

    var done = assert.async(2);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransform($(id)), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');

    $.fn.fullpage.moveSectionDown();
    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        $.fn.fullpage.moveSectionDown();

        done();
    }, 800);

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*2)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*2)}, 0]`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');
        $.fn.fullpage.moveSectionDown();

        done();
    }, 800 * 2);
});


QUnit.test('Testing moveSectionDown first section active with slides {css3:false, autoScrolling:true}', function(assert) {
    var id = '#fullpage';
    initFullpage(id, {css3: false, autoScrolling: true});
    var windowHeight = $(window).height();

    var done = assert.async(2);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTop(id), '0px', 'We expect wrapper top property to be 0px');

    $.fn.fullpage.moveSectionDown();
    setTimeout(function(){
        assert.deepEqual(getTop(id), -(windowHeight*1) +'px', `We expect wrapper top property to be -${(windowHeight*1)}px`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        $.fn.fullpage.moveSectionDown();

        done();
    }, 800);

    setTimeout(function(){
        assert.deepEqual(getTop(id), -(windowHeight*2) +'px', `We expect wrapper top property to be -${(windowHeight*2)}px`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');

        done();
    }, 800 * 2);
});



QUnit.test('Testing moveSectionDown in fullpage-last-section-active {css3:true, autoScrolling:true}', function(assert) {
    var id = '#fullpage-last-section-active';
    initFullpage(id, {css3: true, autoScrolling: true});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);

    $.fn.fullpage.moveSectionDown();
    setTimeout(function(){
    assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');

        done();
    }, 800);
});


QUnit.test('Testing moveSectionDown in fullpage-last-section-active {css3:false, autoScrolling:true}', function(assert) {
    var id = '#fullpage-last-section-active';
    initFullpage(id, {css3: false, animateAnchor: false,autoScrolling: true});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getTop(id),  -(windowHeight*3) +'px', `We expect wrapper top property to be -${(windowHeight*3)}px`);

    $.fn.fullpage.moveSectionDown();
    setTimeout(function(){
    assert.deepEqual(getTop(id),  -(windowHeight*3) +'px', `We expect wrapper top property to be -${(windowHeight*3)}px`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');

        done();
    }, 800);
});



/* Not working! qunit doesn't allow the use of something like $('html,body').animate({scrollTop: 400})
QUnit.test('Testing moveSectionDown in fullpage-last-section-active {autoScrolling:false}', function(assert) {
    var id = '#fullpage-last-section-active';
    initFullpage(id, {autoScrolling: false, animateAnchor: false});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    $('html,body').scrollTop(400);

    console.log( $(window).scrollTop() );
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getWindowPosition(), 0, 'We expect window position to be 0');

    $.fn.fullpage.moveSectionDown();
    setTimeout(function(){

        assert.deepEqual(getWindowPosition(), 0, 'We expect window position to be 0');
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

        done();
    }, 800);
});

/* Not working! qunit doesn't allow the use of something like $('html,body').animate({scrollTop: 400}) */
/*
QUnit.test('Testing moveSectionDown first section active with slides {autoScrolling:false}', function(assert) {
    var id = '#fullpage';
    initFullpage(id, {autoScrolling: false});

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getWindowPosition(), 0, 'We expect window position to be 0');

    $.fn.fullpage.moveSectionDown();
    setTimeout(function(){
        assert.deepEqual(getWindowPosition(), 0, 'We expect window position to be 0');
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

        done();
    }, 800);
});
*/
