import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material/material.module";
import { CandidateListComponent } from "./candidates-list/candidate-list.component";
import { CandidateRegister } from "./candidates-register/candidate-register.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        CandidateRegister, CandidateListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CandidateModule { }