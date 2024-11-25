import {Injectable} from "@angular/core";
import {UserDomain} from "../models/UserDomain";
import {HttpClient} from "@angular/common/http";

const  ENDPOINT_USER_CALENDAR_UNI_SERVICE = "http://localhost:8080/schedule"

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private httpService: HttpClient) {
  }
  save(userDomain: UserDomain){
    return this.httpService.post(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`, userDomain)
  }
}
