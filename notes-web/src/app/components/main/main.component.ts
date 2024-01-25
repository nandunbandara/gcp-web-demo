import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteTakerComponent} from "../note-taker/note-taker.component";
import {ListViewComponent} from "../list-view/list-view.component";
import {NoteService} from "../../services/note.service";
import {Observable} from "rxjs";
import {IAPIHealth} from "../../types/health";
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
        CommonModule,
        NoteTakerComponent,
        ListViewComponent,
        MatButtonModule,
    ],
    providers: [NoteService],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {
    public health$: Observable<IAPIHealth>;

    constructor(
        private noteService: NoteService
    ) {
        this.health$ = this.noteService.getHealthObservable();
        this.noteService.getHealthStatus();
    }

    public getHealth() {
        this.noteService.getHealthStatus();
    }
}
