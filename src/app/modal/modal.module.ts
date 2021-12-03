import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import ModalService from './services/modal.service'
import { ModalsComponent } from './components/modals/modals.component'

@NgModule({
    declarations: [ModalsComponent],
    imports: [CommonModule],
    exports: [ModalsComponent],
    providers: [ModalService],
})
export class ModalModule {}
