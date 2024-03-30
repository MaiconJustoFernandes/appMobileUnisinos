import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  viewMode = 'list';
  images: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/GaleriaDeFotos/Fotos.json').subscribe(data => {
      this.images = data as any[];
    });
  }

  toggleViewMode() {
    this.viewMode = this.viewMode === 'list' ? 'grid' : 'list';
  }
}
