import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationsComponent } from './components/notifications/notifications.component'
import NotificationsService from './services/notifications.service'

@NgModule({
    declarations: [NotificationsComponent],
    exports: [NotificationsComponent],
    imports: [CommonModule],
    providers: [NotificationsService],
})
export class NotificationsModule {}
