
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Candidate } from "../candidate";
import { CandidatesService } from "../candidates.service";

@Component({
    selector: "app-candidate-list",
    templateUrl: "./candidate-list.component.html"
})
export class CandidateListComponent implements OnInit {

    candidates: Candidate[];

    displayedColumns: string[] = ['id', 'candidateName', 'deputyName', 'registrationDate', 'subtitle', 'actions'];

    constructor(private service: CandidatesService, private actvatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.service.list().subscribe(result => this.candidates = result);
    }

    delete(id: number) {
        this.service.deleteCandidate(id).subscribe(() => {
            alert("Cadastro excluido.");
            this.service.list().subscribe(result => this.candidates = result);
        },
            err => {
                alert("Erro ao apagar.");
            });
    }

    edit(id: number) {
        this.router.navigateByUrl("register/" + id);
    }

}