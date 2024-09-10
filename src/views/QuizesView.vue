<script setup>
import { computed, ref } from "vue";
import quizes from "@/data/quizes.json";
import Card from "@/components/Card.vue";

const search = ref("");

const filteredQuizes = computed(() => {
  return quizes.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div class="app bg-slate-100 bg-main-bg-gradient min-h-screen px-2">
    <header
      class="container mx-auto flex gap-5 flex-col items-center justify-center py-5"
    >
      <h1 class="text-4xl font-semibold text-slate-700">QuizWiz</h1>
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
      <Card v-for="quiz in filteredQuizes" :key="quiz.id" :quiz="quiz" />
    </main>
  </div>
</template>
