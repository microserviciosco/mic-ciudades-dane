(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mic-ciudades-dane', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['mic-ciudades-dane'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var MicCiudadesDaneService = /** @class */ (function () {
        function MicCiudadesDaneService() {
        }
        return MicCiudadesDaneService;
    }());
    MicCiudadesDaneService.ɵfac = function MicCiudadesDaneService_Factory(t) { return new (t || MicCiudadesDaneService)(); };
    MicCiudadesDaneService.ɵprov = i0.ɵɵdefineInjectable({ token: MicCiudadesDaneService, factory: MicCiudadesDaneService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MicCiudadesDaneService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var MicCiudadesDaneComponent = /** @class */ (function () {
        function MicCiudadesDaneComponent() {
        }
        MicCiudadesDaneComponent.prototype.ngOnInit = function () {
        };
        return MicCiudadesDaneComponent;
    }());
    MicCiudadesDaneComponent.ɵfac = function MicCiudadesDaneComponent_Factory(t) { return new (t || MicCiudadesDaneComponent)(); };
    MicCiudadesDaneComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MicCiudadesDaneComponent, selectors: [["mic-mic-ciudades-dane"]], decls: 2, vars: 0, template: function MicCiudadesDaneComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " mic-ciudades-dane works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MicCiudadesDaneComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mic-mic-ciudades-dane',
                        template: "\n    <p>\n      mic-ciudades-dane works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var MicCiudadesDaneModule = /** @class */ (function () {
        function MicCiudadesDaneModule() {
        }
        return MicCiudadesDaneModule;
    }());
    MicCiudadesDaneModule.ɵmod = i0.ɵɵdefineNgModule({ type: MicCiudadesDaneModule });
    MicCiudadesDaneModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MicCiudadesDaneModule_Factory(t) { return new (t || MicCiudadesDaneModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MicCiudadesDaneModule, { declarations: [MicCiudadesDaneComponent], exports: [MicCiudadesDaneComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MicCiudadesDaneModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [MicCiudadesDaneComponent],
                        imports: [],
                        exports: [MicCiudadesDaneComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of mic-ciudades-dane
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MicCiudadesDaneComponent = MicCiudadesDaneComponent;
    exports.MicCiudadesDaneModule = MicCiudadesDaneModule;
    exports.MicCiudadesDaneService = MicCiudadesDaneService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mic-ciudades-dane.umd.js.map
