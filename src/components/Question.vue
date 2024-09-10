<script setup>
const { question } = defineProps(["question"]);
</script>

<template>
  <div class="question-container mt-5">
    <h1 class="question text-[30px] mb-5">
      {{ question.text }}
    </h1>
  </div>
  <div class="options-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option flex items-center mb-5"
    >
      <p
        class="size-[50px] bg-emerald-400 flex items-center justify-center text-[30px]"
      >
        {{ option.label }}
      </p>
      <div
        class="size-[50px] text-[30px] bg-emerald-200 flex items-center w-full max-w-[500px] px-5"
      >
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>
