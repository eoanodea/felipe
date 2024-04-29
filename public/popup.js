window.app = Vue.createApp({
  data() {
    return {
      selectedNode: null,
    };
  },
  methods: {
    deselectNode() {
      if (window.selectedElement) {
        window.selectedElement.classList.remove('selected');
      }
      this.selectedNode = null;
    },
  },
}).mount('#app');
