<template>
  <div>
    <h3>Register</h3>
    <p>Please fill in the form below to create an account.</p>
    <p>
      <input id="email" type="text" placeholder="Email" v-model="email" style="width: 80%; height: 40px; font-size: 16px;" />
    </p>
    <p>
      <input id="password" type="password" placeholder="Password" v-model="password" @keyup.enter="signIn" style="width: 80%; height: 40px; font-size: 16px;" />
    </p>
    <p><button @click="register">Register</button></p>
    <p>Or</p>
    <p><button @click="signInWithGoogle"><font-awesome-icon :icon="['fab', 'google']" /> Sign In With Google</button></p>
    <p><button @click="signInWithGithub"><font-awesome-icon :icon="['fab', 'github']" /> Sign In With Github</button></p>
    <p>Already have an account? <router-link to="/sign-in">Login</router-link></p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

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
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log("User signed in with Google successfully");
        Router.push('/feed');
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };

  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log("User signed in with Github successfully");
        Router.push('/feed');
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };


</script>

<style scoped>
h3 {
  color: #0011ff;
}

input {
  margin: 5px 0;
  padding: 5px;
  border: 2px solid #230000;
  border-radius: 15px;
}

</style>