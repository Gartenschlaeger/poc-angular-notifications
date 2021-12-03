import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { NotificationsModule } from './notifications/notifications.module'
import { ModalModule } from './modal/modal.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NotificationsModule, ModalModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
