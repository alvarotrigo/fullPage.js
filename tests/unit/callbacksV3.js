// onSlideLeave
// ---------------------------------------
QUnit.test('Testing onSlideLeave callback v3 fullpage-moveSlideRight', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {v2compatible: false, scrollingSpeed: 50}));
    var done = assert.async(3);
    var i;
    var cont = 0;

    for(i = 0; i < 3; i++, cont++){
        setTimeout(afterMove.bind(null, i), cont * 100);
    }

    function afterMove(i){
        FP.moveSlideRight();

        assert.equal(onSlideLeave.section.index, 0, 'We expect section index to be correct');
        assert.equal(onSlideLeave.section.anchor, null, 'We expect section anchor to be correct');
        assert.equal(onSlideLeave.section.isFirst, true, 'We expect section isFirst to be correct');
        assert.equal(onSlideLeave.section.isLast, false, 'We expect section isLast to be correct');

        assert.equal(onSlideLeave.origin.index, i, 'We expect the origin index to be correct');
        assert.equal(onSlideLeave.origin.anchor, 'slide'+(i+1), 'We expect origin anchor to be correct');

        assert.equal(onSlideLeave.destination.index, i +1, 'We expect destination index to be correct');
        assert.equal(onSlideLeave.destination.anchor, 'slide'+(i+2), 'We expect destination anchor to be correct');
        assert.equal(onSlideLeave.destination.isLast, i === 2, 'We expect destination isLast to be correct');
        assert.equal(onSlideLeave.destination.isFirst, false, 'We expect destination isFirst to be correct');

        assert.equal(onSlideLeave.direction, 'right', 'We expect direction to be correct');
        done();
    }
});


QUnit.test('Testing onSlideLeave callback v3 fullpage-moveSlideRight with anchors', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({scrollingSpeed: 50}, allBasicOptionsV3, sectionsAndSlidesCallbacksV3, {v2compatible: false}));
    var done = assert.async(3);
    var i;
    var cont = 0;

    for(i = 0; i < 3; i++, cont++){
        setTimeout(afterMove.bind(null, i), cont * 100);
    }

    function afterMove(i){
        FP.moveSlideRight();

        assert.equal(onSlideLeave.section.index, 0, 'We expect section index to be correct');
        assert.equal(onSlideLeave.section.anchor, 'page1', 'We expect section anchor to be correct');
        assert.equal(onSlideLeave.section.isFirst, true, 'We expect section isFirst to be correct');
        assert.equal(onSlideLeave.section.isLast, false, 'We expect section isLast to be correct');

        assert.equal(onSlideLeave.origin.index, i, 'We expect the origin index to be correct');
        assert.equal(onSlideLeave.origin.anchor, 'slide'+(i+1), 'We expect origin anchor to be correct');

        assert.equal(onSlideLeave.direction, 'right', 'We expect direction to be correct');

        assert.equal(onSlideLeave.destination.index, i +1, 'We expect destination index to be correct');
        assert.equal(onSlideLeave.destination.anchor, 'slide'+(i+2), 'We expect destination anchor to be correct');
        assert.equal(onSlideLeave.destination.isLast, i == 2, 'We expect destination isLast to be correct');
        assert.equal(onSlideLeave.destination.isFirst, false, 'We expect destination isFirst to be correct');
        done();
    }
});


QUnit.test('Testing onSlideLeave callback v3 fullpage-moveSlideLeft', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {v2compatible: false, scrollingSpeed: 50}));
    var done = assert.async(3);
    var i;
    var cont = 0;

    for(i = 2; i >= 0; i--, cont++){
        setTimeout(afterMove.bind(null, i), cont * 100);
    }

    function afterMove(i){
        FP.moveSlideLeft();

        assert.equal(onSlideLeave.section.index, 0, 'We expect section index to be correct');
        assert.equal(onSlideLeave.section.anchor, null, 'We expect section anchor to be correct');
        assert.equal(onSlideLeave.section.isFirst, true, 'We expect section isFirst to be correct');
        assert.equal(onSlideLeave.section.isLast, false, 'We expect section isLast to be correct');

        assert.equal(onSlideLeave.origin.index, i + 1, 'We expect the origin index to be correct');
        assert.equal(onSlideLeave.origin.anchor, null, 'We expect origin anchor to be correct');

        assert.equal(onSlideLeave.destination.index, i, 'We expect destination index to be correct');
        assert.equal(onSlideLeave.destination.anchor, null, 'We expect destination anchor to be correct');

        assert.equal(onSlideLeave.direction, 'left', 'We expect direction to be correct');
        done();
    }
});


