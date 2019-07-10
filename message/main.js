Vue.component('task', {
  template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
  template: '<div><task v-for="task in tasks">{{task}}</task></div>',

  data() {
    return {
      tasks: ['Learn vue', 'Learn React', 'Learn Laravel']
    };
  }
});

Vue.component('message', {
  props: ['title', 'body'],
  data() {
    return {
      isVisible: true
    };
  },
  template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
         {{title}}
         <button type="button" @click="toggleVisibility">x</button>
        </div>
        <div class="message-body">
            {{body}}
        </div>
      </article>`,

  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
});

new Vue({
  el: '#root'
});
