<template>
  <div>
    <h3>Log in</h3>
    <p>Please fill in the form below to sign in.</p>
    <p>
      <input
        id="email"
        type="text"
        placeholder="Email"
        v-model="email"
        style="width: 80%; height: 40px; font-size: 16px"
      />
    </p>
    <p>
      <input
        id="password"
        type="password"
        placeholder="Password"
        v-model="password"
        @keyup.enter="signIn"
        style="width: 80%; height: 40px; font-size: 16px"
      />
    </p>
    <p v-if="errMsg" class="error">{{ errMsg }}</p>
    <p><button @click="signIn">Sign In</button></p>
    <p>Or</p>
    <p>
      <button @click="signInWithGoogle">
        <font-awesome-icon :icon="['fab', 'google']" /> Sign In With Google
      </button>
    </p>
    <p>
      <button @click="signInWithGithub">
        <font-awesome-icon :icon="['fab', 'github']" /> Sign In With Github
      </button>
    </p>
    <p>
      Don't have an account? <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const Router = useRouter();

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully Signed In");
      Router.push("/feed");
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
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log("User signed in with Google successfully");
      Router.push("/feed"); // Captial R in Router is consistent in the whole project
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
      Router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<style scoped>
h3 {
  color: #3122b6;
}
.error {
  color: red;
}

input {
  margin: 5px 0;
  padding: 5px;
  border: 2px solid #340101;
  border-radius: 15px;
}
</style>
