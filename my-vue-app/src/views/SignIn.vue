<template>
  <div>
    <h3>Sign In</h3>
    <p>Please fill in the form below to sign in.</p>
    <p>Type your email here <input type="text" placeholder="Email" v-model="email" /></p>
    <p>Type your password here <input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg" class="error">{{ errMsg }}</p>
    <p><button @click="signIn">Sign In</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const errMsg = ref('');
const router = useRouter();

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully Signed In");
      router.push('/feed');
    })
    .catch((error) => {
      console.error(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email address.";
          break;
        case "auth/user-not-found":
          errMsg.value = "User not found.";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password.";
          break;
        default:
          errMsg.value = "An error occurred. Please try again.";
          break;
      }
    });
};

const signInWithGoogle = () => {
  // Implement Google sign-in logic here
};
</script>

<style scoped>
h3 {
  color: #0f0a39;
}
.error {
  color: red;
}
</style>