export default class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const toBase64 = (file) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = (error) => reject(error);
            });
          const base64_image = toBase64(file).then((data) => {
            return resolve({
              default: data,
            });
          });
          this.loader.uploaded = true;
          return base64_image;
        })
    );
  }
}
