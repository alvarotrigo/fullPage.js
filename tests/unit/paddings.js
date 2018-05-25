
QUnit.test('Testing paddingTop', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var padding = 10;
    var FP = initFullpageNew(id, {paddingTop: padding + 'px'});
    var windowHeight = $(window).height();


    for(var i = 0; i < $(SECTION_SEL).length; i++){
        assert.equal($(SECTION_SEL)[i].style.paddingTop, padding+'px', `We expect sections to have ${padding}px of paddingTop`);
        assert.equal($(SECTION_SEL).eq(i).height(), windowHeight - padding, `We expect sections to have ${windowHeight - padding}px height.`);
    }

    //no padding for slides
    for(var i = 0; i < $(SLIDE_SEL).length; i++){
        assert.equal($(SLIDE_SEL)[i].style.paddingTop, '', 'We expect slides to not have any backgroundColor');
    }
});

QUnit.test('Testing paddingBottom', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var padding = 10;
    var FP = initFullpageNew(id, {paddingBottom: padding + 'px'});
    var windowHeight = $(window).height();


    for(var i = 0; i < $(SECTION_SEL).length; i++){
        assert.equal($(SECTION_SEL)[i].style.paddingBottom, padding+'px', `We expect sections to have ${padding}px of paddingBottom`);
        assert.equal($(SECTION_SEL).eq(i).height(), windowHeight - padding, `We expect sections to have ${windowHeight - padding}px height.`);
    }

    //no padding for slides
    for(var i = 0; i < $(SLIDE_SEL).length; i++){
        assert.equal($(SLIDE_SEL)[i].style.paddingTop, '', 'We expect slides to not have any backgroundColor');
    }
});

