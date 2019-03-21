import { Component, OnInit } from '@angular/core';
import { UsdaDbService } from '../../services/usda-db.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  providers: [UsdaDbService]
})
export class SearchFieldComponent implements OnInit {

  timeout: number;
  ndbno: string;

  constructor(private usdaService: UsdaDbService) {
    this.timeout = null;
    this.ndbno = null;
  }

  ngOnInit() {
  }

  onKey(event: any) {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(function () {
      this.ndbno = "01009";

      // this.usdaService.foodQuery('ham').subscribe(
      //   response => {
      //     let x = response.json();
      //     let y = x.list.item.map( item => {
      //       return {
      //         name: item.name,
      //         ndbno: item.ndbno
      //       };
      //     });
      //     // console.log(y);
      // },
      //   error => {
      //     console.log(error);
      // });


        console.log('Input Value:', event.target.value);
    }, 500);
  }

}
