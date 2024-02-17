import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { UserModel } from '../model/model';



const baseUrl: string = 'http://localhost:8000/datas';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private users: UserModel[] = [];
  private userUpdated = new Subject<UserModel[]>();

  constructor(private http: HttpClient) { 

  }

  getData(): Observable<UserModel[]> {
    return this.http.get(`${baseUrl}`).pipe(map((data: any) => {
      return data && data.map((elem: any) => new UserModel (elem) || []);
    }))
}

  create(newUser: UserModel): Observable<UserModel> {
    return this.http.post(`${baseUrl}`, newUser).pipe(map((data:any) => {
      return new UserModel(data);
    }))
  }
  getOne(id: string): Observable<UserModel> {
    return this.http.get(`${baseUrl}/${id}`).pipe(map((data: any) => {
      return new UserModel(data);
    }))
  }
  getOn(userId: string): Observable<UserModel> {
    return this.http.get(`${baseUrl}/${userId}`).pipe(map((data: any) => {
      return new UserModel(data)
    }))
  }


  update(userId: string, user: UserModel): Observable<UserModel> {
    return this.http.put(`${baseUrl}/${userId}`, user).pipe(map((data: any) => {
      return new UserModel(data)
    }))
  }

  delete(userId: string): Observable<UserModel> {
    return this.http.delete(`${baseUrl}/${userId}`).pipe(map((data:any) => { return new UserModel(data)}))
    
  }

}



  

