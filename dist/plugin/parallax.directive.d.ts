import { ElementRef, Renderer, OnInit, AfterViewInit, OnDestroy } from 'angular2/core';
import { ScrollSpyService } from '../index';
export interface ScrollSpyParallaxOptions {
    spyId?: string;
    horizontal?: boolean;
    cssKey?: string;
    property?: string;
    ratio?: number;
    initValue?: number;
    max?: number;
    min?: number;
    unit?: string;
    axis?: string;
}
export declare class ScrollSpyParallaxDirective implements OnInit, AfterViewInit, OnDestroy {
    private renderer;
    private elRef;
    private scrollSpy;
    options: ScrollSpyParallaxOptions;
    scrollSpyParallaxDisabled: boolean;
    private defaultOptions;
    private _scrollStream;
    private el;
    private currentScrollPosition;
    private cssValue;
    private isSpecialVal;
    constructor(renderer: Renderer, elRef: ElementRef, scrollSpy: ScrollSpyService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    evaluateScroll(): void;
    ngOnDestroy(): void;
}