QUnit.test('Testing onSlideLeave v3 from last slide to first with loopHorizontal', function(assert) {
    var id = '#fullpage-moveSlideLeft';
    var FP = initFullpageNew(id, Object.assign({scrollingSpeed: 50}, sectionsAndSlidesCallbacksV3, {loopHorizontal: true}));

    FP.moveSlideRight();

    assert.equal(onSlideLeave.section.index, 0, 'We expect section index to be correct');
    assert.equal(onSlideLeave.section.anchor, null, 'We expect section anchor to be correct');
    assert.equal(onSlideLeave.section.isFirst, true, 'We expect section isFirst to be correct');
    assert.equal(onSlideLeave.section.isLast, false, 'We expect section isLast to be correct');

    assert.equal(onSlideLeave.origin.index, 3, 'We expect the origin index to be correct');
    assert.equal(onSlideLeave.origin.anchor, null, 'We expect origin anchor to be correct');

    assert.equal(onSlideLeave.destination.index, 0, 'We expect destination index to be correct');
    assert.equal(onSlideLeave.destination.isFirst, true, 'We expect isFirst to be correct');
    assert.equal(onSlideLeave.destination.isLast, false, 'We expect isLast to be correct');

    assert.equal(onSlideLeave.direction, 'right', 'We expect direction to be correct');
});


QUnit.test('Testing onSlideLeave v3 from 1st slide to last', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {loopHorizontal: true}));

    FP.moveSlideLeft();

    assert.equal(onSlideLeave.section.index, 0, 'We expect section index to be correct');
    assert.equal(onSlideLeave.section.anchor, null, 'We expect section anchor to be correct');
    assert.equal(onSlideLeave.section.isFirst, true, 'We expect section isFirst to be correct');
    assert.equal(onSlideLeave.section.isLast, false, 'We expect section isLast to be correct');

    assert.equal(onSlideLeave.origin.index, 0, 'We expect the origin index to be correct');
    assert.equal(onSlideLeave.origin.anchor, 'slide1', 'We expect origin anchor to be correct');

    assert.equal(onSlideLeave.destination.index, 3, 'We expect destination index to be correct');
    assert.equal(onSlideLeave.destination.anchor, 'slide4', 'We expect destination anchor to be correct');
    assert.equal(onSlideLeave.destination.isFirst, false, 'We expect destination isFirst to be correct');
    assert.equal(onSlideLeave.destination.isLast, true, 'We expect destination isLast to be correct');

    assert.equal(onSlideLeave.direction, 'left', 'We expect direction to be correct');
});


// afterSlideLoad
// ---------------------------------------
QUnit.test('Testing afterSlideLoad callback v3', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    var done = assert.async(1);

    FP.moveSlideRight();

    assert.equal(slideLoaded[0], false, 'We expect slide 1.1 to not be loaded');
    assert.equal(slideLoaded[1], false, 'We expect slide 1.2 to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 slides to be loaded');

    setTimeout(function(){
        assert.equal(slideLoaded[1], true, 'We expect slide 1.2 to be loaded');
        assert.equal(areOthersLoaded(slideLoaded), 1, 'We expect only 1 slide to be loaded');

        assert.equal(afterSlideLoad.section.index, 0, 'We expect section index to be correct');
        assert.equal(afterSlideLoad.section.anchor, null, 'We expect section anchor to be correct');
        assert.equal(afterSlideLoad.section.isFirst, true, 'We expect section isFirst to be correct');
        assert.equal(afterSlideLoad.section.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterSlideLoad.destination.index, 1, 'We expect destination index to be correct');
        assert.equal(afterSlideLoad.destination.anchor, 'slide2', 'We expect destination anchor to be correct');
        assert.equal(afterSlideLoad.destination.isFirst, false, 'We expect destination isFirst to be correct');
        assert.equal(afterSlideLoad.destination.isLast, false, 'We expect destination isLast to be correct');

        assert.equal(afterSlideLoad.origin.index, 0, 'We expect origin index to be correct');
        assert.equal(afterSlideLoad.origin.anchor, 'slide1', 'We expect origin anchor to be correct');
        assert.equal(afterSlideLoad.origin.isFirst, true, 'We expect origin isFirst to be correct');
        assert.equal(afterSlideLoad.origin.isLast, false, 'We expect origin isLast to be correct');

        assert.equal(afterSlideLoad.direction, 'right', 'We expect direction to be correct');

        done();
    }, 100);
});


