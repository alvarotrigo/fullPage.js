var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

QUnit.test('Testing sectionsColor default', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var FP = initFullpageNew(id, {});

    for(var i = 0; i < $(SECTION_SEL).length; i++){
        assert.equal($(SECTION_SEL)[i].style.backgroundColor, '', 'We expect sections to not have any backgroundColor');
    }

    for(var i = 0; i < $(SLIDE_SEL).length; i++){
        assert.equal($(SLIDE_SEL)[i].style.backgroundColor, '', 'We expect slides to not have any backgroundColor');
    }
});

QUnit.test('Testing sectionsColor with colors', function(assert) {
    var id = '#fullpage-moveSlideRight';
    var colors = ['#ffffff', '#d8d8d8', '#123456', '#738312'];
    var FP = initFullpageNew(id, {sectionsColor: colors});

    for(var i = 0; i < $(SECTION_SEL).length; i++){
        assert.equal(rgb2hex($(SECTION_SEL)[i].style.backgroundColor), colors[i], 'We expect sections to not have any backgroundColor');
    }

    //slides won't have any background
    for(var i = 0; i < $(SLIDE_SEL).length; i++){
        assert.equal($(SLIDE_SEL)[i].style.backgroundColor, '', 'We expect slides to not have any backgroundColor');
    }
});
