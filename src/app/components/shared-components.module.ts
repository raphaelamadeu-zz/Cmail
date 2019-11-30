import { NgModule } from "@angular/core";
import HeaderComponent from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';
import { CmailListItemComponent } from './cmail-list-item.component';

@NgModule({
    declarations: [HeaderComponent, CmailFormGroupComponent, CmailFormFieldDirective, CmailListItemComponent, CmailListItemComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, CmailFormGroupComponent, CmailFormFieldDirective, CmailListItemComponent, CmailListItemComponent]
})
export class SharedComponentModule {}