QUnit.test('Testing afterSlideLoad callback v3 with anchors', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({scrollingSpeed:50}, allBasicOptionsV3, sectionsAndSlidesCallbacksV3));

    var done = assert.async(1);

    FP.moveSlideRight();

    setTimeout(function(){
        assert.equal(afterSlideLoad.section.index, 0, 'We expect section index to be correct');
        assert.equal(afterSlideLoad.section.anchor, 'page1', 'We expect section anchor to be correct');
        assert.equal(afterSlideLoad.section.isFirst, true, 'We expect section isFirst to be correct');
        assert.equal(afterSlideLoad.section.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterSlideLoad.destination.index, 1, 'We expect destination index to be correct');
        assert.equal(afterSlideLoad.destination.anchor, 'slide2', 'We expect destination anchor to be correct');
        assert.equal(afterSlideLoad.destination.isFirst, false, 'We expect isFirst to be correct');
        assert.equal(afterSlideLoad.destination.isLast, false, 'We expect isLast to be correct');

        assert.equal(afterSlideLoad.origin.index, 0, 'We expect origin index to be correct');
        assert.equal(afterSlideLoad.origin.anchor, 'slide1', 'We expect origin anchor to be correct');
        assert.equal(afterSlideLoad.origin.isFirst, true, 'We expect origin isFirst to be correct');
        assert.equal(afterSlideLoad.origin.isLast, false, 'We expect origin isLast to be correct');

        assert.equal(afterSlideLoad.direction, 'right', 'We expect direction to be correct');
        done();
    }, 100);
});



//this test should be reviewed.
//at the moment the afterSlideLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
QUnit.test('Testing afterSlideLoad callback v3 with active 2nd section and 1st slide active', function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    assert.equal(slideLoaded[1], false, 'We expect section 2 to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 slides to be loaded');
    assert.equal(afterSlideLoad, '', 'We expect no values for the callback');
});



//this test should be reviewed.
//at the moment the afterSlideLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
QUnit.test('Testing afterSlideLoad callback v3 with active 2nd section and middle slide active', function(assert) {
    var id = '#fullpage-middle-slide-active-in-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    assert.equal(slideLoaded[1], false, 'We expect middle slide to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 slides to be loaded');
    assert.equal(afterSlideLoad, '', 'We expect no values for the afterSlideLoad callback');
});


//this test should be reviewed.
//at the moment the afterSlideLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
QUnit.test('Testing afterSlideLoad callback v3 with active 2nd section and single slide active', function(assert) {
    var id = '#fullpage-single-slide-in-second-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    assert.equal(slideLoaded[0], false, 'We expect the single slide to not be loaded');
    assert.equal(areOthersLoaded(slideLoaded), 0, 'We expect 0 sections to be loaded');
    assert.equal(afterSlideLoad, '', 'We expect no values for the callback');
});


// afterRender
// ---------------------------------------
QUnit.test('Testing afterRender callback v3 with section', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    assert.equal(sectionLoaded[0], true, 'We expect section 1 be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 1 section to be loaded');
});

QUnit.test('Testing afterRender callback v3 with slides', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    assert.deepEqual(afterRender, [0, 0], 'We expect Section 0.0 be loaded');
});

QUnit.test('Testing afterRender callback v3 on fullpage-2nd-active-section', function(assert) {
    var id = '#fullpage-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));
    assert.deepEqual(afterRender, [1, -1], 'We expect Section 1 be loaded');
});

QUnit.test('Testing afterRender callback v3 on fullpage-middle-slide-active-in-2nd-active-section', function(assert) {
    var id = '#fullpage-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));
    assert.deepEqual(afterRender, [1, -1], 'We expect Section 1.1 be loaded');
});

QUnit.test('Testing afterRender callback v3 on fullpage-first-slide-active-in-2nd-active-section', function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));
    assert.deepEqual(afterRender, [1, 0], 'We expect Section 1.0 be loaded');
});

QUnit.test('Testing afterRender callback v3 on fullpage-sigle-slide-active-in-2nd-active-section', function(assert) {
    var id = '#fullpage-sigle-slide-active-in-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));
    assert.deepEqual(afterRender, [1, 0], 'We expect Section 1.0 be loaded');
});



