import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { Activities } from 'app/model/activities.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  searchText:string;

  activitiesData: Activities[];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.getAllActivities();
  }

  getAllActivities(){
    this.activitiesService.getActivities().subscribe(res => {
      this.activitiesData = res;
    })
  }

  //  19/8/2016
  onSelect(selectedActivity: object) {
    this.activitiesService.setActivitySubject(selectedActivity);
}
deleteActivity(id: number){
  this.activitiesService.deleteActivity(id).subscribe(
    () => {
      console.log("successfuly deleted")
      this.getAllActivities()
    });
    
}
}
