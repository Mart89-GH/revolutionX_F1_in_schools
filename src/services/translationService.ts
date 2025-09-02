import { translate } from 'google-translate-api-x';

export const translateText = async (text: string, targetLang: string): Promise<string> => {
  try {
    const result = await translate(text, { to: targetLang });
    return result.text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text if translation fails
  }
};

export const translateElements = async (elements: NodeListOf<Element>, targetLang: string): Promise<void> => {
  const textNodes = Array.from(elements).filter(el => {
    // Skip elements with data-no-translate attribute or within elements marked as no-translate
    return !el.closest('[data-no-translate]') && el.textContent?.trim();
  });

  for (const node of textNodes) {
    const originalText = node.textContent?.trim() || '';
    if (originalText) {
      try {
        const translatedText = await translateText(originalText, targetLang);
        if (!node.getAttribute('data-original-text')) {
          node.setAttribute('data-original-text', originalText);
        }
        node.textContent = translatedText;
      } catch (error) {
        console.error('Error translating element:', error);
      }
    }
  }
};

export const restoreOriginalText = (elements: NodeListOf<Element>): void => {
  elements.forEach(el => {
    const originalText = el.getAttribute('data-original-text');
    if (originalText) {
      el.textContent = originalText;
      el.removeAttribute('data-original-text');
    }
  });
};