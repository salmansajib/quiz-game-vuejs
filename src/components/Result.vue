<script setup>
import { RouterLink } from "vue-router";

const { quizQuestionLength, numberOfCorrcetAnswers } = defineProps([
  "quizQuestionLength",
  "numberOfCorrcetAnswers",
]);
</script>

<template>
  <div class="text-center py-[100px]">
    <p class="text-xl">Your Results...</p>
    <h1 class="text-7xl mt-3 mb-8">
      {{ numberOfCorrcetAnswers }}/{{ quizQuestionLength }}
    </h1>
    <RouterLink to="/" class="bg-blue-500 px-6 py-3 text-slate-50 rounded"
      >Back to Home</RouterLink
    >
  </div>
</template>
