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
var index_1 = require('../index');
var ScrollSpyAffixDirective = (function () {
    function ScrollSpyAffixDirective(DOM, elRef, scrollSpy) {
        this.DOM = DOM;
        this.elRef = elRef;
        this.scrollSpy = scrollSpy;
        this.defaultOptions = {
            topMargin: 0,
            bottomMargin: 0
        };
        this.affixTop = false;
        this.affixBottom = false;
        this.el = elRef.nativeElement;
    }
    ScrollSpyAffixDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.options) {
            this.options = {};
        }
        this.options = Object.assign(this.defaultOptions, this.options);
        this.parentEl = this.DOM.parentElement(this.el);
        this.elementTop = this.DOM.getProperty(this.parentEl, 'scrollTop');
        this.elementBottom = this.elementTop + this.DOM.getBoundingClientRect(this.parentEl).height;
        if (!!this.scrollSpy.getObservable('window')) {
            this._scrollStream = this.scrollSpy.getObservable('window').delay(0).subscribe(function (e) {
                _this.update(e.target.scrollingElement.scrollTop);
            });
        }
    };
    ScrollSpyAffixDirective.prototype.update = function (currentTop) {
        if (currentTop >= this.elementTop + this.options.topMargin) {
            if (currentTop > this.elementBottom - this.options.bottomMargin - this.DOM.getBoundingClientRect(this.el).height) {
                this.affixTop = false;
                this.affixBottom = true;
            }
            else {
                this.affixTop = true;
                this.affixBottom = false;
            }
        }
        else {
            this.affixTop = false;
        }
    };
    ScrollSpyAffixDirective.prototype.ngOnDestroy = function () {
        this._scrollStream.unsubscribe();
    };
    __decorate([
        core_1.Input('scrollSpyAffix'), 
        __metadata('design:type', Object)
    ], ScrollSpyAffixDirective.prototype, "options", void 0);
    ScrollSpyAffixDirective = __decorate([
        core_1.Injectable(),
        core_1.Directive({
            selector: '[scrollSpyAffix]',
            providers: [
                browser_1.BrowserDomAdapter
            ],
            host: {
                '[class.affixTop]': 'affixTop',
                '[class.affixBottom]': 'affixBottom'
            }
        }), 
        __metadata('design:paramtypes', [browser_1.BrowserDomAdapter, core_1.ElementRef, index_1.ScrollSpyService])
    ], ScrollSpyAffixDirective);
    return ScrollSpyAffixDirective;
}());
exports.ScrollSpyAffixDirective = ScrollSpyAffixDirective;
