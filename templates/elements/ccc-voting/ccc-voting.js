(function() {
  'use strict';
  Polymer({
    is: 'ccc-voting',
    properties: {
      palettes: {
        type: Object,
        value: ['rainbow', 'pastell', 'grayscale', 'neon']
      },
      shapes: {
        type: Object,
        value: ['pyramids', 'lines', 'stripes', 'dots']
      },
      periods: {
        type: Object,
        value: ['weekend', 'week', 'month']
      }
    }
  });
})();
