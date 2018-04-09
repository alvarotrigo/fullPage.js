QUnit.test('Testing silentMoveTo', function(assert) {
    var id = '#fullpage';
    initFullpage(id, allBasicOptions);

    //moving to another section
    $.fn.fullpage.silentMoveTo('page3');
    assert.equal($(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');
    assert.ok(sectionLoaded[2], 'We expect section 3 to be loaded');

    //moving to a specific slide within a section
    $.fn.fullpage.silentMoveTo(2, 3); //section 2 slide 4
    assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
    assert.ok(sectionLoaded[1], 'We expect section 2 to be loaded');

    assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 3, 'We expect section 2 slide 4 to be active');
});