import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../model/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  user!: UserModel; 
  userId!: string;
  loginForm!: FormGroup; 

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required)
    });
  
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
     
    });
  }

  onSubmit() {
    if (this.loginForm.valid && this.userId) {
      const updatedUser = {
        ...this.user,
        name: this.loginForm.get('name')?.value,
        surname: this.loginForm.get('surname')?.value
      };
      this.service.update(this.userId, updatedUser)
        .subscribe(user => {
          this.router.navigate(['/users']);
        }, error => {
        });
    }
  }
}


