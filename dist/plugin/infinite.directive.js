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
var index_1 = require('../index');
var ScrollSpyInfiniteDirective = (function () {
    function ScrollSpyInfiniteDirective(elRef, scrollSpy) {
        this.elRef = elRef;
        this.scrollSpy = scrollSpy;
        this.scrollSpyInfiniteEvent = new core_1.EventEmitter();
        this.defaultOptions = {
            spyId: 'window',
            distanceRatio: 1
        };
        this.el = elRef.nativeElement;
    }
    ScrollSpyInfiniteDirective.prototype.ngOnInit = function () {
        if (!this.options) {
            this.options = {};
        }
        this.options = Object.assign(this.defaultOptions, this.options);
        if (this.scrollSpyInfiniteDisabled === undefined) {
            this.scrollSpyInfiniteDisabled = false;
        }
    };
    ScrollSpyInfiniteDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!!this.scrollSpy.getObservable(this.options.spyId)) {
            this._scrollStream = this.scrollSpy.getObservable(this.options.spyId).throttleTime(200).subscribe(function (e) {
                if (_this.options.spyId === 'window') {
                    _this.currentScrollElement = e.target;
                }
                else {
                    _this.currentScrollElement = e.target;
                }
                _this.evaluateScroll();
            });
        }
        else {
            return console.warn('ScrollSpyInfinite: No ScrollSpy observable for id "' + this.options.spyId + '"');
        }
    };
    ScrollSpyInfiniteDirective.prototype.evaluateScroll = function () {
        if (!this.scrollSpyInfiniteDisabled) {
            if (this.options.spyId === 'window') {
                if (this.currentScrollElement.scrollingElement.scrollHeight - this.currentScrollElement.scrollingElement.scrollTop - this.currentScrollElement.documentElement.clientHeight <= this.currentScrollElement.documentElement.clientHeight * this.options.distanceRatio + 1) {
                    this.scrollSpyInfiniteEvent.next({});
                }
            }
            else {
                if (this.currentScrollElement.scrollHeight - this.currentScrollElement.scrollTop - this.currentScrollElement.offsetHeight <= this.currentScrollElement.offsetHeight * this.options.distanceRatio + 1) {
                    this.scrollSpyInfiniteEvent.next({});
                }
            }
        }
    };
    ScrollSpyInfiniteDirective.prototype.ngOnDestroy = function () {
        this._scrollStream.unsubscribe();
    };
    __decorate([
        core_1.Input('scrollSpyInfinite'), 
        __metadata('design:type', Object)
    ], ScrollSpyInfiniteDirective.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ScrollSpyInfiniteDirective.prototype, "scrollSpyInfiniteDisabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollSpyInfiniteDirective.prototype, "scrollSpyInfiniteEvent", void 0);
    ScrollSpyInfiniteDirective = __decorate([
        core_1.Injectable(),
        core_1.Directive({
            selector: '[scrollSpyInfinite]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, index_1.ScrollSpyService])
    ], ScrollSpyInfiniteDirective);
    return ScrollSpyInfiniteDirective;
}());
exports.ScrollSpyInfiniteDirective = ScrollSpyInfiniteDirective;
