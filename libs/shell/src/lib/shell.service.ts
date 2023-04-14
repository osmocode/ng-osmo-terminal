import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import io from 'socket.io-client';

@Injectable()
export class ShellService {

    socket: any;
    readonly uri: string = "ws://localhost:1234";

    constructor() {
        this.socket = io(this.uri);
        console.log('Service start...');
    }

    listen(event: string) {
        return new Observable((subscriber) => {
            this.socket.on(event, (data: any) => {
                subscriber.next(data);
            });
        })
    }

    emit(event: string, data: any) {
        this.socket.emit(event, data);
    }

}
