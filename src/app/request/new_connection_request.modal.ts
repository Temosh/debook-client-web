import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {CONNECTION_REQUEST, Request, User} from '../_models';
import {AlertService, RequestService, UserService} from '../_services';
import {HttpErrorResponse} from '@angular/common/http';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-modal-new-connection-request',
  templateUrl: 'new_connection_request.modal.html'
})

export class NewConnectionRequestModalComponent implements OnInit {
  @Output() close: EventEmitter<Observable<Request>> = new EventEmitter();
  userLogin: string;
  userNotFound: boolean = false;

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  send() {
    this.userNotFound = false;
    this.userService.getByLogin(this.userLogin).subscribe(
      (users: User[]) => {
        const newConnectionRequest: Request = <Request>{
          type: CONNECTION_REQUEST,
          user: <User>{
            id: users[0].id
          },
        };

        $('#modalNewConnectionRequest').modal('hide');
        this.close.emit(this.requestService.create(newConnectionRequest));
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

  cancel() {
    $('#modalNewConnectionRequest').modal('hide');
  }
}
