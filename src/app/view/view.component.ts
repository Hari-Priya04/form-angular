import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private formservice:FormService) { }
  details=
  {
    name:'',
    email:'',
    mobileNumber:'',
    address:'',
    updates:'',
    course:''
  }
  data:any;
  ngOnInit(): void {
    this.get()
  }
get(){
  this.formservice.fetchdata().subscribe((res=>{
    this.data=res;
  }))
}
}
