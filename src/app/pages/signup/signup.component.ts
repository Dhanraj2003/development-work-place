import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userservice:UserService,private _snackBar: MatSnackBar) {}

  public user={
    name:'',
    city:'',
    status:'',
  };
  formfunction()
  {
    if(this.user.name=='' || this.user.name==null)
    {
      // alert("Name must required");
      // this._snackBar.open("Name musr required!!!",'',{duration:3000});
      Swal.fire('Name must required!!!');
      return;
    }
    //alert("Your Form Submitted Successfully!!!");
    //call adduser method which is created inside the service folder
    this.userservice.adduser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        
        // this._snackBar.open("Your Form Submitted Successfully!!!",'',{duration:3000});
        Swal.fire('Success','Your Form Submitted Successfully!!!','success');
      },
      (error)=>{
        //error
        console.log(error);
        // alert("Something Went Wrong");
        this._snackBar.open("Something Went Wrong",'',{
          duration:3000,
          verticalPosition:'top' 
        })
      }
    );
  }
}
