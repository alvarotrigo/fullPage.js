
QUnit.test('Testing slidesNavigation exist when using slidesNavigation:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: true, scrollingSpeed: 50}));

    assert.equal($(SLIDES_NAV_SEL).length, 1, 'We expect slidesNavigation to exist');
    assert.equal($(SLIDES_NAV_SEL).closest(SECTION_SEL).index(), 1, 'We expect slidesNavigation to be inside the 2nd section');
    assert.equal($(SLIDES_NAV_SEL).find('li').length, $(id).find(SECTION_SEL).eq(1).find(SLIDE_SEL).length, 'We expect slidesNavigation have as many items as slides exist');
    assert.equal($(SLIDES_NAV_SEL).find('a').length, $(id).find(SECTION_SEL).eq(1).find(SLIDE_SEL).length, 'We expect slidesNavigation have as many links as sections exist');
    assert.equal($(SLIDES_NAV_SEL).find('span').length, $(id).find(SECTION_SEL).eq(1).find(SLIDE_SEL).length, 'We expect slidesNavigation have as many spans as sections exist');
});


QUnit.test('Testing slidesNavigation does not exist when using slidesNavigation:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: false}));

    assert.equal($(SLIDES_NAV_SEL).length, 0, 'We expect no slidesNavigation to exist');
});


QUnit.test('Testing slidesNavigation `active` class when css3:true', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: true, css3:true, scrollingSpeed: 50}));
    var done = assert.async(2);

    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

    FP.moveSlideRight();

    setTimeout(function() {
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 1, `We expect item 1 to be active`);
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

        done();
        FP.moveSlideRight();
    }, 100);

    setTimeout(function() {
        FP.moveSlideRight();
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 2, `We expect item 2 to be active`);
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

        done();
    }, 100 * 2);
});



QUnit.test('Testing slidesNavigation `active` class when css3:false', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: true, css3:false, scrollingSpeed: 50}));
    var done = assert.async(2);

    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

    FP.moveSlideRight();

    setTimeout(function() {
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 1, `We expect item 2 to be active`);
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

        done();
        FP.moveSlideRight();
    }, 100);

    setTimeout(function() {
        FP.moveSlideRight();
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 2, `We expect item 2 to be active`);
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

        done();
    }, 100 * 2);
});


QUnit.test('Testing slidesNavigation `active` class when hash change by anchor name within same section', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: true, scrollingSpeed: 50}));

    var done = assert.async(1);

    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

    window.location.hash = '#page1/slide3';

    setTimeout(function(){
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 2, 'We expect item 3 to be active');
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');
        done();
    },100);
});


QUnit.test('Testing slidesNavigation `active` class when hash change by slide index within same section', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: true, scrollingSpeed: 50}));

    var done = assert.async(1);

    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

    window.location.hash = '#page1/2';

    setTimeout(function(){
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 2, 'We expect item 3 to be active');
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');
        done();
    },100);
});

QUnit.test('Testing slidesNavigation `active` class when hash change to another section & slide', function(assert) {
    var id = '#fullpage-slides-with-anchor';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: true, scrollingSpeed: 50}));

    var done = assert.async(1);

    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
    assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

    window.location.hash = '#page2/slide3';

    setTimeout(function(){
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 2, 'We expect item 3 to be active');
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');
        done();
    },100*2);
});

$(document).on('click', SLIDES_NAV_LINK_SEL, function(){
    console.log("weeee");
});

QUnit.test('Testing slide by click on slidesNavigation ', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: true, scrollingSpeed: 50}));

    var done = assert.async(1);

    $(SLIDES_NAV_SEL).find('li').eq(2).find('a')[0].click();

    setTimeout(function(){
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 2, 'We expect item 3 to be active');
        assert.equal($(SLIDES_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');
        done();
    },100);
});


QUnit.test('Testing slidesNavPosition:bottom', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: true, slidesNavPosition:'bottom', scrollingSpeed: 50}));

    assert.ok($(SLIDES_NAV_SEL).hasClass('fp-bottom'), 'We expect slidesNav to have class fp-bottom');
});


QUnit.test('Testing slidesNavPosition:top', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {slidesNavigation: true, slidesNavPosition:'top', scrollingSpeed: 50}));

    assert.ok($(SLIDES_NAV_SEL).hasClass('fp-top'), 'We expect slidesNav to have class fp-top');
});

