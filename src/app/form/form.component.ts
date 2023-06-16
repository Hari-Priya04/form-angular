import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  details=
{
  name:'',
  email:'',
  mobileNumber:'',
  address:'',
  updates:'',
  course:''
}

  reactiveForm!:FormGroup;
  submitted:boolean=false;

  constructor(private formService:FormService,private formBuilder: FormBuilder) { }

  
  get f(){
    return this.reactiveForm.controls;
  }
  
  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      mobileNumber:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      course:new FormControl('',[Validators.required]),
      updates:new FormControl('',[])
      })
  }

  send(){

    this.submitted=true;
    if(this.reactiveForm.invalid){
      return ;
    } 
    this.details=this.reactiveForm.value
    if (confirm("Do you want to submit")){
    this.formService.add(this.details).subscribe(
      (data:any)=>{
        this.reactiveForm.reset();
         this.submitted=false;
        
      }
    )
    }
  }

}
