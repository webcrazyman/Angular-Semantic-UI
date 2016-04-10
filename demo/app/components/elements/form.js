System.register(["angular2/core", "angular2/common", "ng-semantic"], function(exports_1, context_1) {
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
    var core_1, common_1, ng_semantic_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent(fb) {
                    this.agreeControl = new common_1.Control("", common_1.Validators.required);
                    this.emailControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.formSubmited = false;
                    this.nameControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.nameFControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.textControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(10)]));
                    this.form = fb.group({
                        emailControl: this.emailControl,
                        nameControl: this.nameControl,
                    });
                    this.formFeedback = fb.group({
                        nameFControl: this.nameFControl,
                        textControl: this.textControl
                    });
                }
                FormComponent.prototype.checkboxValidator = function (control) {
                    var value = (typeof control.value === "boolean") ? control.value : false;
                    return (value) ? "" : "yes";
                };
                FormComponent.prototype.submit = function () {
                    this.formSubmited = true;
                };
                FormComponent = __decorate([
                    core_1.Component({
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "test-form",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Form</h1>\n\t<p>Semantic UI Form collection <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/form.html\" target=\"_blank\">Semantic UI Form</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo login</h4>\n    <form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n\t<sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n\t<div class=\"field\">\n\t    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\"></sm-checkbox>\n\t</div>\n\t<sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login</sm-button>\n    </form>\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n\t<div class=\"field\">\n<textarea rows=\"14\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n    <sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n    <div class=\"field\">\n\t<sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n    </div>\n    <div class=\"field\">\n\t<sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n    </div>\n    <div class=\"field\">\n\t<sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\"></sm-checkbox>\n    </div>\n    <sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login</sm-button>\n</form>\n</textarea>\n\t</div>\n      </div>\n\n      <h4 class=\"ui header\">Demo feedback</h4>\n      <form sm-form class=\"ui form\" [ngFormModel]=\"formFeedback\">\n\t<div class=\"field\">\n\t    <sm-input label=\"Name\" [control]=\"nameFControl\" placeholder=\"Enter name...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-textarea label=\"Name\" rows=\"10\" [control]=\"textControl\"></sm-textarea>\n\t</div>\n\t<sm-button (click)=\"send()\" class=\"primary\">Send</sm-button>\n      </form>\n\n\n      <br/><br/>\n      Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts\">\n\thttps://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0VBO2dCQVlJLHVCQUFZLEVBQWU7b0JBWDNCLGlCQUFZLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3RCxpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFJNUcsaUJBQVksR0FBWSxLQUFLLENBQUM7b0JBQzlCLGdCQUFXLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUUzRyxpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUcsZ0JBQVcsR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRy9HLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFFakIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO3dCQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQ2hDLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTt3QkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUNoQyxDQUFDLENBQUM7Z0JBQ0EsQ0FBQztnQkFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsT0FBZ0I7b0JBQ3JDLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN6RSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELDhCQUFNLEdBQU47b0JBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLENBQUM7Z0JBbEdMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsaUNBQW1CLEVBQUUsaUNBQW1CLENBQUM7d0JBQ3RELFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUseXJGQTZEYjtxQkFDQSxDQUFDOztpQ0FBQTtnQkFrQ0Ysb0JBQUM7WUFBRCxDQUFDLEFBakNELElBaUNDO1lBakNELHlDQWlDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29udHJvbCwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHsgU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFUyB9IGZyb20gXCJuZy1zZW1hbnRpY1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXHJcbiAgICBzZWxlY3RvcjogXCJ0ZXN0LWZvcm1cIixcclxuICAgIHRlbXBsYXRlOiBgXHJcblx0PGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cclxuXHQ8aDE+Rm9ybTwvaDE+XHJcblx0PHA+U2VtYW50aWMgVUkgRm9ybSBjb2xsZWN0aW9uIDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cclxuXHQ8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9mb3JtLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBGb3JtPC9hPjwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XHJcbiAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGxvZ2luPC9oND5cclxuICAgIDxmb3JtIHNtLWZvcm0gY2xhc3M9XCJ1aSBmb3JtXCIgW25nRm9ybU1vZGVsXT1cImZvcm1cIj5cclxuXHQ8c20tbG9hZGVyIFtjb21wbGV0ZV09XCIhZm9ybVN1Ym1pdGVkXCIgY2xhc3M9XCJpbnZlcnRlZFwiIHRleHQ9XCJMb2FkaW5nLi4uXCI+PC9zbS1sb2FkZXI+XHJcblx0PGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcblx0ICAgIDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcblx0ICAgIDxzbS1pbnB1dCBsYWJlbD1cIkUtbWFpbFwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsLi4uXCI+PC9zbS1pbnB1dD5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuXHQgICAgPHNtLWNoZWNrYm94IGxhYmVsPVwiSSBhZ3JlZSB0byB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnNcIiBbY29udHJvbF09XCJhZ3JlZUNvbnRyb2xcIj48L3NtLWNoZWNrYm94PlxyXG5cdDwvZGl2PlxyXG5cdDxzbS1idXR0b24gKGNsaWNrKT1cInN1Ym1pdCgpXCIgW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkXCIgY2xhc3M9XCJwcmltYXJ5XCI+TG9naW48L3NtLWJ1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxyXG4gPGRpdiBjbGFzcz1cInVpIGZvcm1cIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuPHRleHRhcmVhIHJvd3M9XCIxNFwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cclxuPGZvcm0gc20tZm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiPlxyXG4gICAgPHNtLWxvYWRlciBbY29tcGxldGVdPVwiIWZvcm1TdWJtaXRlZFwiIGNsYXNzPVwiaW52ZXJ0ZWRcIiB0ZXh0PVwiTG9hZGluZy4uLlwiPjwvc20tbG9hZGVyPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcblx0PHNtLWlucHV0IGxhYmVsPVwiTmFtZVwiIFtjb250cm9sXT1cIm5hbWVDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lLi4uXCI+PC9zbS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcblx0PHNtLWlucHV0IGxhYmVsPVwiRS1tYWlsXCIgW2NvbnRyb2xdPVwiZW1haWxDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwuLi5cIj48L3NtLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuXHQ8c20tY2hlY2tib3ggbGFiZWw9XCJJIGFncmVlIHRvIHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiIFtjb250cm9sXT1cImFncmVlQ29udHJvbFwiPjwvc20tY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzbS1idXR0b24gKGNsaWNrKT1cInN1Ym1pdCgpXCIgW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkXCIgY2xhc3M9XCJwcmltYXJ5XCI+TG9naW48L3NtLWJ1dHRvbj5cclxuPC9mb3JtPlxyXG48L3RleHRhcmVhPlxyXG5cdDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gZmVlZGJhY2s8L2g0PlxyXG4gICAgICA8Zm9ybSBzbS1mb3JtIGNsYXNzPVwidWkgZm9ybVwiIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtRmVlZGJhY2tcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuXHQgICAgPHNtLWlucHV0IGxhYmVsPVwiTmFtZVwiIFtjb250cm9sXT1cIm5hbWVGQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcblx0ICAgIDxzbS10ZXh0YXJlYSBsYWJlbD1cIk5hbWVcIiByb3dzPVwiMTBcIiBbY29udHJvbF09XCJ0ZXh0Q29udHJvbFwiPjwvc20tdGV4dGFyZWE+XHJcblx0PC9kaXY+XHJcblx0PHNtLWJ1dHRvbiAoY2xpY2spPVwic2VuZCgpXCIgY2xhc3M9XCJwcmltYXJ5XCI+U2VuZDwvc20tYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgICAgPGJyLz48YnIvPlxyXG4gICAgICBQYWdlIHNvdXJjZTogPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljL2Jsb2IvbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mb3JtLnRzXCI+XHJcblx0aHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2Zvcm0udHNcclxuICAgICAgPC9hPlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCB7XHJcbiAgICBhZ3JlZUNvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgIGVtYWlsQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKSk7XHJcblxyXG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgZm9ybUZlZWRiYWNrOiBDb250cm9sR3JvdXA7XHJcbiAgICBmb3JtU3VibWl0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG5hbWVDb250cm9sOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pKTtcclxuXHJcbiAgICBuYW1lRkNvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSkpO1xyXG4gICAgdGV4dENvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEwKV0pKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcclxuXHR0aGlzLmZvcm0gPSBmYi5ncm91cCh7XHJcbi8vICAgICAgICAgICAgYWdyZWVDb250cm9sOiB0aGlzLmFncmVlQ29udHJvbCxcclxuXHQgICAgZW1haWxDb250cm9sOiB0aGlzLmVtYWlsQ29udHJvbCxcclxuXHQgICAgbmFtZUNvbnRyb2w6IHRoaXMubmFtZUNvbnRyb2wsXHJcblx0fSk7XHJcblxyXG5cdHRoaXMuZm9ybUZlZWRiYWNrID0gZmIuZ3JvdXAoe1xyXG5cdCAgICBuYW1lRkNvbnRyb2w6IHRoaXMubmFtZUZDb250cm9sLFxyXG5cdCAgICB0ZXh0Q29udHJvbDogdGhpcy50ZXh0Q29udHJvbFxyXG5cdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrYm94VmFsaWRhdG9yKGNvbnRyb2w6IENvbnRyb2wpIHtcclxuXHRsZXQgdmFsdWUgPSAodHlwZW9mIGNvbnRyb2wudmFsdWUgPT09IFwiYm9vbGVhblwiKSA/IGNvbnRyb2wudmFsdWUgOiBmYWxzZTtcclxuXHRyZXR1cm4gKHZhbHVlKSA/IFwiXCIgOiBcInllc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuXHR0aGlzLmZvcm1TdWJtaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19