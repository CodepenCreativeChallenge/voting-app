(function() {
  'use strict';

  Polymer({
    is: 'user-info',

    properties: {
      profile: {
        type: String,
        computed: 'makePath(\'http://codepen.io/\', name)'
      },
      avatar: {
        type: String,
        computed: 'makePath(\'images/avatars/\', name, \'.jpg\')'
      }
    },
    makePath: (path, str, suffix) => {
      return [path, str, suffix].join('');
    }
  });
})();
