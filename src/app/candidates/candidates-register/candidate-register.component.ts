import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Candidate } from "../candidate";
import { CandidatesService } from "../candidates.service";

@Component({
  selector: "app-candidate-register",
  templateUrl: "./candidate-register.component.html"
})
export class CandidateRegister implements OnInit {

  id: number;
  register: FormGroup;

  constructor(private fb: FormBuilder, private service: CandidatesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  get f() {
    return this.register.controls;
  }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params["id"];

    if (this.id) {
      this.service.findCandidate(this.id)
        .subscribe((candidate: Candidate) => this.createForm(candidate));
    }
    else {
      this.createForm(this.createNullForm());
    }
  }

  private createForm(candidate: Candidate): void {
    this.register = this.fb.group({
      id: [candidate.id],
      candidateName: [candidate.candidateName, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      deputyName: [candidate.deputyName, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      registrationDate: [candidate.registrationDate],
      subtitle: [candidate.subtitle]
    });
  }

  private createNullForm(): Candidate {
    return {
      id: 0,
      candidateName: "",
      deputyName: "",
      registrationDate: new Date(),
      subtitle: "",
    } as Candidate;
  }

  submit(): void {
    this.register.markAllAsTouched();

    if (this.register.invalid) {
      return;
    }

    const reg = this.register.getRawValue() as Candidate;
    this.save(reg);
  }

  limparForm(): void {
    this.router.navigateByUrl("candidate");
  }

  private save(candidate: Candidate) {
    if (this.id) {
      this.service.updateCandidate(candidate).subscribe(() => {
        alert("Cadastro salvo.");
        this.limparForm();
      },
        err => {
          alert("Erro ao salvar.");
          console.log(err);
        });
    }
    else {
      this.service.postCandidate(candidate).subscribe(() => {
        alert("Cadastro salvo.");
        this.limparForm();
      },
        err => {
          alert("Erro ao salvar.");
          console.log(err);
        });
    }
  }
}