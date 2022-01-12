import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/http/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  list: any;
  page: number = 0;
  orderBy: string = 'name'

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.getResults(this.orderBy, this.page);
  }

  getResults(orderBy: string = 'name', offset: number = 0): void {
    this.characterService.getAllCharacters(orderBy, offset).subscribe((response: any) => {
      this.list = response.data.results
    })
  }

  backPage(): void {
    console.log("chamou back")
    if(this.page !== 0) {
      this.page--
      this.getResults(this.orderBy, this.page);
    }
  }

  nextPage():  void {
    console.log(this.list)
    if(this.list.length === 20) {
      this.page++
      this.getResults(this.orderBy, this.page);
    }
  }

}
