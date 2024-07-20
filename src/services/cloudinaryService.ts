export const cloudinaryService = (upload_preset: string) => {
  return {
    cloudName: "hotelapp",
    uploadPreset: upload_preset,
    sources: ["local"],
    showAdvancedOptions: false,
    defaultSource: "local",
    // #71a535
    styles: {
      palette: {
        window: "#71a535",
        sourceBg: "#FFFFFF",
        windowBorder: "#71a535",
        tabIcon: "#FFFFFF",
        inactiveTabIcon: "#FFDB92",
        menuIcons: "#FFFFFF",
        link: "#71a535",
        action: "#FF2929",
        inProgress: "#000000",
        complete: "#71a535",
        error: "#c43737",
        textDark: "#000000",
        textLight: "#FFFFFF",
      },
      fonts: {
        default: null,
        "'Poppins', sans-serif": {
          url: "https://fonts.googleapis.com/css?family=Poppins",
          active: true,
        },
      },
    },
  };
};
