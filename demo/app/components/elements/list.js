System.register(["@angular/core", "ng-semantic", "../../services/data", "../../prismjs/prismjs"], function(exports_1, context_1) {
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
    var core_1, ng_semantic_1, data_1, prismjs_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (prismjs_1_1) {
                prismjs_1 = prismjs_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(ds) {
                    this.ds = ds;
                    this.flatArray = ds.array("flat");
                    this.usersArray = ds.array("users");
                }
                ListComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES, prismjs_1.CodeblockComponent, prismjs_1.PrismJsDirective],
                        providers: [data_1.DataServices],
                        selector: "list",
                        template: "\n    <div class=\"ui masthead vertical segment\">\n        <div class=\"ui container\">\n            <h1>List</h1>\n            <p>Semantic UI List element <i class=\"icon external\"></i>\n            <a href=\"http://semantic-ui.com/elements/list.html\" target=\"_blank\">Semantic UI List</a></p>\n        </div>\n    </div>\n    <div class=\"main ui container\">\n        <h4 class=\"ui header\">Demo Normal</h4>\n        <sm-list class=\"ui list\">\n            <sm-item *ngFor=\"#item of flatArray | async\" class=\"item\">{{item}}</sm-item>\n        </sm-list>\n\n        <h4 class=\"ui header\">Code</h4>\n            <codeblock markup>\n&lt;sm-list class=\"ui list\">\n    &lt;sm-item *ngFor=\"#item of flatArray\" class=\"item\">{{item}}&lt;/sm-item>\n&lt;/sm-list>\n</codeblock>\n\n        <h4 class=\"ui header\">Demo Bulleted</h4>\n        <sm-list class=\"ui list bulleted\">\n            <sm-item *ngFor=\"#item of flatArray | async\" class=\"item\">{{item}}</sm-item>\n        </sm-list>\n\n        <h4 class=\"ui header\">Code</h4>\n            <codeblock markup>\n&lt;sm-list class=\"ui list bulleted\">\n    &lt;sm-item *ngFor=\"#item of flatArray\" class=\"item\">{{item}}&lt;/sm-item>\n&lt;/sm-list>\n</codeblock>\n\n        <h4 class=\"ui header\">Demo Ordered</h4>\n        <sm-list class=\"ui list ordered\">\n            <sm-item *ngFor=\"#item of flatArray | async\" class=\"item\">{{item}}</sm-item>\n        </sm-list>\n        <h4 class=\"ui header\">Code</h4>\n            <codeblock markup>\n&lt;sm-list class=\"ui list ordered\">\n    &lt;sm-item *ngFor=\"#item of flatArray\" class=\"item\">{{item}}&lt;/sm-item>\n&lt;/sm-list>\n</codeblock>\n\n        <h4 class=\"ui header\">Demo avatar</h4>\n        <sm-list class=\"ui list\">\n            <sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{{item.date}}</sm-item>\n        </sm-list>\n        <h4 class=\"ui header\">Code</h4>\n            <codeblock markup>\n&lt;sm-list class=\"ui list\">\n    &lt;sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{ {item.date} }&lt;/sm-item>\n&lt;/sm-list>\n</codeblock>\n        <div class=\"ui divider\"></div>\n\n        <h4 class=\"ui header\">Demo avatar horizontal</h4>\n        <sm-list class=\"ui list horizontal\">\n            <a sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{{item.date}}</a>\n        </sm-list>\n        <div class=\"ui divider\"></div>\n\n        <h4 class=\"ui header\">Demo avatar horizontal ordered</h4>\n        <sm-list class=\"ui list horizontal ordered\">\n            <a sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{{item.date}}</a>\n        </sm-list>\n        <div class=\"ui divider\"></div>\n\n        <h4 class=\"ui header\">Demo avatar animated</h4>\n        <sm-list class=\"ui list animated\">\n            <a sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{{item.date}}</a>\n        </sm-list>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [data_1.DataServices])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxRkE7Z0JBSUksdUJBQW1CLEVBQWdCO29CQUFoQixPQUFFLEdBQUYsRUFBRSxDQUFjO29CQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkF2Rkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyxpQ0FBbUIsRUFBRSxpQ0FBbUIsRUFBUSw0QkFBa0IsRUFBUSwwQkFBZ0IsQ0FBQzt3QkFDeEcsU0FBUyxFQUFFLENBQUMsbUJBQVksQ0FBQzt3QkFDekIsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFFBQVEsRUFBRSx3bkdBeUVUO3FCQUNKLENBQUM7O2lDQUFBO2dCQVVGLG9CQUFDO1lBQUQsQ0FBQyxBQVJELElBUUM7WUFSRCx5Q0FRQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YVwiO1xuaW1wb3J0IHsgQ29kZWJsb2NrQ29tcG9uZW50LCBQcmlzbUpzRGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL3ByaXNtanMvcHJpc21qc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUywgPFR5cGU+Q29kZWJsb2NrQ29tcG9uZW50LCA8VHlwZT5QcmlzbUpzRGlyZWN0aXZlXSxcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZXNdLFxuICAgIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ1aSBtYXN0aGVhZCB2ZXJ0aWNhbCBzZWdtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT5MaXN0PC9oMT5cbiAgICAgICAgICAgIDxwPlNlbWFudGljIFVJIExpc3QgZWxlbWVudCA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9saXN0Lmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBMaXN0PC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gTm9ybWFsPC9oND5cbiAgICAgICAgPHNtLWxpc3QgY2xhc3M9XCJ1aSBsaXN0XCI+XG4gICAgICAgICAgICA8c20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBmbGF0QXJyYXkgfCBhc3luY1wiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbX19PC9zbS1pdGVtPlxuICAgICAgICA8L3NtLWxpc3Q+XG5cbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+Q29kZTwvaDQ+XG4gICAgICAgICAgICA8Y29kZWJsb2NrIG1hcmt1cD5cbiZsdDtzbS1saXN0IGNsYXNzPVwidWkgbGlzdFwiPlxuICAgICZsdDtzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIGZsYXRBcnJheVwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbX19Jmx0Oy9zbS1pdGVtPlxuJmx0Oy9zbS1saXN0PlxuPC9jb2RlYmxvY2s+XG5cbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBCdWxsZXRlZDwvaDQ+XG4gICAgICAgIDxzbS1saXN0IGNsYXNzPVwidWkgbGlzdCBidWxsZXRlZFwiPlxuICAgICAgICAgICAgPHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgZmxhdEFycmF5IHwgYXN5bmNcIiBjbGFzcz1cIml0ZW1cIj57e2l0ZW19fTwvc20taXRlbT5cbiAgICAgICAgPC9zbS1saXN0PlxuXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgICAgICAgICAgPGNvZGVibG9jayBtYXJrdXA+XG4mbHQ7c20tbGlzdCBjbGFzcz1cInVpIGxpc3QgYnVsbGV0ZWRcIj5cbiAgICAmbHQ7c20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBmbGF0QXJyYXlcIiBjbGFzcz1cIml0ZW1cIj57e2l0ZW19fSZsdDsvc20taXRlbT5cbiZsdDsvc20tbGlzdD5cbjwvY29kZWJsb2NrPlxuXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gT3JkZXJlZDwvaDQ+XG4gICAgICAgIDxzbS1saXN0IGNsYXNzPVwidWkgbGlzdCBvcmRlcmVkXCI+XG4gICAgICAgICAgICA8c20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiBmbGF0QXJyYXkgfCBhc3luY1wiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbX19PC9zbS1pdGVtPlxuICAgICAgICA8L3NtLWxpc3Q+XG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuICAgICAgICAgICAgPGNvZGVibG9jayBtYXJrdXA+XG4mbHQ7c20tbGlzdCBjbGFzcz1cInVpIGxpc3Qgb3JkZXJlZFwiPlxuICAgICZsdDtzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIGZsYXRBcnJheVwiIGNsYXNzPVwiaXRlbVwiPnt7aXRlbX19Jmx0Oy9zbS1pdGVtPlxuJmx0Oy9zbS1saXN0PlxuPC9jb2RlYmxvY2s+XG5cbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBhdmF0YXI8L2g0PlxuICAgICAgICA8c20tbGlzdCBjbGFzcz1cInVpIGxpc3RcIj5cbiAgICAgICAgICAgIDxzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIHVzZXJzQXJyYXkgfCBhc3luY1wiIGNsYXNzPVwiaXRlbVwiIFtpbWFnZV09XCJpdGVtLmF2YXRhclwiIFtoZWFkZXJdPVwiaXRlbS51c2VyXCI+e3tpdGVtLmRhdGV9fTwvc20taXRlbT5cbiAgICAgICAgPC9zbS1saXN0PlxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiAgICAgICAgICAgIDxjb2RlYmxvY2sgbWFya3VwPlxuJmx0O3NtLWxpc3QgY2xhc3M9XCJ1aSBsaXN0XCI+XG4gICAgJmx0O3NtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgdXNlcnNBcnJheSB8IGFzeW5jXCIgY2xhc3M9XCJpdGVtXCIgW2ltYWdlXT1cIml0ZW0uYXZhdGFyXCIgW2hlYWRlcl09XCJpdGVtLnVzZXJcIj57IHtpdGVtLmRhdGV9IH0mbHQ7L3NtLWl0ZW0+XG4mbHQ7L3NtLWxpc3Q+XG48L2NvZGVibG9jaz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cblxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGF2YXRhciBob3Jpem9udGFsPC9oND5cbiAgICAgICAgPHNtLWxpc3QgY2xhc3M9XCJ1aSBsaXN0IGhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxhIHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgdXNlcnNBcnJheSB8IGFzeW5jXCIgY2xhc3M9XCJpdGVtXCIgW2ltYWdlXT1cIml0ZW0uYXZhdGFyXCIgW2hlYWRlcl09XCJpdGVtLnVzZXJcIj57e2l0ZW0uZGF0ZX19PC9hPlxuICAgICAgICA8L3NtLWxpc3Q+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG5cbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBhdmF0YXIgaG9yaXpvbnRhbCBvcmRlcmVkPC9oND5cbiAgICAgICAgPHNtLWxpc3QgY2xhc3M9XCJ1aSBsaXN0IGhvcml6b250YWwgb3JkZXJlZFwiPlxuICAgICAgICAgICAgPGEgc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiB1c2Vyc0FycmF5IHwgYXN5bmNcIiBjbGFzcz1cIml0ZW1cIiBbaW1hZ2VdPVwiaXRlbS5hdmF0YXJcIiBbaGVhZGVyXT1cIml0ZW0udXNlclwiPnt7aXRlbS5kYXRlfX08L2E+XG4gICAgICAgIDwvc20tbGlzdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cblxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGF2YXRhciBhbmltYXRlZDwvaDQ+XG4gICAgICAgIDxzbS1saXN0IGNsYXNzPVwidWkgbGlzdCBhbmltYXRlZFwiPlxuICAgICAgICAgICAgPGEgc20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiB1c2Vyc0FycmF5IHwgYXN5bmNcIiBjbGFzcz1cIml0ZW1cIiBbaW1hZ2VdPVwiaXRlbS5hdmF0YXJcIiBbaGVhZGVyXT1cIml0ZW0udXNlclwiPnt7aXRlbS5kYXRlfX08L2E+XG4gICAgICAgIDwvc20tbGlzdD5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XG4gICAgZmxhdEFycmF5OiBhbnk7XG4gICAgdXNlcnNBcnJheTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGRzOiBEYXRhU2VydmljZXMpIHtcbiAgICAgICAgdGhpcy5mbGF0QXJyYXkgPSBkcy5hcnJheShcImZsYXRcIik7XG4gICAgICAgIHRoaXMudXNlcnNBcnJheSA9IGRzLmFycmF5KFwidXNlcnNcIik7XG4gICAgfVxufVxuIl19