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
var immutable_1 = require('immutable');
var ScrollSpyIndexService = (function () {
    function ScrollSpyIndexService() {
        this.changes = new core_1.EventEmitter();
        this.indexes = immutable_1.Map({});
    }
    ScrollSpyIndexService.prototype.getIndex = function (key) {
        return this.indexes.get(key);
    };
    ScrollSpyIndexService.prototype.setIndex = function (key, index) {
        this.indexes = this.indexes.set(key, index);
        this.changes.emit({ index: key, change: 'set' });
    };
    ScrollSpyIndexService.prototype.deleteIndex = function (key) {
        this.indexes = this.indexes.delete(key);
        this.changes.emit({ index: key, change: 'delete' });
    };
    ScrollSpyIndexService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ScrollSpyIndexService);
    return ScrollSpyIndexService;
}());
exports.ScrollSpyIndexService = ScrollSpyIndexService;
