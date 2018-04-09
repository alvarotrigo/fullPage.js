QUnit.test('Testing moveSectionUp first section active with slides {css3:true, loopBottom: true, autoScrolling:true}', function(assert) {
    var id = '#fullpage-last-section-active';
    initFullpage(id, {css3: true, loopBottom: true, autoScrolling: true});

    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 3, 'We expect section 4 to be active');

    $.fn.fullpage.moveSectionDown();
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 'We expect section 1 to be active');
});