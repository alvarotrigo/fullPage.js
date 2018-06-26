QUnit.test('Testing navigation exist when using navigation:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true}));

    assert.equal($(SECTION_NAV_SEL).length, 1, 'We expect navigation to exist');
    assert.equal($(SECTION_NAV_SEL).closest(id).length, 0, 'We expect navigation to be outside the fullpage wrapper');
    assert.equal($(SECTION_NAV_SEL).find('li').length, $(id).find(SECTION_SEL).length, 'We expect navigation have as many items as sections exist');
    assert.equal($(SECTION_NAV_SEL).find('a').length, $(id).find(SECTION_SEL).length, 'We expect navigation have as many links as sections exist');
    assert.equal($(SECTION_NAV_SEL).find('span').length, $(id).find(SECTION_SEL).length, 'We expect navigation have as many spans as sections exist');
});

QUnit.test('Testing navigation does not exist when using navigation:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: false}));

    assert.equal($(SECTION_NAV_SEL).length, 0, 'We expect no navigation to exist');
});

QUnit.test('Testing navigation `active` class when auto scrolling', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true}));

    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

    for(var i = 1; i<4; i++){
        FP.moveSectionDown();
        assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), i, 'We expect item ' + (i +1) +' to be active');
        assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');
    }
});

QUnit.test('Testing navigation `active` class when auto scrolling and sliding horizontally', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true}));

    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

    for(var i = 1; i<4; i++){
        FP.moveSlideRight();
        assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
        assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');
    }
});

QUnit.test('Testing navigation `active` class when scrolling & autoScrolling:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {autoScrolling:false, navigation: true}));

    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');

    //simulating scroll event
    simulateScroll(window.innerHeight);

    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 1, 'We expect item 2 to be active');
    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');


    simulateScroll(window.innerHeight * 3);

    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 3, 'We expect item 4 to be active');
    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');
});

QUnit.test('Testing navigation `active` class when hash change by anchor name', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true}));

    var done = assert.async(1);

    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

    window.location.hash = '#page3';

    setTimeout(function(){
        assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 2, 'We expect item 3 to be active');
        assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');
        done();
    },100);
});

QUnit.test('Testing navigation `active` class when hash change by section index', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true}));

    var done = assert.async(1);

    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 0, 'We expect item 1 to be active');
    assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');

    window.location.hash = '#3';

    setTimeout(function(){
        assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').index(), 2, 'We expect item 3 to be active');
        assert.equal($(SECTION_NAV_SEL).find(ACTIVE_SEL).closest('li').length, 1, 'We expect a single item to be active');
        done();
    },100);
});

QUnit.test('Testing navigationPosition:right', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true, navigationPosition:'right'}));

    assert.ok($(SECTION_NAV_SEL).hasClass('fp-right'), 'We expect nav to have class right');
});

QUnit.test('Testing navigationPosition:left', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true, navigationPosition:'left'}));

    assert.ok($(SECTION_NAV_SEL).hasClass('fp-left'), 'We expect nav to have class right');
});

QUnit.test('Testing navigationTooltips option', function(assert) {
    var id = '#fullpage';
    var tooltips = ['demo1', 'demo2', 'demo3', 'demo4'];
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true, navigationTooltips: tooltips}));
    for(var i = 0; i<tooltips.length; i++){
        assert.equal($(SECTION_NAV_SEL).find(SECTION_NAV_TOOLTIP_SEL).eq(i).text(), tooltips[i], `We expect nav tooltip number ${i} to be ${tooltips[i]}`);
    }
});

QUnit.test('Testing navigationTooltips from data-anchor', function(assert) {
    var id = '#fullpage-nav-tooltips';
    var tooltips = ['demo1', 'demo2', 'demo3', 'demo4'];
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true}));
    for(var i = 0; i<tooltips.length; i++){
        assert.equal($(SECTION_NAV_SEL).find(SECTION_NAV_TOOLTIP_SEL).eq(i).text(), tooltips[i], `We expect nav tooltip number ${i} to be ${tooltips[i]}`);
    }
});

QUnit.test('Testing showActiveTooltip:true', function(assert) {
    var id = '#fullpage';
    var tooltips = ['demo1', 'demo2', 'demo3', 'demo4'];
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true, navigationTooltips: tooltips, showActiveTooltip:true}));
    var done = assert.async(1);

    setTimeout(function(){
        assert.equal($(SECTION_NAV_SEL).find(SECTION_NAV_TOOLTIP_SEL).first().css('opacity'), '1', 'We expect the 1st tooltip to be visible');
        done();
    },300);
});

QUnit.test('Testing showActiveTooltip:false', function(assert) {
    var id = '#fullpage';
    var tooltips = ['demo1', 'demo2', 'demo3', 'demo4'];
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {navigation: true, navigationTooltips: tooltips, showActiveTooltip:false}));
    var done = assert.async(1);

    setTimeout(function(){
        assert.equal($(SECTION_NAV_SEL).find(SECTION_NAV_TOOLTIP_SEL).first().css('opacity'), '0', 'We expect the 1st tooltip to be visible');
        done();
    },300);
});

