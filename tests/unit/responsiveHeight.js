function checkIsResponsive(FP, assert){
    assert.ok($('body').hasClass(RESPONSIVE), 'We expect RESPONSIVE class to be applied on the body');
    assert.equal(FP.test.options.autoScrolling, false, 'We expect autoScrolling to be false');
    assert.equal(FP.test.options.fitToSection, false, 'We expect fitToSection to be false');
    assert.equal($(SECTION_NAV_SEL).is(':visible'), false, 'We expect SECTION_NAV_SEL to be hidden');
    assert.equal(afterResponsive, true, 'We expect afterResponsive callback to be fired');
}

function checkIsNotResponsive(FP, assert){
    assert.ok(!$('body').hasClass(RESPONSIVE), 'We expect RESPONSIVE class to not be applied on the body');
    assert.equal(FP.test.options.autoScrolling, true, 'We expect autoScrolling to be true');
    assert.equal(FP.test.options.fitToSection, true, 'We expect fitToSection to be true');
    assert.equal($(SECTION_NAV_SEL).is(':visible'), true, 'We expect SECTION_NAV_SEL to be visible');
    assert.equal(afterResponsive, false, 'We expect afterResponsive callback not to have been fired yet or to have value false');
}

QUnit.test('Testing responsiveHeight', function(assert) {
    var id = '#fullpage';
    var done = assert.async(1);
    var windowHeight = $(window).height();
    var reponsiveValue = windowHeight/1.5;
    var options = {responsiveHeight: reponsiveValue, fitToSection:true, navigation:true};
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, options));

    checkIsNotResponsive(FP, assert);

    //mocking resize down
    window.innerHeight = reponsiveValue - 1;
    trigger(window, 'resize');

    setTimeout(function(){
        checkIsResponsive(FP, assert);
        done();
    }, 800);
});

QUnit.test('Testing responsiveHeight on page load', function(assert) {
    var id = '#fullpage';
    var windowHeight = $(window).height();
    var reponsiveValue = windowHeight + 100;
    var options = {responsiveHeight: reponsiveValue, fitToSection:true, navigation:true};
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, options));

    checkIsResponsive(FP, assert);
});

QUnit.test('Testing responsiveHeight undo responsive on resize up', function(assert) {
    var id = '#fullpage';
    var done = assert.async(1);
    var windowHeight = $(window).height();
    var reponsiveValue = windowHeight + 100;
    var options = {responsiveHeight: reponsiveValue, fitToSection:true, navigation:true};
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, options));

    checkIsResponsive(FP, assert);

    //mocking resize down
    window.innerHeight = windowHeight + 200;
    trigger(window, 'resize');

    setTimeout(function(){
        checkIsNotResponsive(FP, assert);
        done();
    }, 1900);
});