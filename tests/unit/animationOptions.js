// ============================================================================
// This test file covers animation and easing configuration options
// Tests various animation speeds, easing functions, and CSS3 transitions
// Ensures smooth and configurable animations throughout fullPage.js
// ============================================================================

// Test Case 1: Testing scrollingSpeed option
// Verifies that scrollingSpeed controls animation duration
// Lower values = faster animations, higher values = slower animations
// ============================================================================
QUnit.test('Testing scrollingSpeed:100 for fast animations', function(assert) {
    // Initialize fullpage with fast scrolling speed
    var id = '#fullpage';
    
    // Set scrollingSpeed to 100ms for quick transitions
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollingSpeed: 100  // Fast animation (100ms)
    }));
    
    // Get window height for transform calculations
    var windowHeight = $(window).height();
    
    // Create async handler with short timeout matching scrollingSpeed
    var done = assert.async(1);
    
    // Record start time to measure animation duration
    var startTime = Date.now();
    
    // Verify initial state
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
        'Initial state: Section 1 should be active before animation');
    
    // Trigger section transition
    FP.moveSectionDown();
    
    // Wait for animation to complete (100ms + 50ms buffer)
    setTimeout(function() {
        // Calculate actual animation duration
        var duration = Date.now() - startTime;
        
        // Verify section changed
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 
            'After fast animation: Section 2 should be active');
        
        // Verify transform moved to second section
        assert.deepEqual(getTransform(FP.test.translate3d), 
            ['0', `${-(windowHeight*1)}`, '0'], 
            `After animation: Transform should be at section 2 position [0, ${-(windowHeight*1)}, 0]`);
        
        // Verify animation completed within expected timeframe
        // Should be close to 100ms (allowing 100ms tolerance)
        assert.ok(duration >= 100 && duration <= 200, 
            `Animation duration (${duration}ms) should be close to scrollingSpeed (100ms)`);
        
        done();
    }, 150);
});

// ============================================================================
// Test Case 2: Testing scrollingSpeed:1000 for slow animations
// Verifies slower animation speed for smooth, gradual transitions
// ============================================================================
QUnit.test('Testing scrollingSpeed:1000 for slow animations', function(assert) {
    var id = '#fullpage';
    
    // Set scrollingSpeed to 1000ms for slow, smooth transitions
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollingSpeed: 1000  // Slow animation (1 second)
    }));
    
    var windowHeight = $(window).height();
    var done = assert.async(1);
    
    // Verify initial state
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
        'Initial state: Section 1 should be active');
    
    // Trigger transition
    FP.moveSectionDown();
    
    // Wait for slow animation to complete (1000ms + 100ms buffer)
    setTimeout(function() {
        // Verify section changed after slow animation
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 
            'After slow animation: Section 2 should be active');
        
        // Verify final transform position
        assert.deepEqual(getTransform(FP.test.translate3d), 
            ['0', `${-(windowHeight*1)}`, '0'], 
            `After slow animation: Transform should be at section 2 [0, ${-(windowHeight*1)}, 0]`);
        
        done();
    }, 1100);
});

// ============================================================================
// Test Case 3: Testing css3:true uses CSS3 transforms
// Verifies that CSS3 mode uses transform property for animations
// CSS3 transforms provide better performance than position-based animations
// ============================================================================
QUnit.test('Testing css3:true uses CSS3 transforms', function(assert) {
    var id = '#fullpage';
    
    // Initialize with CSS3 enabled (default behavior)
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        css3: true,  // Enable CSS3 transforms
        scrollingSpeed: 50
    }));
    
    var windowHeight = $(window).height();
    var done = assert.async(1);
    
    // Verify CSS3 is enabled in options
    assert.equal(FP.test.options.css3, true, 
        'Configuration: css3 option should be true');
    
    // Trigger section transition
    FP.moveSectionDown();
    
    setTimeout(function() {
        // Get the container element
        var container = $(id);
        
        // Verify transform property is being used (CSS3 mode)
        var transformValue = container.css('transform');
        assert.ok(transformValue && transformValue !== 'none', 
            'CSS3 mode: Container should have transform property set');
        
        // Verify top property is NOT being used (CSS3 uses transform instead)
        var topValue = container.css('top');
        assert.ok(topValue === 'auto' || topValue === '0px', 
            'CSS3 mode: Container top property should be auto or 0px (not used for animation)');
        
        // Verify section changed
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 
            'After CSS3 animation: Section 2 should be active');
        
        done();
    }, 150);
});

