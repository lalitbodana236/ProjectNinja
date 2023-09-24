import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/interface/notification.model';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css'],
})
export class NotificationPanelComponent implements OnInit {
  notifications: Notification[] = [];

  addNotification(message: string) {
    const newNotification: Notification = {
      id: 1,
      message: message,
      timestamp: new Date(),
    };
    this.notifications.unshift(newNotification); // Add at the beginning of the array
  }

  removeNotification(notification: Notification) {
    const index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  }

  ngOnInit() {
    for (let i = 0; i < this.dummyNotification.length; i++) {
      this.notifications.push(this.dummyNotification[i]);
    }
  }

  dummyNotification: Notification[] = [
    {
      id: 1,
      message: 'New message received',
      timestamp: new Date(),
    },
    {
      id: 2,
      message: 'You have 5 new emails',
      timestamp: new Date(),
    },
    {
      id: 3,
      message: 'Meeting with the team at 3:00 PM',
      timestamp: new Date(),
    },
    {
      id: 4,
      message: 'Reminder: Pay your bills',
      timestamp: new Date(),
    },
    {
      id: 5,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timestamp: new Date(),
    },
    {
      id: 6,
      message:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: new Date(),
    },
    {
      id: 7,
      message:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      timestamp: new Date(),
    },
    {
      id: 8,
      message:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      timestamp: new Date(),
    },
    {
      id: 9,
      message: 'Another notification with a timestamp',
      timestamp: new Date(),
    },
    {
      id: 10,
      message: 'Yet another notification with a timestamp',
      timestamp: new Date(),
    },
  ];
}
