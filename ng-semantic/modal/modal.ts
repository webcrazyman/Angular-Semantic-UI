import { Directive, Component, Input, ChangeDetectionStrategy } from "@angular/core";

declare var jQuery: any;

/**
 * Directive, implementation of Semantic UI modal components.
 *
 * Object that need to be passed to this components is:
 * {
 *      selector: string
 * }
 *
 * @link http://semantic-ui.com/modules/modal.html
 */
@Directive({
    host: {
        "(click)": "onClick()"
    },
    inputs: [
        "data: sm-dir-modal"
    ],
    selector: "[sm-dir-modal]"
})
export class SMModalDirective {
    public data: any;

    onClick() {
        if (typeof jQuery === "undefined") {
            console.log("jQuery is not loaded");
            return;
        }

        if (!this.data.hasOwnProperty("selector")) {
            console.log("target selector missing for modal");
            return;
        }

        jQuery(".ui.modal." + this.data.selector).modal("show");

    }

}

/**
 * Component, implementation of Semantic UI modal components.
 *
 * This component is triggered by SMModalDirective.
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "sm-modal",
    template: `<div class="ui modal {{selector}} {{class}}">
    <i class="close icon"></i>
    <div class="ui icon header">
      {{title}}
    </div>
    <div class="content">
        <ng-content></ng-content>
    </div>
</div>`
})
export class SemanticModal {
    @Input("selector") selector: string;
    @Input("title") title: string;
    @Input("class") class: string;
}
