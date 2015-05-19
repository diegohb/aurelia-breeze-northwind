import {EntityViewModel} from '../entity-view-model';
import {inject} from 'aurelia-dependency-injection';
import {OrderService} from './order-service';
import {Lookups} from '../lookups';

@inject(OrderService, Lookups)
export class Order extends EntityViewModel {
  customers;

  constructor(service, lookups) {
    super(service);
    this.customers = lookups.customers;
  }
}
