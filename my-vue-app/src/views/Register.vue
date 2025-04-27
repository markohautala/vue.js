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

<script>
export default {
  name: 'Register',
};
</script>

<style scoped>
h1 {
  color: #333;
}
</style>