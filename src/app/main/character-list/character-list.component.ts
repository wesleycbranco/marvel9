import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/http/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  list: any;

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((response: any) => {
      console.log(response)
      this.list = response.data.results
    })
  }

}
