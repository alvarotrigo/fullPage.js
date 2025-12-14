
export type Item = {
    anchor: string | number,
    index: number,
    item: HTMLElement,
    isFirst: boolean,
    isLast: boolean
};

type DragAndMove = boolean | "vertical" | "horizontal" | "fingersonly" | "mouseonly";
type FadingEffect = boolean | "sections" | "slides";
type InterlockedSlides = boolean | Array<number>;
type bigSectionsDestination = "top" | "bottom" | null;
type Parallax = boolean | "sections" | "slides";
type DropEffect = boolean | "sections" | "slides";
type WaterEffect = boolean | "sections" | "slides";
type SkipIntermediateItems = boolean | "sections" | "slides";
type Trigger = "slideArrow" | "verticalNav" | "horizontalNav" | "keydown" | "wheel" | "menu";
type ScrollOverflowReset = boolean | "slides" | "sections";
type Effects = boolean | string;
type WaterEffectOptions = {
    animateContent: boolean
    animateOnMouseMove: boolean
};
type CardsOptions = {
    perspective: number
    fadeContent: boolean
    fadeBackground: boolean
};
type ParallaxOptions = {
    percentage?: number
    property?: "translate" | "background"
    type?: "reveal" | "cover"
};

type EffectsOptions = {
    scale?: {
        past?: number,
        future?: number
    },
    offset?: {
        past?: number,
        future?: number
    },
    opacity?: {
        past?: number,
        future?: number
    },
    delay?: {
        past?: number,
        future?: number
    },
    visibility?: {
        past?: string
    },
    rotate?: {
        past?: string,
        future?: string
    },
    transformOrigin?: {
        past?: string,
        future?: string
    },
    perspective?: number,
    zIndex?: string,
    skew?: number,
    useShadow?: boolean,
    shadow?: string
};

type Credits = {
    enabled?: boolean,
    label?: string,
    position?: "left" | "right"
}

export interface fullpageOptions {
    anchors?: string[]
    animateAnchor?: boolean
    autoScrolling?: boolean
    bigSectionsDestination?: bigSectionsDestination //top, bottom, null
    continuousHorizontal?: boolean
    continuousVertical?: boolean
    controlArrowColor?: string
    controlArrows?: boolean
    controlArrowsHTML?: string[]
    css3?: boolean
    dragAndMove?: DragAndMove
    easing?: string
    easingcss3?: string
    fadingEffect?: FadingEffect
    fitToSection?: boolean
    fitToSectionDelay?: number
    fixedElements?: string // '#header, .footer'
    hybrid?: boolean
    interlockedSlides?: InterlockedSlides
    keyboardScrolling?: boolean
    lazyLoading?: boolean
    lazyLoadThreshold?: number
    observer?: boolean
    licenseKey?: string
    credits: Credits
    lockAnchors?: boolean
    loopBottom?: boolean
    loopHorizontal?: boolean
    loopTop?: boolean
    menu?: string
    navigation?: boolean
    navigationPosition?: string
    navigationTooltips?: string[] // ['firstSlide', 'secondSlide']
    normalScrollElementTouchThreshold?: number
    normalScrollElements?: string // '#element1, .element2',
    offsetSections?: boolean
    paddingBottom?: string
    paddingTop?: string
    parallax?: Parallax // true, false, 'sections', 'slides'
    parallaxOptions?: ParallaxOptions
    effects?: Effects
    effectsOptions?: EffectsOptions
    recordHistory?: boolean
    resetSliders?: boolean
    responsive?: number
    responsiveHeight?: number
    responsiveSlides?: boolean
    responsiveWidth?: number
    scrollBar?: boolean
    scrollHorizontally?: boolean
    scrollOverflow?: boolean
    scrollOverflowMacStyle?: boolean
    scrollOverflowHandler?: any
    scrollOverflowReset?: ScrollOverflowReset
    skipIntermediateItems?: SkipIntermediateItems
    scrollingSpeed?: number
    dropEffect?: DropEffect;
    dropEffectOptions?: any;
    waterEffect?: WaterEffect;
    waterEffectOptions?: WaterEffectOptions;
    cards?: boolean;
    cardsOptions?: CardsOptions;
    sectionSelector?: string
    sectionsColor?: string[]
    showActiveTooltip?: boolean
    slideSelector?: string
    slidesNavPosition?: "top" | "bottom"
    slidesNavigation?: boolean
    touchSensitivity?: number
    verticalCentered?: boolean

