import { ElementRef, OnInit, AfterViewInit, OnDestroy } from 'angular2/core';
import { BrowserDomAdapter } from 'angular2/platform/browser';
import { ScrollSpyIndexService } from './index.service';
export interface ScrollSpyIndexOptions {
    id?: string;
    selector?: string;
}
export declare class ScrollSpyIndexDirective implements OnInit, AfterViewInit, OnDestroy {
    private DOM;
    private elRef;
    private scrollSpyIndex;
    options: ScrollSpyIndexOptions;
    private defaultOptions;
    private el;
    constructor(DOM: BrowserDomAdapter, elRef: ElementRef, scrollSpyIndex: ScrollSpyIndexService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
