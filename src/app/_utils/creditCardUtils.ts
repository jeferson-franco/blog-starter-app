export const getCardType = (cardNumber: string) => {
  const regexPatterns: { [key: string]: RegExp } = {
    amex: /^3[47][0-9]{13}$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    master: /^5[1-5][0-9]{14}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    // diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    // jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    // solo: /^(6767|6767[0-9]{12}(\d{2,3})?)$/,
    // maestro:
    //   /^(50[0-9]{4}|5[6-9][0-9]{4}|6[0-9]{4}|601[1-9]|6017|6018|6019|601[0-9]|602|603|604|605|606|607|608|609|610|611|612|613|614|615|616|617|618|619|620|621|622|623|624|625|626|627|628|629|630|631|632|633|634|635|636|637|638|639|640|641|642|643|644|645|646|647|648|649|650|651|652|653|654|655|656|657|658|659|660|661|662|663|664|665|666|667|668|669|670|671|672|673|674|675|676|677|678|679|680|681|682|683|684|685|686|687|688|689|690|691|692|693|694|695|696|697|698|699)$/,
    // switch: /^(4903|4905|4911|4936|564182|633110|6333|6759)([0-9]{10,17})?$/,
    // boleto: /^[0-9]{44,47}$/,
    // hipercard: /^38[0-9]{17}$/,
    // aura: /^50[0-9]{14,17}$/,
    // eft_germany: /^[0-9]{20,22}$/,
    // giro: /^[0-9]{1,8}$/,
    // amazon: /^5[0-9]{14,17}$/,
    // icepay: /^9[0-9]{10,17}$/,
    // bitcoin_pg: /^1[0-9]{24,34}$/,
    // eurodebit: /^[0-9]{13,19}$/,
    // sepa: /^[A-Z]{2}[0-9]{2}[0-9A-Z]{1,30}$/,
    // boleto_bradesco: /^[0-9]{44,47}$/,
    // boleto_caixa_eco_fed: /^[0-9]{44,47}$/,
    // boleto_hsbc: /^[0-9]{44,47}$/,
    // boleto_banco_do_bras: /^[0-9]{44,47}$/,
    // boleto_itau: /^[0-9]{44,47}$/,
    // cielo_visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    // cielo_mastercard: /^5[1-5][0-9]{14}$/,
    // cielo_amex: /^3[47][0-9]{13}$/,
    // cielo_diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    // cielo_elo: /^4[0-9]{12}(?:[0-9]{3})?$/,
    // redecard_webs_visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    // redecard_webs_master: /^5[1-5][0-9]{14}$/,
  };

  for (const cardType in regexPatterns) {
    if (regexPatterns[cardType].test(cardNumber)) {
      return cardType;
    }
  }

  return "visa";
};
