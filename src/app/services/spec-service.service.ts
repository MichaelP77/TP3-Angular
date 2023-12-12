import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecServiceService {
  public tabSpec = [
    new Specialite("libelle1", 2345),
    new Specialite("libelle2", 2346),
    new Specialite("libelle3", 2347),
    new Specialite("libelle4", 2348),
  ]
  constructor() { }
}
