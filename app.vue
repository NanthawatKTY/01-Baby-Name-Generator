<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below.</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button class="option-btn rounded-l-lg"
            :class="options.gender === Gender.BOY && 'option-btn-active'"
            @click="options.gender = Gender.BOY"
            >
            Boy
          </button>
          <button class="option-btn" 
            :class="options.gender === Gender.GIRL && 'option-btn-active'"
            @click="options.gender = Gender.GIRL"
          >
            Girl
          </button>
          <button class="option-btn rounded-r-lg"
            :class="options.gender === Gender.UNISEX && 'option-btn-active'"
            @click="options.gender = Gender.UNISEX"  
          >
            Unisex
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>2) Choose thte name's popularity</h4>
        <div class="option-buttons">
          <button class="option-btn rounded-l-lg"
            :class="options.popularity === Popularity.TRENDY && 'option-btn-active'"
            @click="options.popularity = Popularity.TRENDY"  
          >
            Trendy
          </button>
          <button class="option-btn rounded-r-lg"
            :class="options.popularity === Popularity.UNIQUE && 'option-btn-active'"
            @click="options.popularity = Popularity.UNIQUE"
          >
            Unique
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose name's length</h4>
        <div class="option-buttons">
          <button class="option-btn rounded-l-lg"
            :class="options.nameLength === NameLength.LONG && 'option-btn-active'"
            @click="options.nameLength = NameLength.LONG"
          >
           Long
          </button>
          <button class="option-btn" 
            :class="options.nameLength === NameLength.SHORT && 'option-btn-active'"
            @click="options.nameLength = NameLength.SHORT"  
          >
            Short
          </button>
          <button class="option-btn rounded-r-lg"
            :class="options.nameLength === NameLength.ALL && 'option-btn-active'"
            @click="options.nameLength = NameLength.ALL"
          >
            All
          </button>
        </div>
      </div>
      <button class="save-btn px-8 py-4">Find Names</button>
    </div>
    {{ selectedNames}}
  </div>
</template>

<script setup lang="ts">
  import {Gender, Popularity, NameLength ,names} from "@/nameData"

  interface OptionState {
    gender: string;
    popularity: string;
    nameLength: string;
  }

  const options = reactive < OptionState > ({
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    nameLength: NameLength.SHORT,
  })

  // ref is a function that returns a reactive object
  //Define a ref to hold the names
  const selectedNames = ref<string[]>([])

</script>

<style lang="scss" scoped>
  .container {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin: 0 auto;
    max-width: 50rem;
    color: #333;
  }

  h1 {
    font-size: 2rem;
  }

  .options-container {
    background-color: rgba(253, 223, 223, 0.689);
    border-radius: 2rem;
    padding: 2rem;
    margin: 2rem 0;
    width: 95%;
    position: relative;

    .save-btn{
      background-color: rgb(249, 87, 89);
      color: #fff;
      border-radius: 6.5rem;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }
  }

  .option-container {
    margin-bottom: 2rem;
  }

  .option-btn {
    background-color: #fff;
    border: 1px solid #333;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0rem;
    cursor: pointer;

    &:hover {
      background-color: #333;
      color: #fff;
    }
  }

  .option-btn-active {
    background-color: rgb(30, 26, 26);
    color: #fff;
  }

</style>