    /* callback and events */
    afterLoad?(origin: Item, destination: Item, direction: string, trigger: Trigger): void
    afterRender?(): void
    afterResize?(width: number, height: number): void
    afterReBuild?(): void
    afterResponsive?(isResponsive: boolean): void
    afterSlideLoad?(section: Item, origin: Item, destination: Item, direction: string, trigger: Trigger): void
    onLeave?(origin: Item, destination: Item, direction: string, trigger: Trigger): void
    beforeLeave?(origin: Item, destination: Item, direction: string, trigger: Trigger): void
    onSlideLeave?(section: Item, origin: Item, destination: Item, direction: string, trigger: Trigger): void
    onScrollOverflow?(section: Item, slide: Item, position: number, direction: string): void

    /* keys for extensions */
    fadingEffectKey?: string
    responsiveSlidesKey?: string
    continuousHorizontalKey?: string
    interlockedSlidesKey?: string
    scrollHorizontallyKey?: string
    resetSlidersKey?: string
    offsetSectionsKey?: string
    dragAndMoveKey?: string
    parallaxKey?: string
    scrollOverflowResetKey?: string
    effectsKey?: string
    cardsKey?: string
    waterEffectKey?: string
    dropEffectKey?: string
    /* end key sections */
}

export interface fullpageApi {
    continuousHorizontal: boolean
    dragAndMove: DragAndMove
    fadingEffect: FadingEffect
    interlockedSlides: InterlockedSlides
    offsetSections: boolean
    parallax: Parallax
    resetSliders: boolean
    responsiveSlides: boolean
    scrollHorizontally: boolean
    scrollOverflowReset: ScrollOverflowReset
    version: string
    destroy(type?: string): void
    fitToSection(): void
    getActiveSection(): Item
    getActiveSlide(): Item
    getFullpageData(): any
    landscapeScroll(e?: any, t?: any, n?: any): void
    getScrollY(): number
    getScrollX(): number
    moveSectionDown(): void
    moveSectionUp(): void
    moveSlideLeft(): void
    moveSlideRight(): void
    moveTo(section: string | number, slide?: string | number): void
    reBuild(isResizing?: boolean): void
    setAllowScrolling(value: boolean, directions?: string): void
    setAutoScrolling(value: boolean, type?: string): void
    setFitToSection(value: boolean, type?: string): void
    setKeyboardScrolling(value: boolean, directions?: string): void
    setLockAnchors(value: boolean): void
    setMouseWheelScrolling(value: boolean): void
    setRecordHistory(value: boolean, type?: string): void
    setResponsive(value: boolean): void
    setScrollingSpeed(value: number, type?: string): void
    silentMoveTo(sectionAnchor: string | number, slideAnchor?: string | number): void
    shared: {
        afterRenderActions(): void
    }
    test: {
        left: number[]
        top: string
        translate3d: string
        translate3dH: string[]
        setAutoScrolling(value: boolean, type?: string): void
        options: fullpageOptions
    }
}

interface FullPageProps extends fullpageOptions {
    licenseKey?: string
    render: (comp: { state: any; fullpageApi: fullpageApi }) => React.ReactElement | void
    debug?: boolean
    pluginWrapper?: () => void
}

class ReactFullpage extends React.Component<FullPageProps>{ }

interface WrapperProps {
    children: React.ReactNode
}

namespace ReactFullpage {
    function Wrapper(props: WrapperProps): React.ReactElement
}