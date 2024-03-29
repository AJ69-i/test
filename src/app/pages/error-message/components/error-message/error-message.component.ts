import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as iziToast from "iziToast";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {


  fetchingPosts: boolean = false;
  @Output() SendRetry = new EventEmitter;

  ngOnInit(): void {
    iziToast.default.error({
      title: "Error",
      message: "No blog posts to show",
      timeout: 3000,
      position: 'topRight',
      transitionIn: 'fadeInLeft',
      transitionOut: 'fadeOutRight',
      drag: true,
      transitionInMobile: 'fadeInDown',
      transitionOutMobile: 'fadeOutDown',
    });
  }

  fetchPosts() {
    this.fetchingPosts = true;
    this.SendRetry.emit(this.fetchingPosts);
  }
}
