<template>
  <div class="dialog" v-if="show" @click.stop="hideDialoge">
    <div @click.stop class="dialoge__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Options({
  name: "MyDialog",
})
export default class MyDialog extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean;
  @Emit("update:show") hideDialoge() {
    return false;
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 1;
}
.dialoge__content {
  padding: 10px 20px;
  margin: auto;
  background: #fff;
  max-height: 180px;
  min-width: 350px;
  max-width: 350px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
}
</style>