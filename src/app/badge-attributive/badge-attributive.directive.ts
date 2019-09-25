import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { UserStatus } from '../models/user';

@Directive({
  selector: '[appBadgeAttributive]',
  host: {
    '[class.hide-badge]': 'isHideBadge'
  }
})
export class BadgeAttributiveDirective {
  @Input('appBadgeAttributive') set status(status: UserStatus) {
    if (status !== undefined) {
      this.element.nativeElement.classList.add('budget-' + UserStatus[status].toLowerCase());
    }
  }

  @HostListener('click', ['$event']) click(event: Event) {
    this.isHideBadge = !this.isHideBadge;
  }

  // @HostBinding('class.hide-badge') isHideBadge = false;
  isHideBadge = false;

  constructor(private element: ElementRef) {
    this.element.nativeElement.classList.add('badge-attributive');
  }
}
