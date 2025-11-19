// ============================================================================
// This test file covers touch event handling for mobile devices
// Testing swipe gestures for vertical and horizontal navigation
// Ensures proper touch interaction with fullPage.js on mobile devices
// ============================================================================

// Test Case 1: Testing touch swipe down gesture to move to next section
// This test simulates a user swiping down on a touch device
// Expected behavior: The page should scroll to the next section
// ============================================================================
QUnit.test('Testing touch swipe down to move to next section', function(assert) {
    // Initialize the fullpage container with the basic test layout
    // Using #fullpage which contains 4 sections for testing
    var id = '#fullpage';
    
    // Create fullpage instance with touch enabled (default behavior)
    // scrollingSpeed set to 50ms for faster test execution
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollingSpeed: 50,
        touchSensitivity: 5  // Lower value = more sensitive to touch
    }));
    
    // Get the window height to calculate expected transform values
    // This is needed to verify the section has moved the correct distance
    var windowHeight = $(window).height();
    
    // Create async test handler to wait for animation completion
    // We need 1 async callback for the swipe down action
    var done = assert.async(1);
    
    // Verify initial state: first section should be active
    // Index 0 represents the first section in the DOM
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
        'Initial state: We expect section 1 to be active before touch interaction');
    
    // Verify initial transform position is at origin
    // Transform should be [0, 0, 0] when on first section
    assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], 
        'Initial state: We expect sections transformation to be at origin [0, 0, 0]');
    
    // Get the fullpage container element for touch event simulation
    // Touch events need to be dispatched on the actual DOM element
    var container = document.querySelector(id);
    
    // Simulate touch start event at position (100, 100)
    // This represents the user placing their finger on the screen
    var touchStartEvent = new TouchEvent('touchstart', {
        bubbles: true,
        cancelable: true,
        touches: [{
            pageX: 100,
            pageY: 100,
            clientX: 100,
            clientY: 100
        }]
    });
    
    // Dispatch the touch start event to the container
    // This initiates the touch interaction sequence
    container.dispatchEvent(touchStartEvent);
    
    // Simulate touch move event to position (100, 50)
    // Moving from Y:100 to Y:50 represents a downward swipe
    // The negative Y movement triggers scroll to next section
    var touchMoveEvent = new TouchEvent('touchmove', {
        bubbles: true,
        cancelable: true,
        touches: [{
            pageX: 100,
            pageY: 50,  // Moved up 50px = swipe down gesture
            clientX: 100,
            clientY: 50
        }]
    });
    
    // Dispatch the touch move event
    // This should trigger the section transition
    container.dispatchEvent(touchMoveEvent);
    
    // Simulate touch end event to complete the gesture
    // This finalizes the swipe interaction
    var touchEndEvent = new TouchEvent('touchend', {
        bubbles: true,
        cancelable: true
    });
    
    // Dispatch touch end event
    container.dispatchEvent(touchEndEvent);
    
    // Wait for animation to complete (100ms buffer)
    // fullPage.js needs time to animate the section transition
    setTimeout(function() {
        // Verify that section 2 is now active after swipe
        // Index 1 represents the second section
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 
            'After swipe down: We expect section 2 to be active');
        
        // Verify the transform has moved down by one section height
        // Y value should be negative (moving up in transform space)
        assert.deepEqual(getTransform(FP.test.translate3d), 
            ['0', `${-(windowHeight*1)}`, '0'], 
            `After swipe down: We expect sections transformation to be [0, ${-(windowHeight*1)}, 0]`);
        
        // Mark async test as complete
        done();
    }, 150);
});

