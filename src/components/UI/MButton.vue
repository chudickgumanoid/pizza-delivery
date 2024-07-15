<template>
  <button
    :class="['btn', `btn-${variant}`, { 'btn-disabled': disabled }, sizeClass]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "ghost", "link"].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "btn-sm";
    case "lg":
      return "btn-lg";
    default:
      return "btn-md";
  }
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.375rem;
  border: none;
  width: 100%;
  cursor: pointer;

  &-primary {
    background-color: #1e3a8a;
    color: white;
    &:hover {
      background-color: #1c3b82;
    }
    &:active {
      background-color: #192f74;
    }
    &.btn-disabled {
      background-color: #a5b4fc;
      color: #d1d5db;
      cursor: not-allowed;
    }
  }

  &-secondary {
    background-color: #4b5563;
    color: white;
    &:hover {
      background-color: #3f4953;
    }
    &:active {
      background-color: #373f47;
    }
    &.btn-disabled {
      background-color: #d1d5db;
      color: #6b7280;
      cursor: not-allowed;
    }
  }

  &-ghost {
    background-color: transparent;
    color: #1e3a8a;
    border: 1px solid #1e3a8a;
    &:hover {
      background-color: #e0e7ff;
    }
    &:active {
      background-color: #c7d2fe;
    }
    &.btn-disabled {
      color: #a5b4fc;
      border-color: #a5b4fc;
      cursor: not-allowed;
    }
  }

  &-link {
    background-color: transparent;
    text-decoration: underline;
    color: #1e3a8a;
    &:hover {
      color: #1c3b82;
    }
    &:active {
      color: #192f74;
    }
    &.btn-disabled {
      color: #a5b4fc;
      cursor: not-allowed;
    }
  }

  &-sm {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }

  &-md {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  &-lg {
    font-size: 1.125rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>
