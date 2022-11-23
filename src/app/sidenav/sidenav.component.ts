import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  menuGerirReunioes: boolean = false;
  menuGerirSalas: boolean = false;
  menuGerirRecursos: boolean = false;

  constructor() {}

  ngOnInit() {}

  typeOfMenus: string[] = ['Gerir Reuniões', 'Gerir Salas', 'Gerir Recursos'];

  showOption(menus) {
    // menus.selectedOptions.hasValue() ? showOption(menus) : 'None'
    // return menus.selectedOptions.selected[0].value;
    if (menus.selectedOptions.hasValue()) {
      switch (menus.selectedOptions.selected[0].value) {
        case '0':
          this.menuGerirReunioes = true;
          break;
        case '1':
          this.menuGerirSalas = true;
          break;
        case '2':
          this.menuGerirReunioes = true;
          break;
        default:
          break;
      }

      return menus.selectedOptions.selected[0].value;
    } else {
      return 'None';
    }
  }
}
