"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var service_1 = require('./core/service');
var window_directive_1 = require('./core/window.directive');
var element_directive_1 = require('./core/element.directive');
__export(require('./core/service'));
__export(require('./core/window.directive'));
__export(require('./core/element.directive'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [window_directive_1.ScrollSpyDirective, element_directive_1.ScrollSpyElementDirective],
    providers: [service_1.ScrollSpyService]
};
