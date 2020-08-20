import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  // expansion panel
  panelOpenState = false;
  public errorApi = false;
  searchText: any;
  countries: any;
  countryNew:any;
  places_object: any;
  governments: any;
  governmentNew : any;
  governmentDetailsNew : any;

  id: any;
  place_id: any;
  c_id: any;

  country: any;
  home : any;
  home1:any;
  step = 0;
  companyZeinab: any;
  countryDetails: any;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(private placesService: PlacesService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getPlaces();
  }
  getPlaces() : void{
    this.placesService.getPlaces().subscribe(res => {
      // countries
      this.countries = res;
      //console.log(this.countries);
      // // goverments
      // this.governments = this.countries
      // .filter(element => element.parentId == this.id)[0]
      // .children;

    });
  }

  // getGovernmentByFilter(country_children){
  //   console.log("country_children by parent id" , country_children);
  // }

  getChilern(obj){
    //this.countryNew = this.countries.find(a=>a.id == id);
    this.governmentNew = this.countries.find(a=>a.id == obj.id).children;
    //console.log("Data From CountryNew", this.countryNew)
  this.home = obj;
  }

  getGovernmentDetails(obj){
    //this.countryNew = this.countries.find(a=>a.id == id);
    debugger;
    this.governmentDetailsNew = obj;
    // this.home1 = obj;
    //console.log("Data From getGovernmentDetails", this.home1)
    //console.log("Data From getGovernmentDetails", obj)

  }

}

