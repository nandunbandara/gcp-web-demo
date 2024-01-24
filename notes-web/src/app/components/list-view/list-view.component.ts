import { Component } from '@angular/core';
import Note, {INoteDTO} from "../../types/note";
import {NoteService} from "../../services/note.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule],
  providers: [NoteService],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  public notes: Note[] = [];

  constructor(private noteService: NoteService) {
    this.noteService.getNoteObservable().subscribe({
      next: (notes: Note[]) => {
        console.log('Notes: ', notes);
        this.notes.push(...notes)
      }
    });
    this.noteService.loadNotes();
  }
}
