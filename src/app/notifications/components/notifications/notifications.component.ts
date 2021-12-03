import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import INotification from '../../models/notification'
import NotificationsService from '../../services/notifications.service'

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit, OnDestroy {
    private subscription: Subscription
    notifications: INotification[] = []

    constructor(private notificationService: NotificationsService) {}

    ngOnInit(): void {
        this.subscription = this.notificationService
            .onNotification()
            .subscribe((n) => {
                console.log(n)
                this.notifications.push(n)
                setTimeout(() => {
                    this.notifications = this.notifications.filter(
                        (cn) => cn.id !== n.id
                    )
                }, 3000)
            })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
