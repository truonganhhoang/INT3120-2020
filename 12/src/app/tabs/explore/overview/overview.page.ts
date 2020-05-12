import { Component, OnInit } from '@angular/core';
import { TopicService, Topic } from 'src/app/core/services/firebase/firestore/topic.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss']
})
export class OverviewPage implements OnInit {
  topics: Topic[];

  constructor(public topicService: TopicService) {}

  ngOnInit() {
    this.topicService
      .allTopics()
      .valueChanges()
      .subscribe((result) => {
        this.topics = result;
      });
  }
}
