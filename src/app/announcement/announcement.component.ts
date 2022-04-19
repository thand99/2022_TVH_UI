import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  name = "ng2-ckeditor";
  ckeConfig: any;
  mycontent: string;
  log: string = "";
  @ViewChild("myckeditor") ckeditor: any;

  constructor() {
    this.mycontent = '';
  }

  ngOnInit() {
    // https://ckeditor.com/cke4/builder
    this.ckeConfig = {
      extraPlugins:
        "easyimage,dialogui,dialog,a11yhelp,about,basicstyles,bidi,blockquote,clipboard," +
        "button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu," +
        "contextmenu,dialogadvtab,div,elementspath,enterkey,entities,popup," +
        "filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo," +
        "font,format,forms,horizontalrule,htmlwriter,iframe,image,indent," +
        "indentblock,indentlist,justify,link,list,liststyle,magicline," +
        "maximize,newpage,pagebreak,pastefromword,pastetext,preview,print," +
        "removeformat,resize,save,menubutton,scayt,selectall,showblocks," +
        "showborders,smiley,sourcearea,specialchar,stylescombo,tab,table," +
        "tabletools,templates,toolbar,undo,wsc,wysiwygarea"
    };
  }
  onEditorChange(event: any) {
    console.log(event);
  }

  onChange(event: any): void {
    console.log(event);
    console.log(this.mycontent);
  }










  


  
}
