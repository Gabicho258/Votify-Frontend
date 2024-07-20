import { useState, useCallback } from "react";

interface UseCloudinaryReturn {
  uploadPhoto: () => void;
  photoURL: string;
}

export const useCloudinary = (
  cloudinaryService: (upload_preset: string) => object
): UseCloudinaryReturn => {
  const [photoURL, setPhotoURL] = useState<string>("");

  const uploadPhoto = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).cloudinary.openUploadWidget(
      cloudinaryService("votify-upload"),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err: any, result: any) => {
        if (!err && result && result.event === "success") {
          const { secure_url } = result.info;
          setPhotoURL(secure_url);
        }
      }
    );
  }, [cloudinaryService]);

  return { uploadPhoto, photoURL };
};

// const showWidgetPhotoUser = async () => {
//   let state = "";
//   let URL = "";
//   // hacemos un casteo para evitar errores
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   (window as any).cloudinary.openUploadWidget(
//     cloudinaryService("eco_conciencia"),
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     (err: any, result: any) => {
//       if (!err && result && result.event === "success") {
//         state = "success";
//         const { secure_url /*, original_filename, format */ } = result.info;
//         URL = secure_url;
//       }
//       if (state === "success" && result.event === "close") {
//         // handlePhotoEdit(URL);
//         // console.log(result);
//         setPhoto(URL);
//         // onInputChange(URL, "photo_url");
//       }
//     }
//   );
// };
