import { Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";
import { Room } from "./room";
import { Message } from "./message";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnDestroy {
  @ViewChild("messagesDiv") messagesDiv: ElementRef;
  room: Room;
  roomId: string = null;
  name: string = null;
  text: string = null;
  roomRef: any;
  subscription: Subscription;
  disableInputs = false;

  constructor(public db: AngularFireDatabase) {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onConnectClick() {
    if (this.roomId && this.name) {
      this.roomRef = this.db.object<Room>(this.roomId);
      this.subscription = this.roomRef.valueChanges().subscribe(f => {
        if (!f) {
          this.room = new Room(this.roomId);
          this.roomRef.set(this.room);
        } else {
          this.room = f;
        }
        this.disableInputs = true;
        setTimeout(() => this.scrollToBottom(), 1);
      });
    }
  }

  onSendClick() {
    if (!this.room.messages) {
      this.room.messages = [];
    }
    this.room.messages.push(new Message(this.name, this.text));
    this.roomRef.update(this.room);
    this.text = null;
  }

  scrollToBottom() {
    const div = this.messagesDiv.nativeElement;
    div.scrollTop = div.scrollHeight - div.clientHeight;
  }
}
