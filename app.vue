<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below.</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button class="option-btn rounded-l-lg"
            :class="options.gender === Gender.BOY && 'option-btn-active'">
            Boy
          </button>
          <button class="option-btn" :class="options.gender === Gender.GIRL && 'option-btn-active'">
            Girl
          </button>
          <button class="option-btn rounded-r-lg"
            :class="options.gender === Gender.UNISEX && 'option-btn-active'">
            Unisex
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>2) Choose thte name's popularity</h4>
        <div class="option-buttons">
          <button class="option-btn rounded-l-lg"
            :class="options.popularity === Popularity.TRENDY && 'option-btn-active'">Trendy</button>
          <button class="option-btn rounded-r-lg"
            :class="options.popularity === Popularity.UNIQUE && 'option-btn-active'">Unique</button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose name's length</h4>
        <div class="option-buttons">
          <button class="option-btn rounded-l-lg"
            :class="options.nameLength === NameLength.LONG && 'option-btn-active'">Long</button>
          <button class="option-btn" :class="options.nameLength === NameLength.SHORT && 'option-btn-active'">Short</button>
          <button class="option-btn rounded-r-lg"
            :class="options.nameLength === NameLength.ALL && 'option-btn-active'">All</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  enum Gender {
    GIRL = "girl",
    BOY = "boy",
    UNISEX = "unisex",
  }
  enum Popularity {
    TRENDY = "trendy",
    UNIQUE = "unique",
  }
  enum NameLength {
    LONG = "long",
    SHORT = "short",
    ALL = "all",
  }

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