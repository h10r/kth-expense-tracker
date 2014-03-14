//CurrencyModel Object constructor
expenseTrackerAppModule.service('CurrenciesModel', function () {
  'use strict';

  var currencies = [],
    currency = {
      id: 0,
      name: '',
      sign: '',
      token: ''
    };

  // available currencies
  currencies.push(
    {
      id: 0,
      name: 'Euro',
      sign: '€',
      token: 'EUR'
    },
    {
      id: 1,
      name: 'US Dollar',
      sign: '$',
      token: 'USD'
    },
    {
      id: 2,
      name: 'Swedish Kronor',
      sign: 'SEK',
      token: 'SEK'
    },
    {
      id: 3,
      name: 'Japanese Yen',
      sign: '¥',
      token: 'JPY'
    },
    {
      id: 4,
      name: 'British Pound',
      sign: '£',
      token: 'GBP'
    },
    {
      id: 5,
      name: 'Swiss Franc',
      sign: 'SFr',
      token: 'CHF'
    },
    {
      id: 6,
      name: 'Canadian Dollar',
      sign: '$',
      token: 'CAD'
    },
    {
      id: 7,
      name: 'Australian Dollar',
      sign: '$',
      token: 'AUD'
    },
    {
      id: 8,
      name: 'New Zealand Dollar',
      sign: '$',
      token: 'NZD'
    },
    {
      id: 9,
      name: 'South African Rand',
      sign: 'R',
      token: 'ZAR'
    }
  );

  return {

    getCurrenciesList : function () {
      return currencies;
    },

    getCurrencyById : function (currencyId) {
      for (var key in currencies) {
        if (currencies[key].id === currencyId) {
          return currencies[key];
        }
      }
    }
    
  };
});