import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ClientsAddComponent } from '../clients-add/clients-add.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, ClientsAddComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

}
