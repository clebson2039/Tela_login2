import { Injectable } from "@angular/core";
import { enviroment } from "../enviroments/enviroment";
import {HttpClient} from "@angular/common/http";

@Injectable(
    {
        providedIn: "root"
    }
)
export class LoginService {
    constructor(private httpClient: HttpClient){

    }
    private readonly baseURL = enviroment["endPoint"];

    LoginUsuario(object: any ){
        return this.httpClient.post<any>('${this.baseURL}/CriarTokenIdentity/', object);
    }
}