System.register(['../entity-view-model', 'aurelia-dependency-injection', './order-service', '../lookups'], function (_export) {
  'use strict';

  var EntityViewModel, inject, OrderService, Lookups, Order;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_entityViewModel) {
      EntityViewModel = _entityViewModel.EntityViewModel;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_orderService) {
      OrderService = _orderService.OrderService;
    }, function (_lookups) {
      Lookups = _lookups.Lookups;
    }],
    execute: function () {
      Order = (function (_EntityViewModel) {
        function Order(service, lookups) {
          _classCallCheck(this, _Order);

          _get(Object.getPrototypeOf(_Order.prototype), 'constructor', this).call(this, service);
          this.customers = lookups.customers;
        }

        _inherits(Order, _EntityViewModel);

        var _Order = Order;
        Order = inject(OrderService, Lookups)(Order) || Order;
        return Order;
      })(EntityViewModel);

      _export('Order', Order);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy9vcmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7c0RBTWEsS0FBSzs7Ozs7Ozs7Ozt5Q0FOVixlQUFlOzsyQ0FDZixNQUFNOzttQ0FDTixZQUFZOzt5QkFDWixPQUFPOzs7QUFHRixXQUFLO0FBR0wsaUJBSEEsS0FBSyxDQUdKLE9BQU8sRUFBRSxPQUFPLEVBQUU7OztBQUM1Qix3RkFBTSxPQUFPLEVBQUU7QUFDZixjQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDcEM7O2tCQU5VLEtBQUs7O3FCQUFMLEtBQUs7QUFBTCxhQUFLLEdBRGpCLE1BQU0sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQ2pCLEtBQUssS0FBTCxLQUFLO2VBQUwsS0FBSztTQUFTLGVBQWU7O3VCQUE3QixLQUFLIiwiZmlsZSI6Im9yZGVycy9vcmRlci5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=