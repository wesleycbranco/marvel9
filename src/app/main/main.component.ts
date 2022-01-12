import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../core/http/characters.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe()
  }

}
