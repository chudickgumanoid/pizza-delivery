import { onMounted, ref } from "vue";

export const useTabs = (
  defaultTab,
  sessionStateKey = "tabSession" + defaultTab
) => {
  const currentTab = ref(defaultTab);

  const changeTab = (tab) => {
    sessionStorage.setItem(sessionStateKey, tab);
    currentTab.value = tab;
  };

  onMounted(() => {
    let getTabSession = sessionStorage.getItem(sessionStateKey);
    if (!getTabSession) {
      sessionStorage.setItem(sessionStateKey, defaultTab);
    }

    changeTab(sessionStorage.getItem(sessionStateKey) || defaultTab);
  });

  const isTab = (tab) => currentTab.value === tab;

  return {
    currentTab,
    changeTab,
    isTab,
  };
};
