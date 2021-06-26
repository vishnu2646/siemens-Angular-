import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class apiService{
    constructor(private httpClient: HttpClient) { }
    getComments(): Observable<any>{
        return this.httpClient.get('https://60d6beae307c300017a5f490.mockapi.io/student/student')
    }
    id:number;
    getCommentsbyParams(id):Observable<any>{
        return this.httpClient.get(`https://60d6beae307c300017a5f490.mockapi.io/student/student/${id}`)
    }
}