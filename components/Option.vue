<script setup lang="ts">
    //defineProps is a function that takes an object as an argument
    //The object's keys are the names of the props
    //The object's values are the types of the props

    import {
        Gender,
        NameLength,
        Popularity
    } from "@/nameData";

    //you can auto import props
    interface OptionProps {
        option: {
            title: string;
            category: string;
            buttons: Gender[] | Popularity[] | NameLength[];
        }
        options: {
            gender: Gender;
            popularity: Popularity;
            nameLength: NameLength;
        }
    }

    const props = defineProps < OptionProps > ()

    const computeButtonClasses = (value: string, index: number) => {
        const classNames = [];
        if (props.options[props.option.category] === value) {
            classNames.push("option-active");
        }
        if (index === 0) classNames.push("option-left");
        if (index === props.option.buttons.length - 1)
            classNames.push("option-right");
        return classNames.join(" ");
    };
</script>

<template>
    <div>
        <div class="option-container">
            <h4>{{ option.title }}</h4>
            <div class="option-buttons">
                <button v-for="(value, index) in option.buttons" :key="value" class="option"
                    :class="computeButtonClasses(value, index)" @click="options[option.category] = value">
                    {{ value }}
                </button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .option-container {
        margin-bottom: 2rem;
    }

    .option {
        background: white;
        outline: 0.15rem solid rgb(249, 87, 89);
        border: none;
        padding: 0.75rem;
        width: 12rem;
        font-size: 1rem;
        color: rgb(27, 60, 138);
        cursor: pointer;
        font-weight: 200;
    }

    .option-left {
        border-radius: 1rem 0 0 1rem;
    }

    .option-right {
        border-radius: 0 1rem 1rem 0;
    }

    .option-active {
        background-color: rgb(249, 87, 89);
        color: white;
    }
</style>