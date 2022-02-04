import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Candidate } from "./candidate";

@Injectable({
    providedIn: 'root'
})

export class CandidatesService{

    private readonly API = "https://localhost:5001/candidate"

    constructor(private http: HttpClient) {  }

    list() {
        return this.http.get<Candidate[]>(this.API);
    }

    postCandidate(candidate: Candidate): Observable<Candidate>{
        return this.http.post<Candidate>(this.API, candidate);
    }

    updateCandidate(candidate: Candidate): Observable<Candidate>{
        return this.http.put<Candidate>(this.API, candidate);
    }

    deleteCandidate(id: number): Observable<void>{
        return this.http.delete<void>(this.API + "/" + id);
    }

    findCandidate(id: number): Observable<Candidate> {
        return this.http.get<Candidate>(this.API + "/" + id);
    }
}