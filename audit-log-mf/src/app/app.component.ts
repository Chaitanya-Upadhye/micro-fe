import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare var DDS: any;
@Component({
  selector: 'audit-log-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const data = [
      {
        columns: [
          { value: 378627101 },
          { value: 'OSC' },
          { value: '03/22/2023' },
          { value: 'Warning' },
        ],
      },
      {
        columns: [
          { value: 134794509 },
          { value: 'GC' },
          { value: '03/23/2024' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 159044029 },
          { value: 'GSCM' },
          { value: '03/21/2024' },
          { value: 'Warning' },
        ],
      },
      {
        columns: [
          { value: 535488138 },
          { value: 'GSCM' },
          { value: '02/22/2024' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 592706984 },
          { value: 'GC' },
          { value: '03/22/2023' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 780155404 },
          { value: 'Premier' },
          { value: '03/22/2025' },
          { value: 'Pending' },
        ],
      },
      {
        columns: [
          { value: 791465173 },
          { value: 'Premier' },
          { value: '03/23/2024' },
          { value: 'Blocked' },
        ],
      },
      {
        columns: [
          { value: 848699312 },
          { value: 'GC' },
          { value: '03/17/2024' },
          { value: 'Error' },
        ],
      },
      {
        columns: [
          { value: 884698799 },
          { value: 'Dev Ex' },
          { value: '03/17/2024' },
          { value: 'Error' },
        ],
      },
      {
        columns: [
          { value: 181354767 },
          { value: 'APEX' },
          { value: '03/17/2024' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 944159210 },
          { value: 'AI/ML' },
          { value: '04/22/2024' },
          { value: 'Error' },
        ],
      },
      {
        columns: [
          { value: 416289199 },
          { value: 'GSCM' },
          { value: '03/23/2024' },
          { value: 'Error' },
        ],
      },
      {
        columns: [
          { value: 893246959 },
          { value: 'Premier' },
          { value: '02/22/2024' },
          { value: 'Error' },
        ],
      },
      {
        columns: [
          { value: 505897217 },
          { value: 'GC' },
          { value: '03/22/2025' },
          { value: 'Warning' },
        ],
      },
      {
        columns: [
          { value: 832350678 },
          { value: 'OSC' },
          { value: '04/22/2024' },
          { value: 'Error' },
        ],
      },
      {
        columns: [
          { value: 734571558 },
          { value: 'GC' },
          { value: '03/22/2025' },
          { value: 'Blocked' },
        ],
      },
      {
        columns: [
          { value: 662305237 },
          { value: 'UMF' },
          { value: '03/21/2024' },
          { value: 'Warning' },
        ],
      },
      {
        columns: [
          { value: 338393302 },
          { value: 'APEX' },
          { value: '03/22/2023' },
          { value: 'Error' },
        ],
      },
      {
        columns: [
          { value: 990622241 },
          { value: 'UMF' },
          { value: '02/22/2024' },
          { value: 'Blocked' },
        ],
      },
      {
        columns: [
          { value: 300382040 },
          { value: 'AI/ML' },
          { value: '03/22/2025' },
          { value: 'Error' },
        ],
      },
      {
        columns: [
          { value: 202542953 },
          { value: 'UMF' },
          { value: '03/27/2024' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 397190268 },
          { value: 'DSA' },
          { value: '03/22/2024' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 578993686 },
          { value: 'DFS' },
          { value: '03/21/2024' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 515132429 },
          { value: 'DFS' },
          { value: '03/22/2024' },
          { value: 'Error' },
        ],
      },
      {
        columns: [
          { value: 355645782 },
          { value: 'OSC' },
          { value: '03/23/2024' },
          { value: 'Warning' },
        ],
      },
      {
        columns: [
          { value: 384536700 },
          { value: 'Dev Ex' },
          { value: '03/21/2024' },
          { value: 'Warning' },
        ],
      },
      {
        columns: [
          { value: 292354630 },
          { value: 'GSCM' },
          { value: '04/22/2024' },
          { value: 'Blocked' },
        ],
      },
      {
        columns: [
          { value: 852746672 },
          { value: 'GC' },
          { value: '03/22/2025' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 471921216 },
          { value: 'DSA' },
          { value: '03/27/2024' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 379026227 },
          { value: 'AI/ML' },
          { value: '03/17/2024' },
          { value: 'Warning' },
        ],
      },
      {
        columns: [
          { value: 190874898 },
          { value: 'APEX' },
          { value: '03/17/2024' },
          { value: 'Success' },
        ],
      },
      {
        columns: [
          { value: 514100935 },
          { value: 'UMF' },
          { value: '03/22/2024' },
          { value: 'Pending' },
        ],
      },
    ];
    const columns = [
      { value: 'Activity type' },
      { value: 'Device' },
      { value: 'Time' },
      { value: 'Message' },
    ];

    const element = document.getElementById('table-208452021');
    DDS.Table(element, {
      data,
      columns,
      subscribe: ['table-208452021-pagination'],
      pagination: { currentPage: 1, rowsPerPage: 4 },
    });

    const paginationElement = document.getElementById(
      'table-208452021-pagination'
    );
    DDS.Pagination(paginationElement, {
      subscribe: ['table-208452021'],
    });
    const modal = document.getElementById('modal-342760920');

    DDS.Modal(modal, { trigger: '#modal-342760920-trigger' });
  }

  title = 'audit-log-mf';
}
