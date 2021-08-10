export default function getMultiligualText(multiligualText: any, languageCode: string,
  fallback: boolean = true) {
  if (!multiligualText) return null;

  let result = multiligualText.find(
    (text: { languageCode: any; }): any => text.languageCode === languageCode,
  );

  if (!result && fallback) {
    result = multiligualText.find(
      (text: { languageCode: any; }): any => text.languageCode === 'en-GB',
    );
  }

  return result;
}
