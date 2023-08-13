import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private toastr:ToastrService){}

  ngOnInit():void {
    console.log('Life Cyle Hook with spontaneous response.');
  }

  tinyAlert() {
    Swal.fire('Hey there!');
  }
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }

  // showSuccess() {
  //   this.toastr.success('This is a success message', 'Success');
  // }

  showError() {
    this.toastr.error('Please Login Or SignUp First', 'Error');
  }


  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}

