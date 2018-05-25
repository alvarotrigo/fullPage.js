
QUnit.test('Testing verticalCentered:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {verticalCentered: true});
    var windowHeight = $(window).height();

    assert.equal($(TABLE_CELL_SEL).length, 7, 'We expect TABLE_CELL_SEL to exist for every section/slide');
    assert.equal($(TABLE_CELL_SEL).eq(0).css('height'), windowHeight+'px', 'We expect TABLE_CELL_SEL to have the windows height');

    assert.equal($(TABLE_CELL_SEL).eq(0).closest(SECTION_SEL).length, 1, 'We expect TABLE_CELL_SEL to exist as a child of section');
    assert.equal($(TABLE_CELL_SEL).eq(1).closest(SLIDE_SEL).length, 1, 'We expect TABLE_CELL_SEL to exist as a child of slide within a slider');
});

QUnit.test('Testing verticalCentered:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {verticalCentered: false});

    assert.equal($(TABLE_CELL_SEL).length,0, 'We expect TABLE_CELL_SEL to exist for every section/slide');
});

QUnit.test('Testing verticalCentered:true + paddingTop', function(assert) {
    var id = '#fullpage';
    var padding = 10;
    var FP = initFullpageNew(id, {verticalCentered: true, paddingTop: padding + 'px'});
    var windowHeight = $(window).height();

    assert.equal($(TABLE_CELL_SEL).length, 7, 'We expect TABLE_CELL_SEL to exist for every section/slide');
    assert.equal($(TABLE_CELL_SEL).eq(0).css('height'), (windowHeight-padding)+'px', 'We expect TABLE_CELL_SEL to exist for every section/slide');
});

QUnit.test('Testing verticalCentered:true + paddingBottom', function(assert) {
    var id = '#fullpage';
    var padding = 10;
    var FP = initFullpageNew(id, {verticalCentered: true, paddingBottom: padding + 'px'});
    var windowHeight = $(window).height();

    assert.equal($(TABLE_CELL_SEL).length, 7, 'We expect TABLE_CELL_SEL to exist for every section/slide');
    assert.equal($(TABLE_CELL_SEL).eq(0).css('height'), (windowHeight-padding)+'px', 'We expect TABLE_CELL_SEL to exist for every section/slide');
});
