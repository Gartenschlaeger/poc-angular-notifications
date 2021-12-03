import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { filter } from 'rxjs/operators'
import INotification, { NotificationType } from '../models/notification'
import { v4 as uuidv4 } from 'uuid'

@Injectable({ providedIn: 'root' })
export default class NotificationsService {
    private subject = new Subject<INotification>()

    onNotification(): Observable<INotification> {
        return this.subject.asObservable()
    }

    sendNotification(message: string, type: NotificationType) {
        this.subject.next({
            id: uuidv4(),
            message: message,
            type: type,
        })
    }

    info(message: string) {
        this.sendNotification(message, 'info')
    }

    warning(message: string) {
        this.sendNotification(message, 'warning')
    }

    error(message: string) {
        this.sendNotification(message, 'error')
    }
}
