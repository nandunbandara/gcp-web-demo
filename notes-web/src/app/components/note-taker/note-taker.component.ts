import {Component} from '@angular/core';
import {MatFormFieldModule, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInputModule, MatInput} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {NoteService} from "../../services/note.service";

@Component({
    selector: 'app-note-taker',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatInput,
        FormsModule
    ],
    providers: [NoteService],
    templateUrl: './note-taker.component.html',
    styleUrl: './note-taker.component.scss'
})
export class NoteTakerComponent {
    public content: string = '';

    constructor(
        private noteService: NoteService
    ) {
    }

    public createNote() {
        this.noteService.createNote(this.content)
            .subscribe({
                next: () => {
                    this.clear();
                    this.noteService.loadNotes();
                }
            })
        this.clear();
    }

    public clear(): void {
        this.content = '';
    }
}
