QUnit.test('Testing continuousVertical:true first section active {css3:true}', function(assert) {
    var id = '#fullpage';
    initFullpage(id, {css3: true, continuousVertical: true});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTransform($(id)), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');

    $.fn.fullpage.moveSectionUp();
    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');

        done();
    }, 800);
});


QUnit.test('Testing continuousVertical:true first section active {css3:false}', function(assert) {
    var id = '#fullpage';
    initFullpage(id, {css3: false, continuousVertical: true});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
    assert.deepEqual(getTop($(id)), '0px', 'We expect sections transformation to be [0, 0, 0]');

    $.fn.fullpage.moveSectionUp();
    setTimeout(function(){
        assert.deepEqual(getTop(id), -(windowHeight*3) +'px', `We expect wrapper top property to be -${(windowHeight*3)}px`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');

        done();
    }, 800);
});


QUnit.test('Testing continuousVertical:true last section active {css3:true}', function(assert) {
    var id = '#fullpage-last-section-active';
    initFullpage(id, {css3: true, continuousVertical: true});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);

    $.fn.fullpage.moveSectionDown();
    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

        done();
    }, 800);
});


QUnit.test('Testing continuousVertical:true last section active {css3:false}', function(assert) {
    var id = '#fullpage-last-section-active';
    initFullpage(id, {css3: false, continuousVertical: true});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
    assert.deepEqual(getTop($(id)), -(windowHeight*3) +'px',  `We expect wrapper top property to be -${(windowHeight*3)}px`);

    $.fn.fullpage.moveSectionDown();
    setTimeout(function(){
        assert.deepEqual(getTop(id), '0px', `We expect wrapper top property to be 0px`);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

        done();
    }, 800);
});