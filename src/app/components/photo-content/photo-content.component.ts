import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-photo-content',
  templateUrl: './photo-content.component.html',
  styleUrls: ['./photo-content.component.css'],
})
export class PhotoContentComponent {
  private id: string | null = '0';
  protected photo: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter((value) => value.id === id)[0];
    this.photo = result.photo;
  }
}
