/// <reference path="../../../immutable/dist/immutable.d.ts" />
import { EventEmitter } from 'angular2/core';
export declare class ScrollSpyService {
    changes: EventEmitter<any>;
    private observables;
    getObservable(key: string): any;
    setObservable(key: string, observable: any): void;
    deleteObservable(key: string): void;
}
