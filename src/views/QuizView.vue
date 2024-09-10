<script setup>
import Question from "@/components/Question.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import quizes from "@/data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);

const questionStatus = ref(
  `${currentQuestionIndex.value}/${quiz.questions.length}`
);

watch(
  () => currentQuestionIndex.value,
  () => {
    questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
  }
);
</script>

<template>
  <div class="container mx-auto">
    <QuizHeader :questionStatus="questionStatus" />

    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
  </div>
  <button @click="currentQuestionIndex++">Next Question</button>
</template>
