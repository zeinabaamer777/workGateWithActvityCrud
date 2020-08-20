import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivitiesService } from '../../services/activities.service';
import { Activities } from 'app/model/activities.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  activityForm: FormGroup;
  activityObject: Activities;
  isHiddenSaveActionBtn: boolean;
  isDisabled: boolean;
  isHiddenActionBtn: boolean;
  activityId :number;
  isHiddenSaveCreateBtn: boolean;
  isHiddenEditActionBtn: boolean;
  isHiddenCreateActionBtn: boolean;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public ActivitiesService: ActivitiesService
  ) { }

 
  ngOnInit(): void {
    this.isHiddenActionBtn = true;
    this.isHiddenSaveActionBtn = true;
    this.isHiddenSaveCreateBtn = true;
    this.isHiddenEditActionBtn = true;
      this.isHiddenCreateActionBtn = true;
    this.printDataToForm();
    this.activityForm = this.fb.group({
      enName: new FormControl({ value: '', disabled: true }, [Validators.required]),
      arName: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.email]),
      centralAdminArName: new FormControl({ value: '', disabled: true }, [Validators.required]),
      centralAdminEnName: new FormControl({ value: '', disabled: true }, [Validators.required]),
    });

  }
  //#region 0 printDataToForm to print data on clcik on each td on the table
  printDataToForm(){
    this.ActivitiesService.getActivitySubject().subscribe(res => {
      this.isHiddenActionBtn = false;
      this.isHiddenCreateActionBtn = false;
    this.isHiddenEditActionBtn = false;
      this.activityId = res.activityId
      this.activityForm = this.fb.group({
       
        enName: new FormControl({ value:res.enName, disabled: true }, [Validators.required]),
        arName: new FormControl({ value: res.arName, disabled: true }, [Validators.required]),
        centralAdminArName: new FormControl({ value: res.centralAdminArName, disabled: true }, [Validators.required]),
        centralAdminEnName: new FormControl({ value: res.centeralAdminEnName, disabled: true }, [Validators.required]),
      
      });
    });
  }
  //#endregion
//#region showBtns() method to show save and cancel btns on click on update btn
  showBtns(){
    this.isDisabled = true;
    this.isHiddenSaveActionBtn = false;
    this.isHiddenCreateActionBtn = true;
    this.activityForm.enable();
  }
  //#endregion

  //#region showBtns() method to show save and cancel btns on click on update btn
  showCreateSaveBtn(){
    this.isDisabled = true;
    this.isHiddenSaveCreateBtn = false;
    this.isHiddenSaveActionBtn = true;
    this.isHiddenEditActionBtn = true;
    this.activityForm.enable();
  }
  //#endregion

  //#region updateRecord() method to update data of the row in table
  updateRecord() {
    this.isDisabled = false;
    this.ActivitiesService.updateActivity(this.activityForm.value , this.activityId).subscribe(res => {
     console.log("Activity Updated")
     
    });

  }
  //#endregion

  createActivity(){
    this.isDisabled = false;
    this.ActivitiesService.createActivities(this.activityForm.value).subscribe(res => {
      console.log("Activity Created");
    })
  }

  //#region reset() method
  onReset() {
    this.isDisabled = true;
    // this.isHiddenSaveActionBtn = false;
    this.isHiddenActionBtn = false;
    this.isHiddenCreateActionBtn = false;
    this.isHiddenEditActionBtn = false;
    this.isHiddenSaveCreateBtn = true;
    this.isHiddenSaveActionBtn = true;
    this.activityForm.reset();
    this.activityForm.disable();
  }


}
