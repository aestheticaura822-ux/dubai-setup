export const WHATSAPP_NUMBER = '971566556645';

export function getWhatsAppLink(message?: string): string {
  const defaultMessage =
    "Hello Setup Zone Dubai! I'm interested in your Corporate Tax & VAT services. Could you please share more details?";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}