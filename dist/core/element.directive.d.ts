import { OnInit, OnDestroy } from 'angular2/core';
import { ScrollSpyService } from './service';
export declare class ScrollSpyElementDirective implements OnInit, OnDestroy {
    private scrollSpy;
    scrollSpyId: string;
    private _scrollStream;
    constructor(scrollSpy: ScrollSpyService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onScroll($event: any): void;
}
