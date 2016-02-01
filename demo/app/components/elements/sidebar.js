System.register(["angular2/core", "ng-semantic/semantic"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, semantic_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent() {
                    this.default = "test";
                }
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: "test-sidebar"
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n        <h1>Sidebar</h1>\n        <p>Semantic UI Sidebar module <i class=\"icon external\"></i> \n        <a href=\"hhttp://semantic-ui.com/modules/sidebar.html\" target=\"_blank\">Semantic UI Sidebar</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo</h4>\n   \t<sm-button class=\"positive icon\" icon=\"sidebar\" sm-dir-sidebar=\"left\">Lunch left sidebar</sm-button> \n    <sm-button class=\"\" sm-dir-sidebar=\"bottom\">Lunch bottom sidebar</sm-button>\n    <sm-sidebar class=\"left vertical inverted sidebar labeled icon menu\">        \n        <a class=\"item\">\n            <i class=\"home icon\"></i>\n            Home\n        </a>\n        <a class=\"item\">\n            <i class=\"block layout icon\"></i>\n            Topics\n        </a>\n        <a class=\"item\">\n            <i class=\"smile icon\"></i>\n            Friends\n        </a>\n    </sm-sidebar>\n\n    <h4 class=\"ui header\">Code</h4>\n    <div class=\"ui form\">\n        <div class=\"field\">\n<textarea rows=\"14\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-button class=\"positive\" sm-dir-sidebar=\"left\">Lunch left sidebar</sm-button>\n<sm-sidebar class=\"left vertical inverted sidebar labeled icon menu\">        \n    <a class=\"item\">\n        <i class=\"home icon\"></i> Home\n    </a>\n    <a class=\"item\">\n        <i class=\"block layout icon\"></i> Topics\n    </a>\n    <a class=\"item\">\n        <i class=\"smile icon\"></i> Friends\n    </a>\n</sm-sidebar>\n</textarea>\n        </div>\n     </div>\n     \n     <sm-sidebar class=\"bottom inverted nine item labeled icon sidebar menu\">        \n         <a class=\"item\">\n            <i class=\"home icon\"></i>\n            Home\n        </a>\n        <a class=\"item\">\n            <i class=\"block layout icon\"></i>\n            Topics\n        </a>\n        <a class=\"item\">\n            <i class=\"smile icon\"></i>\n            Friends\n        </a>\n        <a class=\"item\">\n            <i class=\"calendar icon\"></i>\n            History\n        </a>\n        <a class=\"item\">\n            <i class=\"mail icon\"></i>\n            Messages\n        </a>\n        <a class=\"item\">\n            <i class=\"chat icon\"></i>\n            Discussions\n        </a>\n        <a class=\"item\">\n            <i class=\"trophy icon\"></i>\n            Achievements\n        </a>\n        <a class=\"item\">\n            <i class=\"shop icon\"></i>\n            Store\n        </a>\n        <a class=\"item\">\n            <i class=\"settings icon\"></i>\n            Settings\n        </a>\n    </sm-sidebar>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarComponent);
                return SidebarComponent;
            })();
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbIlNpZGViYXJDb21wb25lbnQiLCJTaWRlYmFyQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7b0JBK0ZJQyxZQUFPQSxHQUFXQSxNQUFNQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQWhHREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBR0EsY0FBY0E7cUJBQ3pCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFtQkEsRUFBRUEsOEJBQW1CQSxDQUFDQTt3QkFDdERBLFFBQVFBLEVBQUdBLDJ1RkFzRlhBO3FCQUNBQSxDQUFDQTs7cUNBSURBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FBQ0EsQUFoR0QsSUFnR0M7WUFoR0QsK0NBZ0dDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpYy9zZW1hbnRpY1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3IgOiBcInRlc3Qtc2lkZWJhclwiXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlIDogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgPGgxPlNpZGViYXI8L2gxPlxuICAgICAgICA8cD5TZW1hbnRpYyBVSSBTaWRlYmFyIG1vZHVsZSA8aSBjbGFzcz1cImljb24gZXh0ZXJuYWxcIj48L2k+IFxuICAgICAgICA8YSBocmVmPVwiaGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9zaWRlYmFyLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBTaWRlYmFyPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbzwvaDQ+XG4gICBcdDxzbS1idXR0b24gY2xhc3M9XCJwb3NpdGl2ZSBpY29uXCIgaWNvbj1cInNpZGViYXJcIiBzbS1kaXItc2lkZWJhcj1cImxlZnRcIj5MdW5jaCBsZWZ0IHNpZGViYXI8L3NtLWJ1dHRvbj4gXG4gICAgPHNtLWJ1dHRvbiBjbGFzcz1cIlwiIHNtLWRpci1zaWRlYmFyPVwiYm90dG9tXCI+THVuY2ggYm90dG9tIHNpZGViYXI8L3NtLWJ1dHRvbj5cbiAgICA8c20tc2lkZWJhciBjbGFzcz1cImxlZnQgdmVydGljYWwgaW52ZXJ0ZWQgc2lkZWJhciBsYWJlbGVkIGljb24gbWVudVwiPiAgICAgICAgXG4gICAgICAgIDxhIGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJob21lIGljb25cIj48L2k+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJsb2NrIGxheW91dCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgVG9waWNzXG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cInNtaWxlIGljb25cIj48L2k+XG4gICAgICAgICAgICBGcmllbmRzXG4gICAgICAgIDwvYT5cbiAgICA8L3NtLXNpZGViYXI+XG5cbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cbiAgICA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbjx0ZXh0YXJlYSByb3dzPVwiMTRcIiByZWFkb25seSBjbGFzcz1cImNvZGVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwib2ZmXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+XG48c20tYnV0dG9uIGNsYXNzPVwicG9zaXRpdmVcIiBzbS1kaXItc2lkZWJhcj1cImxlZnRcIj5MdW5jaCBsZWZ0IHNpZGViYXI8L3NtLWJ1dHRvbj5cbjxzbS1zaWRlYmFyIGNsYXNzPVwibGVmdCB2ZXJ0aWNhbCBpbnZlcnRlZCBzaWRlYmFyIGxhYmVsZWQgaWNvbiBtZW51XCI+ICAgICAgICBcbiAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJob21lIGljb25cIj48L2k+IEhvbWVcbiAgICA8L2E+XG4gICAgPGEgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiYmxvY2sgbGF5b3V0IGljb25cIj48L2k+IFRvcGljc1xuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJzbWlsZSBpY29uXCI+PC9pPiBGcmllbmRzXG4gICAgPC9hPlxuPC9zbS1zaWRlYmFyPlxuPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICAgPHNtLXNpZGViYXIgY2xhc3M9XCJib3R0b20gaW52ZXJ0ZWQgbmluZSBpdGVtIGxhYmVsZWQgaWNvbiBzaWRlYmFyIG1lbnVcIj4gICAgICAgIFxuICAgICAgICAgPGEgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhvbWUgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmxvY2sgbGF5b3V0IGljb25cIj48L2k+XG4gICAgICAgICAgICBUb3BpY3NcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwic21pbGUgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIEZyaWVuZHNcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiY2FsZW5kYXIgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIEhpc3RvcnlcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWFpbCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgTWVzc2FnZXNcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiY2hhdCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgRGlzY3Vzc2lvbnNcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwidHJvcGh5IGljb25cIj48L2k+XG4gICAgICAgICAgICBBY2hpZXZlbWVudHNcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwic2hvcCBpY29uXCI+PC9pPlxuICAgICAgICAgICAgU3RvcmVcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwic2V0dGluZ3MgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgIDwvYT5cbiAgICA8L3NtLXNpZGViYXI+XG48L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcgPSBcInRlc3RcIjtcbn1cbiJdfQ==