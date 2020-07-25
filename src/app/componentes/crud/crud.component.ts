import { Images } from './../../models/artigoos.model';
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
  getter() {
    this.crudService.getArtigoos().subscribe(
      (data: Images) => {
        this.images = data;
        console.log('O data que recebemos ' , data)
        console.log('A variavel que preenchemos ', this.images)
    },
   (error:any) => {
      this.erro = error;
      console.error('ERRO:', error)
    });
  }
}
