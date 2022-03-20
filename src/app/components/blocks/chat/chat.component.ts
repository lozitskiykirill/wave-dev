import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {

  messages: any;
  isUser: boolean = false;
  isAnySymbol: boolean = false;
  isActiveSmile: boolean = false;
  isActive: boolean = false;
  chatText: string = '';
  imageButton: string = 'chat';

  messagesData = [
    {
      isUser: false,
      id: 0,
      text: 'Добрый день! Чем могу помочь?',
      image: '../../../../assets/images/icons/avatar.svg',
    },
    {
      isUser: true,
      id: 1,
      text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
      image: '../../../../assets/images/prototype/userlogo-1.png',
    },
    {
      isUser: false,
      id: 0,
      text: 'Понятно. Введите ваше сообщение',
      image: '../../../../assets/images/icons/avatar.svg',
    }
  ];

  chatForm: FormGroup;

  constructor() {
    this.messages = this.fetchMessages();

    this.chatForm = new FormGroup({
      'userMessage': new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.fetchMessages();
    this.initForm();
  }

  fetchMessages() {
    this.messages = this.messagesData;
  }

  onSubmit() {
    if (this.chatForm.value.userMessage === '') {
      return;
    } else {
      let userMessage = {
        isUser: true,
        id: 38,
        text: this.chatForm.value.userMessage,
        image: '../../../../assets/images/prototype/userlogo-1.png'
      };
      this.messages.push(userMessage);
      this.chatForm.value.userMessage = '';
      this.chatText = '';
      this.isAnySymbol = false;
    }
  }

  onKeyUp(event: any) {
    if (event.key !== "Enter") {
      this.chatForm.value.userMessage ?
        this.isAnySymbol = true :
        this.isAnySymbol = false;
    }
  }

  showSmiles() {
    this.isActiveSmile = !this.isActiveSmile;
  }

  attachFile() {
    alert('file has been attached');
  }

  private initForm() {
    this.chatForm = new FormGroup({
      'userMessage': new FormControl(null),
    });
  };

  chatActive() {
    this.isActive = !this.isActive;
    if (this.isActive === true){
      this.imageButton = 'chat_close'
    }else {
      this.imageButton = 'chat'
    }
  }

}
