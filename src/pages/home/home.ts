import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  private camera : Camera/*, private socialSharing: SocialSharing, private transfer: FileTransfer, private file: File*/ ,private emailComposer: EmailComposer) {
  }

  options: CameraOptions = {
    quality: 5,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  foto = null;
  tirarFoto():void{
      
    this.camera.getPicture(this.options).then(ImageData=>{this.foto = ImageData;})
    
    document.getElementById('btn2').style.display="block";
  }
  assunto:string="";
  mensagem:string="";
  mandaEmail():void{
/*
	  this.socialSharing.shareViaEmail('Body', 'Subject', ['atendimento@tomodachi.xyz']).then(() => {
	  // Success!
	}).catch(() => {
	  // Error!
	});
*//*
	this.socialSharing.shareViaEmail(this.mensagem,this.assunto, ['atendimento@tomodachi.xyz']).then(() => {
	  // Success!
	}).catch(() => {
	  // Error!
	});*/
	//alert(this.assunto+this.mensagem);
//https://www.youtube.com/watch?v=N27NBB9TgLI
	let email = {
		to: "atendimento@tomodachi.com",
		attachments:[this.foto],
		subject:this.assunto,
		body: this.mensagem,
		isHtml:true
	};
	this.emailComposer.open(email);
  } 

}
