import {inject, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
  name: 'htmlTransform',
  standalone: true
})
export class HtmlTransformPipe implements PipeTransform {
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer)
  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
