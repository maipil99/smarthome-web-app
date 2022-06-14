import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class LinkqualityService{

      public linkquality: number;
      public linkqualityData: any[] = [];

      constructor(){
          
      }
    }