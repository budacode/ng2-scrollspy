import { OnInit } from 'angular2/core';
import { ScrollSpyService } from './service';
export declare class ScrollSpyDirective implements OnInit {
    private scrollSpy;
    private _scrollStream;
    constructor(scrollSpy: ScrollSpyService);
    ngOnInit(): void;
    onScroll($event: any): void;
}
