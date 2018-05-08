
QUnit.test('Testing fixedElements', function(assert) {
    var id = '#fullpage-normalscrollelements';
    var fixedElementSelector = '.normalscroll';
    //we will use the element 'normalscroll' as the fixed element. Nothing to
    //do with normal scroll :)
    var FP = initFullpageNew(id, {fixedElements: fixedElementSelector});

    assert.equal($(fixedElementSelector).closest(SECTION_SEL).length, 0, 'We expect the element to be outside a section');
});
