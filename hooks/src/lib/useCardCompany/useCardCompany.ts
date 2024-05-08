import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation, { ValidationType } from '../common/useValidation';

type CardType = 'BC카드' | '신한카드' | '카카오뱅크' | '현대카드' | '우리카드' | '롯데카드' | '하나카드' | '국민카드' | '';

const CARD_COMPANY = Object.freeze({
  '': '카드사를 선택해주세요',
  BC카드: 'BC카드',
  신한카드: '신한카드',
  카카오뱅크: '카카오뱅크',
  현대카드: '현대카드',
  우리카드: '우리카드',
  롯데카드: '롯데카드',
  하나카드: '하나카드',
  국민카드: '국민카드',
});

const inputValidations: ValidationType<CardType>[] = [
  {
    validate: (value) => value !== '',
    message: '카드사를 선택해주세요.',
  },
];

const preventInputValidations: ValidationType<CardType>[] = [
  {
    validate: (value) => !!CARD_COMPANY[value],
    message: '카드사를 올바르게 선택해주세요.',
  },
];

const useCardCompany = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const { error, validateValue } = useValidation<CardType>();
  const isValid = value !== '' && !error.state;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value as CardType;
    const preventInputValidateResult = validateValue(targetValue, preventInputValidations);

    if (!preventInputValidateResult) return;

    validateValue(targetValue, inputValidations);
    setValue(targetValue);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    const targetValue = e.target.value as CardType;
    validateValue(targetValue, inputValidations);
  };

  return { value, isValid, error, onChange: onChangeHandler, onBlur: onBlurHandler };
};

export default useCardCompany;