// ============================================================================
// Test Case 2: Testing touch swipe up gesture to move to previous section
// This test simulates a user swiping up on a touch device
// Expected behavior: The page should scroll to the previous section
// ============================================================================
QUnit.test('Testing touch swipe up to move to previous section', function(assert) {
    // Initialize with second section active for upward swipe testing
    // Using #fullpage-2nd-active-section which has section 2 pre-activated
    var id = '#fullpage-2nd-active-section';
    
    // Create fullpage instance with touch enabled
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollingSpeed: 50
    }));
    
    // Get window height for transform calculations
    var windowHeight = $(window).height();
    
    // Create async test handler
    var done = assert.async(1);
    
    // Verify initial state: second section should be active
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 
        'Initial state: We expect section 2 to be active');
    
    // Verify initial transform is at second section position
    assert.deepEqual(getTransform(FP.test.translate3d), 
        ['0', `${-(windowHeight*1)}`, '0'], 
        `Initial state: We expect transformation at section 2 position [0, ${-(windowHeight*1)}, 0]`);
    
    // Get container element for touch events
    var container = document.querySelector(id);
    
    // Simulate touch start at position (100, 100)
    var touchStartEvent = new TouchEvent('touchstart', {
        bubbles: true,
        cancelable: true,
        touches: [{
            pageX: 100,
            pageY: 100,
            clientX: 100,
            clientY: 100
        }]
    });
    container.dispatchEvent(touchStartEvent);
    
    // Simulate touch move upward (Y increases = swipe up)
    // Moving from Y:100 to Y:200 represents an upward swipe
    var touchMoveEvent = new TouchEvent('touchmove', {
        bubbles: true,
        cancelable: true,
        touches: [{
            pageX: 100,
            pageY: 200,  // Moved down 100px = swipe up gesture
            clientX: 100,
            clientY: 200
        }]
    });
    container.dispatchEvent(touchMoveEvent);
    
    // Complete the touch gesture
    var touchEndEvent = new TouchEvent('touchend', {
        bubbles: true,
        cancelable: true
    });
    container.dispatchEvent(touchEndEvent);
    
    // Wait for animation completion
    setTimeout(function() {
        // Verify section 1 is now active
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
            'After swipe up: We expect section 1 to be active');
        
        // Verify transform returned to origin
        assert.deepEqual(getTransform(FP.test.translate3d), 
            ['0', '0', '0'], 
            'After swipe up: We expect sections transformation to be at origin [0, 0, 0]');
        
        done();
    }, 150);
});

// ============================================================================
// Test Case 3: Testing horizontal touch swipe for slides
// This test simulates swiping left/right to navigate between slides
// Expected behavior: Slides should transition horizontally
// ============================================================================
QUnit.test('Testing touch swipe right to move to next slide', function(assert) {
    // Use layout with slides for horizontal navigation testing
    var id = '#fullpage-moveSlideRight';
    
    // Initialize fullpage with slides
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollingSpeed: 50
    }));
    
    // Create async handler
    var done = assert.async(1);
    
    // Verify initial state: first slide should be active
    assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 0, 
        'Initial state: We expect slide 1 to be active');
    
    // Get the active section for slide transform verification
    var activeSection = $(id).find(SECTION_ACTIVE_SEL);
    
    // Get container for touch events
    var container = document.querySelector(id);
    
    // Simulate touch start at position (200, 100)
    var touchStartEvent = new TouchEvent('touchstart', {
        bubbles: true,
        cancelable: true,
        touches: [{
            pageX: 200,
            pageY: 100,
            clientX: 200,
            clientY: 100
        }]
    });
    container.dispatchEvent(touchStartEvent);
    
    // Simulate horizontal swipe left (X decreases = swipe left = next slide)
    // Moving from X:200 to X:100 represents a left swipe
    var touchMoveEvent = new TouchEvent('touchmove', {
        bubbles: true,
        cancelable: true,
        touches: [{
            pageX: 100,  // Moved left 100px = swipe left gesture
            pageY: 100,
            clientX: 100,
            clientY: 100
        }]
    });
    container.dispatchEvent(touchMoveEvent);
    
    // Complete touch gesture
    var touchEndEvent = new TouchEvent('touchend', {
        bubbles: true,
        cancelable: true
    });
    container.dispatchEvent(touchEndEvent);
    
    // Wait for slide animation
    setTimeout(function() {
        // Verify second slide is now active
        assert.equal($(id).find(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL).index(), 1, 
            'After swipe left: We expect slide 2 to be active');
        
        // Verify horizontal transform for slides
        var slideTransform = getTransform(FP.test.translate3dH[0]);
        assert.deepEqual(slideTransform, ['-1000', '0', '0'], 
            'After swipe left: We expect slides transformation to be [-1000, 0, 0]');
        
        done();
    }, 150);
});

