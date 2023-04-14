import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ShellModule } from "@ng-osmo/shell";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ShellModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
