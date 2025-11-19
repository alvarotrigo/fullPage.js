// ============================================================================
// This test file covers scrollOverflow functionality
// Tests handling of sections with content taller than viewport
// Ensures proper scrolling within sections before moving to next section
// ============================================================================

// Test Case 1: Testing scrollOverflow:true creates scrollable sections
// Verifies that sections with overflow content become scrollable
// ============================================================================
QUnit.test('Testing scrollOverflow:true creates scrollable wrapper', function(assert) {
    // Use layout with tall content sections
    var id = '#fullpage-scrolloverflow';
    
    // Initialize with scrollOverflow enabled
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollOverflow: true,  // Enable scroll overflow handling
        scrollingSpeed: 50
    }));
    
    // Verify scrollable wrapper was created for overflow sections
    // Sections with content taller than viewport should have fp-scrollable class
    assert.ok($(id).find(SECTION_SEL).eq(0).find(SCROLLABLE_SEL).length > 0, 
        'Section 1 with overflow content should have scrollable wrapper created');
    
    // Verify scrollable wrapper has proper structure
    var scrollableWrapper = $(id).find(SECTION_SEL).eq(0).find(SCROLLABLE_SEL).first();
    assert.ok(scrollableWrapper.length === 1, 
        'Exactly one scrollable wrapper should exist in overflow section');
    
    // Verify overflow CSS is applied
    assert.equal(scrollableWrapper.css('overflow'), 'auto', 
        'Scrollable wrapper should have overflow:auto CSS property');
});

// ============================================================================
// Test Case 2: Testing scrollOverflow:false does not create wrappers
// Verifies that scrollOverflow disabled leaves sections unchanged
// ============================================================================
QUnit.test('Testing scrollOverflow:false does not create scrollable wrappers', function(assert) {
    var id = '#fullpage-scrolloverflow';
    
    // Initialize with scrollOverflow disabled
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollOverflow: false,  // Disable scroll overflow handling
        scrollingSpeed: 50
    }));
    
    // Verify no scrollable wrappers were created
    assert.equal($(id).find(SCROLLABLE_SEL).length, 0, 
        'With scrollOverflow disabled: No scrollable wrappers should be created');
    
    // Verify sections maintain original structure
    assert.ok($(id).find(SECTION_SEL).eq(0).find('.box').length > 0, 
        'Original section content structure should be preserved');
});

// ============================================================================
// Test Case 3: Testing scroll within section before moving to next
// Verifies that user must scroll to bottom of section before advancing
// ============================================================================
QUnit.test('Testing scroll within overflow section before section change', function(assert) {
    var id = '#fullpage-scrolloverflow';
    
    // Initialize with scrollOverflow enabled
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollOverflow: true,
        scrollingSpeed: 50
    }));
    
    var done = assert.async(1);
    
    // Verify initial state: first section active
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
        'Initial state: Section 1 should be active');
    
    // Get scrollable wrapper
    var scrollableWrapper = $(id).find(SECTION_SEL).eq(0).find(SCROLLABLE_SEL).first();
    
    // Verify scrollable wrapper is at top initially
    assert.equal(scrollableWrapper.scrollTop(), 0, 
        'Initial state: Scrollable wrapper should be scrolled to top');
    
    // Simulate mousewheel down while at top of scrollable content
    // This should scroll within the section, NOT move to next section
    simulateMouseWheel('down');
    
    setTimeout(function() {
        // Verify still on first section (didn't advance)
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
            'After scroll down: Should still be on section 1 (scrolling within section)');
        
        // Verify scrollable wrapper scrolled down
        assert.ok(scrollableWrapper.scrollTop() > 0, 
            'After scroll down: Scrollable wrapper should have scrolled down within section');
        
        done();
    }, 150);
});

