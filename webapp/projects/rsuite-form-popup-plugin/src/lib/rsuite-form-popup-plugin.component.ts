import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-rsuite-form-popup-plugin',
  template: `
    <p>
      rsuite-form-popup-plugin works!
      RSE v6.10.0
    </p>
  `,
  styles: [
  ]
})
export class RsuiteFormPopupPluginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.debug('RsuiteFormPopupPluginComponent ngOnInit');
  }

}
