(function() {
  'use strict';
  Polymer({
    is: 'autosize-input',
    ready: function() {
      var input = this.querySelector('input');
      input.style.width = '10px';
      var dummy = document.createElement('span');
      dummy.style.position = 'absolute';
      dummy.style.left = '-10000em';
      dummy.style.whiteSpace = 'pre';
      var body = document.body;
      body.appendChild(dummy);
      var computed = window.getComputedStyle(input);
      [
      'font-size',
      'font-style',
      'font-weight',
      'font-family',
      'line-height',
      'text-transform',
      'letter-spacing'
      ].forEach(function(prop) {
        dummy.style[prop] = computed[prop];
      });

      dummy.innerText = input.placeholder;
      input.style.width = dummy.offsetWidth + 2 + 'px';

      input.addEventListener('input', (e) => {
        dummy.innerText = e.target.value;
        input.style.width = dummy.offsetWidth + 2 + 'px';

        if (e.target.value.length < 1) {
          dummy.innerText = input.placeholder;
          input.style.width = dummy.offsetWidth + 2 + 'px';
        }
      });
    }
  });
})();
