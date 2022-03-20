import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';


import { ActivitiesComponent } from './components/activities/activities.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PopularActivityComponent } from './components/pages/home/popular-activity/popular-activity.component';
import { SearchActivityComponent } from './components/pages/home/search-activity/search-activity.component';
import { TopRateActivitiesComponent } from './components/pages/home/top-rate-activities/top-rate-activities.component';
import { UpcomingActivityComponent } from './components/pages/home/upcoming-activity/upcoming-activity.component';
import { RegComponent } from './components/pages/reg/reg.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { HomeBannerComponent } from './components/pages/home/home-banner/home-banner.component';
import { ShowDateComponent } from './components/pages/home/show-date/show-date.component';
import { PriceBoxComponent } from './components/blocks/price-box/price-box.component';
import { RatingBoxComponent } from './components/blocks/rating-box/rating-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgSelectModule } from '@ng-select/ng-select';
import { LikeItemComponent } from './components/blocks/like-item/like-item.component';
import { CopyrightComponent } from './components/common/copyright/copyright.component';
import { HeaderLangListComponent } from './components/common/header-lang-list/header-lang-list.component';
import { RegTypeComponent } from './components/pages/reg-type/reg-type.component';
import { BreadcrumbsComponent } from './components/common/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './components/pages/search/search.component';
import { CardComponent } from './components/blocks/card/card.component';
import { DateListItemComponent } from './components/pages/search/date-list-item/date-list-item.component';
import { SearchFilterComponent } from './components/pages/search/search-filter/search-filter.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';
import { RatingBoxLeftComponent } from './components/blocks/rating-box-left/rating-box-left.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ActivityComponent } from './components/pages/activity/activity.component';
import { FeedbackComponent } from './components/blocks/feedback/feedback.component';
import { ChatComponent } from './components/blocks/chat/chat.component';
import { ActivitiesSwiperComponent } from './components/activities/activities-swiper/activities-swiper.component';
import { AuthorizationComponent } from './components/common/authorization/authorization.component';
import { ProviderComponent } from './components/pages/provider/provider.component';
import { SavedProvidersComponent } from './components/pages/saved-providers/saved-providers.component';
import { SavedActivitiesComponent } from './components/pages/saved-activities/saved-activities.component';
import { RegDoneComponent } from './components/pages/reg-done/reg-done.component';
import { OrderComponent } from './components/pages/order/order.component';
import { OrderTimeComponent } from './components/pages/order/order-time/order-time.component';
import { OrderOptionsComponent } from './components/pages/order/order-options/order-options.component';
import { OrderPaymentComponent } from './components/pages/order/order-payment/order-payment.component';
import { OrderSuccessComponent } from './components/pages/order/order-success/order-success.component';
import { NavigationComponent } from './components/blocks/navigation/navigation.component';
import { AccountComponent } from './components/pages/account/account.component';
import { PersonalDataComponent } from './components/pages/account/personal-data/personal-data.component';
import { PreferencesComponent } from './components/pages/account/preferences/preferences.component';
import { SafetyComponent } from './components/pages/account/safety/safety.component';
import { PaymentDetailsComponent } from './components/pages/account/payment-details/payment-details.component';
import { BusinessOpportunitiesComponent } from './components/pages/account/business-opportunities/business-opportunities.component';
import { PersonalDataMainComponent } from './components/pages/account/personal-data/personal-data-main/personal-data-main.component';
import { PersonalDataEditComponent } from './components/pages/account/personal-data/personal-data-edit/personal-data-edit.component';
import { ChangePasswordComponent } from './components/pages/account/safety/change-password/change-password.component';
import { AddCardComponent } from './components/pages/account/payment-details/add-card/add-card.component';
import { ActiveSessionsComponent } from './components/pages/account/safety/active-sessions/active-sessions.component';
import { MobileMenuComponent } from './components/pages/account/mobile-menu/mobile-menu.component';
import { NewPasswordComponent } from './components/pages/account/safety/change-password/new-password/new-password.component';
import { AddProviderComponent } from './components/pages/account/business-opportunities/add-provider/add-provider.component';
import { RegProviderComponent } from './components/pages/reg-provider/reg-provider.component';
import { RegTypeRentalComponent } from './components/pages/reg-provider/reg-type-rental/reg-type-rental.component';
import { RegTypeObjectComponent } from './components/pages/reg-provider/reg-type-object/reg-type-object.component';
import { RegTypeAddressComponent } from './components/pages/reg-provider/reg-type-address/reg-type-address.component';
import { RegLocationComponent } from './components/pages/reg-provider/reg-location/reg-location.component';
import { RegLocationMapComponent } from './components/pages/reg-provider/reg-location-map/reg-location-map.component';
import { RegProviderTypeComponent } from './components/pages/reg-provider/reg-provider-type/reg-provider-type.component';
import { RegProviderInfoServicesComponent } from './components/pages/reg-provider/reg-provider-info-services/reg-provider-info-services.component';
import { RegProviderInfoDescriptionComponent } from './components/pages/reg-provider/reg-provider-info-description/reg-provider-info-description.component';
import { RegProviderInfoTimetableComponent } from './components/pages/reg-provider/reg-provider-info-timetable/reg-provider-info-timetable.component';
import { RegInventoryAddComponent } from './components/pages/reg-provider/reg-inventory-add/reg-inventory-add.component';
import { RegInventoryTypeComponent } from './components/pages/reg-provider/reg-inventory-type/reg-inventory-type.component';
import { RegInventoryPriceComponent } from './components/pages/reg-provider/reg-inventory-price/reg-inventory-price.component';
import { RegInventoryCancellationComponent } from './components/pages/reg-provider/reg-inventory-cancellation/reg-inventory-cancellation.component';
import { RegInventorySaleComponent } from './components/pages/reg-provider/reg-inventory-sale/reg-inventory-sale.component';
import { RegInventoryAvailabilityComponent } from './components/pages/reg-provider/reg-inventory-availability/reg-inventory-availability.component';
import { RegProviderPhotoComponent } from './components/pages/reg-provider/reg-provider-photo/reg-provider-photo.component';
import { RegProviderLegalComponent } from './components/pages/reg-provider/reg-provider-legal/reg-provider-legal.component';
import { RegProviderSuccessComponent } from './components/pages/reg-provider/reg-provider-success/reg-provider-success.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'schools', component: SchoolsComponent},
  {path: 'reg-type', component: RegTypeComponent},
  {path: 'reg', component: RegComponent},
  {path: 'reg-done', component: RegDoneComponent},
  {path: 'search', component: SearchComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'provider', component: ProviderComponent},
  {path: 'saved/providers', component: SavedProvidersComponent},
  {path: 'saved/activities', component: SavedActivitiesComponent},
  {path: 'order', component: OrderComponent},
  {path: 'account', component: AccountComponent},
  {path: 'reg-provider', component: RegProviderComponent},
];

