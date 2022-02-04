import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material/material.module";
import { VoteList } from "./vote-list/vote-list.component";
import { VoteRegister } from "./vote-register/vote-register.component";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [VoteList,VoteRegister],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class VoteModule { }