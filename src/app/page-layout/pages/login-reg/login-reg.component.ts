import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { Login } from  './login';
import { AuthService } from  '../../../services/auth.service';
import { SnackbarErrorService } from '../../../component-services/snackbar-error.service';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.scss']
})
export class LoginRegComponent implements OnInit {

  @Output() errorEmit = new EventEmitter();
  
  constructor(private authService: AuthService, 
    private _rout: Router, 
    private formBuilder: FormBuilder,
    private snackerror: SnackbarErrorService ) { }

  loginForm: FormGroup;
  isSubmitted  =  false;
  public responce_obj : object;
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      loginid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login()
  {

    this.authService.login(this.loginForm.value)
    .subscribe(data => { 
      this.responce_obj = data
      if(this.responce_obj['status'])
      {
          localStorage.setItem('ACCESS_TOKEN',<any>data['token'])
          this._rout.navigate(['/dash'])
      }
      else
      {
          localStorage.clear();
          console.log(this.responce_obj['responce_status_massage']); 
      }
    }
    , (error) => {  
                    console.log(error.statusText); 
                    this.snackerror.show('hello');
                    //alert(`Something Went Wrong. Please Try again later ${error.statusText}`); 
                     /*this.errorEmit.emit(error)*/ 
                  }
    )
  }

}
