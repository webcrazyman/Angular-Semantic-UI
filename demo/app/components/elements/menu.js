System.register(["angular2/core", "ng-semantic", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng_semantic_1, router_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent() {
                    this.items = [];
                    this.labeledIcons = [];
                    this.items = [{
                            "title": "Home",
                            "link": "Home",
                            "icon": "home"
                        }, {
                            "title": "About Us",
                            "link": "#/"
                        }, {
                            "title": "Contact",
                            "link": "#/"
                        }];
                    this.labeledIcons = [{
                            "title": "Games",
                            "link": "Home",
                            "icon": "gamepad"
                        }, {
                            "title": "Chanel",
                            "link": "Chanel",
                            "icon": "video camera"
                        }, {
                            "title": "Videos",
                            "link": "Videos",
                            "icon": "video play"
                        }];
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        selector: "menu-cp",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Menu</h1>\n        <p>Semantic UI menu component <i class=\"icon external\"></i>\n        <a href=\"http://semantic-ui.com/collections/menu.html\" target=\"_blank\">Semantic UI Menu</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo inverted ( with sidebar )</h4>\n    <sm-menu title=\"Angular2\" class=\"ui menu inverted teal\" logo=\"/assets/images/semantic.png\">\n        <a sm-item href=\"#/elements/menu\" *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n\n        <sm-menu class=\"ui menu right secondary icon\">\n            <a sm-item href=\"#/elements/menu\" icon=\"sidebar big\" class=\"item\" sm-dir-sidebar=\"right\"></a>\n            <sm-sidebar class=\"right vertical inverted sidebar labeled menu teal huge\">\n                <a class=\"item\">\n                    <i class=\"home icon\"></i>\n                    Home\n                </a>\n                <a class=\"item\">\n                    <i class=\"block layout icon\"></i>\n                    Topics\n                </a>\n                <a class=\"item\">\n                    <i class=\"smile icon\"></i>\n                    Friends\n                </a>\n            </sm-sidebar>\n        </sm-menu>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"8\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-menu title=\"Angular2\" class=\"ui menu inverted teal\" logo=\"/assets/images/semantic.png\">\n    <a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n\n    <sm-menu class=\"ui menu right secondary\">\n        <a sm-item icon=\"sidebar big\" class=\"item\"></a>\n    </sm-menu>\n</sm-menu>\n</textarea>\n        </div>\n      </div>\n\n    <h4 class=\"ui header\">Demo three item</h4>\n    <sm-menu title=\"\" class=\"ui three item menu\">\n        <a sm-item *ngFor=\"#item of ['Editorials', 'Reviews', 'Upcoming Events']\" class=\"item\">{{item}}</a>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Demo pointing</h4>\n    <sm-menu title=\"\" class=\"ui three item menu pointing\">\n        <a sm-item *ngFor=\"#item of ['Editorials', 'Reviews', 'Upcoming Events']; #i = index\"\n        class=\"item\" [ngClass]=\"{'active': i == 1}\" >{{item}}</a>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Labeled fluid icon menu</h4>\n    <sm-menu title=\"Labeled Icon\" class=\"ui fluid three item labeled icon menu inverted blue\">\n        <a sm-item *ngFor=\"#item of labeledIcons\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n    </sm-menu>    \n    \n    <h4 class=\"ui header\">Demo vertical</h4>\n    <sm-menu title=\"Vertical\" class=\"ui menu vertical\">\n        <a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-menu title=\"Vertical\" class=\"ui menu vertical\">\n    <a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n</sm-menu>\n</textarea>\n        </div>\n      </div>\n\n      <h4 class=\"ui header\">Demo secondary</h4>\n    <sm-menu title=\"Secondary\" class=\"ui menu secondary\">\n        <a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n    </sm-menu>\n\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-menu title=\"Secondary\" class=\"ui menu secondary\">\n    <a sm-item *ngFor=\"#item of items\" [icon]=\"item.icon\" class=\"item\">{{item?.title}}</a>\n</sm-menu>\n</textarea>\n        </div>\n      </div>\n\n      <br/><br/>\n      Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/menu.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/menu.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOEdBO2dCQUlJO29CQUhBLFVBQUssR0FBZSxFQUFFLENBQUM7b0JBQ3ZCLGlCQUFZLEdBQWUsRUFBRSxDQUFDO29CQUcxQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7NEJBQ1YsT0FBTyxFQUFFLE1BQU07NEJBQ2YsTUFBTSxFQUFFLE1BQU07NEJBQ2QsTUFBTSxFQUFFLE1BQU07eUJBQ2pCLEVBQUU7NEJBQ0ssT0FBTyxFQUFFLFVBQVU7NEJBQ25CLE1BQU0sRUFBRSxJQUFJO3lCQUNmLEVBQUU7NEJBQ0MsT0FBTyxFQUFFLFNBQVM7NEJBQ2xCLE1BQU0sRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQztvQkFFUCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7NEJBQ2pCLE9BQU8sRUFBRSxPQUFPOzRCQUNoQixNQUFNLEVBQUUsTUFBTTs0QkFDZCxNQUFNLEVBQUUsU0FBUzt5QkFDcEIsRUFBRTs0QkFDSyxPQUFPLEVBQUUsUUFBUTs0QkFDakIsTUFBTSxFQUFFLFFBQVE7NEJBQ2hCLE1BQU0sRUFBRSxjQUFjO3lCQUN6QixFQUFFOzRCQUNDLE9BQU8sRUFBRSxRQUFROzRCQUNqQixNQUFNLEVBQUUsUUFBUTs0QkFDaEIsTUFBTSxFQUFFLFlBQVk7eUJBQ3ZCLENBQUMsQ0FBQztnQkFFWCxDQUFDO2dCQXpJTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLGlDQUFtQixFQUFFLGlDQUFtQixFQUFFLDBCQUFpQixDQUFDO3dCQUN6RSxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLGkySUFvR2I7cUJBQ0EsQ0FBQzs7aUNBQUE7Z0JBa0NGLG9CQUFDO1lBQUQsQ0FBQyxBQWhDRCxJQWdDQztZQWhDRCx5Q0FnQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWNcIjtcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBzZWxlY3RvcjogXCJtZW51LWNwXCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cdDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPk1lbnU8L2gxPlxyXG4gICAgICAgIDxwPlNlbWFudGljIFVJIG1lbnUgY29tcG9uZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9tZW51Lmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBNZW51PC9hPjwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XHJcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGludmVydGVkICggd2l0aCBzaWRlYmFyICk8L2g0PlxyXG4gICAgPHNtLW1lbnUgdGl0bGU9XCJBbmd1bGFyMlwiIGNsYXNzPVwidWkgbWVudSBpbnZlcnRlZCB0ZWFsXCIgbG9nbz1cIi9hc3NldHMvaW1hZ2VzL3NlbWFudGljLnBuZ1wiPlxyXG4gICAgICAgIDxhIHNtLWl0ZW0gaHJlZj1cIiMvZWxlbWVudHMvbWVudVwiICpuZ0Zvcj1cIiNpdGVtIG9mIGl0ZW1zXCIgW2ljb25dPVwiaXRlbS5pY29uXCIgY2xhc3M9XCJpdGVtXCI+e3tpdGVtPy50aXRsZX19PC9hPlxyXG5cclxuICAgICAgICA8c20tbWVudSBjbGFzcz1cInVpIG1lbnUgcmlnaHQgc2Vjb25kYXJ5IGljb25cIj5cclxuICAgICAgICAgICAgPGEgc20taXRlbSBocmVmPVwiIy9lbGVtZW50cy9tZW51XCIgaWNvbj1cInNpZGViYXIgYmlnXCIgY2xhc3M9XCJpdGVtXCIgc20tZGlyLXNpZGViYXI9XCJyaWdodFwiPjwvYT5cclxuICAgICAgICAgICAgPHNtLXNpZGViYXIgY2xhc3M9XCJyaWdodCB2ZXJ0aWNhbCBpbnZlcnRlZCBzaWRlYmFyIGxhYmVsZWQgbWVudSB0ZWFsIGh1Z2VcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaG9tZSBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmxvY2sgbGF5b3V0IGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgVG9waWNzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInNtaWxlIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgRnJpZW5kc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3NtLXNpZGViYXI+XHJcbiAgICAgICAgPC9zbS1tZW51PlxyXG4gICAgPC9zbS1tZW51PlxyXG5cclxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxyXG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuPHRleHRhcmVhIHJvd3M9XCI4XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxyXG48c20tbWVudSB0aXRsZT1cIkFuZ3VsYXIyXCIgY2xhc3M9XCJ1aSBtZW51IGludmVydGVkIHRlYWxcIiBsb2dvPVwiL2Fzc2V0cy9pbWFnZXMvc2VtYW50aWMucG5nXCI+XHJcbiAgICA8YSBzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIGl0ZW1zXCIgW2ljb25dPVwiaXRlbS5pY29uXCIgY2xhc3M9XCJpdGVtXCI+e3tpdGVtPy50aXRsZX19PC9hPlxyXG5cclxuICAgIDxzbS1tZW51IGNsYXNzPVwidWkgbWVudSByaWdodCBzZWNvbmRhcnlcIj5cclxuICAgICAgICA8YSBzbS1pdGVtIGljb249XCJzaWRlYmFyIGJpZ1wiIGNsYXNzPVwiaXRlbVwiPjwvYT5cclxuICAgIDwvc20tbWVudT5cclxuPC9zbS1tZW51PlxyXG48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHRocmVlIGl0ZW08L2g0PlxyXG4gICAgPHNtLW1lbnUgdGl0bGU9XCJcIiBjbGFzcz1cInVpIHRocmVlIGl0ZW0gbWVudVwiPlxyXG4gICAgICAgIDxhIHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgWydFZGl0b3JpYWxzJywgJ1Jldmlld3MnLCAnVXBjb21pbmcgRXZlbnRzJ11cIiBjbGFzcz1cIml0ZW1cIj57e2l0ZW19fTwvYT5cclxuICAgIDwvc20tbWVudT5cclxuXHJcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIHBvaW50aW5nPC9oND5cclxuICAgIDxzbS1tZW51IHRpdGxlPVwiXCIgY2xhc3M9XCJ1aSB0aHJlZSBpdGVtIG1lbnUgcG9pbnRpbmdcIj5cclxuICAgICAgICA8YSBzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIFsnRWRpdG9yaWFscycsICdSZXZpZXdzJywgJ1VwY29taW5nIEV2ZW50cyddOyAjaSA9IGluZGV4XCJcclxuICAgICAgICBjbGFzcz1cIml0ZW1cIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IGkgPT0gMX1cIiA+e3tpdGVtfX08L2E+XHJcbiAgICA8L3NtLW1lbnU+XHJcblxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+TGFiZWxlZCBmbHVpZCBpY29uIG1lbnU8L2g0PlxyXG4gICAgPHNtLW1lbnUgdGl0bGU9XCJMYWJlbGVkIEljb25cIiBjbGFzcz1cInVpIGZsdWlkIHRocmVlIGl0ZW0gbGFiZWxlZCBpY29uIG1lbnUgaW52ZXJ0ZWQgYmx1ZVwiPlxyXG4gICAgICAgIDxhIHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgbGFiZWxlZEljb25zXCIgW2ljb25dPVwiaXRlbS5pY29uXCIgY2xhc3M9XCJpdGVtXCI+e3tpdGVtPy50aXRsZX19PC9hPlxyXG4gICAgPC9zbS1tZW51PiAgICBcclxuICAgIFxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyB2ZXJ0aWNhbDwvaDQ+XHJcbiAgICA8c20tbWVudSB0aXRsZT1cIlZlcnRpY2FsXCIgY2xhc3M9XCJ1aSBtZW51IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgPGEgc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiIFtpY29uXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbT8udGl0bGV9fTwvYT5cclxuICAgIDwvc20tbWVudT5cclxuXHJcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cclxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbjx0ZXh0YXJlYSByb3dzPVwiNFwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cclxuPHNtLW1lbnUgdGl0bGU9XCJWZXJ0aWNhbFwiIGNsYXNzPVwidWkgbWVudSB2ZXJ0aWNhbFwiPlxyXG4gICAgPGEgc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiIFtpY29uXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbT8udGl0bGV9fTwvYT5cclxuPC9zbS1tZW51PlxyXG48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gc2Vjb25kYXJ5PC9oND5cclxuICAgIDxzbS1tZW51IHRpdGxlPVwiU2Vjb25kYXJ5XCIgY2xhc3M9XCJ1aSBtZW51IHNlY29uZGFyeVwiPlxyXG4gICAgICAgIDxhIHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgaXRlbXNcIiBbaWNvbl09XCJpdGVtLmljb25cIiBjbGFzcz1cIml0ZW1cIj57e2l0ZW0/LnRpdGxlfX08L2E+XHJcbiAgICA8L3NtLW1lbnU+XHJcblxyXG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XHJcbiA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG48dGV4dGFyZWEgcm93cz1cIjRcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XHJcbjxzbS1tZW51IHRpdGxlPVwiU2Vjb25kYXJ5XCIgY2xhc3M9XCJ1aSBtZW51IHNlY29uZGFyeVwiPlxyXG4gICAgPGEgc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiIFtpY29uXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbT8udGl0bGV9fTwvYT5cclxuPC9zbS1tZW51PlxyXG48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxici8+PGJyLz5cclxuICAgICAgUGFnZSBzb3VyY2U6IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvbWVudS50c1wiPlxyXG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljL2Jsb2IvbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9tZW51LnRzXHJcbiAgICAgIDwvYT5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcclxuICAgIGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBsYWJlbGVkSWNvbnM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW3tcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJob21lXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQWJvdXQgVXNcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIiMvXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbnRhY3RcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIiMvXCJcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxlZEljb25zID0gW3tcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkdhbWVzXCIsXHJcbiAgICAgICAgICAgIFwibGlua1wiOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiZ2FtZXBhZFwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNoYW5lbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiQ2hhbmVsXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogXCJ2aWRlbyBjYW1lcmFcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVmlkZW9zXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJWaWRlb3NcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInZpZGVvIHBsYXlcIlxyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19