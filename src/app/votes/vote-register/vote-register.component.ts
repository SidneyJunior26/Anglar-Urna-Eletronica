import { Component, OnInit } from "@angular/core";
import { Candidate } from "src/app/candidates/candidate";
import { CandidatesService } from "src/app/candidates/candidates.service";
import { Vote } from "../vote";
import { VotesService } from "../vote.service";

@Component({
    selector: "app-vote-register",
    templateUrl: "./vote-register.component.html",
    styleUrls: ['./vote-register.component.css']
})
export class VoteRegister implements OnInit {
    currentNumber = '0';
    firstOperand = null;
    operator = null;
    waitForSecondNumber = false;
    candidateName: string;

    constructor(private candidateService: CandidatesService, private voteService: VotesService) { }

    ngOnInit() {
    }

    public getNumber(id: string) {
        if (this.currentNumber.length == 1) {
            this.candidateName = "";
            if (this.waitForSecondNumber) {
                this.currentNumber = id;
                this.waitForSecondNumber = false;
            } else {
                this.currentNumber === '0' ? this.currentNumber = id : this.currentNumber += id;

            }
            this.candidateService.findCandidate(Number(id))
                .subscribe((candidate: Candidate) => this.candidateName = "Candidato selecionado: " + candidate.candidateName);
        }
    }

    nullVote() {
        this.voteService.postVote({
            candidateId: "0"
        } as Vote).subscribe(() => {
            alert("Voto Computado.");
        },
        err => {
            alert("Erro ao votar. ");
            console.log(err);
        }
        );
    }

    vote() {
        if (this.candidateName != ""){
            this.voteService.postVote({
                    candidateId: this.currentNumber
                } as Vote).subscribe(() => {
                    alert("Voto Computado.");
                },
                err => {
                    alert("Erro ao votar. ");
                    console.log(err);
                }
                );
        }
    }

    public clear() {
        this.currentNumber = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
        this.candidateName = "";
    }

}