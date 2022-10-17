
<script setup lang="ts">
    //defineProps is a function that takes an object as an argument
    //The object's keys are the names of the props
    //The object's values are the types of the props

import { Gender, NameLength, Popularity } from "@/nameData";

    //you can auto import props
interface OptionProps{
    option:{
        title: string;
        category: string;
        buttons: Gender[] | Popularity[] | NameLength[];
    }
    options:{
        gender: Gender;
        popularity: Popularity;
        nameLength: NameLength;
    }
}

    const props = defineProps<OptionProps>()
</script>

<template>
    <div>
        <div class="option-container">
        <h4>{{ option.title }}</h4>
        <div class="option-buttons">
            <button 
            v-for="valueButton in option.buttons" :key="valueButton"
            :class="options[option.category] === valueButton && 'option-btn-active'"
            @click="options[option.category] = valueButton"
            class="option-btn rounded-l-lg"
            >
                {{ valueButton }}
            >
            Boy
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <!-- <button class="option-btn rounded-l-lg"
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
          </button> -->
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose name's length</h4>
        <div class="option-buttons">
          <!-- <button class="option-btn rounded-l-lg"
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
          </button> -->
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>
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