import { Injectable } from "@angular/core";
import { enviroment } from "../enviroments/enviroment";

@Injectable(
    {
        providedIn: "root"
    }
)
export class LoginService {
    private readonly baseURL = enviroment["endPoint"];
}