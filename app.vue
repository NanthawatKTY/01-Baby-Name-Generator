<script setup lang="ts">
  import {
    Gender,
    Popularity,
    NameLength,
    names
  } from "@/nameData"

  interface OptionState {
    gender: string;
    popularity: string;
    nameLength: string;
  }

  const options:any = reactive < OptionState> ({
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    nameLength: NameLength.SHORT,
  })

  const computeSelectedNames = () => {
    const filteredNames = names
      .filter((name) => name.gender === options.gender)
      .filter((name) => name.popularity === options.popularity)
      .filter((name) => {
        if (options.nameLength === NameLength.ALL) return true
        else return name.nameLength === options.nameLength
      })

    selectedNames.value = filteredNames.map((name) => name.name)
  }

    // ref is a function that returns a reactive object
  //Define a ref to hold the names
  const selectedNames = ref < string[] > ([])

  const removeName = (index: number) => {
    const filteredNames = [...selectedNames.value]

    //remove the name at the index for 1 element
    filteredNames.splice(index, 1)

    selectedNames.value = filteredNames
  }

  const optionsArray = [{
      title: "1) Choose a gender",
      category: "gender",
      buttons: [Gender.GIRL, Gender.BOY, Gender.UNISEX]
    },
    {
      title: "2) Choose the name's popularity",
      category: "popularity",
      buttons: [Popularity.TRENDY, Popularity.UNIQUE]
    },
    {
      title: "3) Choose name's length",
      category: "nameLength",
      buttons: [NameLength.LONG, NameLength.SHORT, NameLength.ALL]
    },
  ]
</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below.</p>
    <div class="options-container">
      <Option 
        v-for="option in optionsArray" 
        :key="option.title" 
        :option="option" 
        :options="options" 
      />
      <button @click="computeSelectedNames" class="save-btn px-8 py-4">Find Names</button>
    </div>
    <div class="cards-container">
      <CardNameCard 
        v-for="(name, index) in selectedNames" 
        :key="name" 
        :name="name"
        @remove="() => removeName(index)"
        :index="index"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .container {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    justify-content: center;
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
    padding: 1rem;
    margin: 4rem 0 0 0;
    width: 100%;
    position: relative;
    justify-content: center;

    .save-btn {
      background-color: rgb(249, 87, 89);
      color: #fff;
      border-radius: 6.5rem;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      margin: 1rem 0 0 0;
    }
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem 0;
    /* gap: 1rem; */
  }
</style>