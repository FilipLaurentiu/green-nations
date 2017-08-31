import { ScreenService } from './../services/screen.service';


import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
    selector: '[screenBelowLarge]'
})
export class ScreenBelowLarge {
    private hasView = false;

    constructor(private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService) {

        screenService.resize$.subscribe(() => this.onResize());
    }


    @Input()
    set screenBelowLarge(condition) {
        condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;

        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    onResize() {
        this.screenBelowLarge = false;
    }
}