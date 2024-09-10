<script setup>
const { questionStatus } = defineProps(["questionStatus"]);
</script>

<template>
  <header>
    <h4 class="text-4xl text-slate-900 pt-5">Question {{ questionStatus }}</h4>
    <div class="bar w-[300px] h-[30px] border border-emerald-400 mt-3">
      <div class="comptetion bg-emerald-400 h-full w-[0%]"></div>
    </div>
  </header>
</template>
