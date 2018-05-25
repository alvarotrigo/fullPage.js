QUnit.test('Testing bigSectionsDestination:bottom', function(assert) {
    var id = '#fullpage-auto-height';
    var FP = initFullpageNew(id, {autoScrolling:true, bigSectionsDestination: 'bottom'});
    var windowHeight = $(window).height();

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');
    FP.moveSectionDown();

    var sectionBottom =  $(SECTION_SEL).eq(1)[0].offsetTop - windowHeight +  $(SECTION_SEL).eq(1)[0].offsetHeight;
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(sectionBottom)}`, '0'], `We expect sections transformation to be [0, ${-(sectionBottom)}, 0]`);
});

QUnit.test('Testing bigSectionsDestination:top', function(assert) {
    var id = '#fullpage-auto-height';
    var FP = initFullpageNew(id, {autoScrolling:true, bigSectionsDestination: 'top'});
    var windowHeight = $(window).height();

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], 'We expect sections transformation to be [0, 0, 0]');
    FP.moveSectionDown();

    assert.deepEqual(getTransform(FP.test.translate3d), ['0', `${-(windowHeight*1)}`, '0'], `We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
});