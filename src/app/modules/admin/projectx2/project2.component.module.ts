import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Project2Component } from 'app/modules/admin/projectx2/project2.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';



const exampleRoutes: Route[] = [
    {
        path: '',
        component: Project2Component
    }
];

@NgModule({
    declarations: [
        Project2Component
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatTabsModule,
        MatSelectModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        CommonModule
    ]
})
export class Project2Module {
}
