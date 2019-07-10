
// onSlideLeave
// ---------------------------------------
QUnit.test('Testing onSlideLeave callback fullpage-moveSlideRight', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));
    var done = assert.async(3);
    var i;
    var cont = 0;

    for(i = 0; i < 3; i++, cont++){
        setTimeout(afterMove.bind(null, i), cont * 100);
    }

    function afterMove(i){
        FP.moveSlideRight();
        assert.equal(onSlideLeave, 'null, 1, '+ i +', right, ' + (i+1) + '', 'We expect the right values for the callback');
        done();
    }
});

QUnit.test('Testing onSlideLeave callback fullpage-moveSlideRight with anchors', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({scrollingSpeed: 50}, allBasicOptions, sectionsAndSlidesCallbacks, {v2compatible:true}));
    var done = assert.async(3);
    var i;
    var cont = 0;

    for(i = 0; i < 3; i++, cont++){
        setTimeout(afterMove.bind(null, i), cont * 100);
    }

    function afterMove(i){
        FP.moveSlideRight();
        assert.equal(onSlideLeave, 'page1, 1, '+ i +', right, ' + (i+1) + '', 'We expect the right values for the callback');
        done();
    }
});

QUnit.test('Testing onSlideLeave callback fullpage-moveSlideLeft', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));
    var done = assert.async(3);
    var i;
    var cont = 0;

    for(i = 2; i >= 0; i--, cont++){
        setTimeout(afterMove.bind(null, i), cont * 100);
    }

    function afterMove(i){
        FP.moveSlideLeft();
        assert.equal(onSlideLeave, 'null, 1, '+ (i+1) +', left, ' + i + '', 'We expect the right values for the callback');
        done();
    }
});

QUnit.test('Testing onSlideLeave from last slide to first with loopHorizontal', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    var FP = initFullpageNew(id, Object.assign({scrollingSpeed: 50}, sectionsAndSlidesCallbacks, {loopHorizontal: true, v2compatible:true}));

    FP.moveSlideRight();
    assert.equal(onSlideLeave, 'null, 1, 3, right, 0', 'We expect the right values for the callback');
});

QUnit.test('Testing onSlideLeave from 1st slide to last', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {loopHorizontal: true, v2compatible:true}));

    FP.moveSlideLeft();
    assert.equal(onSlideLeave, 'null, 1, 0, left, 3', 'We expect the right values for the callback');
});


// afterSlideLoad
// ---------------------------------------
QUnit.test('Testing afterSlideLoad callback', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    var done = assert.async(1);

    FP.moveSlideRight();

    assert.equal(slideLoaded[0], false, 'We expect slide 1.1 to not be loaded');
    assert.equal(slideLoaded[1], false, 'We expect slide 1.2 to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 slides to be loaded');

    setTimeout(function(){
        assert.equal(slideLoaded[1], true, 'We expect slide 1.2 to be loaded');
        assert.equal(areOthersLoaded(slideLoaded), 1, 'We expect only 1 slide to be loaded');
        assert.equal(afterSlideLoad, 'null, 1, slide2, 1', 'We expect the right values for the callback');

        done();
    }, 100);
});

QUnit.test('Testing afterSlideLoad callback with anchors', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({scrollingSpeed:50}, allBasicOptions, sectionsAndSlidesCallbacks, {v2compatible:true}));

    var done = assert.async(1);

    FP.moveSlideRight();

    setTimeout(function(){
        assert.equal(afterSlideLoad, 'page1, 1, slide2, 1', 'We expect the right values for the callback');
        done();
    }, 100);
});


//this test should be reviewed.
//at the moment the afterSlideLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
QUnit.test('Testing afterSlideLoad callback with active 2nd section and 1st slide active', function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(slideLoaded[1], false, 'We expect section 2 to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 slides to be loaded');
    assert.equal(afterSlideLoad, '', 'We expect no values for the callback');
});


//this test should be reviewed.
//at the moment the afterSlideLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
QUnit.test('Testing afterSlideLoad callback with active 2nd section and middle slide active', function(assert) {
    var id = '#fullpage-middle-slide-active-in-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(slideLoaded[1], false, 'We expect middle slide to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 slides to be loaded');
    assert.equal(afterSlideLoad, '', 'We expect no values for the afterSlideLoad callback');
});


