
      // ensure that AlpineJS is properly loaded
      document.addEventListener('alpine:init', () => {
        Alpine.data('counter', Counter);
      });