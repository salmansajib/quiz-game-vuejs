<script setup>
import Question from "@/components/Question.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import Result from "@/components/Result.vue";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import quizes from "@/data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrcetAnswers = ref(0);
const showResult = ref(false);

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);
const progressBar = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrcetAnswers.value++;
  }

  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResult.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <div class="container mx-auto">
    <QuizHeader :questionStatus="questionStatus" :progressBar="progressBar" />

    <div>
      <Question
        v-if="!showResult"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result
        v-else
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrcetAnswers="numberOfCorrcetAnswers"
      />
    </div>
  </div>
</template>