// ============================================================================
// Test Case 4: Testing touch sensitivity option
// Verifies that touchSensitivity option affects swipe detection
// Higher values require longer swipe distance
// ============================================================================
QUnit.test('Testing touchSensitivity option with low sensitivity', function(assert) {
    var id = '#fullpage';
    
    // Set high touchSensitivity value (less sensitive, needs longer swipe)
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollingSpeed: 50,
        touchSensitivity: 15  // Higher value = less sensitive
    }));
    
    var done = assert.async(1);
    
    // Verify initial state
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
        'Initial state: Section 1 should be active');
    
    var container = document.querySelector(id);
    
    // Simulate a short swipe (should not trigger with low sensitivity)
    var touchStartEvent = new TouchEvent('touchstart', {
        bubbles: true,
        cancelable: true,
        touches: [{ pageX: 100, pageY: 100, clientX: 100, clientY: 100 }]
    });
    container.dispatchEvent(touchStartEvent);
    
    // Short swipe distance (only 20px)
    var touchMoveEvent = new TouchEvent('touchmove', {
        bubbles: true,
        cancelable: true,
        touches: [{ pageX: 100, pageY: 80, clientX: 100, clientY: 80 }]
    });
    container.dispatchEvent(touchMoveEvent);
    
    var touchEndEvent = new TouchEvent('touchend', {
        bubbles: true,
        cancelable: true
    });
    container.dispatchEvent(touchEndEvent);
    
    // Wait and verify section did NOT change (swipe too short)
    setTimeout(function() {
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
            'After short swipe with low sensitivity: Section 1 should still be active (swipe ignored)');
        
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], 
            'After short swipe: Transform should remain at origin');
        
        done();
    }, 150);
});

// ============================================================================
// Test Case 5: Testing disabled touch scrolling
// Verifies that touch events are ignored when touch is disabled
// ============================================================================
QUnit.test('Testing touch:false disables touch scrolling', function(assert) {
    var id = '#fullpage';
    
    // Initialize with touch disabled
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollingSpeed: 50,
        touch: false  // Disable touch events
    }));
    
    var done = assert.async(1);
    
    // Verify initial state
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
        'Initial state: Section 1 should be active');
    
    var container = document.querySelector(id);
    
    // Attempt to swipe (should be ignored)
    var touchStartEvent = new TouchEvent('touchstart', {
        bubbles: true,
        cancelable: true,
        touches: [{ pageX: 100, pageY: 100, clientX: 100, clientY: 100 }]
    });
    container.dispatchEvent(touchStartEvent);
    
    var touchMoveEvent = new TouchEvent('touchmove', {
        bubbles: true,
        cancelable: true,
        touches: [{ pageX: 100, pageY: 50, clientX: 100, clientY: 50 }]
    });
    container.dispatchEvent(touchMoveEvent);
    
    var touchEndEvent = new TouchEvent('touchend', {
        bubbles: true,
        cancelable: true
    });
    container.dispatchEvent(touchEndEvent);
    
    // Verify no movement occurred
    setTimeout(function() {
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
            'With touch disabled: Section 1 should still be active (touch ignored)');
        
        assert.deepEqual(getTransform(FP.test.translate3d), ['0', '0', '0'], 
            'With touch disabled: Transform should remain at origin');
        
        done();
    }, 150);
});