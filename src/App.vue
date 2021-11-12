<template>
  <div class="container">
    <h1 class="title">Страница с постами</h1>
    <div class="search">
      <my-input
        class="input input-search"
        v-model="searchQuery"
        placeholder="Поиск постов"
      />
    </div>
    <div class="app-btns">
      <my-button class="btn create-btn" @click="showDialog"
        >Создать пост</my-button
      >
      <my-select class="search" v-model="selectedSort" :options="sortOption" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchingPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import OptionType from "@/types/OptionType";
import Option from "@/types/Option";
import Post from "@/types/Post";
import axios from "axios";

@Options({
  components: { PostForm, PostList },
  name: "App",
})
export default class App extends Vue {
  searchQuery = "";
  dialogVisible = false;
  posts: Post[] = [];
  isPostLoading = false;
  selectedSort: OptionType = "title";
  sortOption: Option[] = [
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ];

  createPost(post: Post) {
    this.posts.push(post);
    this.dialogVisible = false;
  }
  removePost(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }
  showDialog() {
    this.dialogVisible = true;
  }
  async fetchPosts() {
    try {
      this.isPostLoading = true;
      setTimeout(async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        this.posts = response.data;
      }, 100);
    } catch (e) {
      alert("Wrong!!!");
    } finally {
      this.isPostLoading = false;
    }
  }

  mounted() {
    this.fetchPosts();
  }

  get sortedPosts() {
    return [...this.posts].sort((post1: Post, post2: Post) =>
      post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    );
  }
  get sortedAndSearchingPosts() {
    return this.sortedPosts.filter((post: Post) =>
      post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
</script>

<style>
.container {
  max-width: 700px;
  min-width: 400px;
  margin: 0px auto;
  padding: 20px;
}
.title {
  text-align: center;
  display: block;
  margin: 20px 0 0 0;
  font-size: 36px;
  font-weight: 700;
}
.app-btns {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
