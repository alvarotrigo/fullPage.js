
var oldConsole = console;
var warnFired = false;
var errorFired = false;
var licenseKey = 'OPEN-SOURCE-GPLV3-LICENSE';

function mockConsole(){
    console = {};
    console.warn = function(e){
        warnFired = true;
    };
    console.error = function(e){
        errorFired = true;
    }
}

function isWarnFired(){
    if(warnFired){
        warnFired = false;
        return true;
    }
    return false;
}

function isErrorFired(){
    if(errorFired){
        errorFired = false;
        return true;
    }
    return false;
}

function isUsingExtensionsFile(FP){
    return typeof FP.getFullpageData !== 'object';
}

//loopTop & continuousVertical
QUnit.test('Testing warnings for loopTop:false with continuousVertical:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {loopTop: false, loopBottom: false, continuousVertical:true});
    assert.equal(isWarnFired(), false, 'We expect console.warn not to be fired');
});

QUnit.test('Testing warnings for loopTop:true with continuousVertical:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {loopTop: true, continuousVertical:true});
    assert.equal(isWarnFired(), true, 'We expect console.warn to be fired');
});

//loopBottom & continuousVertical
QUnit.test('Testing warnings for loopBottom:false with continuousVertical:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {loopBottom: false, loopBottom: false, continuousVertical:true});
    assert.equal(isWarnFired(), false, 'We expect console.warn not to be fired');
});

QUnit.test('Testing warnings for loopBottom:true with continuousVertical:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {loopBottom: true, continuousVertical:true});
    assert.equal(isWarnFired(), true, 'We expect console.warn to be fired');
});

//scrollBar & continuousVertical
QUnit.test('Testing warnings for scrollBar:false with continuousVertical:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {scrollBar: false, autoScrolling:true, continuousVertical:true});
    assert.equal(isWarnFired(), false, 'We expect console.warn not to be fired');
});

QUnit.test('Testing warnings for scrollBar:true with continuousVertical:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {scrollBar: true, autoScrolling:true, continuousVertical:true});
    assert.equal(isWarnFired(), true, 'We expect console.warn to be fired');
});

//scrollOverflow && (scrollBar || autoScrolling)
QUnit.test('Testing warnings for scrollOverflow:true with scrollBar:true & autoScrolling:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {scrollBar: true, scrollOverflow:true, scrollOverflowHandler: {init: function(){}, remove: function(){}} });
    assert.equal(isWarnFired(), true, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for scrollOverflow:true with scrollBar:false & autoScrolling:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {scrollBar: false, scrollOverflow:true, scrollOverflowHandler: {init: function(){}, remove: function(){}} });
    assert.equal(isWarnFired(), false, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for scrollOverflow:true with autoScrolling:false', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {autoScrolling: false, scrollOverflow:true, scrollOverflowHandler: {init: function(){}, remove: function(){}} });
    assert.equal(isWarnFired(), true, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for scrollOverflow:true with autoScrolling:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {autoScrolling: true, scrollOverflow:true, scrollOverflowHandler: {init: function(){}, remove: function(){}} });
    assert.equal(isWarnFired(), false, 'We expect console.warn not to be fired');
});

//autoScrolling & continuousVertical
QUnit.test('Testing warnings for autoScrolling:true with continuousVertical:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {autoScrolling: true, continuousVertical:true});
    assert.equal(isWarnFired(), false, 'We expect console.warn not to be fired');
});

QUnit.test('Testing warnings for autoScrolling:false with continuousVertical:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {autoScrolling: false, continuousVertical:true});
    assert.equal(isWarnFired(), true, 'We expect console.warn to be fired');
});

//scrollOverflow must exist
QUnit.test('Testing warnings for scrollOverflow:true with no vendor file', function(assert) {
    var id = '#fullpage';
    errorFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {scrollOverflow: true, licenseKey: licenseKey, scrollOverflowHandler: null});
    assert.equal(isErrorFired(), true, 'We expect console.warn to be fired');
});

//scrollOverflow must exist
QUnit.test('Testing warnings for scrollOverflow:true with vendor file', function(assert) {
    var id = '#fullpage';
    errorFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {scrollOverflow: true, licenseKey: licenseKey, scrollOverflowHandler: {init: function(){}, remove: function(){}}});
    assert.equal(isWarnFired(), false, 'We expect console.warn not to be fired');
});

//extension file must exist
QUnit.test('Testing warnings for parallax:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {parallax: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for scrollOverflowReset:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {scrollOverflowReset: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for dragAndMove:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {dragAndMove: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for offsetSections:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {offsetSections: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for fadingEffect:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {fadingEffect: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for responsiveSlides:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {responsiveSlides: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for continuousHorizontal:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {continuousHorizontal: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for interlockedSlides:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {interlockedSlides: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for scrollHorizontally:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {scrollHorizontally: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});

QUnit.test('Testing warnings for resetSliders:true', function(assert) {
    var id = '#fullpage';
    warnFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {resetSliders: true});
    var expected = isUsingExtensionsFile(FP) ? false : true;

    assert.equal(isWarnFired(), expected, 'We expect console.warn to be fired');
});


//name element?
QUnit.test('Testing warnings for name element same as anchor?', function(assert) {
    var id = '#fullpage-with-name-element';
    errorFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {anchors: ['anchor-as-name', 'test2', 'test3', 'test4'], licenseKey: licenseKey});
    assert.equal(isErrorFired(), true, 'We expect console.warn to be fired');
});

//id element?
QUnit.test('Testing warnings for id element same as anchor?', function(assert) {
    var id = '#fullpage-with-name-element';
    errorFired = false;
    mockConsole();

    var FP = initFullpageNew(id, {anchors: ['anchor-as-id', 'test2', 'test3', 'test4'], licenseKey: licenseKey});
    assert.equal(isErrorFired(), true, 'We expect console.warn to be fired');
});
