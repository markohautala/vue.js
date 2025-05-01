<template>
  <div>
    <h1>Feed</h1>
    <p>Welcome to the feed page!</p>
    <div v-if="userEmail" class="authenticated">
      <font-awesome-icon :icon="['fas', 'circle-check']" style="color: #7ffcd1;" />
      <span> You are authenticated as <strong>{{ userEmail }}</strong></span>
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

export default {
  name: 'Feed',
  data() {
    return {
      userEmail: ''
    };
  },
  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this.userEmail = user.email;
    }
  }
};
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