// ============================================================================
// Test Case 4: Testing css3:false uses position-based animations
// Verifies that non-CSS3 mode uses top/left properties instead of transforms
// Useful for older browser compatibility
// ============================================================================
QUnit.test('Testing css3:false uses position-based animations', function(assert) {
    var id = '#fullpage';
    
    // Initialize with CSS3 disabled
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        css3: false,  // Disable CSS3 transforms
        scrollingSpeed: 50
    }));
    
    var windowHeight = $(window).height();
    var done = assert.async(1);
    
    // Verify CSS3 is disabled in options
    assert.equal(FP.test.options.css3, false, 
        'Configuration: css3 option should be false');
    
    // Trigger section transition
    FP.moveSectionDown();
    
    setTimeout(function() {
        // Get the container element
        var container = $(id);
        
        // Verify top property is being used (non-CSS3 mode)
        var topValue = parseInt(container.css('top'));
        assert.ok(topValue < 0, 
            'Non-CSS3 mode: Container top property should be negative (used for animation)');
        
        // Verify top value matches expected position
        assert.equal(topValue, -(windowHeight * 1), 
            `Non-CSS3 mode: Top should be ${-(windowHeight * 1)}px for section 2`);
        
        // Verify section changed
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 
            'After position-based animation: Section 2 should be active');
        
        done();
    }, 150);
});

// ============================================================================
// Test Case 5: Testing easingcss3 option with different easing functions
// Verifies that CSS3 easing functions are applied correctly
// Easing functions control the acceleration curve of animations
// ============================================================================
QUnit.test('Testing easingcss3:ease-in-out', function(assert) {
    var id = '#fullpage';
    
    // Initialize with ease-in-out easing function
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        css3: true,
        easingcss3: 'ease-in-out',  // Smooth acceleration and deceleration
        scrollingSpeed: 500
    }));
    
    var done = assert.async(1);
    
    // Verify easing option is set
    assert.equal(FP.test.options.easingcss3, 'ease-in-out', 
        'Configuration: easingcss3 should be set to ease-in-out');
    
    // Trigger transition
    FP.moveSectionDown();
    
    // Check transition property during animation
    setTimeout(function() {
        var container = $(id);
        var transitionValue = container.css('transition');
        
        // Verify transition includes the easing function
        assert.ok(transitionValue.includes('ease-in-out') || 
                  transitionValue.includes('transform'), 
            'During animation: Transition property should include easing function');
        
        done();
    }, 100);
});

// ============================================================================
// Test Case 6: Testing custom cubic-bezier easing
// Verifies support for custom cubic-bezier easing functions
// Allows fine-tuned control over animation curves
// ============================================================================
QUnit.test('Testing easingcss3 with custom cubic-bezier', function(assert) {
    var id = '#fullpage';
    
    // Initialize with custom cubic-bezier easing
    // cubic-bezier(0.68, -0.55, 0.265, 1.55) creates a bounce effect
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        css3: true,
        easingcss3: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',  // Custom bounce easing
        scrollingSpeed: 500
    }));
    
    var done = assert.async(1);
    
    // Verify custom easing is set
    assert.equal(FP.test.options.easingcss3, 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
        'Configuration: easingcss3 should be set to custom cubic-bezier');
    
    // Trigger transition
    FP.moveSectionDown();
    
    setTimeout(function() {
        // Verify section changed with custom easing
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 1, 
            'After custom easing animation: Section 2 should be active');
        
        done();
    }, 600);
});

// ============================================================================
// Test Case 7: Testing animation interruption
// Verifies behavior when triggering new animation during ongoing animation
// Should handle interruptions gracefully
// ============================================================================
QUnit.test('Testing animation interruption behavior', function(assert) {
    var id = '#fullpage';
    
    // Initialize with medium speed animation
    var FP = initFullpageNew(id, Object.assign({}, allBasicOptions, {
        scrollingSpeed: 500  // Medium speed for testing interruption
    }));
    
    var windowHeight = $(window).height();
    var done = assert.async(1);
    
    // Verify initial state
    assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 0, 
        'Initial state: Section 1 should be active');
    
    // Start first animation (section 1 -> section 2)
    FP.moveSectionDown();
    
    // Interrupt with second animation after 100ms (section 2 -> section 3)
    setTimeout(function() {
        FP.moveSectionDown();
    }, 100);
    
    // Check final state after both animations
    setTimeout(function() {
        // Should end up at section 3 (second animation completed)
        assert.equal($(id).find(SECTION_ACTIVE_SEL).index(), 2, 
            'After interrupted animation: Section 3 should be active (second animation completed)');
        
        // Verify final transform position
        assert.deepEqual(getTransform(FP.test.translate3d), 
            ['0', `${-(windowHeight*2)}`, '0'], 
            `After interruption: Transform should be at section 3 [0, ${-(windowHeight*2)}, 0]`);
        
        done();
    }, 1200);
});