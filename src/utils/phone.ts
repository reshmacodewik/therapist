import { parsePhoneNumber } from 'libphonenumber-js/min';

export function isValidPhoneForCountry(
  phoneNo: string,
  countryIso2?: string,
  countryDialCode?: string
) {
  if (!phoneNo) return false;
  const raw = phoneNo.trim();

  try {
    if (countryIso2) {
      const pn = parsePhoneNumber(raw.startsWith('+') ? raw : raw, countryIso2 as any);
      return pn?.isValid() ?? false;
    }
    if (countryDialCode) {
      const e164 = `+${countryDialCode.replace('+', '')}${raw.replace(/[^\d]/g, '')}`;
      const pn = parsePhoneNumber(e164);
      return pn?.isValid() ?? false;
    }
    return false;
  } catch {
    return false;
  }
}
