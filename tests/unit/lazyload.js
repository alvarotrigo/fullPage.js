QUnit.test("Testing lazyLoad:true on load on 1st section with no slides ", function(assert) {
    var id = '#fullpage';
    appendLazyElements(id);
    $(id).fullpage({lazyLoading: true});

    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(0)), true, 'We expect all lazy elements to be loaded on page load');
    assert.equal(areOthersLazyLoaded(), false, 'We expect lazy elements in other sections not to be loaded');
});

QUnit.test("Testing lazyLoad:true on load on 1st section with slides ", function(assert) {
    var id = '#fullpage-moveSlideRight';
    appendLazyElements(id);

    $(id).fullpage({lazyLoading: true});

    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(0).find('.fp-slide.active')), true, 'We expect all lazy elements to be loaded on page load');
    assert.equal(areOthersLazyLoaded(), false, 'We expect lazy elements in other sections not bo be loaded');
});

QUnit.test("Testing lazyLoad:true on load on section with middle active slide", function(assert) {
    var id = '#fullpage-middle-slide-active';
    appendLazyElements(id);

    $(id).fullpage({lazyLoading: true});

    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(0).find('.fp-slide.active')), true, 'We expect all lazy elements to be loaded on page load');
    assert.equal(areOthersLazyLoaded(), false, 'We expect lazy elements in other sections not bo be loaded');
});

QUnit.test("Testing lazyLoad:true on load on second section active with no slides", function(assert) {
    var id = '#fullpage-2nd-active-section';
    appendLazyElements(id);

    initFullpage(id, {lazyLoading: true});

    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(0)), false, 'We expect no lazy elements to be loaded on 1st section');
    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(1)), true, 'We expect all lazy elements to be loaded on 2nd section');
    assert.equal(areOthersLazyLoaded(), false, 'We expect no lazy elements to be loaded in other sections');
});

QUnit.test("Testing lazyLoad:true on load on second section active with first active slide", function(assert) {
    var id = '#fullpage-first-slide-active-in-2nd-active-section';
    appendLazyElements(id);

    initFullpage(id, {lazyLoading: true});

    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(0)), false, 'We expect no lazy elements to be loaded on 1st section');
    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(0)), true, 'We expect all lazy elements to be loaded on 2nd section 1st slide');
    assert.equal(areOthersLazyLoaded(), false, 'We expect no lazy elements to be loaded in other sections / slides');
});

QUnit.test("Testing lazyLoad:true on load on second section active with middle active slide", function(assert) {
    var id = '#fullpage-middle-slide-active-in-2nd-active-section';
    appendLazyElements(id);

    initFullpage(id, {lazyLoading: true});

    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(0)), false, 'We expect no lazy elements to be loaded on 1st section');
    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(1)), true, 'We expect all lazy elements to be loaded on 2nd section 1st slide');
    assert.equal(areOthersLazyLoaded(), false, 'We expect no lazy elements to be loaded in other sections / slides');
});


QUnit.test("Testing lazyLoad:true on scroll to 2nd section with no slides", function(assert) {
    var id = '#fullpage-no-slides';

    appendLazyElements(id);
    $(id).fullpage({lazyLoading: true});

    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1)), false, 'We expect no lazy elements to be loaded on 2nd section');

    $.fn.fullpage.moveSectionDown();
    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(1)), true, 'We expect all lazy elements to be loaded on 2nd section after movedown');
});


QUnit.test("Testing lazyLoad:true on scroll to 2nd section with first slide", function(assert) {
    var id = '#fullpage';

    appendLazyElements(id);
    $(id).fullpage({lazyLoading: true});

    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1)), false, 'We expect no lazy elements to be loaded');

    $.fn.fullpage.moveSectionDown();
    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(1).find('.fp-slide.active')), true, 'We expect all lazy elements to be loaded before afterLoad');
    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(1)), false, 'We expect lazy elements in 2nd section 2nd slide not bo be loaded');
    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(2)), false, 'We expect lazy elements in 2nd section 3rd slide not bo be loaded');
    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(3)), false, 'We expect lazy elements in 2nd section 4th slide not bo be loaded');
});

QUnit.test("Testing lazyLoad:true on scroll to 2nd section with active middle slide", function(assert) {
    var id = '#fullpage-middle-slide-active-in-2nd-section';
    appendLazyElements(id);

    initFullpage(id, {lazyLoading: true});

    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1)), false, 'We expect no lazy elements to be loaded');
    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(1)), false, 'We expect no lazy elements to be loaded on 2nd section 2nd slide');

    $.fn.fullpage.moveSectionDown();
    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(1)), true, 'We expect all lazy elements to be loaded before afterLoad');
    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(0)), false, 'We expect lazy elements in 2nd section 1st slide not bo be loaded');
    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(2)), false, 'We expect lazy elements in 2nd section 3rd slide not bo be loaded');
    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(3)), false, 'We expect lazy elements in 2nd section 4th slide not bo be loaded');
});

QUnit.test("Testing lazyLoad:true on scroll to 2nd section with single slide", function(assert) {
    var id = '#fullpage-single-slide-in-second-section';
    appendLazyElements(id);

    initFullpage(id, {lazyLoading: true});

    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL)), false, 'We expect no lazy elements to be loaded');
    assert.equal(isAnyLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(0)), false, 'We expect no lazy elements to be loaded on 2nd section 1st slide');

    $.fn.fullpage.moveSectionDown();
    assert.equal(areAllLazyLoaded($(SECTION_SEL).eq(1).find(SLIDE_SEL).eq(0)), true, 'We expect all lazy elements to be loaded on 2nd section 1st slide after movedown');
});
