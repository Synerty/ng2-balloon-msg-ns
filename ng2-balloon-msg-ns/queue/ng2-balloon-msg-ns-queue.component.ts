import {Component, Output, EventEmitter} from "@angular/core";
import {Ng2BalloonMsgCommonQueueComponent} from "@synerty/ng2-balloon-msg";
import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";


@Component({
    selector: 'ng2-balloon-msg-ns',
    templateUrl: './ng2-balloon-msg-ns-queue.component.html'
})
export class Ng2BalloonMsgNsQueueComponent extends Ng2BalloonMsgCommonQueueComponent {

    @Output("fullScreenNeededEvent")
    fullScreenNeededEvent = new EventEmitter<boolean>();

    constructor(msgService: Ng2BalloonMsgService) {
        super(msgService);

        this.showModalEvent.subscribe(
            (val) => this.fullScreenNeededEvent.emit(val)
        )
    }


}
