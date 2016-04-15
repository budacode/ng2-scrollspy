"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var ReplaySubject_1 = require('rxjs/subject/ReplaySubject');
var service_1 = require('./service');
var ScrollSpyElementDirective = (function () {
    function ScrollSpyElementDirective(scrollSpy) {
        this.scrollSpy = scrollSpy;
        this._scrollStream = new ReplaySubject_1.ReplaySubject(1);
    }
    ScrollSpyElementDirective.prototype.ngOnInit = function () {
        if (!this.scrollSpyId) {
            return console.warn('ScrollSpy: Missing id.');
        }
        if (!!this.scrollSpy.getObservable(this.scrollSpyId)) {
            console.warn('ScrollSpy: duplicate id "' + this.scrollSpyId + '". Instance will be skipped!');
        }
        else {
            this.scrollSpy.setObservable(this.scrollSpyId, this._scrollStream.distinctUntilChanged());
        }
    };
    ScrollSpyElementDirective.prototype.ngOnDestroy = function () {
        this.scrollSpy.deleteObservable(this.scrollSpyId);
    };
    ScrollSpyElementDirective.prototype.onScroll = function ($event) {
        this._scrollStream.next($event);
    };
    __decorate([
        core_1.Input('scrollSpyElement'), 
        __metadata('design:type', String)
    ], ScrollSpyElementDirective.prototype, "scrollSpyId", void 0);
    ScrollSpyElementDirective = __decorate([
        core_1.Injectable(),
        core_1.Directive({
            selector: '[scrollSpyElement]',
            host: {
                '(scroll)': 'onScroll($event)'
            }
        }), 
        __metadata('design:paramtypes', [service_1.ScrollSpyService])
    ], ScrollSpyElementDirective);
    return ScrollSpyElementDirective;
}());
exports.ScrollSpyElementDirective = ScrollSpyElementDirective;
