import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '../model/model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {

  @Input()
  user: UserModel = new UserModel();
  @Output() delete: EventEmitter<UserModel> = new EventEmitter();
  
  constructor() {}

	ngOnInit() {}

	onDelete(user: UserModel): void {
		this.delete.emit(user);
	}
  
  
}
