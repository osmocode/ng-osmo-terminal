import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Terminal } from "xterm";
import { ShellService } from "./shell.service";


@Component({
    selector: 'app-shell',
    template: `<div #terminal></div>`
})
export class ShellComponent implements AfterViewInit {

    private term!: Terminal;
    @ViewChild('terminal', { static: true }) terminal!: ElementRef;

    constructor(
        private readonly shell: ShellService
    ) {}

    ngAfterViewInit(): void {
        this.term = new Terminal();
        this.term.open(this.terminal.nativeElement);
        this.shell.listen("terminal.incomingData").subscribe((data: any) => {
            this.term.write(data);
        });
        this.term.onData((data) => {
            this.shell.emit("terminal.keystroke", data);
        })

    }
}
