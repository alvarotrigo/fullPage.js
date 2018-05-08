

//overwritting the scrollTop function of jQuery to simulate scroll
//when using autoScrolling:false or scrollBar:true
function simulateScroll(scrollValue){
    window.pageYOffset = (function(){
        return scrollValue;
    })();
    trigger(window, 'scroll');
}

function trigger(el, eventName, data){
    var event;
    data = typeof data === 'undefined' ? {} : data;

    // Native
    if (window.CustomEvent) {
        event = new CustomEvent(eventName, {detail: data});
    }
    else{
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
    }

    el.dispatchEvent(event);
}


QUnit.test('Testing menu. Moving it outside the library wrapper when css3:true', function(assert) {
    var id = '#fullpage';

    $(id).append($('#menu'));
    assert.equal($(id).find('#menu').closest(id).length, 1, 'We expect menu to be inside the fullpage wrapper');

    var FP = initFullpageNew(id, {css3: true, menu: '#menu'});

    assert.equal($('#menu').length, 1, 'We expect menu to still exist');
    assert.equal($(id).find('#menu').closest(id).length, 0, 'We expect menu to be outside the fullpage wrapper');
});

QUnit.test('Testing menu. Keeping it inside the library wrapper when css3:false', function(assert) {
    var id = '#fullpage';

    $('#menu').appendTo(id);
    assert.equal($(id).find('#menu').closest(id).length, 1, 'We expect menu to be inside the fullpage wrapper');

    var FP = initFullpageNew(id, {css3: false, menu: '#menu'});

    assert.equal($('#menu').length, 1, 'We expect menu to still exist');
    assert.equal($(id).find('#menu').closest(id).length, 1, 'We expect menu to be inside the fullpage wrapper');
});

QUnit.test('Testing menu `active` class when auto scrolling', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {menu: '#menu'}));

    assert.equal($('#menu').find('.active[data-menuanchor]').index(), 0, 'We expect item 1 to be active');
    assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');

    for(var i = 1; i<4; i++){
        FP.moveSectionDown();
        assert.equal($('#menu').find('.active[data-menuanchor]').index(), i, 'We expect item ' + (i +1) +' to be active');
        assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');
    }
});

QUnit.test('Testing menu `active` class when auto scrolling and sliding horizontally', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {menu: '#menu'}));

    assert.equal($('#menu').find('.active[data-menuanchor]').index(), 0, 'We expect item 1 to be active');
    assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');

    for(var i = 1; i<4; i++){
        FP.moveSlideRight();
        assert.equal($('#menu').find('.active[data-menuanchor]').index(), 0, 'We expect item 1 to be active');
        assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');
    }
});

QUnit.test('Testing menu `active` class when scrolling & autoScrolling:false', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {autoScrolling:false, menu: '#menu'}));

    assert.equal($('#menu').find('.active[data-menuanchor]').index(), 0, 'We expect item 1 to be active');

    simulateScroll(window.innerHeight);
    assert.equal($('#menu').find('.active[data-menuanchor]').index(), 1, 'We expect item 2 to be active');
    assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');


    simulateScroll(window.innerHeight * 3);
    assert.equal($('#menu').find('.active[data-menuanchor]').index(), 3, 'We expect item 4 to be active');
    assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');
});

QUnit.test('Testing menu `active` class when hash change by anchor name', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {menu: '#menu'}));

    var done = assert.async(1);

    assert.equal($('#menu').find('.active[data-menuanchor]').index(), 0, 'We expect item 1 to be active');
    assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');

    //changing the URL won't scroll to the given section
    window.location.hash = '#page3';

    setTimeout(function(){
        assert.equal($('#menu').find('.active[data-menuanchor]').index(), 2, 'We expect item 3 to be active');
        assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');
        done();
    },100);
});

QUnit.test('Testing menu `active` class when hash change by section index', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {menu: '#menu'}));

    var done = assert.async(1);

    assert.equal($('#menu').find('.active[data-menuanchor]').index(), 0, 'We expect item 1 to be active');
    assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');

    //changing the URL won't scroll to the given section
    window.location.hash = '#3';

    setTimeout(function(){
        assert.equal($('#menu').find('.active[data-menuanchor]').index(), 2, 'We expect item 3 to be active');
        assert.equal($('#menu').find('.active[data-menuanchor]').length, 1, 'We expect a single item to be active');
        done();
    },100);
});