export type NotificationType = 'info' | 'warning' | 'error'

export default interface INotification {
    id: string
    message: string
    type: NotificationType
}
