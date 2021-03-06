import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlayerapiService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://webapi-prod.us-west-2.elasticbeanstalk.com/api';

  getLoginPlayer(username : string): Promise<Player> {
    console.log("got user nickname: ", username);
    return firstValueFrom(this.http.get<Player>(this.rootURL+"/Player/login/"+username))
  }

  getPlayerByID(id: number): Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.rootURL}/Player/${id}`))
  }

  getPlayerByUsername(username: string): Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.rootURL}/Player/user/${username}`))
  }

  updatePlayer(playerToUpdate: Player): Promise<any>{
    return firstValueFrom(this.http.put<any>(`${this.rootURL}/Player`, playerToUpdate))
  }

}
