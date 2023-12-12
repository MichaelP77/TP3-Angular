import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
public tabEtud = [
  new Etudiant("RIVAN", "Claude", "24 rue de Montreuil", "75000", "Paris", "ouioui@gmail.com", "homme", 20, 11001),
  new Etudiant("SON", "Goku", "45 rue de Montreuil", "75000", "Paris", "goku@gmail.com", "homme", 37, 23981),
  new Etudiant("SON", "Gohan", "46 rue de Montreuil", "75000", "Paris", "gohan@gmail.com", "homme", 21, 12345),
  new Etudiant("MESSI", "Lionel", "Rue de Castellfedelles", "99000", "Barcelone", "messi@gmail.com", "GOAT", 36, 77801),
]

  constructor() { }
}