// afterLoad
// ---------------------------------------
QUnit.test('Testing afterLoad callback v3 on scroll with section', function(assert) {
    var id = '#fullpage-no-slides';
    var done = assert.async(2);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    FP.moveSectionDown();

    setTimeout(function(){
        assert.equal(sectionLoaded[1], true, 'We expect section 2 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 2 section to be loaded');

        assert.equal(afterLoad.destination.index, 1, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterLoad.origin.index, 0, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, null, 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, true, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        assert.equal(afterLoad.direction, 'down', 'We expect isLast to be correct');

        done();
        FP.moveSectionDown();
    }, 100);

    setTimeout(function(){
        assert.equal(sectionLoaded[2], true, 'We expect section 3 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only section 3 to be loaded');

        assert.equal(afterLoad.destination.index, 2, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterLoad.origin.index, 1, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, null, 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, false, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        assert.equal(afterLoad.direction, 'down', 'We expect isLast to be correct');
        done();
    }, 100*2);
});


QUnit.test('Testing afterLoad callback v3 on scroll with section and anchors', function(assert) {
    var id = '#fullpage-sections-and-slides-with-data-anchor';
    var done = assert.async(1);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    FP.moveSectionDown();

    setTimeout(function(){

        assert.equal(afterLoad.destination.index, 1, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, 'page2', 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterLoad.origin.index, 0, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, 'page1', 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, true, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        done();
        FP.moveSectionDown();
    }, 100);
});

QUnit.test('Testing afterLoad v3 when autoScrolling:false with section', function(assert) {
    var id = '#fullpage-no-slides';
    var done = assert.async(2);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50, autoScrolling:false}));

    simulateScroll(window.innerHeight);

    setTimeout(function(){
        assert.equal(sectionLoaded[1], true, 'We expect section 2 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 2 section to be loaded');

        assert.equal(afterLoad.destination.index, 1, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        console.warn(afterLoad);
        assert.equal(afterLoad.origin.index, 0, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, null, 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, true, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        assert.equal(afterLoad.direction, 'down', 'We expect isLast to be correct');

        done();
        simulateScroll(window.innerHeight * 2);
    }, 100);

    setTimeout(function(){
        assert.equal(sectionLoaded[2], true, 'We expect section 3 be loaded');
        assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only section 3 to be loaded');

        assert.equal(afterLoad.destination.index, 2, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterLoad.origin.index, 1, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, null, 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, false, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        assert.equal(afterLoad.direction, 'down', 'We expect isLast to be correct');
        done();
    }, 100*2);
});


QUnit.test('Testing afterLoad v3 when autoScrollingkey: "value", false with section and anchors', function(assert) {
    var id = '#fullpage-sections-and-slides-with-data-anchor';
    var done = assert.async(1);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50, autoScrolling:false}));

     simulateScroll(window.innerHeight);

    setTimeout(function(){

        assert.equal(afterLoad.destination.index, 1, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, 'page2', 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterLoad.origin.index, 0, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, 'page1', 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, true, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        done();
    }, 100);
});

//this test should be reviewed.
//at the moment the afterLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
//Same as afterSlideLoad on section change
QUnit.test('Testing afterLoad callback v3 with fullpage-2nd-active-section', function(assert) {
    var id = '#fullpage-2nd-active-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    assert.equal(sectionLoaded[1], false, 'We expect section 2 to not be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 0, 'We expect 0 slides to be loaded');
    assert.equal(afterLoad, '', 'We expect no values for the callback');
});


//this test should be reviewed.
//at the moment the afterLoad callback doesn't get fired on page load, no matter what
//section is active by default. But... Probably it should...
//Same as afterSlideLoad on section change
QUnit.test('Testing afterLoad callback v3 with fullpage-first-slide-active-in-2nd-section', function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    assert.equal(sectionLoaded[0], true, 'We expect section 1 to be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect 0 sections to be loaded');

    assert.equal(afterLoad.destination.index, 0, 'We expect section index to be correct');
    assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
    assert.equal(afterLoad.destination.isFirst, true, 'We expect section isFirst to be correct');
    assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

    assert.equal(afterLoad.origin, null, 'We expect origin to be correct');

    assert.equal(afterLoad.direction, null, 'We expect section direction to be correct');
});


//this test should be reviewed.
//CALLBACKS ARE NOT CONSISTENT. Rather we fire afterload on all page loads or in none.
//This one is firing while none of the others are
QUnit.test('Testing afterLoad callback v3 with fullpage-middle-slide-active-in-2nd-section', function(assert) {
    var id = '#fullpage-middle-slide-active-in-2nd-section';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    assert.equal(sectionLoaded[1], false, 'We expect section 2 be loaded');
    assert.equal(areOthersLoaded(sectionLoaded), 1, 'We expect only 2 section to be loaded');

    assert.equal(afterLoad.destination.index, 0, 'We expect section index to be correct');
    assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
    assert.equal(afterLoad.destination.isFirst, true, 'We expect section isFirst to be correct');
    assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

    assert.equal(afterLoad.origin, null, 'We expect origin to be correct');

    assert.equal(afterLoad.direction, null, 'We expect section direction to be correct');
});


