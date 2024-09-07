<script setup>
import { ref, watch } from "vue";
import q from "@/data/quizes.json";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div class="app bg-slate-100 bg-main-bg-gradient min-h-screen px-2">
    <header
      class="container mx-auto flex gap-5 flex-col items-center justify-center py-5"
    >
      <h1 class="text-4xl font-semibold text-slate-900">QuizWiz</h1>
      <input
        v-model.trim="search"
        type="text"
        placeholder="search..."
        class="w-full max-w-[420px] text-lg text-slate-900 bg-slate-900/10 border-2 border-none rounded-full px-5 py-2 placeholder:text-slate-500"
      />
    </header>

    <!-- cards -->
    <main
      class="container mx-auto flex gap-5 flex-wrap items-center justify-center my-5 cursor-pointer"
    >
      <div v-if="quizes.length === 0">
        <h2 class="text-xl text-red-500">Sorry, No match found!</h2>
      </div>
      <div
        v-else
        v-for="quiz in quizes"
        :key="quiz.id"
        class="w-full max-w-[320px] shadow-md flex flex-col gap-2 overflow-hidden rounded-md"
      >
        <img class="w-full h-[190px] bg-cover" :src="quiz.img" alt="" />
        <div class="p-2">
          <h2 class="text-xl font-semibold">{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }}</p>
        </div>
      </div>
    </main>
  </div>
</template>
