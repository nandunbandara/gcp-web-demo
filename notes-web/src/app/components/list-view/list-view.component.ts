import {Component} from '@angular/core';
import Note, {INoteDTO} from "../../types/note";
import {NoteService} from "../../services/note.service";
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-list-view',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatCardModule],
    providers: [NoteService],
    templateUrl: './list-view.component.html',
    styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
    public notes: Note[] = [];
    public lastId: string | undefined = undefined;

    constructor(private noteService: NoteService) {
        this.noteService.getNoteObservable().subscribe({
            next: (notes: Note[]) => {
                console.log('Notes: ', notes);
                this.notes.push(...notes)
                if (this.notes.length > 0) {
                    this.lastId = notes[notes.length - 1].ID;
                }
            }
        });
        this.noteService.loadNotes();
    }

    public loadMore() {
        this.noteService.loadNotes(this.lastId);
    }
}
