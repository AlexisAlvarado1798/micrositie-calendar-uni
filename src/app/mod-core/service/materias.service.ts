import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../models/Message";
import {UserDomain} from "../models/UserDomain";

const  ENDPOINT_USER_CALENDAR_UNI_SERVICE = "http://localhost:8080/university-subject"

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  constructor(private httpService: HttpClient) {
  }

  getFindAll(): Observable<Message<any>> {
    return this.httpService.get(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`)
  }

}