//this test should be reviewed.
//at the moment the afterSlideLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
QUnit.test('Testing afterSlideLoad callback with active 2nd section and single slide active', function(assert) {
    var id = '#fullpage-single-slide-in-second-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(slideLoaded[0], false, 'We expect the single slide to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 sections to be loaded');
    assert.equal(afterSlideLoad, '', 'We expect no values for the callback');
});


// afterRender
// ---------------------------------------
QUnit.test('Testing afterRender callback with section', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(sectionLoaded[0], true, 'We expect section 1 be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 1 section to be loaded');
});

QUnit.test('Testing afterRender callback with slides', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.deepEqual(afterRender, [0, 0], 'We expect Section 0.0 be loaded');
});

QUnit.test('Testing afterRender callback on fullpage-2nd-active-section', function(assert) {
    var id = '#fullpage-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));
    assert.deepEqual(afterRender, [1, -1], 'We expect Section 1 be loaded');
});

QUnit.test('Testing afterRender callback on fullpage-middle-slide-active-in-2nd-active-section', function(assert) {
    var id = '#fullpage-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));
    assert.deepEqual(afterRender, [1, -1], 'We expect Section 1.1 be loaded');
});

QUnit.test('Testing afterRender callback on fullpage-first-slide-active-in-2nd-active-section', function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));
    assert.deepEqual(afterRender, [1, 0], 'We expect Section 1.0 be loaded');
});

QUnit.test('Testing afterRender callback on fullpage-sigle-slide-active-in-2nd-active-section', function(assert) {
    var id = '#fullpage-sigle-slide-active-in-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));
    assert.deepEqual(afterRender, [1, 0], 'We expect Section 1.0 be loaded');
});



// afterLoad
// ---------------------------------------
QUnit.test('Testing afterLoad callback on scroll with section', function(assert) {
    var id = '#fullpage-no-slides';
    var done = assert.async(2);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    FP.moveSectionDown();

    setTimeout(function(){
        assert.equal(sectionLoaded[1], true, 'We expect section 2 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 2 section to be loaded');
        assert.equal(afterLoad, 'null, 2', 'We expect the right values for the callback');
        done();
        FP.moveSectionDown();
    }, 100);

    setTimeout(function(){
        assert.equal(sectionLoaded[2], true, 'We expect section 3 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only section 3 to be loaded');
        assert.equal(afterLoad, 'null, 3', 'We expect the right values for the callback');
        done();
    }, 100*2);
});

QUnit.test('Testing afterLoad callback on scroll with section and anchors', function(assert) {
    var id = '#fullpage-sections-and-slides-with-data-anchor';
    var done = assert.async(1);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    FP.moveSectionDown();

    setTimeout(function(){
        assert.equal(afterLoad, 'page2, 2', 'We expect the right values for the callback');
        done();
    }, 100);
});


QUnit.test('Testing afterLoad when autoScrolling:false on scroll with section', function(assert) {
    var id = '#fullpage-no-slides';
    var done = assert.async(2);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, autoScrolling: false, v2compatible: true}));

    simulateScroll(window.innerHeight);

    setTimeout(function(){
        assert.equal(sectionLoaded[1], true, 'We expect section 2 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 2 section to be loaded');
        assert.equal(afterLoad, 'null, 2', 'We expect the right values for the callback');
        done();
        simulateScroll(window.innerHeight * 2);
    }, 100);

    setTimeout(function(){
        assert.equal(sectionLoaded[2], true, 'We expect section 3 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only section 3 to be loaded');
        assert.equal(afterLoad, 'null, 3', 'We expect the right values for the callback');
        done();
    }, 100*2);
});

QUnit.test('Testing afterLoad when autoScrolling:false on scroll with section and anchors', function(assert) {
    var id = '#fullpage-sections-and-slides-with-data-anchor';
    var done = assert.async(1);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, autoScrolling: false, v2compatible: true}));

    simulateScroll(window.innerHeight);

    setTimeout(function(){
        assert.equal(afterLoad, 'page2, 2', 'We expect the right values for the callback');
        done();
    }, 100);
});

QUnit.test('Testing afterLoad callback with fullpage-2nd-active-section', function(assert) {
    var id = '#fullpage-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(sectionLoaded[1], true, 'We expect section 2 to be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect 1 slide to be loaded');
    assert.equal(afterLoad, 'null, 2', 'We expect the right values for the callback');
});

