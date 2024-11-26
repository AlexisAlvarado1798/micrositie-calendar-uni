import {Injectable} from "@angular/core";
import {UserDomain} from "../models/UserDomain";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../models/Message";
import {ScheduleDomain} from "../models/ScheduleDomain";

const  ENDPOINT_USER_CALENDAR_UNI_SERVICE = "http://localhost:8080/schedule"

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private httpService: HttpClient) {
  }
  save(scheduleDomain: any){
    return this.httpService.post(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`, scheduleDomain)
  }

  getFindAll():Observable<Message<ScheduleDomain>> {
    return this.httpService.get(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`)
  }

  delete(scheduleDomain: any) {
    return this.httpService.delete(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE  + "?id=" + scheduleDomain}`)
  }

  update(scheduleDomain: ScheduleDomain) {
    return this.httpService.put(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`, scheduleDomain)


  }
}
