import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive, HostListener,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { BadgeComponent } from '../badge-component/badge.component';
import { UserStatus } from '../models/user';

@Directive({
  selector: '[appBadgeStructural]'
})
export class BadgeStructuralDirective {
  @Input('appBadgeStructural') set status(status: UserStatus) {
    if (!this.componentRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef, {});
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BadgeComponent);
      this.componentRef = this.viewContainer.createComponent(componentFactory);
      this.renderer.appendChild(embeddedViewRef.rootNodes[0], this.componentRef.location.nativeElement);
    }

    this.componentRef.instance.status = status;
  }

  private componentRef: ComponentRef<BadgeComponent>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) {
  }
}
