<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btn">
      <my-button class="btn delete-btn" @click="removePost">Удалить</my-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Post from "@/types/Post";
import { PropType } from "@vue/runtime-core";

@Options({
  name: "PostItem",
})
export default class PostItem extends Vue {
  @Prop({ type: Object as PropType<Post[]>, required: true }) post: any;
  @Emit("remove") removePost() {
    return this.post;
  }
}
</script>

<style scoped>
.post {
  margin: 15px 0px;
  padding: 15px;
  border-radius: 5px;
  background: #fff;
  color: #413c3c;
}
</style>