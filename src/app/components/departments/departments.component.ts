import { Component, OnInit } from '@angular/core';
import { ColombiaApiService } from '../../services/colombia-api.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html'
})
export class DepartmentsComponent implements OnInit {
  departments: any[] = [];

  constructor(private colombiaApiService: ColombiaApiService) {}

  ngOnInit() {
    this.colombiaApiService.getDepartments().subscribe(data => {
      console.log(data)
      this.departments = data;
    });
  }
}
