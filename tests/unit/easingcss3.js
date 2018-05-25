QUnit.test('Testing easingCss3 value', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {easingcss3: 'ease-in-out', scrollingSpeed: 50});
    var done = assert.async(1);

    FP.moveSectionDown();

    setTimeout(function(){
        var transition = $(WRAPPER_SEL).css('transition');

        assert.ok(transition.indexOf('ease-in-out') > -1, 'We expect easing effect to be applied on the css3 transition');
        done();
    },100);
});

