<script setup>
const { questionStatus, progressBar } = defineProps([
  "questionStatus",
  "progressBar",
]);
</script>

<template>
  <header>
    <h4 class="text-4xl text-slate-900 pt-5">Question {{ questionStatus }}</h4>
    <div class="w-[300px] h-[30px] border border-emerald-400 mt-3">
      <div
        class="bg-emerald-400 h-full w-[0%]"
        :style="{ width: progressBar }"
      ></div>
    </div>
  </header>
</template>
