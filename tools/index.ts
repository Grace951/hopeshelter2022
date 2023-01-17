export const preLoadImg = (url: string) => {
  if (!url) {
    Promise.reject();
    return;
  }
  return new Promise((resolve, reject) => {
    const img = new Image();
    const onload = function () {
      resolve(img);
    };
    img.onload = onload;
    img.onerror = function (e) {
      console.error(url, e);
      reject(e);
    };
    img.src = url;
    if (img.complete === true) {
      resolve(img);
    }
  });
};
