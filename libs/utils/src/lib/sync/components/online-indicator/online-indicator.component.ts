import { Component, OnInit } from '@angular/core';
import { SyncDbService } from '@codelab/utils/src/lib/sync/services/sync-db.service';

@Component({
  selector: 'codelab-online-indicator',
  templateUrl: './online-indicator.component.html',
  styleUrls: ['./online-indicator.component.css']
})
export class OnlineIndicatorComponent implements OnInit {

  constructor(readonly dbService: SyncDbService) { }

  ngOnInit() {
  }

}
