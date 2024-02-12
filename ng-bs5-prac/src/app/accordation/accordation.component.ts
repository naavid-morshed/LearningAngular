import { Component } from '@angular/core';
import {
  NgbAccordionBody, NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem, NgbAlert
} from "@ng-bootstrap/ng-bootstrap";
import {close} from "node:fs";

@Component({
  selector: 'app-accordation',
  standalone: true,
  imports: [
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionCollapse,
    NgbAccordionBody,
    NgbAccordionButton,
    NgbAlert
  ],
  templateUrl: './accordation.component.html',
  styles: ``
})
export class AccordationComponent {

}
