
QUnit.test('Testing fitToSection:true', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {autoScrolling:false, fitToSection: true, scrollingSpeed: 50}));
    var done = assert.async(2);
    showFullpage(id);

    assert.equal(document.body.scrollTop, 0, '1st section is fully visible on the viewport');
    
    $(id).find(SECTION_ACTIVE_SEL)[0].offsetTop = window.innerHeight * 0.6;
    simulateScroll(window.innerHeight * 0.6, FP);
    
    setTimeout(function(){
        console.warn(document.body.scrollTop);
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 1 to be active');
        done();
    }, 500);
    

    // setTimeout(function(){
    //     assert.equal(document.body.scrollTop, $(id).find(SECTION_ACTIVE_SEL)[0].offsetTop, '2nd section has class COMPLETELY_SEL');
    //     done();
    //    showQunit(id);
    // },500 + 1000);
});

// QUnit.test('Testing fitToSection:false', function(assert) {
//     var id = '#fullpage';
//     var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {autoScrolling:false, fitToSection: false, scrollingSpeed: 50}));
//     var done = assert.async(1);
//     showFullpage(id);

//     $(SECTION_ACTIVE_SEL)[0].offsetTop = window.innerHeight * 0.6;
//     simulateScroll(window.innerHeight * 0.6);

//     assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 1 to be active');

//     assert.ok($(SECTION_SEL).eq(0).hasClass(COMPLETELY), '1st section has class COMPLETELY_SEL');

//     setTimeout(function(){
//         assert.ok(!$(SECTION_SEL).eq(1).hasClass(COMPLETELY), '2nd section does not have the class COMPLETELY_SEL');
//         done();
//         showQunit(id);

//     },200 + 1000);
// });

// QUnit.test('Testing fitToSection:true & fitToSectionDelay:100', function(assert) {
//     var id = '#fullpage';
//     var FP = initFullpageNew(id, Object.assign({}, sectionsAndSlidesCallbacks, {autoScrolling:false, fitToSection: true, fitToSectionDelay:100, scrollingSpeed: 50}));
//     var done = assert.async(1);

//     $(SECTION_ACTIVE_SEL)[0].offsetTop = window.innerHeight * 0.6;
//     simulateScroll(window.innerHeight * 0.6);

//     assert.equal($(SECTION_ACTIVE_SEL).index(), 1, 'We expect section 1 to be active');

//     assert.ok($(SECTION_SEL).eq(0).hasClass(COMPLETELY), '1st section has class COMPLETELY_SEL');

//     setTimeout(function(){
//         assert.ok($(SECTION_SEL).eq(1).hasClass(COMPLETELY), '2nd section has class COMPLETELY_SEL');
//         done();
//     },200 + 100);
// });

