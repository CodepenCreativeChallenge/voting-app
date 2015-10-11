(function() {
  'use strict';
  Polymer({
    is: 'user-list',
    properties: {
      users: {
        type: Object,
        value: [
          {
            'username': 'pixelass',
            'realName': 'Gregor Adams'
          }
        ]
      }
    }
  });
})();
