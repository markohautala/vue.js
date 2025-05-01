// This file is responsible for setting up the Vue Router for the application.
import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase authentication

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/Home.vue") },
    { path: "/register", component: () => import("../views/Register.vue") },
    { path: "/sign-in", component: () => import("../views/SignIn.vue") },
    {
      path: "/feed",
      component: () => import("../views/Feed.vue"),
      meta: { requiresAuth: true }, // To enter the page you need to be authenticated
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener(); // Removing the listener means we don't need to listen for changes anymore
        resolve(user); // Resolve means the user is logged in
      },
      reject
    ); // Reject if there's an error
  });
};

// Navigation guard that runs before each route change
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      // checks from Firebase if user is logged in
      next();
    } else {
      next("/"); // Proceed to home route
      alert("You need to be logged in to access this page.");
    }
  } else {
    next(); // Allow navigation to proceed
  }
});

export default router;