// onLeave
// ---------------------------------------
QUnit.test('Testing onLeave callback v3 on scroll with section', function(assert) {
    var id = '#fullpage-no-slides';
    var done = assert.async(2);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    FP.moveSectionDown();

    setTimeout(function(){
        assert.equal(sectionLoaded[0], false, 'We expect section 1 to not be loaded anymore');

        assert.equal(afterLoad.destination.index, 1, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterLoad.origin.index, 0, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, null, 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, true, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        assert.equal(afterLoad.direction, 'down', 'We expect isLast to be correct');

        done();
        FP.moveSectionDown();
    }, 100);

    setTimeout(function(){
        assert.equal(sectionLoaded[1], false, 'We expect section 2 to not be loaded anymore');

        assert.equal(afterLoad.destination.index, 2, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterLoad.origin.index, 1, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, null, 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, false, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        assert.equal(afterLoad.direction, 'down', 'We expect isLast to be correct');
        done();
    }, 100*2);
});

QUnit.test('Testing onLeave v3 when autoScrolling:false with section', function(assert) {
    var id = '#fullpage-no-slides';
    var done = assert.async(2);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50, autoScrolling:false}));

    simulateScroll(window.innerHeight);

    setTimeout(function(){
        assert.equal(sectionLoaded[0], false, 'We expect section 1 to not be loaded anymore');

        assert.equal(afterLoad.destination.index, 1, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterLoad.origin.index, 0, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, null, 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, true, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        assert.equal(afterLoad.direction, 'down', 'We expect isLast to be correct');

        done();
        simulateScroll(window.innerHeight * 2);
    }, 100);

    setTimeout(function(){
        assert.equal(sectionLoaded[1], false, 'We expect section 2 to not be loaded anymore');

        assert.equal(afterLoad.destination.index, 2, 'We expect section index to be correct');
        assert.equal(afterLoad.destination.anchor, null, 'We expect section anchor to be correct');
        assert.equal(afterLoad.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(afterLoad.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(afterLoad.origin.index, 1, 'We expect origin index to be correct');
        assert.equal(afterLoad.origin.anchor, null, 'We expect origin anchor to be correct');
        assert.equal(afterLoad.origin.isFirst, false, 'We expect isFirst to be correct');
        assert.equal(afterLoad.origin.isLast, false, 'We expect isLast to be correct');

        assert.equal(afterLoad.direction, 'down', 'We expect isLast to be correct');
        done();
    }, 100*2);
});

QUnit.test('Testing onLeave v3 does not get fired on page load', function(assert) {
    var id = '#fullpage-no-slides';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    assert.equal(onLeave, '', 'We expect no values for the callback');
});

QUnit.test('Testing onLeave when autoScrolling:false with section and anchors', function(assert) {
    var id = '#fullpage-sections-and-slides-with-data-anchor';
    var done = assert.async(1);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50, autoScrolling:false}));

    simulateScroll(window.innerHeight);

    setTimeout(function(){
        console.log(onLeave);
        assert.equal(onLeave.destination.index, 1, 'We expect section index to be correct');
        assert.equal(onLeave.destination.anchor, 'page2', 'We expect section anchor to be correct');
        assert.equal(onLeave.destination.isFirst, false, 'We expect section isFirst to be correct');
        assert.equal(onLeave.destination.isLast, false, 'We expect section isLast to be correct');

        assert.equal(onLeave.origin.index, 0, 'We expect origin index to be correct');
        assert.equal(onLeave.origin.anchor, 'page1', 'We expect origin anchor to be correct');
        assert.equal(onLeave.origin.isFirst, true, 'We expect isFirst to be correct');
        assert.equal(onLeave.origin.isLast, false, 'We expect isLast to be correct');

        done();
    }, 100);
});


// afterResize
// ---------------------------------------
QUnit.test('Testing afterResize', function(assert) {
    var id = '#fullpage';
    var done = assert.async(1);
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacksV3, {scrollingSpeed: 50}));

    window.dispatchEvent(new Event('resize'));
    assert.equal(afterResize, false, 'We expect afterResize to not get fired synchronously');

    setTimeout(function(){
        assert.equal(afterResize, `${window.innerWidth}, ${window.innerHeight}`, 'We expect afterResize to get fired with some delay');
        done();
    }, 450);
});

