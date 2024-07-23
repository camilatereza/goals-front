import { catchError, of } from 'rxjs';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { CommonDialogComponent } from '../../../common/components/common-dialog/common-dialog.component';
import { DialogData } from './../../../model/dialogData';
import { GroupService } from '../../services/group.service';
import { Group } from '../../../model/group';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrl: './group-details.component.css',
})
export class GroupDetailsComponent {
  @Input() group?: Group;
  readonly dialog = inject(MatDialog);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    public groupService: GroupService,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.group) {
      this.navigation();
    } else {
      groupService.getDetails(id).subscribe((result) => {
        this.group = result;
      });
      this.navigation();
    }
  }

  navigation(): void {
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras?.state?.['group']) {
      this.group = navigation.extras.state['group'];
    } else {
      this.openErrorDialog();
    }
  }

  openErrorDialog(): void {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '400px',
      data: {
        type: 'error',
        title: 'Erro',
        msg: 'Detalhes do grupo não encontrados. Informe um grupo válido!'
      } as DialogData
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.location.back();
      }
    });
  }
}
