import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ValidationService } from '../validation-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
employeeForm:FormGroup;
hide:boolean=true;
visibility:boolean=true;
visibility_off:boolean=true;
  constructor(private fb:FormBuilder, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      email:['',[Validators.required, ValidationService.emailValidator]],
      password:['',[Validators.required,ValidationService.passwordValidator]],
      ipadd:['',[Validators.required,ValidationService.ValidateIPaddress]]    
    });
  }
  OnSubmit(){ 
    debugger;   
    this.router.navigate(['/mattable']);
    console.log(this.employeeForm)
  }

}
