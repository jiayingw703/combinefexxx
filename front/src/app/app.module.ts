import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './messages/chat/chat.component';
import { MailComponent } from './messages/mail/mail.component';
import { MailboxComponent } from './messages/mail/mailbox/mailbox.component';
import { EmailViewComponent } from './messages/mail/email-view/email-view.component';
import { EmailComposeComponent } from './messages/mail/email-compose/email-compose.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { TeamProfileComponent } from './teams/team-profile/team-profile.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { ProjectProfileComponent } from './projects/project-profile/project-profile.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectListingComponent } from './projects/projectListing/projectListing.component';
import { ProjectCreateComponent } from './projects/projectCreate/projectCreate.component';
import { ProjectDetailComponent } from './projects/projectDetail/projectDetail.component';
import { FaqComponent } from './faq/faq.component';
import { SearchComponent } from './search/search.component';
import { TeamCreateComponent } from './teams/team-create/team-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

import { UserService } from './users/user.service';
import { TeamService } from './teams/team.service';
import { ProjectService } from './projects/project.service';
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    UserProfileComponent,
    DashboardComponent,
    MessagesComponent,
    ChatComponent,
    MailComponent,
    MailboxComponent,
    EmailViewComponent,
    EmailComposeComponent,
    UserListComponent,
    TeamProfileComponent,
    TeamListComponent,
    ProjectProfileComponent,
    ProjectListComponent,
    ProjectListingComponent,
    ProjectCreateComponent,
    ProjectDetailComponent,
    FaqComponent,
    SearchComponent,
    TeamCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'search', component: SearchComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'messages/chat', component: ChatComponent },
      { path: 'messages/mail/mailbox', component: MailboxComponent },
      { path: 'messages/mail/email-view', component: EmailViewComponent },
      { path: 'messages/mail/email-compose', component: EmailComposeComponent },
      { path: 'users/user-profile', component: UserProfileComponent },
      { path: 'users/user-list', component: UserListComponent },
      { path: 'users/user-edit', component: UserEditComponent },
      { path: 'teams/team-profile', component: TeamProfileComponent },
      { path: 'teams/team-list', component: TeamListComponent },
      { path: 'teams/team-create', component: TeamCreateComponent },
      { path: 'projects/project-profile', component: ProjectProfileComponent },
      { path: 'projects/project-list', component: ProjectListComponent },
      { path: 'projects/projectListing', component: ProjectListingComponent },
      { path: 'projects/projectCreate', component: ProjectCreateComponent },
      { path: 'projects/projectDetail', component: ProjectDetailComponent },


    ])
  ],
  providers: [
    UserService,
    TeamService,
    ProjectService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
