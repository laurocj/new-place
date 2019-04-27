import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  public OnThemeSwitch: Subject<boolean> = new Subject<boolean>();
}
