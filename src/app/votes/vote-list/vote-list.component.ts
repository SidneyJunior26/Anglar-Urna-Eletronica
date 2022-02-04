
import { Component, OnInit } from "@angular/core";
import { Vote } from "../vote";
import { VotesService } from "../vote.service";

@Component({
    selector: "app-vote-list",
    templateUrl: "./vote-list.component.html"
})
export class VoteList implements OnInit {

    votes: Vote[];

    displayedColumns: string[] = ['candidateName', 'deputyName', 'candidateVotes'];

    constructor(private service: VotesService) { }

    ngOnInit(): void {
        this.service.list().subscribe(result => this.votes = result);
    }
}