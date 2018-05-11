QUnit.test('Testing moveSectionUp first section active with slides {css3:true, autoScrolling:true}', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {css3: true, autoScrolling: true});
    var windowHeight = $(window).height();

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');

    FP.moveSectionUp();
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
});


QUnit.test('Testing moveSectionUp first section active with slides {css3:false, autoScrolling:true}', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {css3: false, autoScrolling: true});

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(FP.test.top, '0px', 'We expect wrapper top property to be 0px');

    FP.moveSectionUp();
    assert.deepEqual(FP.test.top, '0px', 'We expect wrapper top property to be 0px');
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
});



/* Not working! qunit doesn't allow the use of something like $('html,body').animate({scrollTop: 400}) */
/*
QUnit.test('Testing moveSectionUp first section active with slides {autoScrolling:false}', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {autoScrolling: false});

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getWindowPosition(), 0, 'We expect window position to be 0');

    FP.moveSectionUp();
    setTimeout(function(){
        assert.deepEqual(getWindowPosition(), 0, 'We expect window position to be 0');
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

        done();
    }, 800);
});
*/


QUnit.test('Testing moveSectionUp in fullpage-last-section-active {css3:true, autoScrolling:true}', function(assert) {
    var id = '#fullpage-last-section-active';
    var FP = initFullpageNew(id, {css3: true, autoScrolling: true});
    var windowHeight = $(window).height();

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);

    FP.moveSectionUp();
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*2)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*2)}, 0]`);
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');
    FP.moveSectionUp();

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    FP.moveSectionUp();
});



QUnit.test('Testing moveSectionUp in fullpage-last-section-active {css3:false, autoScrolling:true}', function(assert) {
    var id = '#fullpage-last-section-active';
    var FP = initFullpageNew(id, {css3: false, animateAnchor: false,autoScrolling: true});
    var windowHeight = $(window).height();

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(FP.test.top,  -(windowHeight*3) +'px', `We expect wrapper top property to be -${(windowHeight*3)}px`);

    FP.moveSectionUp();
    assert.deepEqual(FP.test.top,  -(windowHeight*2) +'px', `We expect wrapper top property to be -${(windowHeight*2)}px`);
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');
    FP.moveSectionUp();

    assert.deepEqual(FP.test.top,  -(windowHeight*1) +'px', `We expect wrapper top property to be -${(windowHeight*1)}px`);
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
});



/* Not working! qunit doesn't allow the use of something like $('html,body').animate({scrollTop: 400})
QUnit.test('Testing moveSectionUp in fullpage-last-section-active {autoScrolling:false}', function(assert) {
    var id = '#fullpage-last-section-active';
    var FP = initFullpageNew(id, {autoScrolling: false, animateAnchor: false});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    $('html,body').scrollTop(400);

    console.log( $(window).scrollTop() );
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getWindowPosition(), 0, 'We expect window position to be 0');

    FP.moveSectionUp();
    setTimeout(function(){

        assert.deepEqual(getWindowPosition(), 0, 'We expect window position to be 0');
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

        done();
    }, 800);
});
*/
