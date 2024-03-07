import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-server-side-filter',
  templateUrl: './server-side-filter.component.html',
  styleUrls: ['./server-side-filter.component.css']
})
export class ServerSideFilterComponent implements OnInit {
  userArray: any;

  constructor(private http:HttpClient,private title:Title) { }

  ngOnInit(): void {
    this.loadAllUsers()
      this.title.setTitle("server-side-filter")
  }

  loadAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
        this.userArray=res
        console.log("userarray",this.userArray)
    })
  }
}
