import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  constructor(private dataService: DataService) {
    console.log('Hey I am Contractor');
   }

  ngOnInit() {
    console.log('Hey i am init');
    this.name = 'Narendra';
    this.age = 25;
    this.email = 'narendra@mail.com';
    this.address = { street : 'East street',
    village : 'Kalvalla',
    state : 'AP'};
    this.hobbies = ['Writing code', 'Playing cricket', 'Listen to music'];
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for ( let i = 0 ; i < this.hobbies.length ; i++ )
    {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}
interface Address {
  street: string;
  village: string;
  state: string;
}
interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
}