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

    onSendInfo() {
        this.notificationsService.info('Das ist ein Test !!!')
    }

    onSendWarning() {
        this.notificationsService.warning('Das ist ein Test !!!')
    }

    onSendError() {
        this.notificationsService.error('Das ist ein Test !!!')
    }
}
