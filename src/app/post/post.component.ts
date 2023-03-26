import { Component, Input, OnInit,EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  @Input("img") postImg = ""
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {}

  ngOnInit() {}
}
