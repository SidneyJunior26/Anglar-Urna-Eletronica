import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vote } from "./vote";

@Injectable({
    providedIn: 'root'
})
export class VotesService {

    private readonly API = "https://localhost:5001/vote"

    constructor(private http: HttpClient) {  }

    postVote(vote: Vote): Observable<Vote>{
        return this.http.post<Vote>(this.API, vote);
    }

    list() {
        return this.http.get<Vote[]>(this.API+"s");
    }
}