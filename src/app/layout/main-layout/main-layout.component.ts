import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule, 
    MatDividerModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  opened: boolean = true;
}
