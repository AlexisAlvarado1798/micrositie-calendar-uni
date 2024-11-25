import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RequestLogin} from "../models/RequestLogin";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Message} from "../models/Message";
import {UserDomain} from "../models/UserDomain";

const  ENDPOINT_AUTHENTICATION_CALENDAR_UNI_SERVICE = "http://localhost:8080/authentication"
const  ENDPOINT_USER_CALENDAR_UNI_SERVICE = "http://localhost:8080/user"


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpClient) {
    }

  getAuthentication(requestLogin: RequestLogin) {
    return this.httpService.post(`${ENDPOINT_AUTHENTICATION_CALENDAR_UNI_SERVICE}`, requestLogin)
  }

  getFindAll(): Observable<Message<UserDomain>> {
    return this.httpService.get(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`)
  }

  save(userDomain: UserDomain){
    return this.httpService.post(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`, userDomain)
  }

  update(userDomain: UserDomain){
    return this.httpService.put(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`, userDomain)
  }

  delete(username: string) {
    return this.httpService.delete(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE  + "?username=" + username}`)

  }

}
