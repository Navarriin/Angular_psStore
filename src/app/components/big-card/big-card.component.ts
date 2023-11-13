import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input() id: string | null = '0';
  protected photoCover: string = '';
  protected title: string = '';
  protected content: string = '';
  protected value: string = '';

  constructor() {}

  ngOnInit(): void {
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter((value) => value.id === id)[0];
    this.photoCover = result.photo;
    this.title = result.title;
    this.content = result.content;
    this.value = result.value;
  }
}
