import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline-edit-table',
  templateUrl: './inline-edit-table.component.html',
  styleUrls: ['./inline-edit-table.component.css']
})
export class InlineEditTableComponent implements OnInit {

  userArray:any[] = [];
  oldUserObj: string;
 

  constructor(private http:HttpClient,private title:Title) { }

  ngOnInit(): void {
    this.loadAllUsers()
       this.title.setTitle("inlineedi")
  }

  loadAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
        this.userArray=res
        console.log("userarray",this.userArray)
    })
  }

  onEdit(userObj:any){
    this.oldUserObj=JSON.stringify(userObj)
    console.log("oldddd",this.oldUserObj)
    this.userArray.forEach(element => {
      element.isEdit=false
    });
    userObj.isEdit=true                   //user.isedit =true added in a object bcz when play with functionality in html
    console.log(userObj,"userobject")
  }
  
  addNew(){
    const obj={
      "id": 1,
      "name": " ",
      "username": " ",
      "email": " ",
      "phone": " ",
      "website": " "                                                                                                                                                                                                                                             ,
      "isEdit":true
    }
    this.userArray.push(obj)  // unshift means row added in first row
  }

  onUpdate(userObj){
      console.log("iiii",userObj)
  }

  onCancel(obj:any){
    const oldObj =JSON.parse(this.oldUserObj); //we have stored old data while click on cancel button on seperated variable 
                                                //you can check uncomment that  line you clear the point
    obj.name=oldObj.name;
    obj.username=oldObj.username;
    obj.isEdit=false
  }

  onDelete(i:any){
     this.userArray.splice(i,1)
  }

                    
}
