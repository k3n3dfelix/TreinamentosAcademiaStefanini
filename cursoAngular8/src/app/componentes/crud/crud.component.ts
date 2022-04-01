import { Images } from './../../models/placeholder.model';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  images: any;
  erro: any;

  constructor(private crudService: CrudService) {
    this.getter();
   }

  ngOnInit(): void {
  }

  getter(){
    this.crudService.getFotos().subscribe(
      (data: Images )=> {
        this.images = data;
        console.log(this.images);
        console.log("data"+data);

      },
      (error: any )=>{
        this.erro = error;
        console.error("ERROR" + error);
      })
  }

}
