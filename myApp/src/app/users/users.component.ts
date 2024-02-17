import { Component, Input} from '@angular/core';
import { UserModel } from '../model/model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  constructor(private http: ServiceService) {

  }

  users: UserModel[] = [];
  
  ngOnInit(): void {
    this.http.getData().subscribe({
      next: (users: UserModel[]) => {
        console.log("Podaci nakon dodavanja:", this.users);
        this.users = users;
      },
      error: (err: any) => { console.log(err) }
    })
    
  }
  onDelete(user: UserModel): void {
    this.http.delete(user.id).subscribe({
      next: (data: UserModel) => {
        this.ngOnInit();
      }
    })
  }
  

}
