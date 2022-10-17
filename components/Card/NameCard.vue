<script setup lang="ts">
 interface NameProps {
   name: string;
 }
 const props = defineProps < NameProps > ()

 console.log(props);
 
</script>

<template>
    <div>
        <div class="card">
            <h3>{{name}}</h3>
            <p>x</p>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .card {
    background-color: rgba(21, 68, 222, 0.689);
    width: 30%;
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    margin: 0rem 0.5rem 1rem 0rem;
    position: relative;

    p {
      position: absolute;
      top: -5%;
      left: 90%;
      color: rgb(248, 243, 243);
      cursor: pointer;
    }
  }
</style>