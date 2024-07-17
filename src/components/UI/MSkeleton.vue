<template>
  <div :class="['skeleton', { 'skeleton--animated': animated }]">
    <div
      v-for="(item, index) in rowCount"
      :key="index"
      :class="[
        'skeleton__row',
        { 'skeleton__row--round': round, 'skeleton__row--circle': circle },
      ]"
      :style="getStyle(index)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  rowCount: {
    type: Number,
    default: 3,
  },
  rowHeight: {
    type: String,
    default: "20px",
  },
  rowMargin: {
    type: String,
    default: "10px",
  },
  animated: {
    type: Boolean,
    default: true,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
});

const getStyle = (index) => ({
  height: props.rowHeight,
  marginBottom: index < props.rowCount - 1 ? props.rowMargin : "0",
  width: props.circle ? props.rowHeight : "100%",
  borderRadius: props.circle ? "50%" : props.round ? "10px" : "4px",
});
</script>

<style scoped>
.skeleton {
  display: flex;
  flex-direction: column;
}

.skeleton__row {
  background-color: #e0e0e0;
  width: 100%;
}

.skeleton__row--round {
  border-radius: 10px;
}

.skeleton__row--circle {
  border-radius: 50%;
  width: var(--skeleton-height);
}

.skeleton--animated .skeleton__row {
  animation: skeleton-loading 1.2s infinite ease-in-out;
}

@keyframes skeleton-loading {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
