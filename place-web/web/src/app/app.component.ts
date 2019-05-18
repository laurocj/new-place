import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SharedDataService } from './_service/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  faBars = faBars;

  private _mobileQueryListener: () => void;

  public isDarkThemeActive:boolean;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private readonly _sharedDataService: SharedDataService) {    
    this._sharedDataService.OnThemeSwitch.subscribe( value => {
      this.isDarkThemeActive = value;
    });
    
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // TODO isso deve ser colocado em controles
  onThemeChange(event){
    this._sharedDataService.OnThemeSwitch.next(event.checked);
  }

}
