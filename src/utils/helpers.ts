export const isTextIncludedInString = (text: string, str: string) => {
  if (!text || !str) {
    return false;
  }

  return str.toLocaleLowerCase().search(text.toLocaleLowerCase()) > -1;
};

export const capitalizeFirstLetter = (str: string = '') => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
};

export function sleep(ms: number): Promise<boolean> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, ms)
  );
}
