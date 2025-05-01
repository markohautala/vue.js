<script setup>
</script>

<template>
  <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/feed" v-if="isLoggedIn"> Feed </router-link>
    <router-link to="/register" v-if="!isLoggedIn"> Register </router-link>
    <router-link to="/sign-in" v-if="!isLoggedIn"> Login </router-link>
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
    isLoggedIn.value = false;
  }).catch((error) => {
    console.error('Sign out error:', error);
  });
};

const auth = getAuth();

onMounted(() => {
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
nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f9fa;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #ff00a6;
}
nav a:hover {
  text-decoration: underline
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
}

nav button {
  background-color: #000000;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  justify-content: center;
}


</style>
