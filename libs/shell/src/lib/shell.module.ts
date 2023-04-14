import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ShellService } from './shell.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ShellComponent,
    ],
    exports: [
        ShellComponent
    ],
    providers: [
        ShellService
    ]
})
export class ShellModule {}
