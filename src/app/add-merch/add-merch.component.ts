import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FirebaseStorageService } from '../services/firebase.service';

@Component({
  selector: 'app-add-merch',
  templateUrl: './add-merch.component.html',
  styleUrls: ['./add-merch.component.css']
})
export class AddMerchComponent implements OnInit {

  merch: any = {
    name: null,
    price: null,
    availableUnits: null,
    imageUrl: null,
    description: null
  }
  
  public fileMessage = 'No hay un archivo seleccionado';
  public formData = new FormData();
  public fileName = '';

  constructor(private httpService: HttpService, private router: Router, private firebaseStorage: FirebaseStorageService) { }

  ngOnInit() {
  }

  addMerch() {
    this.httpService.post('merchandise', this.merch).subscribe(response => {
      this.goBack();
    })
  }

  goBack() {
    this.router.navigateByUrl('/merch');
  }


  public changeFile(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.fileMessage = `Archivo preparado: ${event.target.files[i].name}`;
        this.fileName = event.target.files[i].name;
        this.formData.delete('file');
        this.formData.append('file', event.target.files[i], event.target.files[i].name)
      }
    } else {
      this.fileMessage = 'No hay un archivo seleccionado';
    }
    this.uploadFile();
  }

  public uploadFile() {
    let file = this.formData.get('file');
    this.firebaseStorage.uploadFile(this.fileName, file).then((response) => {
      console.log(response.state);
      this.getFileUrl();
    });
  }
  public getFileUrl() {
    let reference = this.firebaseStorage.getFileReference(this.fileName);
    reference.getDownloadURL().subscribe(url => {
        this.merch.imageUrl = url;
    });
  }
}
