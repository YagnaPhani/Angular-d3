import { Component, Input } from '@angular/core';
import { Link } from '../../../d3';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        class="link"
        [attr.x1]="link.source.mx ? link.source.mx : link.source.x"
        [attr.y1]="link.source.my ? link.source.my : link.source.y"
        [attr.x2]="link.target.mx ? link.target.mx : link.target.x"
        [attr.y2]="link.target.my ? link.target.my : link.target.y"
    ></svg:line>
  `,
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent  {
  @Input('linkVisual') link: Link;
}
