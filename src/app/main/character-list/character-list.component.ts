import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private characterService: CharactersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getResults(this.orderBy, this.page);
  }

  private getResults(orderBy: string = 'name', offset: number = 0): void {
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

  openCharacter(id:number): void {
    console.log(id)
    this.router.navigate(['main', 'personagem', [`${id}`]]);
  }

}
