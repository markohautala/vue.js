<script setup>
</script>

<template>
  <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/feed"> Feed </router-link>
    <router-link to="/register"> Register </router-link>
    <router-link to="/sign-in"> Login </router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/sign-in');
  }).catch((error) => {
    console.error('Sign out error:', error);
  });
};

const auth = getAuth();
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
})

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
