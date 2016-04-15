import { ElementRef, DynamicComponentLoader, OnInit, AfterViewInit, OnDestroy } from 'angular2/core';
import { BrowserDomAdapter } from 'angular2/platform/browser';
import { ScrollSpyService } from '../index';
import { ScrollSpyIndexService } from './index.service';
export interface ScrollSpyIndexRenderOptions {
    id?: string;
    spyId?: string;
    topMargin?: number;
}
export declare class ScrollSpyIndexRenderDirective implements OnInit, AfterViewInit, OnDestroy {
    private DOM;
    private loader;
    private elRef;
    private scrollSpy;
    private scrollSpyIndex;
    options: ScrollSpyIndexRenderOptions;
    private defaultOptions;
    private _changeStream;
    private _scrollStream;
    private el;
    private _children;
    private stack;
    private parentStack;
    private lastItem;
    private currentScrollPosition;
    private itemsToHighlight;
    constructor(DOM: BrowserDomAdapter, loader: DynamicComponentLoader, elRef: ElementRef, scrollSpy: ScrollSpyService, scrollSpyIndex: ScrollSpyIndexService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    update(): void;
    itemConstruct(data: any): any;
    calculateHighlight(): void;
    getItemsToHighlight(): Array<string>;
    compileToComponent(template: string, directives: Array<any>, itemsToHighlight: any): any;
    removeChildren(): void;
    ngOnDestroy(): void;
}
