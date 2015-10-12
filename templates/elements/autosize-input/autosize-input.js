(function() {
  'use strict';
  Polymer({
    is: 'autosize-input',
    attached: function() {
      var input = this.querySelector('input');
      var dummy = document.createElement('span');
      dummy.style.position = 'absolute';
      dummy.style.left = '-10000em';
      dummy.style.whiteSpace = 'pre';
      var body = document.body;
      body.appendChild(dummy);
      var computed = window.getComputedStyle(input);
      var props = [
        'fontSize',
        'fontStyle',
        'fontWeight',
        'fontFamily',
        'padding',
        'lineHeight',
        'textTransform',
        'letterSpacing'
      ];

      props.forEach((prop) => {
        dummy.style[prop] = computed[prop];
      });

      dummy.innerText = input.placeholder;
      input.style.width = dummy.offsetWidth + 'px';

      input.addEventListener('input', (e) => {
        dummy.innerText = e.target.value;
        let dummyWitdth = window.getComputedStyle(dummy).width;
        input.style.width = dummyWitdth;

        if (e.target.value.length < 1) {
          dummy.innerText = input.placeholder;
          let dummyWitdth = window.getComputedStyle(dummy).width;
          input.style.width = dummy.offsetWidth + 'px';
        }
      });
    }
  });
})();
