import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-side-filter',
  templateUrl: './server-side-filter.component.html',
  styleUrls: ['./server-side-filter.component.css']
})
export class ServerSideFilterComponent implements OnInit {
  userArray: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadAllUsers()
  }

  loadAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
        this.userArray=res
        console.log("userarray",this.userArray)
    })
  }
}
