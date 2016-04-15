import { ElementRef, EventEmitter, OnInit, AfterViewInit, OnDestroy } from 'angular2/core';
import { ScrollSpyService } from '../index';
export interface ScrollSpyInfiniteOptions {
    spyId?: string;
    distanceRatio?: number;
}
export declare class ScrollSpyInfiniteDirective implements OnInit, AfterViewInit, OnDestroy {
    private elRef;
    private scrollSpy;
    options: ScrollSpyInfiniteOptions;
    scrollSpyInfiniteDisabled: boolean;
    scrollSpyInfiniteEvent: EventEmitter<any>;
    private defaultOptions;
    private _scrollStream;
    private el;
    private currentScrollElement;
    constructor(elRef: ElementRef, scrollSpy: ScrollSpyService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    evaluateScroll(): void;
    ngOnDestroy(): void;
}
