/// <reference path="../../node_modules/immutable/dist/immutable.d.ts" />
import { EventEmitter } from 'angular2/core';
export declare class ScrollSpyIndexService {
    changes: EventEmitter<any>;
    private indexes;
    getIndex(key: string): any;
    setIndex(key: string, index: any): void;
    deleteIndex(key: string): void;
}
