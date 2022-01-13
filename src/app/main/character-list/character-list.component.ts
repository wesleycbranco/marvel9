import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharactersService } from 'src/app/core/http/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  list: any;
  page: number = 0;
  orderBy: string = 'name';
  subscribe: Subscription = new Subscription();

  constructor(
    private characterService: CharactersService,
    private router: Router
  ) { }


  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  ngOnInit(): void {
    this.getResults(this.orderBy, this.page);
  }

  private getResults(orderBy: string = 'name', offset: number = 0): void {
    this.subscribe = this.characterService.getAllCharacters(orderBy, offset).subscribe((response: any) => {
      this.list = response.data.results
    })
  }

  backPage(): void {
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
    this.router.navigate(['main', 'personagem', `${id}`]);
  }

}
