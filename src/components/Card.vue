<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const { quiz } = defineProps(["quiz"]);

console.log(quiz);

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div
    @click="navigateToQuiz"
    class="group bg-slate-100 w-full max-w-[320px] shadow-md flex flex-col gap-2 overflow-hidden rounded-md"
  >
    <img
      class="w-full h-[200px] scale-105 group-hover:scale-110 transition-transform duration-200"
      :src="quiz.img"
      alt=""
    />
    <div class="p-2">
      <h2 class="text-xl font-semibold">{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }}</p>
    </div>
  </div>
</template>
