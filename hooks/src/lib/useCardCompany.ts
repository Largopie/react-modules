import useInput, { ValidationType } from './useInput';

const useCardCompany = (initialValue = '') => {
  const isValid = (value: string) => {
    return value !== '';
  };

  const inputValidations: ValidationType[] = [
    {
      validate: isValid,
      message: '카드사를 선택해주세요.',
    },
  ];

  const cardCompany = useInput({ initialValue, inputValidations });
  const isCardCompanyValid = cardCompany.value !== '' && !cardCompany.error.state;

  return { cardCompany, isCardCompanyValid };
};

export default useCardCompany;
