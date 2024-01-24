import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from "./components/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'notes-web';
}
