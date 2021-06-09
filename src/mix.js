export const mix = {
    data() {
        return {
              windowWidth2: window.innerWidth,
        }
      },
      methods: {
        onResize() {
          console.log("App.vue-onResize()", this.windowWidth2);
          this.windowWidth2 = window.innerWidth;
        }
      },
      mounted() {
        this.$nextTick(() => {
          window.addEventListener("resize", this.onResize);
        });
      },
      
      beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
      }
} 