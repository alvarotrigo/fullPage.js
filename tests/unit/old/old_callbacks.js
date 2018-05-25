
// onSlideLeave
// ---------------------------------------
QUnit.test('Testing onSlideLeave callback fullpage-moveSlideLeft', function(assert) {
    var id = '#fullpage-moveSlideRight';
    initFullpage(id, sectionsAndSlidesCallbacks);
    var done = assert.async(3);
    var i;
    var cont = 0;

    for(i = 0; i < 3; i++, cont++){
        setTimeout(afterMove.bind(null, i), cont * 800);
    }

    function afterMove(i){
        $.fn.fullpage.moveSlideRight();
        assert.equal(onSlideLeave, 'undefined, 1, '+ i +', right, ' + (i+1) + '', 'We expect the right values for the callback');
        done();
    }
});

QUnit.test('Testing onSlideLeave callback fullpage-moveSlideLeft', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    initFullpage(id, sectionsAndSlidesCallbacks);
    var done = assert.async(3);
    var i;
    var cont = 0;

    for(i = 2; i >= 0; i--, cont++){
        setTimeout(afterMove.bind(null, i), cont * 800);
    }

    function afterMove(i){
        $.fn.fullpage.moveSlideLeft();
        assert.equal(onSlideLeave, 'undefined, 1, '+ (i+1) +', left, ' + i + '', 'We expect the right values for the callback');
        done();
    }
});

QUnit.test('Testing onSlideLeave from last slide to first with loopHorizontal', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    initFullpage(id, Object.assign({}, sectionsAndSlidesCallbacks, {loopHorizontal: true}));

    $.fn.fullpage.moveSlideRight();
    assert.equal(onSlideLeave, 'undefined, 1, 3, right, 0', 'We expect the right values for the callback');
});

QUnit.test('Testing onSlideLeave from 1st slide to last', function(assert) {
    var id = '#fullpage-moveSlideRight';
    initFullpage(id, Object.assign({}, sectionsAndSlidesCallbacks, {loopHorizontal: true}));

    $.fn.fullpage.moveSlideLeft();
    assert.equal(onSlideLeave, 'undefined, 1, 0, left, 3', 'We expect the right values for the callback');
});


// afterSlideLoad
// ---------------------------------------
QUnit.test('Testing afterSlideLoad callback', function(assert) {
    var id = '#fullpage-moveSlideRight';
    initFullpage(id, sectionsAndSlidesCallbacks);

    var done = assert.async(1);

    $.fn.fullpage.moveSlideRight();

    assert.equal(slideLoaded[0], false, 'We expect slide 1.1 to not be loaded');
    assert.equal(slideLoaded[1], false, 'We expect slide 1.2 to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 slides to be loaded');

    setTimeout(function(){
        assert.equal(slideLoaded[1], true, 'We expect slide 1.2 to be loaded');
        assert.equal(areOthersLoaded(slideLoaded), 1, 'We expect only 1 slide to be loaded');
        assert.equal(afterSlideLoad, 'undefined, 1, 1, 1', 'We expect the right values for the callback');

        done();
    }, 800);
});


//this test should be reviewed.
//at the moment the afterSlideLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
QUnit.test('Testing afterSlideLoad callback with active 2nd section and 1st slide active', function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-active-section';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.equal(slideLoaded[1], false, 'We expect section 2 to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 slides to be loaded');
    assert.equal(afterSlideLoad, '', 'We expect no values for the callback');
});


//this test should be reviewed.
//at the moment the afterSlideLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
QUnit.test('Testing afterSlideLoad callback with active 2nd section and middle slide active', function(assert) {
    var id = '#fullpage-middle-slide-active-in-2nd-active-section';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.equal(slideLoaded[1], false, 'We expect middle slide to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 slides to be loaded');
    assert.equal(afterSlideLoad, '', 'We expect no values for the afterSlideLoad callback');
});


//this test should be reviewed.
//at the moment the afterSlideLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
QUnit.test('Testing afterSlideLoad callback with active 2nd section and single slide active', function(assert) {
    var id = '#fullpage-single-slide-in-second-section';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.equal(slideLoaded[0], false, 'We expect the single slide to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 sections to be loaded');
    assert.equal(afterSlideLoad, '', 'We expect no values for the callback');
});


// afterRender
// ---------------------------------------
QUnit.test('Testing afterRender callback with section', function(assert) {
    var id = '#fullpage';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.equal(sectionLoaded[0], true, 'We expect section 1 be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 1 section to be loaded');
});

QUnit.test('Testing afterRender callback with slides', function(assert) {
    var id = '#fullpage-moveSlideRight';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.deepEqual(afterRender, [0, 0], 'We expect Section 0.0 be loaded');
});

