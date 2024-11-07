import { Component } from '@angular/core';

//primeng
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