// ============================================================================
// Test Case 4: Testing section change after scrolling to bottom
// Verifies that reaching bottom of scrollable section allows advancing
// ============================================================================
QUnit.test('Testing section change after scrolling to bottom of overflow section', function(assert) {
    var id = '#fullpage-scrolloverflow';
    
    // Initialize with scrollOverflow enabled
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollOverflow: true,
        scrollingSpeed: 50
    }));
    
    var windowHeight = $(window).height();
    var done = assert.async(1);
    
    // Get scrollable wrapper
    var scrollableWrapper = $(id).find(SECTION_SEL).eq(0).find(SCROLLABLE_SEL).first();
    
    // Manually scroll to bottom of scrollable content
    // This simulates user scrolling through all content in section
    var maxScroll = scrollableWrapper[0].scrollHeight - scrollableWrapper[0].clientHeight;
    scrollableWrapper.scrollTop(maxScroll);
    
    // Verify scrolled to bottom
    assert.ok(scrollableWrapper.scrollTop() >= maxScroll - 5, 
        'Setup: Scrollable wrapper should be scrolled to bottom');
    
    // Now simulate mousewheel down at bottom of section
    // This should trigger section change
    simulateMouseWheel('down');
    
    setTimeout(function() {
        // Verify moved to next section
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 
            'After scroll at bottom: Should move to section 2');
        
        // Verify transform changed
        assert.deepEqual(getTransform(FP.test.translate3d), 
            ['0', `${-(windowHeight*1)}`, '0'], 
            `After section change: Transform should be at section 2 [0, ${-(windowHeight*1)}, 0]`);
        
        done();
    }, 150);
});

// ============================================================================
// Test Case 5: Testing scrollOverflowReset option
// Verifies that scrollOverflowReset resets scroll position when leaving section
// ============================================================================
QUnit.test('Testing scrollOverflowReset:true resets scroll position', function(assert) {
    var id = '#fullpage-scrolloverflow';
    
    // Initialize with scrollOverflowReset enabled
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollOverflow: true,
        scrollOverflowReset: true,  // Reset scroll position when leaving section
        scrollingSpeed: 50
    }));
    
    var done = assert.async(1);
    
    // Get scrollable wrapper for first section
    var scrollableWrapper = $(id).find(SECTION_SEL).eq(0).find(SCROLLABLE_SEL).first();
    
    // Scroll down within first section
    scrollableWrapper.scrollTop(500);
    
    // Verify scrolled down
    assert.ok(scrollableWrapper.scrollTop() > 400, 
        'Setup: Section 1 should be scrolled down');
    
    // Move to next section
    FP.moveSectionDown();
    
    setTimeout(function() {
        // Move back to first section
        FP.moveSectionUp();
        
        setTimeout(function() {
            // Verify scroll position was reset to top
            assert.equal(scrollableWrapper.scrollTop(), 0, 
                'With scrollOverflowReset: Scroll position should be reset to top when returning to section');
            
            done();
        }, 150);
    }, 150);
});

// ============================================================================
// Test Case 6: Testing scrollOverflowReset:false maintains scroll position
// Verifies that scroll position is maintained when returning to section
// ============================================================================
QUnit.test('Testing scrollOverflowReset:false maintains scroll position', function(assert) {
    var id = '#fullpage-scrolloverflow';
    
    // Initialize with scrollOverflowReset disabled
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollOverflow: true,
        scrollOverflowReset: false,  // Maintain scroll position
        scrollingSpeed: 50
    }));
    
    var done = assert.async(1);
    
    // Get scrollable wrapper
    var scrollableWrapper = $(id).find(SECTION_SEL).eq(0).find(SCROLLABLE_SEL).first();
    
    // Scroll down within first section
    var scrollPosition = 500;
    scrollableWrapper.scrollTop(scrollPosition);
    
    // Verify scrolled down
    assert.equal(scrollableWrapper.scrollTop(), scrollPosition, 
        'Setup: Section 1 should be scrolled to 500px');
    
    // Move to next section
    FP.moveSectionDown();
    
    setTimeout(function() {
        // Move back to first section
        FP.moveSectionUp();
        
        setTimeout(function() {
            // Verify scroll position was maintained
            assert.equal(scrollableWrapper.scrollTop(), scrollPosition, 
                'Without scrollOverflowReset: Scroll position should be maintained at 500px');
            
            done();
        }, 150);
    }, 150);
});