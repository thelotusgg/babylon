import getMultiligualText from './getMultiligualText';

export default function getMultiligualTextResolver(multiligualText: any, languageCode: string,
  fallback: boolean = true, context: any = {}) {
  let multiligualTextLanguageCode = languageCode;

  // check if language is set and if not set language by context
  if (!languageCode && context.languageCode) {
    multiligualTextLanguageCode = context.languageCode;
  }

  return getMultiligualText(
    multiligualText,
    multiligualTextLanguageCode,
    fallback,
  );
}
