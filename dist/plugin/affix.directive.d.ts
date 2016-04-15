import { ElementRef, AfterViewInit, OnDestroy } from 'angular2/core';
import { BrowserDomAdapter } from 'angular2/platform/browser';
import { ScrollSpyService } from '../index';
export interface ScrollSpyAffixOptions {
    topMargin?: number;
    bottomMargin?: number;
}
export declare class ScrollSpyAffixDirective implements AfterViewInit, OnDestroy {
    private DOM;
    private elRef;
    private scrollSpy;
    options: ScrollSpyAffixOptions;
    private defaultOptions;
    private _scrollStream;
    private el;
    private parentEl;
    private elementTop;
    private elementBottom;
    private affixTop;
    private affixBottom;
    constructor(DOM: BrowserDomAdapter, elRef: ElementRef, scrollSpy: ScrollSpyService);
    ngAfterViewInit(): void;
    update(currentTop: number): void;
    ngOnDestroy(): void;
}
