import {Observable} from "rxjs";
import {Message} from "../models/Message";
import {UserDomain} from "../models/UserDomain";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

const  ENDPOINT_USER_CALENDAR_UNI_SERVICE = "http://localhost:8080/professor"

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  constructor(private httpService: HttpClient) {
  }

  getFindAll(): Observable<Message<UserDomain>> {
    return this.httpService.get(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`)
  }
}
