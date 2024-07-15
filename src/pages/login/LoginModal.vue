<template>
  <div class="!tw-max-w-[424px] tw-flex tw-flex-col tw-gap-6">
    <div class="tw-flex tw-flex-col tw-gap-2">
      <m-text variant="h3">Авторизация</m-text>

      <m-text
        variant="subtitle"
        class="tw-max-w-[328px]"
      >
        Введите номер телефона для входа в личный кабинет
      </m-text>
    </div>
    <div class="tw-flex tw-flex-col tw-gap-4">
      <m-input
        v-model="formState.phone"
        placeholder="Телефон"
        mask="+7 (###) ###-##-##"
      />
      <m-input
        v-if="successOTP.isShow"
        v-model="formState.code"
        placeholder="Проверочный код"
        mask="### ###"
      />
    </div>

    <div class="tw-flex tw-flex-col tw-gap-2">
      <m-button @click="handleClick"> Продолжить </m-button>
      <CodeResendTimer
        v-if="successOTP.isShow"
        :time="successOTP.delay"
      />
    </div>
  </div>
</template>

<script setup>
import CodeResendTimer from "@/components/CodeResendTimer.vue";
import { userCreateOTP, userSignIn } from "@/utils/api/requests/auth";
import { LOCAL_STORAGE } from "@/utils/consts";
import { clearString } from "@/utils/helper/clearString";
import { ref } from "vue";

const formState = ref({
  phone: "",
  code: "",
});

const successOTP = ref({
  isShow: false,
  delay: "",
});

const handleClick = async () => {
  if (!successOTP.value.isShow) {
    await userCreateOTP(formState.value.phone).then(({ data }) => {
      successOTP.value.isShow = true;
      successOTP.value.delay = data.retryDelay;
    });
  } else {
    const model = {
      ...formState.value,
      code: clearString(formState.value.code),
    };
    await userSignIn(model).then(({ data }) => {
      console.log(data, "data");
      localStorage.setItem(LOCAL_STORAGE.TOKEN, data.token);
    });
  }
};
</script>

<style lang="scss" scoped></style>
