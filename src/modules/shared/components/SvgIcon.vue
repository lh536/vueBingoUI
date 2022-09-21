<script setup>
const props = defineProps ({
    iconName: {
        type: String,
        required: true,
    },
})
</script>


<template>

    <svg role="img">
        <use :href="`iconSet.svg#${iconName}`"></use>
    </svg>

</template>
