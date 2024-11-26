import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../models/Message";
import {UserDomain} from "../models/UserDomain";
import {RoomDomain} from "../models/RoomDomain";

const  ENDPOINT_USER_CALENDAR_UNI_SERVICE = "http://localhost:8080/room"

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private httpService: HttpClient) {
  }

  getFindAll(): Observable<Message<RoomDomain>> {
    return this.httpService.get(`${ENDPOINT_USER_CALENDAR_UNI_SERVICE}`)
  }
}
