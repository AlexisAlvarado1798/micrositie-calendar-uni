import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RequestLogin} from "../../../mod-core/models/RequestLogin";

const  ENDPOINT_CALENDAR_UNI_SERVICE = "http://localhost:8080/authentication"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpClient) {
    }
  getAuthentication(requestLogin: RequestLogin) {
    return this.httpService.post(`${ENDPOINT_CALENDAR_UNI_SERVICE}`, requestLogin)
  }
}
