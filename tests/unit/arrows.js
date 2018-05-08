
QUnit.test('Testing controlArrows:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew('#fullpage', {controlArrows:true, loopHorizontal: true});

    assert.equal($(SLIDES_ARROW_SEL).length, 2, 'We expect 2 control arrows to exist');
    assert.equal($(SLIDES_PREV_SEL).length, 1, 'We expect 1 prev control arrow');
    assert.equal($(SLIDES_NEXT_SEL).length, 1, 'We expect 1 next control arrow');
});

QUnit.test('Testing controlArrows:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {controlArrows:false, loopHorizontal: true});

    assert.equal($(SLIDES_ARROW_SEL).length, 0, 'We expect no control arrows to exist');
});

QUnit.test('Testing controlArrows:true & loopHorizontal:false in 1st slide', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {controlArrows:true, loopHorizontal: false});

    assert.equal($(SLIDES_ARROW_SEL + ':visible').length, 1, 'We expect 2 control arrows to exist');
    assert.equal($(SLIDES_ARROW_SEL + SLIDES_NEXT_SEL + ':visible').length, 1, 'We expect one next control arrow to exist');
    assert.equal($(SLIDES_ARROW_SEL + SLIDES_PREV_SEL + ':visible').length, 0, 'We expect 0 prev control arrow to exist');
});

QUnit.test('Testing controlArrows:true & loopHorizontal:false in middle slide', function(assert) {
    var id = '#fullpage-middle-slide-active';
    var FP = initFullpageNew(id, {controlArrows:true, loopHorizontal: false});

    assert.equal($(SLIDES_ARROW_SEL + ':visible').length, 2, 'We expect 2 control arrows to exist');
});

QUnit.test('Testing controlArrows:true & loopHorizontal:false in last slide', function(assert) {
    var id = '#fullpage-second-slide-active';
    var FP = initFullpageNew(id, {controlArrows:true, loopHorizontal: false});

    assert.equal($(SLIDES_ARROW_SEL + ':visible').length, 1, 'We expect 1 control arrow to exist');
    assert.equal($(SLIDES_ARROW_SEL + SLIDES_PREV_SEL + ':visible').length, 1, 'We expect 1 prev control arrow to exist');
    assert.equal($(SLIDES_ARROW_SEL + SLIDES_NEXT_SEL + ':visible').length, 0, 'We expect 0 next control arrow to exist');

});

QUnit.test('Testing controlArrowColor', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {controlArrowColor:'blue', loopHorizontal: true});

    assert.equal($(SLIDES_ARROW_SEL + ':visible').first()[0].style.borderColor, 'transparent blue transparent transparent', 'We expect the prev arrow to be blue');
    assert.equal($(SLIDES_ARROW_SEL + ':visible').last()[0].style.borderColor, 'transparent transparent transparent blue', 'We expect the next arrow to be blue');
});

