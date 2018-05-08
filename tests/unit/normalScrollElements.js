QUnit.test('Testing normalScrollElements disabled', function(assert) {
    var id = '#fullpage-normalscrollelements';
    var FP = initFullpageNew(id, {autoScrolling:true});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    trigger($('.normalscroll')[0], 'mouseenter');
    simulateMouseWheel('down');

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

        done();
    }, 800);
});


QUnit.test('Testing normalScrollElements: ".normalScroll" - scrolling inside it', function(assert) {
    var id = '#fullpage-normalscrollelements';
    var FP = initFullpageNew(id, {autoScrolling:true, normalScrollElements: '.normalscroll'});

    var done = assert.async(1);

    trigger($('.normalscroll')[0], 'mouseenter');
    simulateMouseWheel('down');

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);

        done();
    },800);
});

QUnit.test('Testing normalScrollElements: ".normalScroll" - scrolling outside it', function(assert) {
    var id = '#fullpage-normalscrollelements';
    var FP = initFullpageNew(id, {autoScrolling:true, normalScrollElements: '.normalscroll'});
    var windowHeight = $(window).height();

    var done = assert.async(1);

    trigger($(SECTION_ACTIVE_SEL).find('.title')[0], 'mouseenter');
    simulateMouseWheel('down');

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

        done();
    },800);
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

    var done = assert.async(1);

    trigger($('.normalscroll')[0], 'mouseenter');
    simulateMouseWheel('down');

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);

        done();
    },800);
});



QUnit.test('Testing normalScrollElements on dynamically added element - scrolling outside it', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {autoScrolling:true, normalScrollElements: '.normalscroll'});
    var windowHeight = $(window).height();

    var done = assert.async(1);

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

    setTimeout(function(){
        assert.deepEqual(getTransform($(id)), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);

        done();
    },800);
});