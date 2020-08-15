import { Component, OnInit } from '@angular/core';
import { Industry } from "../data/industry";

@Component({
  selector: 'app-government',
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.scss']
})
export class GovernmentComponent implements OnInit {

  industries: Industry[] = [
    {name: "agriculture",
    image: "assets/images/industry.jpg",
    plot: "assets/images/industry.jpg"},
    {name: "agriculture",
    image: "assets/images/industry.jpg",
    plot: "assets/images/industry.jpg"},
    {name: "agriculture",
    image: "assets/images/industry.jpg",
    plot: "assets/images/industry.jpg"},
    {name: "agriculture",
    image: "assets/images/industry.jpg",
    plot: "assets/images/industry.jpg"},
    {name: "agriculture",
    image: "assets/images/industry.jpg",
    plot: "assets/images/industry.jpg"},
    {name: "agriculture",
    image: "assets/images/industry.jpg",
    plot: "assets/images/industry.jpg"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