//this test should be reviewed.
//at the moment the afterLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
//Same as afterSlideLoad on section change
QUnit.test('Testing afterLoad callback with fullpage-first-slide-active-in-2nd-section', function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(sectionLoaded[0], true, 'We expect section 1 to be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect 0 sections to be loaded');
    assert.equal(afterLoad, 'null, 1', 'We expect no values for the callback');
});


//this test should be reviewed.
//CALLBACKS ARE NOT CONSISTENT. Rather we fire afterload on all page loads or in none.
//This one is firing while none of the others are
QUnit.test('Testing afterLoad callback with fullpage-middle-slide-active-in-2nd-section', function(assert) {
    var id = '#fullpage-middle-slide-active-in-2nd-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(sectionLoaded[1], false, 'We expect section 2 be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 2 section to be loaded');
    assert.equal(afterLoad, 'null, 1', 'We expect the right values for the callback');
});

// onLeave
// ---------------------------------------
QUnit.test('Testing onLeave callback on scroll with section', function(assert) {
    var id = '#fullpage-no-slides';
    var done = assert.async(2);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    FP.moveSectionDown();

    setTimeout(function(){
        assert.equal(sectionLoaded[0], false, 'We expect section 1 to not be loaded anymore');
        assert.equal(onLeave, '1, 2, down', 'We expect the right values for the callback');
        done();
        FP.moveSectionDown();
    }, 100);

    setTimeout(function(){
        assert.equal(sectionLoaded[1], false, 'We expect section 2 to not be loaded anymore');
        assert.equal(onLeave, '2, 3, down', 'We expect the right values for the callback');
        done();
    }, 100*2);
});

QUnit.test('Testing onLeave does not get fired on page load', function(assert) {
    var id = '#fullpage-no-slides';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(onLeave, '', 'We expect no values for the callback');
});

QUnit.test('Testing onLeave when autoScrolling:false', function(assert) {
    var id = '#fullpage';
    var done = assert.async(2);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, autoScrolling:false, v2compatible: true}));

    //simulating scroll event
    simulateScroll(window.innerHeight);

    setTimeout(function(){
        assert.equal(sectionLoaded[0], false, 'We expect section 1 to not be loaded anymore');
        assert.equal(onLeave, '1, 2, down', 'We expect the right values for the callback');
        done();
        simulateScroll(window.innerHeight * 2);
    }, 100);

    setTimeout(function(){
        assert.equal(sectionLoaded[1], false, 'We expect section 2 to not be loaded anymore');
        assert.equal(onLeave, '2, 3, down', 'We expect the right values for the callback');
        done();
    }, 100*2);});


QUnit.test('Testing onLeave when autoScrolling:false with section and anchors', function(assert) {
    var id = '#fullpage-sections-and-slides-with-data-anchor';
    var done = assert.async(1);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, autoScrolling:false, v2compatible: true}));

    simulateScroll(window.innerHeight);

    setTimeout(function(){
        assert.equal(afterLoad, 'page2, 2', 'We expect the right values for the callback');
        done();
    }, 100);
});

// afterResponsive
// ---------------------------------------
QUnit.test('Testing afterResponsive', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(afterResponsive, false, 'We expect afterResponsive callback was not fired');

    FP.setResponsive(true);
    assert.equal(afterResponsive, true, 'We expect afterResponsive callback to be fired with true value');

    FP.setResponsive(false);
    assert.equal(afterResponsive, false, 'We expect afterResponsive callback to be fired with false value');
});


// afterResize
// ---------------------------------------
QUnit.test('Testing afterResize', function(assert) {
    var id = '#fullpage';
    var done = assert.async(1);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    //emulating window's resize
    window.innerHeight = 100;
    window.dispatchEvent(new Event('resize'));
    assert.equal(afterResize, false, 'We expect afterResize to not get fired synchronously');

    setTimeout(function(){
        assert.equal(afterResize, true, 'We expect afterResize to get fired with some delay');
        done();
    }, 450);
});


// afterReBuild
// ---------------------------------------
QUnit.test('Testing afterReBuild', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {scrollingSpeed: 50, v2compatible:true}));

    assert.equal(afterReBuild, false, 'We expect afterReBuild to not get fired by default');
    FP.reBuild();
    assert.equal(afterReBuild, true, 'We expect afterReBuild to get fired synchronously');
});