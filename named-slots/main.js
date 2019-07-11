Vue.component('modal', {
  template: `<div class="modal is-active" v-show="isVisible">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"><slot name="title">Insert a title</slot></p>
        <button @click="toggleVisible" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
       <slot>Insert a body</slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer">
        <a href="#" class="button is-primary">Save changes</a>
          <a href="#" class="button">Cancel</a>
        </slot>
      </footer>
    </div>
  </div>`,
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    }
  }
});

new Vue({
  el: '#root'
});
