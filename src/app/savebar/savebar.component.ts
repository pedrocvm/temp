import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savebar',
  templateUrl: './savebar.component.html',
  styleUrls: ['./savebar.component.css'],
})
export class SavebarComponent {
  public static $inject = [];
  public isVisibleAdd: boolean = false;
  public isVisibleEdit: boolean = false;
  public isMobile: boolean = false;

  public shortcutList = [
    {
      Id: 6,
      ListTypeId: 2,
      FormId: 45496,
      Name: 'New Attendance',
      Url: '',
      ProjectId: 0,
      Position: 1,
      ButtonSize: 175,
      ButtonBgColor: '#ff6201',
      Icon: 'fas fa-address-book',
      Callback: () => {
        console.log('New Attendance');
      },
    },
    {
      Id: 7,
      ListTypeId: 2,
      FormId: 45257,
      Name: 'New youth',
      Url: '',
      ProjectId: 0,
      Position: 2,
      ButtonSize: 175,
      ButtonBgColor: '#36bac7',
      Icon: 'fas fa-user-plus',
      Callback: () => {
        console.log('New youth');
      },
    },
    {
      Id: 19,
      ListTypeId: 1,
      FormId: 48553,
      Name: 'Task List',
      Url: '',
      ProjectId: 0,
      Position: 3,
      ButtonSize: 175,
      ButtonBgColor: '#f5b700',
      Icon: 'fas fa-clipboard-list',
      Callback: () => {
        console.log('Task List');
      },
    },
    {
      Id: 20,
      ListTypeId: 1,
      FormId: 45309,
      Name: 'Register',
      Url: '',
      ProjectId: 0,
      Position: 4,
      ButtonSize: 175,
      ButtonBgColor: '#f73d00',
      Icon: 'fas fa-cash-register',
      Callback: () => {
        console.log('Register');
      },
    },
    {
      Id: 21,
      ListTypeId: 1,
      FormId: 45499,
      Name: 'Events',
      Url: '',
      ProjectId: 0,
      Position: 6,
      ButtonSize: 175,
      ButtonBgColor: '#062e5f',
      Icon: 'fas fa-calendar-alt',
      Callback: () => {
        console.log('Events');
      },
    },
    {
      Id: 28,
      ListTypeId: 1,
      FormId: 48934,
      Name: 'Checklist',
      Url: '',
      ProjectId: 0,
      Position: 6,
      ButtonSize: 175,
      ButtonBgColor: '#a31521',
      Icon: 'fas fa-tasks',
      Callback: () => {
        console.log('Checklist');
      },
    },
    {
      Id: 26,
      ListTypeId: 1,
      FormId: 48698,
      Name: 'Fund Tracker',
      Url: '',
      ProjectId: 0,
      Position: 7,
      ButtonSize: 175,
      ButtonBgColor: '#ffce43',
      Icon: 'fas fa-file-invoice-dollar',
      Callback: () => {
        console.log('FundTracker');
      },
    },
    {
      Id: 27,
      ListTypeId: 1,
      FormId: 45243,
      Name: 'Trip Tracker',
      Url: '',
      ProjectId: 0,
      Position: 8,
      ButtonSize: 175,
      ButtonBgColor: '#ff751d',
      Icon: 'fas fa-map-marked-alt',
      Callback: () => {
        console.log('Trip Tracker');
      },
    },
    {
      Id: 30,
      ListTypeId: 1,
      FormId: 45257,
      Name: 'People',
      Url: '',
      ProjectId: 0,
      Position: 9,
      ButtonSize: 175,
      ButtonBgColor: '#a01625',
      Icon: 'fas fa-user',
      Callback: () => {
        console.log('People');
      },
    },
    {
      Id: 31,
      ListTypeId: 1,
      FormId: 45535,
      Name: 'Liability Forms',
      Url: '',
      ProjectId: 0,
      Position: 10,
      ButtonSize: 175,
      ButtonBgColor: '#ff6201',
      Icon: 'fas fa-file-alt',
      Callback: () => {
        console.log('Liability Forms');
      },
    },
  ];

  public addButtons = [
    {
      caption: 'Save',
      icon: 'fas fa-save',

      click: () => {
        console.log('SAVE BUTTON');
      },
    },

    {
      caption: 'Next',
      icon: 'fas fa-arrow-circle-right',

      click: () => {
        console.log('NEXT BUTTON');
      },
    },
    {
      caption: 'Cancel',
      icon: 'fas fa-ban',

      click: () => {
        console.log('CANCEL BUTTON');
      },
    },
  ];

  public editButtons = [
    {
      caption: 'Apply',
      icon: 'far fa-check-circle',
      click: () => {
        console.log('APPLY BUTTON');
      },
    },
    {
      caption: 'Cancel',
      icon: 'fas fa-ban',

      click: () => {
        console.log('CANCEL BUTTON');
      },
    },
  ];

  public saveBtn(n) {
    console.log(n);
  }

  public handleMobileVersion() {
    if ($(window).width() < 992) {
      this.isMobile = true;
      document.querySelector('.wrapper').classList.add('collapsed');
      return;
    }

    this.isMobile = false;
  }

  public handleResize() {
    $(window).resize(() => {
      this.handleMobileVersion();
    });
  }

  public handleAddBtn() {
    this.isVisibleAdd = true;
    this.isVisibleEdit = false;
  }

  public handleEditBtn() {
    this.isVisibleEdit = true;
    this.isVisibleAdd = false;
  }

  public handleSidebarCollapsed() {
    document.querySelector('.wrapper').classList.toggle('collapsed');
  }

  ngOnInit(): void {
    this.handleMobileVersion();
    this.handleResize();
  }
}
