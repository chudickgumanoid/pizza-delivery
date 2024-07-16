<template>
  <component
    :is="tag"
    :class="typographyClass"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "body",
    validator: (value) =>
      [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle",
        "body",
        "caption",
        "overline",
      ].includes(value),
  },
  component: {
    type: String,
    default: "",
  },
});

const tag = computed(() => {
  if (props.component) {
    return props.component;
  }

  switch (props.variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return props.variant;
    default:
      return "p";
  }
});

const typographyClass = computed(() => {
  return `typography-${props.variant}`;
});
</script>

<style scoped>
.typography-h1 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
}

.typography-h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #141c24;
}

.typography-h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #292929;
}

.typography-h4 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
}

.typography-h5 {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #292929;
}

.typography-h6 {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
}

.typography-subtitle {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #141c24;
}

.typography-body {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #535353;
}

.typography-caption {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #97a1af;
}

.typography-paragraph {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #141c24;
}

.typography-overline {
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  text-transform: uppercase;
}
</style>
