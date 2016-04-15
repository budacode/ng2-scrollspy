import { ScrollSpyService } from './core/service';
import { ScrollSpyDirective } from './core/window.directive';
import { ScrollSpyElementDirective } from './core/element.directive';
export * from './core/service';
export * from './core/window.directive';
export * from './core/element.directive';
declare var _default: {
    directives: (typeof ScrollSpyDirective | typeof ScrollSpyElementDirective)[];
    providers: typeof ScrollSpyService[];
};
export default _default;
