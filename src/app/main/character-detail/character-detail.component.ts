import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharactersService } from 'src/app/core/http/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {

  list: any
  subscribe: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersService
  ) { }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.subscribe = this.characterService.getChar(id).subscribe((response: any) => {
      this.list = response.data.results
    })
  }

}
