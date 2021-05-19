import Vue from "vue";
export default Vue.extend({
  props: {
    show: { type: Boolean, required: true, default: false },
    pause: { type: Boolean, required: true, default: false },
    fast: { type: Boolean, required: true, default: false },
  },
  data() {
    return { hit: false };
  },
  computed: {
    className(): Record<string, unknown> {
      return {
        show: this.show && !this.hit,
        pause: this.pause,
        fast: this.fast,
        hit: this.hit,
      };
    },
  },
  beforeUpdate() {
    if (!this.show) {
      if (this.hit) this.hit = false;
    }
  },

  methods: {
    click() {
      if (!this.hit) {
        this.hit = true;
        this.$emit("onclick");
      }
    },
  },
});
