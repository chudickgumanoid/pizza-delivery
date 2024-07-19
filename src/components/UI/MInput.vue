<template>
  <div
    class="input-container"
    :class="stateClass"
  >
    <label
      v-if="label"
      :for="uuid"
      class="label"
    >
      {{ label }}
    </label>
    <div
      class="input-wrapper"
      v-if="props.counter"
    >
      <button
        type="button"
        class="decrement"
        @click="decrement"
      >
        -
      </button>
      <input
        v-model="model"
        v-bind="$attrs"
        :class="['input-counter', inputStateClass]"
        :type="type"
        :id="uuid"
        :placeholder="!label ? placeholder : ''"
        v-maska="props.mask"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <button
        type="button"
        class="increment"
        @click="increment"
      >
        +
      </button>
    </div>
    <input
      v-else
      v-model="model"
      v-bind="$attrs"
      :class="['input', inputStateClass]"
      :type="type"
      :id="uuid"
      :placeholder="!label ? placeholder : ''"
      v-maska="props.mask"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span
      v-if="hint"
      class="hint"
    >
      {{ hint }}
    </span>
    <span
      v-if="error"
      class="error"
    >
      {{ error }}
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import { vMaska } from "maska/vue";

const model = defineModel("value");

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  mask: {
    type: String,
    default: "",
  },
  counter: {
    type: Boolean,
    default: false,
  },
});

const uuid = uuidv4();

const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

const stateClass = computed(() => {
  if (props.error) return "input-error";
  if (isFocused.value) return "input-focused";
  return "";
});

const inputStateClass = computed(() => {
  if (props.error) return "input-error-border";
  if (isFocused.value) return "input-focused-border";
  return "";
});

const increment = () => {
  if (model.value === "" || isNaN(Number(model.value))) {
    model.value = 0;
  }
  model.value = Number(model.value) + 1;
};

const decrement = () => {
  if (model.value === "" || isNaN(Number(model.value))) {
    model.value = 0;
  }
  if (Number(model.value) > 0) {
    model.value = Number(model.value) - 1;
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .label {
    font-size: 0.875rem;
    color: #6b7280;
  }

  .hint {
    font-size: 0.75rem;
    color: #6b7280;
  }

  .error {
    font-size: 0.75rem;
    color: #f87171;
  }

  &.input-focused .input {
    border-color: #4c94ff;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }

  &.input-error .input {
    border-color: #f87171;
    box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.5);
  }

  .input-wrapper {
    display: flex;
    align-items: center;

    .decrement,
    .increment {
      background: #f3f4f6;
      border: 1px solid #f3f4f6;
      color: #374151;
      padding: 0.5rem;
      cursor: pointer;
      user-select: none;
    }

    .input-counter {
      border: 1px solid #f3f4f6;
      border-radius: 0;
      background: #f3f4f6;
      color: #000000;
      padding: 0.5rem 0rem;
      font-size: 1rem;
      width: 100%;
      transition: all 0.3s 0s ease;
      text-align: center;

      &::placeholder {
        color: #6b7280;
      }

      &:focus {
        outline: none;
      }

      &.input-focused-border {
        border-color: none;
      }

      &.input-error-border {
        border-color: #f87171;
      }
    }

    .decrement {
      border-right: none;
      border-radius: 14px 0 0 14px;
    }

    .increment {
      border-left: none;
      border-radius: 0 14px 14px 0;
    }
  }
}

.input {
  background: #ffffff;
  color: #000000;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  width: 100%;
  transition: all 0.3s 0s ease;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
  }

  &.input-focused-border {
    border-color: #4c94ff;
  }

  &.input-error-border {
    border-color: #f87171;
  }
}
</style>