@NgModule({
  declarations: [
    AuthorizationComponent,
    AppComponent,
    ActivitiesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PopularActivityComponent,
    SearchActivityComponent,
    TopRateActivitiesComponent,
    UpcomingActivityComponent,
    RegComponent,
    SchoolsComponent,
    HomeBannerComponent,
    ShowDateComponent,
    PriceBoxComponent,
    RatingBoxComponent,
    LikeItemComponent,
    CopyrightComponent,
    HeaderLangListComponent,
    RegTypeComponent,
    BreadcrumbsComponent,
    SearchComponent,
    CardComponent,
    DateListItemComponent,
    SearchFilterComponent,
    PaginationComponent,
    RatingBoxLeftComponent,

    ActivityComponent,
    FeedbackComponent,
    ChatComponent,
    ActivitiesSwiperComponent,
    AuthorizationComponent,
    ProviderComponent,
    SavedProvidersComponent,
    SavedActivitiesComponent,
    RegDoneComponent,
    OrderComponent,
    OrderTimeComponent,
    OrderOptionsComponent,
    OrderPaymentComponent,
    OrderSuccessComponent,
    NavigationComponent,
    AccountComponent,
    PersonalDataComponent,
    PreferencesComponent,
    SafetyComponent,
    PaymentDetailsComponent,
    BusinessOpportunitiesComponent,
    PersonalDataMainComponent,
    PersonalDataEditComponent,
    ChangePasswordComponent,
    AddCardComponent,
    ActiveSessionsComponent,
    MobileMenuComponent,
    NewPasswordComponent,
    AddProviderComponent,
    RegProviderComponent,
    RegTypeRentalComponent,
    RegTypeObjectComponent,
    RegTypeAddressComponent,
    RegLocationComponent,
    RegLocationMapComponent,
    RegProviderTypeComponent,
    RegProviderInfoServicesComponent,
    RegProviderInfoDescriptionComponent,
    RegProviderInfoTimetableComponent,
    RegInventoryAddComponent,
    RegInventoryTypeComponent,
    RegInventoryPriceComponent,
    RegInventoryCancellationComponent,
    RegInventorySaleComponent,
    RegInventoryAvailabilityComponent,
    RegProviderPhotoComponent,
    RegProviderLegalComponent,
    RegProviderSuccessComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    AppRoutingModule,
    SwiperModule,
    // NgbModule,
    BrowserAnimationsModule,
    // NgSelectModule,
    FormsModule,
    NgxSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
