import { dataFake } from 'src/app/data/dataFake';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css'],
})
export class DescriptionsComponent {
  @Input() id: string | null = '0';
  protected title: string = '';
  protected descriptions: string = '';
  protected content: string = '';
  protected value: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => value.get('id'));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter((value) => value.id === this.id)[0];
    this.title = result.title;
    this.descriptions = result.description;
    this.content = result.content;
    this.value = result.value;
  }
}
