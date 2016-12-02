
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [],
    exports: [
        /* 
            Export them so that modules that import SharedModule 
            ( which will be most feature modules) don't have to import those
            "common" modules => reduce repetition.
        */
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }