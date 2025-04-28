<template>
  <div>
    <p>Welcome to the Register page!</p>
    <p>Please fill in the form below to create an account.</p>
    <p>Type your email here <input type="text" placeholder="Email" v-model="email"/></p>
    <p>Type your password here <input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
  
  const email = ref('');
  const password = ref('');
  const Router = useRouter();

  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("User registered successfully");
        Router.push('/feed');
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };

  const signInWithGoogle = () => {
  };
</script>

<style scoped>
h1 {
  color: #bd5e5e;
}
</style>