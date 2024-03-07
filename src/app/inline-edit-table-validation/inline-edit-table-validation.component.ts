import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline-edit-table-validation',
  templateUrl: './inline-edit-table-validation.component.html',
  styleUrls: ['./inline-edit-table-validation.component.css']
})
export class InlineEditTableValidationComponent implements OnInit {

  userArray:any[]=[]
  oldUserObj: string;

  constructor(private http:HttpClient,private title:Title) { }

  ngOnInit(): void {

    this.loadAllUsers()
      this.title.setTitle("inlineEdit-table")
  }

  loadAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
        this.userArray=res;
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

  validationField(item:any){
    if(item!==''){
      return false;
    }else{
      return true
    }
  }

  validationUsername(userName:string){
    if(userName === ''){
      return "Required"
    }else{
      if(userName.length >= 3){
        return " "
      }else{
        return "Min 3 char "
      }
    }
  }

  validationForm(obj:any){
    if(obj.name!='' && obj.username!='' && obj.phone!='' && obj.email!='' ){
      return false
    }else{
      return true
    }
  }

  onCancel(item:any){
    item.isEdit=false
  }
}