QUnit.test('Testing afterRender callback on fullpage-2nd-active-section', function(assert) {
    var id = '#fullpage-2nd-active-section';
    initFullpage(id, sectionsAndSlidesCallbacks);
    assert.deepEqual(afterRender, [1, -1], 'We expect Section 1 be loaded');
});

QUnit.test('Testing afterRender callback on fullpage-middle-slide-active-in-2nd-active-section', function(assert) {
    var id = '#fullpage-2nd-active-section';
    initFullpage(id, sectionsAndSlidesCallbacks);
    assert.deepEqual(afterRender, [1, -1], 'We expect Section 1.1 be loaded');
});

QUnit.test('Testing afterRender callback on fullpage-first-slide-active-in-2nd-active-section', function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-active-section';
    initFullpage(id, sectionsAndSlidesCallbacks);
    assert.deepEqual(afterRender, [1, 0], 'We expect Section 1.0 be loaded');
});

QUnit.test('Testing afterRender callback on fullpage-sigle-slide-active-in-2nd-active-section', function(assert) {
    var id = '#fullpage-sigle-slide-active-in-2nd-active-section';
    initFullpage(id, sectionsAndSlidesCallbacks);
    assert.deepEqual(afterRender, [1, 0], 'We expect Section 1.0 be loaded');
});



// afterLoad
// ---------------------------------------
QUnit.test('Testing afterLoad callback on scroll with section', function(assert) {
    var id = '#fullpage-no-slides';
    var done = assert.async(2);
    initFullpage(id, sectionsAndSlidesCallbacks);

    $.fn.fullpage.moveSectionDown();

    setTimeout(function(){
        assert.equal(sectionLoaded[1], true, 'We expect section 2 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 2 section to be loaded');
        assert.equal(afterLoad, 'undefined, 2', 'We expect the right values for the callback');
        done();
        $.fn.fullpage.moveSectionDown();
    }, 800);

    setTimeout(function(){
        assert.equal(sectionLoaded[2], true, 'We expect section 3 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only section 3 to be loaded');
        assert.equal(afterLoad, 'undefined, 3', 'We expect the right values for the callback');
        done();
    }, 800*2);
});


//this test should be reviewed.
//at the moment the afterLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
//Same as afterSlideLoad on section change
QUnit.test('Testing afterLoad callback with fullpage-2nd-active-section', function(assert) {
    var id = '#fullpage-2nd-active-section';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.equal(sectionLoaded[1], false, 'We expect section 2 to not be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 0, 'We expect 0 slides to be loaded');
    assert.equal(afterLoad, '', 'We expect no values for the callback');
});

//this test should be reviewed.
//at the moment the afterLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
//Same as afterSlideLoad on section change
QUnit.test('Testing afterLoad callback with fullpage-first-slide-active-in-2nd-section', function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-section';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.equal(sectionLoaded[0], true, 'We expect section 1 to be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect 0 sections to be loaded');
    assert.equal(afterLoad, 'undefined, 1', 'We expect no values for the callback');
});


//this test should be reviewed.
//CALLBACKS ARE NOT CONSISTENT. Rather we fire afterload on all page loads or in none.
//This one is firing while none of the others are
QUnit.test('Testing afterLoad callback with fullpage-middle-slide-active-in-2nd-section', function(assert) {
    var id = '#fullpage-middle-slide-active-in-2nd-section';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.equal(sectionLoaded[1], false, 'We expect section 2 be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 2 section to be loaded');
    assert.equal(afterLoad, 'undefined, 1', 'We expect the right values for the callback');
});


// afterResponsive
// ---------------------------------------
QUnit.test('Testing afterResponsive', function(assert) {
    var id = '#fullpage';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.equal(afterResponsive, false, 'We expect afterResponsive callback was not fired');

    $.fn.fullpage.setResponsive(true);
    assert.equal(afterResponsive, true, 'We expect afterResponsive callback to be fired with true value');

    $.fn.fullpage.setResponsive(false);
    assert.equal(afterResponsive, false, 'We expect afterResponsive callback to be fired with false value');
});


// afterResize
// ---------------------------------------
QUnit.test('Testing afterResize', function(assert) {
    var id = '#fullpage';
    var done = assert.async(1);
    initFullpage(id, sectionsAndSlidesCallbacks);

    window.dispatchEvent(new Event('resize'));
    assert.equal(afterResize, false, 'We expect afterResize to not get fired synchronously');

    setTimeout(function(){
        assert.equal(afterResize, true, 'We expect afterResize to get fired with some delay');
        done();
    }, 500);
});


// afterReBuild
// ---------------------------------------
QUnit.test('Testing afterReBuild', function(assert) {
    var id = '#fullpage';
    initFullpage(id, sectionsAndSlidesCallbacks);

    assert.equal(afterReBuild, false, 'We expect afterReBuild to not get fired by default');
    $.fn.fullpage.reBuild();
    assert.equal(afterReBuild, true, 'We expect afterReBuild to get fired synchronously');
});