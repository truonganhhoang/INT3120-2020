import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
