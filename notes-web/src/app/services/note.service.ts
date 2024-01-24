import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import Note from "../types/note";
import {environment} from "../../environments/environment";
import {IAPIHealth} from "../types/health";
import {IAPIResponse} from "../types/api";

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    private _noteSubject: Subject<Note[]> = new Subject<Note[]>();
    private _healthSubject: Subject<IAPIHealth> = new Subject<IAPIHealth>();

    constructor(
        private http: HttpClient
    ) {
    }

    public getHealthStatus() {
        this.http.get<IAPIResponse<IAPIHealth>>(`${environment.apiHost}/api/v1/health`)
            .subscribe({
                next: (response: IAPIResponse<IAPIHealth>) => {
                    this._healthSubject.next(response.data);
                },
                error: () => {
                }
            })
    }

    public loadNotes(lastId?: string) {
        this.http.get<IAPIResponse<Note[]>>(`${environment.apiHost}/api/v1/notes`)
            .subscribe({
                next: (response: IAPIResponse<Note[]>) => {
                    if (response.success) {
                        this._noteSubject.next(response.data);
                    }
                },
                error: () => {
                }
            })
    }

    public createNote(content: string) {
        return this.http.post(`${environment.apiHost}/api/v1/notes`, { content });
    }

    public getNoteObservable(): Observable<Note[]> {
        return this._noteSubject.asObservable();
    }

    public getHealthObservable(): Observable<IAPIHealth> {
        return this._healthSubject.asObservable();
    }
}
