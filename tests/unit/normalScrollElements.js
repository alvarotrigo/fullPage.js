QUnit.test('Testing normalScrollElements disabled', function(assert) {
    var id = '#fullpage-normalscrollelements';
    var FP = initFullpageNew(id, {autoScrolling:true});
    var windowHeight = $(window).height();

    trigger($('.normalscroll')[0], 'mouseenter');
    simulateMouseWheel('down');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
});


QUnit.test('Testing normalScrollElements: ".normalScroll" - scrolling inside it', function(assert) {
    var id = '#fullpage-normalscrollelements';
    var FP = initFullpageNew(id, {autoScrolling:true, normalScrollElements: '.normalscroll'});

    trigger($('.normalscroll')[0], 'mouseenter');
    simulateMouseWheel('down');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
});

QUnit.test('Testing normalScrollElements: ".normalScroll" - scrolling outside it', function(assert) {
    var id = '#fullpage-normalscrollelements';
    var FP = initFullpageNew(id, {autoScrolling:true, normalScrollElements: '.normalscroll'});
    var windowHeight = $(window).height();

    trigger($(SECTION_ACTIVE_SEL).find('.title')[0], 'mouseenter');
    simulateMouseWheel('down');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
});


QUnit.test('Testing normalScrollElements on dynamically added elements - scrolling inside it', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {autoScrolling:true, normalScrollElements: '.normalscroll'});

    //adding the element dynamically
    var element = `
        <div class="normalscroll">
            <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
            <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
            <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
            <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
        </div>
    `;
    $(SECTION_ACTIVE_SEL).append(element);


    trigger($('.normalscroll')[0], 'mouseenter');
    simulateMouseWheel('down');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
});



QUnit.test('Testing normalScrollElements on dynamically added element - scrolling outside it', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {autoScrolling:true, normalScrollElements: '.normalscroll'});
    var windowHeight = $(window).height();

    //adding the element dynamically
    var element = `
        <div class="normalscroll">
            <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
            <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
            <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
            <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
        </div>
    `;
    $(SECTION_ACTIVE_SEL).append(element);

    //entering with the mouse
    trigger($('.normalscroll')[0], 'mouseenter');

    //leaving with the mouse
    trigger($('.normalscroll')[0], 'mouseleave');

    simulateMouseWheel('down');

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
});