import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SnackbarErrorService } from '../snackbar-error.service';
import { trigger,transition,animate,style } from '@angular/animations';

@Component({
  selector: 'app-snackbarerror',
  templateUrl: './snackbarerror.component.html',
  styleUrls: ['./snackbarerror.component.scss'],
  // animations:[
  //   trigger('state',[
  //     transition(':enter',[
  //       style({bottom:'-100px',transform:'translate('})
  //     ])
  //   ])
  // ]
})
export class SnackbarerrorComponent implements OnInit {

  public show = false;
  public message: string = 'This is snackbar';
  public type:string = 'success';
  public snackbarSubscription: Subscription;

  constructor(public snackbarService: SnackbarErrorService ) { }

  ngOnInit() {
    this.snackbarSubscription = this.snackbarService.snackbarstate. 
    subscribe(
      (state) => {
        if(state.type)
        {
          this.type = state.type;
        }
        else { this.type = 'success' }
        this.message = state.message;
        this.show = state.show;
        setTimeout(()=>{this.show=false;},3000);
      }
    );
  }
  ngOnDestroy()
  {
    this.snackbarSubscription.unsubscribe();
  }

}
