QUnit.test('Testing loopBottom:true', function(assert) {
    var id = '#fullpage-last-section-active';
    var FP = initFullpageNew(id, {loopBottom: true});

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');

    FP.moveSectionDown();
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
});

QUnit.test('Testing loopBottom:false', function(assert) {
    var id = '#fullpage-last-section-active';
    var FP = initFullpageNew(id, {loopBottom: false});

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');

    FP.moveSectionDown();
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 1 to be active');
});