<template>
  <div class="tabs">
    <div
      v-for="item in props.options"
      :key="item.key"
      @click="changeTab(item.key)"
      class="tabs__header"
      :class="{ active: currentTab == item.key }"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup>
import { useTabs } from "@/utils/hooks/useTabs";

const props = defineProps({
  options: Array,
  default: String,
  paddingHeader: String,
});

const { currentTab, changeTab, isTab } = useTabs(props.default);
defineExpose({ isTab, currentTab });
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  background: #f3f4f6;
  border-radius: 16px;
  border: 2px solid #f3f4f6;

  &__header {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    background-color: #f5f5f5;
    border-radius: 16px;
    cursor: pointer;
    font-size: 14px;
    color: #637083;
    transition:
      background-color 0.3s,
      color 0.3s;

    &.active {
      background-color: #ffffff;
      color: #141c24;
      position: relative;
      z-index: 1;
    }
  }
}
</style>
