import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { OrganisationsService } from  '../../../services/organisations.service';
import { formSubmit } from './formSubmit';
import { SnackbarErrorService } from 'src/app/component-services/snackbar-error.service';

@Component({
  selector: 'app-add-new-emp',
  templateUrl: './add-new-emp.component.html',
  styleUrls: ['./add-new-emp.component.scss']
})
export class AddNewEmpComponent implements OnInit {
 
  isSubmitted  =  false;
  interface_formSubmit : formSubmit;
  public responce_obj : object;

  constructor(private router: Router, private formBuilder: FormBuilder,public apiservice: OrganisationsService 
    ,private snackerror: SnackbarErrorService
    ) { }

  addNewEmployeeForm = this.formBuilder.group({
    fname: ['Nilesh',Validators.required],
    lname: ['Pande',Validators.required],
    email: ['q',Validators.required],
    country: ['a',Validators.required],
    state: ['z',Validators.required],
    city: ['c',Validators.required],
    zip_pin_code: ['b',Validators.required],
    comp_idName: ['b',Validators.required],
    designation: ['b',Validators.required],
    role: ['b',Validators.required],
    address: ['b',Validators.required],
  });


  get formControls() { return this.addNewEmployeeForm.controls; }

  onSubmit()
  {
      this.isSubmitted = true;
      if(this.addNewEmployeeForm.invalid){
        console.log("failed");
      }
      else 
      {
        //console.log(this.addNewEmployeeForm.value);
        this.apiservice.formsubmitt(this.addNewEmployeeForm.value)
        .subscribe(data => { 
          this.responce_obj = data
          
        },(error) => {  
          console.log(error.statusText); 
          this.snackerror.show('hello');
          //alert(`Something Went Wrong. Please Try again later ${error.statusText}`); 
           /*this.errorEmit.emit(error)*/ 
        }
        );
        
        
      }
  }

  ngOnInit() {
    
  }

}
