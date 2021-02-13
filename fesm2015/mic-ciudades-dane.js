import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class MicCiudadesDaneService {
    constructor() { }
}
MicCiudadesDaneService.ɵfac = function MicCiudadesDaneService_Factory(t) { return new (t || MicCiudadesDaneService)(); };
MicCiudadesDaneService.ɵprov = ɵɵdefineInjectable({ token: MicCiudadesDaneService, factory: MicCiudadesDaneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MicCiudadesDaneService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class MicCiudadesDaneComponent {
    constructor() { }
    ngOnInit() {
    }
}
MicCiudadesDaneComponent.ɵfac = function MicCiudadesDaneComponent_Factory(t) { return new (t || MicCiudadesDaneComponent)(); };
MicCiudadesDaneComponent.ɵcmp = ɵɵdefineComponent({ type: MicCiudadesDaneComponent, selectors: [["mic-mic-ciudades-dane"]], decls: 2, vars: 0, template: function MicCiudadesDaneComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " mic-ciudades-dane works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MicCiudadesDaneComponent, [{
        type: Component,
        args: [{
                selector: 'mic-mic-ciudades-dane',
                template: `
    <p>
      mic-ciudades-dane works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class MicCiudadesDaneModule {
}
MicCiudadesDaneModule.ɵmod = ɵɵdefineNgModule({ type: MicCiudadesDaneModule });
MicCiudadesDaneModule.ɵinj = ɵɵdefineInjector({ factory: function MicCiudadesDaneModule_Factory(t) { return new (t || MicCiudadesDaneModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MicCiudadesDaneModule, { declarations: [MicCiudadesDaneComponent], exports: [MicCiudadesDaneComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MicCiudadesDaneModule, [{
        type: NgModule,
        args: [{
                declarations: [MicCiudadesDaneComponent],
                imports: [],
                exports: [MicCiudadesDaneComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of mic-ciudades-dane
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MicCiudadesDaneComponent, MicCiudadesDaneModule, MicCiudadesDaneService };
//# sourceMappingURL=mic-ciudades-dane.js.map
