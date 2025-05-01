<template>
  <div>
    <h3>Register</h3>
    <p>Please fill in the form below to create an account.</p>
    <p>
      <label for="email">Type your email here</label><br />
      <input id="email" type="text" placeholder="Email" v-model="email" />
    </p>
    <p>
      <label for="password">Type your password here</label><br />
      <input id="password" type="password" placeholder="Password" v-model="password" />
    </p>
    <p><button @click="register">Register</button></p>
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
h3 {
  color: #0011ff;
}

input {
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

</style>