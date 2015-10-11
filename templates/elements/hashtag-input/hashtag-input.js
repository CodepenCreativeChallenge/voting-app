(function() {
  'use strict';
  Polymer({
    is: 'hashtag-input',
    properties: {
      username: {
        type: String,
        value: 'pixelass'
      },
      'realname': {
        type: String,
        value: 'Gregor Adams'
      },
      url: {
        type: String,
        computed: 'userPath(username)'
      }
    },
    userPath: function userPath(username) {
      return `users/${username}`;
    }
  });
})();
