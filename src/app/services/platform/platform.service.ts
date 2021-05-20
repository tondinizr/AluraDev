import { Observable, of, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  private subject = new Subject<string>();

  constructor() {}

  setPlatform(platform: string): void {
    this.subject.next(platform);
  }

  clearData(): void {
    this.subject.next();
  }

  getPlatform(): Observable<string> {
    return this.subject.asObservable();
  }
}
