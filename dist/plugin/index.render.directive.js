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
var index_service_1 = require('./index.service');
var ScrollSpyIndexRenderDirective = (function () {
    function ScrollSpyIndexRenderDirective(DOM, loader, elRef, scrollSpy, scrollSpyIndex) {
        this.DOM = DOM;
        this.loader = loader;
        this.elRef = elRef;
        this.scrollSpy = scrollSpy;
        this.scrollSpyIndex = scrollSpyIndex;
        this.defaultOptions = {
            spyId: 'window',
            topMargin: 0
        };
        this._children = [];
        this.stack = [];
        this.parentStack = [];
        this.itemsToHighlight = [];
        this.el = elRef.nativeElement;
    }
    ScrollSpyIndexRenderDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.options) {
            this.options = {};
        }
        if (!this.options.id) {
            return console.warn('ScrollSpyIndex: Missing id.');
        }
        this.options = Object.assign(this.defaultOptions, this.options);
        this._changeStream = this.scrollSpyIndex.changes.subscribe(function (e) {
            if (e.index === _this.options.id) {
                if (e.change === 'delete') {
                    _this.update();
                }
                else if (e.change === 'set') {
                    _this.update();
                }
            }
        });
    };
    ScrollSpyIndexRenderDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!!this.scrollSpy.getObservable(this.options.spyId)) {
            this._scrollStream = this.scrollSpy.getObservable(this.options.spyId).subscribe(function (e) {
                if (_this.options.spyId === 'window') {
                    _this.currentScrollPosition = e.target.scrollingElement.scrollTop;
                }
                else {
                    _this.currentScrollPosition = e.target.scrollTop;
                }
                _this.calculateHighlight();
            });
        }
        else {
            return console.warn('ScrollSpyIndexRender: No ScrollSpy observable for id "' + this.options.spyId + '"');
        }
    };
    ScrollSpyIndexRenderDirective.prototype.update = function () {
        var _this = this;
        var items = this.scrollSpyIndex.getIndex(this.options.id) || [];
        var markup = '<ul class="nav menu">';
        for (var i = 0; i < items.length; i++) {
            var item = this.itemConstruct(items[i]);
            if (item.push) {
                markup += '<ul class="nav menu">';
            }
            else if (item.pop) {
                for (var j = 0; j < item.pop; j++) {
                    markup += '</li></ul>';
                }
            }
            else if (i !== 0) {
                markup += '</li>';
            }
            markup += '<li [class.active]="highlight(\'' + item.link + '\')" pagemenuspy="' + item.link + '" parent="' + item.parent + '">';
            markup += '<a href="#' + item.link + '">';
            markup += item.text;
            markup += '</a>';
        }
        markup += '</ul>';
        this.removeChildren();
        this.loader.loadIntoLocation(this.compileToComponent(markup, [], function () { return _this.getItemsToHighlight(); }), this.elRef, 'container').then(function (ref) {
            _this._children.push(ref);
        });
        setTimeout(function () {
            _this.calculateHighlight();
        });
    };
    ScrollSpyIndexRenderDirective.prototype.itemConstruct = function (data) {
        var item = {
            link: data.id,
            text: data.textContent || data.innerText,
            parent: ''
        };
        var level = data.tagName;
        for (var i = 0; i < data.classList.length; i++) {
            level += ',' + data.classList[i];
        }
        var stacksize = this.stack.length;
        if (stacksize === 0) {
            this.stack.push(level);
        }
        else if (level !== this.stack[stacksize - 1]) {
            for (var j = stacksize - 1; j >= 0; j--) {
                if (level === this.stack[j]) {
                    break;
                }
            }
            if (j < 0) {
                this.stack.push(level);
                item.push = true;
                this.parentStack.push(this.lastItem);
            }
            else {
                item.pop = stacksize - 1 - j;
                while (this.stack.length > j + 1) {
                    this.stack.pop();
                    this.parentStack.pop();
                }
            }
        }
        if (this.parentStack.length > 0) {
            item.parent = this.parentStack[this.parentStack.length - 1];
        }
        this.lastItem = item.link;
        return item;
    };
    ScrollSpyIndexRenderDirective.prototype.calculateHighlight = function () {
        var items = this.scrollSpyIndex.getIndex(this.options.id);
        this.itemsToHighlight = [];
        if (!items || !items.length) {
            return;
        }
        var highlightItem;
        for (var i = items.length - 1; i >= 0; i--) {
            if (this.currentScrollPosition - this.DOM.getProperty(items[i], 'offsetTop') - this.options.topMargin >= 0) {
                highlightItem = items[i].id;
                break;
            }
        }
        if (!highlightItem) {
            highlightItem = items[0].id;
        }
        this.itemsToHighlight.push(highlightItem);
        while (!!highlightItem) {
            var item = this.DOM.querySelector(this.el, '[pagemenuspy=' + highlightItem + ']');
            if (!!item) {
                var parent = this.DOM.getAttribute(item, 'parent');
                if (parent) {
                    highlightItem = parent;
                    this.itemsToHighlight.push(highlightItem);
                }
                else {
                    highlightItem = null;
                }
            }
            else {
                highlightItem = null;
            }
        }
    };
    ScrollSpyIndexRenderDirective.prototype.getItemsToHighlight = function () {
        return this.itemsToHighlight;
    };
    ScrollSpyIndexRenderDirective.prototype.compileToComponent = function (template, directives, itemsToHighlight) {
        var FakeComponent = (function () {
            function FakeComponent() {
            }
            FakeComponent.prototype.highlight = function (id) {
                return itemsToHighlight().indexOf(id) !== -1;
            };
            FakeComponent = __decorate([
                core_1.Injectable(),
                core_1.Component({
                    selector: 'scrollSpyMenu',
                    template: template,
                    directives: directives
                }), 
                __metadata('design:paramtypes', [])
            ], FakeComponent);
            return FakeComponent;
        }());
        ;
        return FakeComponent;
    };
    ScrollSpyIndexRenderDirective.prototype.removeChildren = function () {
        this._children.forEach(function (cmp) { return cmp.dispose(); });
        this._children = [];
    };
    ScrollSpyIndexRenderDirective.prototype.ngOnDestroy = function () {
        this._changeStream.unsubscribe();
        this._scrollStream.unsubscribe();
    };
    __decorate([
        core_1.Input('scrollSpyIndexRender'), 
        __metadata('design:type', Object)
    ], ScrollSpyIndexRenderDirective.prototype, "options", void 0);
    ScrollSpyIndexRenderDirective = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: '[scrollSpyIndexRender]',
            providers: [
                browser_1.BrowserDomAdapter
            ],
            template: "<div #container></div>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [browser_1.BrowserDomAdapter, core_1.DynamicComponentLoader, core_1.ElementRef, index_1.ScrollSpyService, index_service_1.ScrollSpyIndexService])
    ], ScrollSpyIndexRenderDirective);
    return ScrollSpyIndexRenderDirective;
}());
exports.ScrollSpyIndexRenderDirective = ScrollSpyIndexRenderDirective;
