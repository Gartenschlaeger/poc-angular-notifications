import { Component } from '@angular/core'
import NotificationsService from './notifications/services/notifications.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'poc-angular-service-emit'

    constructor(private notificationsService: NotificationsService) {}

    onSend() {
        console.log('onSend')
        this.notificationsService.error('test 123')
    }
}
