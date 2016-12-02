
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*
NOTE: This module will be imported in feature modules => put only commonly used
components, directives and pipes here that are needed by the templates of other
modules.

Be careful if you export PROVIDERs here because each Module that imports
SharedModule will get a new instance of those PROVIDERs. If you need global
singletons put them in own module ( ex. CoreModule ) and import this module
only once in AppModule.
*/

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
