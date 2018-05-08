QUnit.test('Testing moveTo', function(assert) {
    $('#fullpage').fullpage(allBasicOptions);

    var done = assert.async(3);

    //moving to another section
    $.fn.fullpage.moveTo('page3');
    assert.equal(sectionLoaded[2], 0, 'We expect section 3 not to be loaded');

    setTimeout(function() {
        assert.equal($(SECTION_ACTIVE_SEL).index(), 2, 'We expect section 3 to be active');
        assert.ok(sectionLoaded[2], 'We expect section 3 to be loaded');
        done();

        //moving to a specific slide within a section
        $.fn.fullpage.moveTo(2, 3); //section 2 slide 4
        assert.equal(slideLoaded[2], 0, 'We expect section 3 to still active');

    }, 800);

    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 2 to be active');
        assert.ok(sectionLoaded[1], 'We expect section 2 to be loaded');
        done();
    }, 800*2);


    setTimeout(function(){
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).length, 1, 'We expect section 3 to be active with an active slide');
        assert.equal($(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 3,'We expect section 3, slide 3 to be active');
        done();
    }, 800*3);
});