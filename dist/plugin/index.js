"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var index_service_1 = require('./index.service');
var index_directive_1 = require('./index.directive');
var index_render_directive_1 = require('./index.render.directive');
__export(require('./index.service'));
__export(require('./index.directive'));
__export(require('./index.render.directive'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [index_directive_1.ScrollSpyIndexDirective, index_render_directive_1.ScrollSpyIndexRenderDirective],
    providers: [index_service_1.ScrollSpyIndexService]
};
