import { Component, OnInit } from '@angular/core';
import { TopService } from '../shared/top.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
topCollection:any[]
  constructor(private topService:TopService) { }

  ngOnInit(): void {
   this.topCollection=this.topService.getTopCollections()
  }

}
