var browser_1 = require("angular2/platform/browser");
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var http_1 = require("angular2/http");
var message_1 = require("./services/message");
var app_1 = require("./components/app");
browser_1.bootstrap(app_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    message_1.MessageService,
    core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQTBCLDJCQUEyQixDQUFDLENBQUE7QUFDdEQscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBQ3JDLHVCQUF5RSxpQkFBaUIsQ0FBQyxDQUFBO0FBQzNGLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUUvQyx3QkFBK0Isb0JBQW9CLENBQUMsQ0FBQTtBQUNwRCxvQkFBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQUVoRCxtQkFBUyxDQUFDLGtCQUFZLEVBQUU7SUFDdkIscUJBQWM7SUFDZCx5QkFBZ0I7SUFDaEIsd0JBQWM7SUFDZCxXQUFJLENBQUMseUJBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQW9CLENBQUM7Q0FDcEQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSBcImFuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXJcIjtcbmltcG9ydCB7IGJpbmQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbWVzc2FnZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuXHRIVFRQX1BST1ZJREVSUyxcblx0Uk9VVEVSX1BST1ZJREVSUyxcblx0TWVzc2FnZVNlcnZpY2UsXG5cdGJpbmQoTG9jYXRpb25TdHJhdGVneSkudG9DbGFzcyhIYXNoTG9jYXRpb25TdHJhdGVneSlcbl0pO1xuIl19