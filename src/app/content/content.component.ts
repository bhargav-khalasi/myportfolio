import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  educationData = [{
    "degree_name" : "BACHELOR DEGREE IN COMPUTER ENGINEERING",
    "institue_name":"Institute of Technology, Nirma University",
    "show":false,
    "grade":"CGPA: 8.21/10.00",
    "year":"2016-2020"
  },
  {
    "degree_name" : "HIGH SCHOOL SECONDARY EDUCATION",
    "institue_name":"Piperdiwala English Medium School",
    "show":false,
    "grade":"85.2%",
    "year":"2014-2016"
  },
  {
    "degree_name" : "SCHOOL SECONDARY EDUCATION",
    "institue_name":"Piperdiwala English Medium School",
    "show":false,
    "grade":"8.67%",
    "year":"2013-2014"
  }
];
projectsData = [
  {
    "project_name": "Segmentation of Medicine Blister Pack",
    "project_desc": "Used Image Processing (with Opencv and Python) to segment out \
    essential information (like expiry date, MRP, etc) from medicine blister pack",
    "image_path": "assets/images/med3.png"
  },
  {
    "project_name": "Data Hiding in Image",
    "project_desc": "Developed software in Java that hides data in an image by\
     manipulating its pixels unnoticeable to Human eye and successfully\
    retrieves the data back.",
    "image_path": "assets/images/img_hide.jpg"
  },
  {
    "project_name": "Real time Chat Web-app",
    "project_desc": "Developed One to One Real time Chat Application using \
    NodeJS(Using SocketIO, Express, Mongoose frameworks) as backend and \
    JavaScript as frontend with MongoDB as Database.",
    "image_path": "assets/images/img_chat.JPG"
  }
];
  ngOnInit(): void {
  }
}
