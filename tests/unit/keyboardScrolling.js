
function simulateMouseWheel(type){
    var multiplier = type === 'up' ? -1 : 1;

    //moving down with mouse wheel
    var mouseWheel = new Event('wheel', { 'bubbles': true });
    mouseWheel.deltaY = 10 * multiplier;
    document.dispatchEvent(mouseWheel);
}

function simulateKeydown(type){
    var types = { 'up': 38, 'down':40, 'right':39, 'left':37};
    var keyCode = types[type];

    //moving down with mouse wheel
    var keydownEvent = new Event('keydown', { 'bubbles': true });
    keydownEvent.keyCode = keyCode;
    document.dispatchEvent(keydownEvent);
}

//not used yet
function simulateTouchMove(target, type){
    var pageY = 100, pageX = 100, differenceX = 0, differenceY = 0;

    switch(type){
        case 'down': differenceY = 500; break;
        case 'up': differenceY = -500; break;
        case 'left': differenceX = 500;break;
        case 'right': differenceX = -500; break;
    }

    //touch start
    var touchStartEvent = new Event('touchstart', { 'bubbles': true });
    touchStartEvent.pageX = pageX + differenceX;
    touchStartEvent.pageY = pageY + differenceY;
    target.dispatchEvent(touchStartEvent);

    //moving down with mouse wheel
    var touchMoveEvent = new Event('touchmove', { 'bubbles': true });
    touchMoveEvent.pageX = pageX;
    touchMoveEvent.pageY = pageY;
    target.dispatchEvent(touchMoveEvent);
}

function triggerKeydown(keyCode, shift, direction){
    var keydownEvent = new Event('keydown', { 'bubbles': true });
    keydownEvent.keyCode = keyCode;
    if(shift && direction !== 'down'){
        keydownEvent.shiftKey = 1;
    }
    document.dispatchEvent(keydownEvent);
}

function upAndDown(assert, done, FP, params, prefix){
    var windowHeight = $(window).height();

    triggerKeydown(params.down, params.shift, 'down');

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], prefix + `: We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, prefix + ': We expect section 2 to be active');
        done();
        triggerKeydown(params.up, params.shift, 'up');
    },200);

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], prefix + `: We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, prefix + ': We expect section 1 to be active');
        done();
    },200*2);
}

QUnit.test('Testing keyboardScrolling:true with keydown up & down', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:true, loopTop:true, scrollingSpeed: 50}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateKeydown('down');

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateKeydown('up');
    },200);

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },200*2);
});


QUnit.test('Testing keyboardScrolling:false with keydown up & down', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:false, loopTop:true, scrollingSpeed: 50}));
    var done = assert.async(2);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateKeydown('down');

    setTimeout(function() {
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We don not expect section 2 to be active');
        done();
        simulateKeydown('up');
    }, 200);

    setTimeout(function() {
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We don not expect section 2 to be active');
        done();
    }, 200*2);
});

QUnit.test('Testing keyboardScrolling:true keys (tab, space, pageup, pagedown...)', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:true, loopTop:true, scrollingSpeed: 50}));
    var done = assert.async(2);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    upAndDown(assert, done, FP, {up: 38, down: 40, shift: false}, 'Arrow up / arrow down'); //arrow up / arrow down
});

QUnit.test('Testing keyboardScrolling:true keys pageUp / pageDown', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:true, loopTop:true, scrollingSpeed: 50}));
    var done = assert.async(2);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    upAndDown(assert, done, FP, {up: 33, down: 34, shift: false}, 'pageUp / pageDown'); //pageUp / pageDown
});

QUnit.test('Testing keyboardScrolling:true keys Spacebar', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:true, loopTop:true, scrollingSpeed: 50}));
    var done = assert.async(2);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    upAndDown(assert, done, FP, {up: 32, down: 32, shift: true}, 'Spacebar'); //shift + spacebar / space bar
});

QUnit.test('Testing keyboardScrolling:true keys Home / end', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:true, loopTop:true, scrollingSpeed: 50}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    var params = {up: 36, down: 35, shift: false}; //home / end

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    triggerKeydown(params.down, params.shift, 'down');

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*3)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*3)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
        done();
        triggerKeydown(params.up, params.shift, 'up');
    },200);

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },200*2);
});

QUnit.test('Testing keyboardScrolling:false with moveSectionUp & moveSectionDown', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:false, loopTop:true, scrollingSpeed: 50}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    FP.moveSectionDown();

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        FP.moveSectionUp();
    },200);

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },200*2);
});

QUnit.test('Testing keyboardScrolling:false with mousewheel down & up', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:false, scrollingSpeed:600, loopTop:true}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateMouseWheel('up');
    },200);

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },200*2);
});

QUnit.test('Testing setKeyboardScrolling(false)', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:true, scrollingSpeed:600, loopTop:true}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    FP.setKeyboardScrolling(false);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateMouseWheel('down');

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateMouseWheel('up');
    },200);

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },200*2);
});

QUnit.test('Testing setKeyboardScrolling(true)', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {keyboardScrolling:false, scrollingSpeed:600, loopTop:true}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    FP.setKeyboardScrolling(true);

    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateKeydown('down');

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateKeydown('up');
    },200);

    setTimeout(function(){
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], `We expect sections transformation to be [0, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
        done();
    },200*2);
});


QUnit.test('Testing setKeyboardScrolling(false, "up")', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true, scrollingSpeed: 50}));
    var windowHeight = $(window).height();

    var done = assert.async(2);

    FP.setKeyboardScrolling(false, 'up');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateKeydown('down');

    setTimeout(function() {
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateKeydown('up');
    }, 200);

    //scrolling up won't do anything
    setTimeout(function() {
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
    }, 200*2);
});



QUnit.test('Testing setKeyboardScrolling(false, "up, left")', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {loopTop:true, scrollingSpeed: 50}));
    var windowHeight = $(window).height();

    var done = assert.async(4);

    FP.setKeyboardScrolling(false, 'up, left');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    simulateKeydown('down');

    setTimeout(function() {
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        simulateKeydown('up');
    }, 200);

    //scrolling up won't do anything
    setTimeout(function() {
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        done();
        FP.moveSlideRight();
    }, 200*2);

    setTimeout(function() {
        var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
        assert.deepEqual(transforms, [`-1000`, '0', '0'], `We expect slides transformation to be [-1000, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 1, 'We expect slide 2.2 to be active');
        done();
        simulateKeydown('left');
    },200*3);

    //sliding left won't do anything
    setTimeout(function() {
        var transforms = getTransform(FP.test.translate3dH[$(id).find(SECTION_ACTIVE_SEL).index()]);
        assert.deepEqual(transforms, ['-1000', '0', '0'], `We expect slides transformation to be [-1000, 0, 0]`);
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 1, 'We expect slide 2.2 to be active');
        done();
    }, 200*4);
});


