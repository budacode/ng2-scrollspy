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
var browser_1 = require('angular2/platform/browser');
var index_service_1 = require('./index.service');
var ScrollSpyIndexDirective = (function () {
    function ScrollSpyIndexDirective(DOM, elRef, scrollSpyIndex) {
        this.DOM = DOM;
        this.elRef = elRef;
        this.scrollSpyIndex = scrollSpyIndex;
        this.defaultOptions = {
            selector: 'anchor'
        };
        this.el = elRef.nativeElement;
    }
    ScrollSpyIndexDirective.prototype.ngOnInit = function () {
        if (!this.options) {
            this.options = {};
        }
        if (!this.options.id) {
            return console.warn('ScrollSpyIndex: Missing id.');
        }
        this.options = Object.assign(this.defaultOptions, this.options);
    };
    ScrollSpyIndexDirective.prototype.ngAfterViewInit = function () {
        this.scrollSpyIndex.setIndex(this.options.id, this.DOM.getElementsByClassName(this.el, this.options.selector));
    };
    ScrollSpyIndexDirective.prototype.ngOnDestroy = function () {
        this.scrollSpyIndex.deleteIndex(this.options.id);
    };
    __decorate([
        core_1.Input('scrollSpyIndex'), 
        __metadata('design:type', Object)
    ], ScrollSpyIndexDirective.prototype, "options", void 0);
    ScrollSpyIndexDirective = __decorate([
        core_1.Injectable(),
        core_1.Directive({
            selector: '[scrollSpyIndex]',
            providers: [
                browser_1.BrowserDomAdapter
            ]
        }), 
        __metadata('design:paramtypes', [browser_1.BrowserDomAdapter, core_1.ElementRef, index_service_1.ScrollSpyIndexService])
    ], ScrollSpyIndexDirective);
    return ScrollSpyIndexDirective;
}());
exports.ScrollSpyIndexDirective = ScrollSpyIndexDirective;
