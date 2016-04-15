[![npm version](https://img.shields.io/npm/v/ng2-scrollspy.svg?style=flat)](https://www.npmjs.com/package/ng2-scrollspy)
[![Build Status](https://img.shields.io/travis/JonnyBGod/ng2-scrollspy/master.svg?style=flat)](https://travis-ci.org/JonnyBGod/ng2-scrollspy)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/bafd522f82da48fda8bb25bee689b32f)](https://www.codacy.com/app/JonnyBGod/ng2-scrollspy)
[![Coverage Status](https://coveralls.io/repos/JonnyBGod/ng2-scrollspy/badge.svg?branch=master&service=github)](https://coveralls.io/github/JonnyBGod/ng2-scrollspy?branch=master)
[![devDependency Status](https://david-dm.org/JonnyBGod/ng2-scrollspy/dev-status.svg)](https://david-dm.org/JonnyBGod/ng2-scrollspy#info=devDependencies)

[![Github Releases](https://img.shields.io/github/downloads/JonnyBGod/ng2-scrollspy/latest/total.svg)]()

You can use this angular2 service to spy scroll events from ```window``` or any other scrollable element.

This library implements an service to collect observables from scroll spy directives. It can be used to create you own components or if you prefer use on of the following components that leverage this library functionality to accomplish different behaviors:

* **index**: create and display and index from content inside and element.
* **affix**: make element follow scroll inside its parent.
* **parallax**: create very simple parallax effects based on scroll.
* **infinite**: infinite scroll

## Installation
First you need to install the npm module:
```sh
npm install ng2-scrollspy --save
```

If you use SystemJS to load your files, you might have to update your config with this if you don't use `defaultJSExtensions: true`:
```js
System.config({
	packages: {
		"/ng2-scrollspy": {"defaultExtension": "js"}
	}
});
```

Finally, you can use ng2-scrollspy in your Angular 2 project.
It is recommended to instantiate `ScrollSpyService` in the bootstrap of your application and to never add it to the "providers" property of your components, this way you will keep it as a singleton.
If you add it to the "providers" property of a component it will instantiate a new instance of the service that won't be initialized.

```js
import {ScrollSpyService} from 'ng2-scrollspy';

bootstrap(AppComponent, [
	ScrollSpyService
]);
```

## Using

#### Spy window scroll

Use ```ScrollSpyDirective``` to spy on window.

```js
import {Component, View, Injectable, AfterViewInit} from 'angular2/core';
import {ScrollSpyDirective, ScrollSpyService} from 'ng2-scrollspy';

@Injectable()
@Component({
	selector: 'app'
})
@View({
	template: `<div scrollSpy></div>`,
	directives: [ScrollSpyDirective]
})
export class AppComponent implements AfterViewInit {
	constructor(scrollSpyService: ScrollSpyService) {
		this.scrollSpyService = scrollSpyService;
	}

	ngAfterViewInit() {
		this.scrollSpyService.getObservable('window').subscribe((e: any) => {
			console.log('ScrollSpy::window: ', e);
		});
	}
}
```

#### Spy any element scroll

Use ```ScrollSpyElementDirective``` to spy on any element. You must git a unique id to each instance.

```js
import {Component, View, Injectable, AfterViewInit} from 'angular2/core';
import {ScrollSpyElementDirective, ScrollSpyService} from 'ng2-scrollspy';

@Injectable()
@Component({
	selector: 'yourComponent'
})
@View({
	template: `
	<div scrollSpyElement="test" style="max-height: 100px; overflow: auto;">
		<div style="height: 500px;"></div>
	</div>`,
	directives: [ScrollSpyElementDirective]
})
export class YourComponent implements 
 {
	constructor(scrollSpyService: ScrollSpyService) {
		this.scrollSpyService = scrollSpyService;
	}

	ngAfterViewInit() {
		this.scrollSpyService.getObservable('test').subscribe((e: any) => {
			console.log('ScrollSpy::test: ', e);
		});
	}
}
```

Because ```ScrollSpyService``` is a singleton, you can get any ScrollSpy observable from anywhere withing your application.

# TODO:

* Documentation/examples webpage
* Unit tests
* Test all browsers
	- [x] Chrome
	- [ ] Firefox
	- [ ] Safari
	- [ ] IE
	- [ ] edge
	- [ ] opera
	- [ ] Mobile

## License

[MIT](LICENSE)
