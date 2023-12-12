import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {


  @Input() messageChild: string = '';

  tabEtudiant?: Etudiant[];
  etudiant?: Etudiant;

  constructor(private etudiantService: EtudiantServiceService) {}

  ngOnInit(): void {
    this.tabEtudiant = this.etudiantService.tabEtud;
  }

}
