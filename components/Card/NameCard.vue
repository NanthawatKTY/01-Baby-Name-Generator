<script setup lang="ts">
    interface NameProps {
        name: string;
        index: number;
    }

    //defineProps is a function that takes an object as an argument
    const props = defineProps < NameProps > ()

    //defineEmit is a function that takes an object as an argument
    const emit = defineEmits(["remove"])

    const removeName = () => {
        //emit an event called remove from app.vue
        emit("remove", props.index)
    }
</script>

<template>
    <div class="card">
        <h3>{{name}}</h3>
        <p @click="removeName">x</p>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        background-color: rgba(21, 68, 222, 0.689);
        width: 28%;
        color: white;
        padding: 1rem;
        border-radius: 1rem;
        margin: 0rem 1rem 1rem 1rem;
        position: relative;
        /* justify-content: center; */

        p {
            position: absolute;
            top: -5%;
            left: 90%;
            color: rgb(248, 243, 243);
            cursor: pointer;
        }
    }
</style>