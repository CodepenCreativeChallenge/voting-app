(function() {
  'use strict';
  Polymer({
    is: 'ccc-login',
    properties: {
      params: {
        type: Object,
        value: {
          scope: 'email'
        }
      },
      provider: {
        type: String,
        value: 'anonymous'
      },
      message: {
        type: String,
        value: ''
      },
      email: {
        type: String,
        value: ''
      },
      password: {
        type: String,
        value: ''
      },
      user: {
        type: Object,
        value: null,
        notify: true
      },
      uid: {
        computed: 'returnVal(user.uid)'
      },
      owner: {
        computed: 'returnVal(user.owner)'
      },
      userData: {
        type: Object,
        notify: true
      },
      userDataUrl: {
        computed: 'getUserDataUrl(uid)'
      },
      ownerDataUrl: {
        computed: 'getOwnerDataUrl(owner, uid)'
      },
      statusKnown: {
        type: Boolean
      },
      showModel: {
        type: Boolean,
        notify: true,
        computed: 'computeLogoutHidden(statusKnown, user)'
      },
      role: {
        computed: 'getRole(user,userData)',
        notify: true
      },
      admin: {
        computed: 'isAdmin(role)',
        notify: true
      }
    },
    returnVal: function(val) {
      if (val !== undefined && val !== null) {
        return val;
      } else {
        return undefined;
      }
    },
    login: function() {
      var params;
      try {
        params = JSON.parse(this.params);
      } catch (e) {
        params = null;
      }
      if (this.provider === 'password') {
        params = params || {};
        params.email = this.email;
        params.password = this.password;
      }

      this.$.firebaseLogin.login(params);
      this.log('Login');
    },
    logout: function() {
      this.log('Logout');
      this.$.firebaseLogin.logout();
    },
    errorHandler: function(e) {
      this.log('Login Status');
      this.message = 'Error: ' + e.detail.message;
    },
    userSuccessHandler: function(e) {
      this.message = e.type + ' success!';
    },
    createUserHandler: function() {
      this.$.firebaseLogin.createUser(this.email, this.password);
    },
    changePasswordHandler: function() {
      this.$.firebaseLogin.changePassword(
        this.email,
        this.password,
        this.newPassword);
    },
    resetPasswordHandler: function() {
      this.$.firebaseLogin.sendPasswordResetEmail(this.email);
    },
    computePasswordHidden: function(provider) {
      return provider !== 'password';
    },
    computeCreateUserDisabled: function(email, password) {
      return !email || !password;
    },
    computeChangePasswordDisabled: function(email, password, newPassword) {
      return !email || !password || !newPassword;
    },
    computeResetPasswordDisabled: function(email, password) {
      return !email || !password;
    },
    computeRemoveUserDisabled: function(email, password) {
      return !email || !password;
    },
    computeLoginHidden: function(statusKnown, user) {
      return !statusKnown || !!user;
    },
    computeLogoutHidden: function(statusKnown, user) {
      return !statusKnown || !user;
    },
    computeLoginStatus: function(statusKnown, user) {

      this.log('Login Status');
      if (statusKnown && user) {
        return 'Logged in';
      }
      if (statusKnown) {
        return 'Logged out';
      }
      return 'Unknown (checking status...)';
    },
    log: function(log) {
      var d = new Date();
      var n = d.getTime();
      this.$.firebaseDocument.query.ref().push({
        log: log,
        time: n,
        user: this.user
      });
    },
    getRole: function(user, userData) {
      if (userData !== undefined && userData !== null && user !== null) {
        if (this.userSet === undefined && userData.owner === undefined) {
          this.userSet = true;
          if (userData.num === undefined) {
            userData.num = window.prompt(`Hi
                      ${user.google.displayName}
                      \nPlease tell me your mobile phone number?`,
              '07');
          }
          if (userData.owner === undefined) {
            userData.owner = window.prompt('What is your housing association?',
              'Yarlington');
          }
          if (userData.email === undefined) {
            userData.email = window.prompt('and lastly you email address?', '');
          }
          if (userData.log === undefined) {
            var d = new Date();
            var n = d.getTime();
            userData.log = [{
              first: n
            }];
          }
          userData.user = user;
          this.userData = clone(userData);
        }
        // user
        if (!userData.hasOwnProperty('role')) {
          userData.role = 'User';
        }
        this.data = userData;
        return userData.role;
      } else {
        return 'no data';
      }
    },
    getUserDataUrl: function(uid) {
      return 'https://brilliant-inferno-5434.firebaseio.com/users/' + uid;
    },
    isAdmin: function(role) {
      return role === 'admin';
    }
  });
  function clone(obj) {
    var copy;
    // Handle the 3 simple types, and null or undefined
    if (null === obj || 'object' !== typeof obj) {
      return obj;
    }
    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }
    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = clone(obj[attr]);
        }
      }
      return copy;
    }
    throw new Error('Unable to copy obj! Its type isn’t supported.');
  }
})();
