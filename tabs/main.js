Vue.component('tabs', {
  template: `
  <div>
  <div class="tabs">
    <ul>
      <li v-for="tab in tabs" @click="selectTab(tab)" :class="{'is-active': tab.isActive}" ><a :href="tab.href">{{tab.name}}</a></li>
    </ul>
  </div>

  <div class="tab-details"><slot></slot></div>
  </div>
`,
  data() {
    return {
      tabs: []
    };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
});

Vue.component('tab', {
  props: {
    name: { required: true },
    selected: { default: false }
  },
  computed: {
    href() {
      return `#${this.name.toLowerCase().replace(/ /g, '-')}`;
    }
  },
  template: `<article v-show="isActive" ><slot></slot></article>`,
  mounted() {
    this.isActive = this.selected;
  },
  data() {
    return {
      isActive: false
    };
  }
});

new Vue({
  el: '#root'
});
