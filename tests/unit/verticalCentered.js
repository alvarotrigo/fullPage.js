
QUnit.test('Testing verticalCentered:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {verticalCentered: true});
    var windowHeight = $(window).height();

    assert.equal($(id).find(TABLE_SEL).length, 7, 'We expect TABLE_SEL to exist for every section/slide');
    assert.equal($(id).find(TABLE_SEL).eq(0).closest(SECTION_SEL).length, 1, 'We expect TABLE_SEL to exist as a child of section');
    assert.equal($(id).find(TABLE_SEL).eq(1).closest(SLIDE_SEL).length, 1, 'We expect TABLE_SEL to exist as a child of slide within a slider');
});

QUnit.test('Testing verticalCentered:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {verticalCentered: false});

    assert.equal($(id).find(TABLE_SEL).length,0, 'We expect TABLE_SEL to exist for every section/slide');
});

QUnit.test('Testing verticalCentered:true + paddingTop', function(assert) {
    var id = '#fullpage';
    var padding = 10;
    var FP = initFullpageNew(id, {verticalCentered: true, paddingTop: padding + 'px'});
    var windowHeight = $(window).height();

    assert.equal($(TABLE_SEL).length, 7, 'We expect TABLE_SEL to exist for every section/slide');
    assert.equal($(TABLE_SEL).eq(0).css('height'), (windowHeight)+'px', 'We expect TABLE_SEL to exist for every section/slide');
});

QUnit.test('Testing verticalCentered:true + paddingBottom', function(assert) {
    var id = '#fullpage';
    var padding = 10;
    var FP = initFullpageNew(id, {verticalCentered: true, paddingBottom: padding + 'px'});
    var windowHeight = $(window).height();

    assert.equal($(TABLE_SEL).length, 7, 'We expect TABLE_SEL to exist for every section/slide');
    assert.equal($(TABLE_SEL).eq(0).css('height'), (windowHeight)+'px', 'We expect TABLE_SEL to exist for every section/slide');
});


// QUnit.test('Testing verticalCentered:true + scrollOverflow:true', function(assert) {
//     var id = '#fullpage-scrolloverflow';
//     var FP = initFullpageNew(id, {verticalCentered: true, scrollOverflow: true});

//     assert.equal($(id).find(OVERFLOW_SEL)[0].scrollHeight, 2000, 'We expect scrolloverfow to create a scrollable element');
//     assert.equal($(id).find(OVERFLOW_SEL).css('display'), 'block', 'We expect the scrollable to not be display: flex, so it can contain bigger elements than the parent.'); 

// });
