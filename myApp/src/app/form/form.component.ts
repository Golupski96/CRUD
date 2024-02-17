import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { UserModel } from '../model/model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm: FormGroup; 
  

  constructor(private http: ServiceService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.loginForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      surname: new FormControl("", [Validators.required])
    });
    
  }

  users: UserModel[] = [];
  userId: string = "";
  user: UserModel = new UserModel();
  submittedOnce: boolean = false;


  ngOnInit(): void {
    
  }


  
  onSubmit():void{
    if(!this.loginForm.valid){
      alert ("Fill all gaps")
      return;
    }

    
    const newUser: UserModel = new UserModel ({
      name: this.loginForm.value.name,
      surname: this.loginForm.value.surname,
    })
    
      this.http.create(newUser).subscribe ({
        next: (response: UserModel) => {
          
          this.router.navigate(['/users'])
          console.log(newUser)
        },
        error: (err: any) => {console.log(err)}
      });
      
    }
    }
    
  
  










