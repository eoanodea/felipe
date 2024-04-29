import { ref } from "vue";

export default {
  name: "Popup",
  template: `
    <div class="popup" v-if="selectedNode">
      <h2>{{ selectedNode.name }}hello</h2>
      <p>{{ selectedNode.description }}</p>
      <button @click="deselectNode">Close</button>
    </div>
  `,
  setup() {
    const selectedNode = ref(null);
    const deselectNode = () => {
      if (window.selectedElement) {
        window.selectedElement.classList.remove("selected");
      }
      selectedNode.value = null;
    };
    return {
      selectedNode,
      deselectNode,
    };
  },
};
