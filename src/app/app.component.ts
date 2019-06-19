import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-final-sis-web';

  public fileForm = new FormGroup({
    file: new FormControl(null, Validators.required),
  });
  
  public fileMessage = 'No hay un archivo seleccionado';
  public formData = new FormData();
  public fileName = '';

}
