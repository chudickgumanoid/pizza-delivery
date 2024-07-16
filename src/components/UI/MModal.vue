<template>
  <Teleport to="body">
    <div
      v-if="props.show"
      class="dialog"
    >
      <div
        class="dialog__body"
        @click.stop="hideDialog"
      >
        <div
          @click.stop
          @mousedown.stop
          class="dialog__content tw-max-h-[80vh]"
          :class="{ 'style-off': props.styleOff }"
        >
          <CloseIcon
            v-if="!hideClose"
            @click.stop="hideDialog"
            class="exit"
          />

          <h3
            v-if="props.title"
            class="dialog__title"
          >
            {{ props.title }}
          </h3>

          <div
            class="dialog__body-content"
            :class="{ 'style-off': props.styleOff }"
          >
            <slot />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import CloseIcon from "@/components/UI/icons/CloseIcon.vue";
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: String,
  hideClose: { type: Boolean, default: false },
});
const emits = defineEmits(["update:show"]);
const hideDialog = () => {
  emits("update:show", false);
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});

const handleKeyDown = (event) => {
  if (event.key === "Escape") {
    hideDialog();
  }
};
</script>

<style scoped lang="scss">
.dialog {
  z-index: v-bind("props.zIndex");
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  overflow: auto;
  transition: all 0.3s ease 0s;

  &__body-content {
    overflow-y: auto;
    scroll-behavior: smooth;
    padding: 1.5rem;
    &.style-off {
      padding: 0;
    }
  }

  &__body {
    min-height: 100%;
    display: flex;
    z-index: 10;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 30px 10px;
    transition: all 0.3s ease 0s;
    position: relative;
  }

  &__content {
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    background: #fff;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: all 0.3s;
    padding: 0 48px;

    &.style-off {
      padding: 0px;
    }
    @media (max-width: 500px) {
      min-width: 100%;
    }
    // min-width: 80%;

    .exit {
      cursor: pointer;
      top: 16px;
      right: 24px;
      z-index: v-bind("zIndexExit");
      width: 24px;
      height: 24px;
      position: absolute;
    }
  }
}
</style>
