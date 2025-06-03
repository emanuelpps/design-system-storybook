export default {
  theme: {
    tokens: {
      buttons: {
        primary: {
          bg: "#FF5722",
          text: "#FFFFFF",
        },
        success: {
          bg: "#22C55E",
          text: "#FFFFFF",
        },
        danger: {
          bg: "#EF4444",
          text: "#FFFFFF",
        },
      },
    },
    extend: {
      colors: {
        "button-primary": "{buttons.primary.bg}",
        "button-success": "{buttons.success.bg}",
        "button-danger": "{buttons.danger.bg}",
      },
      textColor: {
        "button-primary": "{buttons.primary.text}",
        "button-success": "{buttons.success.text}",
        "button-danger": "{buttons.danger.text}",
      },
    },
  },
};
