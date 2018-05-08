
QUnit.test('Testing lockAnchors:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {lockAnchors: true}));

    var done = assert.async(1);

    //scrolling down won't change the anchor
    FP.moveSectionDown();
    assert.equal('', window.location.hash, 'Anchor link should be an empty string');
    assert.ok($(SECTION_SEL).eq(1).hasClass(ACTIVE), 'We expect section 2 to be active');

    //changing the URL won't scroll to the given section
    window.location.hash = '#page3';

    setTimeout(function() {
        assert.ok(!$(SECTION_SEL).eq(2).hasClass(ACTIVE), 'We dont expect section 3 to be active');
        done();
    }, 100);
});


QUnit.test('Testing lockAnchors:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {lockAnchors: false}));

    var done = assert.async(1);

    //scrolling down will change the anchor
    FP.moveSectionDown();
    assert.equal('#page2', window.location.hash, 'Anchor link should not be an empty');
    assert.ok($(SECTION_SEL).eq(1).hasClass(ACTIVE), 'We expect section 2 to be active');

    //changing the URL will scroll to the given section
    window.location.hash = '#page3';

    setTimeout(function() {
        assert.ok($(SECTION_SEL).eq(2).hasClass(ACTIVE), 'We expect section 3 to be active');
        done();
    }, 100);
});
