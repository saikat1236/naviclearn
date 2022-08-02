<template>
    <dev class="popup">
        <div class="popup-inner">
            <slot />
            <button class="popup-close" @click="togglepopup()">
            Close popup
            </button>
        </div>
    </dev>
</template>

<script>
export default {
  props: ['togglepopup']
}
</script>
