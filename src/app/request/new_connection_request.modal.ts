import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person, Request, RequestType, User} from '../_models';
import {AlertService, RequestService, UserService} from '../_services';
import {HttpErrorResponse} from '@angular/common/http';
import {RequestAction, RequestEvent} from '../_events';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-modal-new-connection-request',
  templateUrl: 'new_connection_request.modal.html'
})

export class NewConnectionRequestModalComponent implements OnInit {
  @Input() person: Person;
  @Output() eventEmitter: EventEmitter<RequestEvent> = new EventEmitter();

  public userLogin: string;
  public userNotFound: boolean = false;

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  public send() {
    this.userNotFound = false;
    this.userService.getByLogin(this.userLogin).subscribe(
      (users: User[]) => {
        const newConnectionRequest: Request = <Request>{
          type: RequestType.CONNECTION,
          personId: this.person ? this.person.personId : null,
          user: <User>{
            id: users[0].id
          },
        };

        $('#modalNewConnectionRequest').modal('hide');
        this.eventEmitter.emit(<RequestEvent>{
          request: newConnectionRequest,
          action: RequestAction.NEW,
          observable: this.requestService.create(newConnectionRequest)
        });
      },

      (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 404) {
          this.userNotFound = true;
        } else {
          this.alertService.error(error.error.message);
        }
      }
    );
  }

  public cancel() {
    $('#modalNewConnectionRequest').modal('hide');
  }
}
