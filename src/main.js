// Import dependencies
import { createApp } from "vue";
// import * as d3 from "d3";
import "./style.css";
// Import your components
import Popup from "./Popup.js";

// Initialize your Vue application
const app = createApp({
  template: `
    <div>
      <transition name="slide">
      <div id="popup" v-if="selectedNode">
        <span class="close-button" @click="deselectNode">X</span>
        <h2>{{selectedNode.name}}</h2>
        <p>{{selectedNode.description}}</p>
      </div>
    </transition>
    <div id="tree"></div>
  
    </div>
  `,
  data() {
    return {
      selectedNode: null,
    };
  },
});

app.mount("#app");
