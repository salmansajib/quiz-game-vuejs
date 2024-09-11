<script setup>
const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div class="question-container mt-5">
    <h1 class="question text-[30px] mb-5">
      {{ question.text }}
    </h1>
  </div>
  <div>
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option flex items-center mb-5 cursor-pointer"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p
        class="size-[50px] bg-emerald-400 flex items-center justify-center text-[30px]"
      >
        {{ option.label }}
      </p>
      <div
        class="size-[50px] text-[30px] bg-gray-200 flex items-center w-full max-w-[800px] px-5 hover:bg-gray-300 transition-colors duration-200"
      >
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>
