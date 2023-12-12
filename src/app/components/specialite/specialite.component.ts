import { Component, Input } from '@angular/core';
import { Specialite } from '../../models/specialite';
import { SpecServiceService } from '../../services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent {

  @Input() messageChild: string = '';

  tabSpecialite?: Specialite[];
  specialite?: Specialite;

  constructor(private specService: SpecServiceService) {}

  ngOnInit(): void {
    this.tabSpecialite = this.specService.tabSpec;
  }

}
