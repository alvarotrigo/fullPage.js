QUnit.test('Testing loopTop:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {loopTop: true});

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    FP.moveSectionUp();
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');
});

QUnit.test('Testing loopTop:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {loopTop: false});

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');

    FP.moveSectionUp();
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 0 to be active');
});