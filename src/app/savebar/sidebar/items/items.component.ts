import { Component, Inject, Input, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ez-side-menu',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css', '../sidebar.component.css'],
})
export class ItemsComponent {
  public static $inject = [];

  @Input()
  public ezSubmenuList: any;

  private runtime?: any;

  public click(item) {
    this.runtime?.menuClick(item);
  }

  @HostListener('click', ['$event'])
  public open(event: MouseEvent) {
    event.stopPropagation();
    let parentElement = (<HTMLElement>event.currentTarget).parentElement!;
    for (let element of parentElement.querySelectorAll('ez-side-menu')!) {
      if (element === event.currentTarget) {
        this.ezSubmenuList.isCollapsed = !this.ezSubmenuList.isCollapsed;

        if (!element.classList.contains('has-active')) {
          element.classList.toggle('active');

          if (parentElement.tagName === 'EZ-SIDE-MENU' && parentElement.classList.contains('active')) {
            parentElement.classList.add('has-active');
            parentElement.classList.remove('active');
          }
        }
      } else {
        element.classList.remove('active');
      }
      element.classList.remove('has-active');
    }
  }

  public json(obj) {
    return JSON.stringify(obj, null, 2);
  }
  
  ngOnInit(): void {
    setTimeout(() => this.ezSubmenuList.isCollapsed = true);
  };
};
