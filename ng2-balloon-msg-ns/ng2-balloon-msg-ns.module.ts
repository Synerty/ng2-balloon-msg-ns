import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2BalloonMsgNsQueueComponent} from './queue/ng2-balloon-msg-ns-queue.component';
import {Ng2BalloonMsgNsItemComponent} from './item/ng2-balloon-msg-ns-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    Ng2BalloonMsgNsQueueComponent,
    Ng2BalloonMsgNsItemComponent
  ],
  declarations: [
    Ng2BalloonMsgNsQueueComponent,
    Ng2BalloonMsgNsItemComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class Ng2BalloonMsgNsModule {

}
