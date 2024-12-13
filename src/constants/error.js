const ERROR_TAG = '[ERROR]';

const ERROR = Object.freeze({
  EMPTY_INPUT: {
    name: 'EmptyInputError',
    message: `${ERROR_TAG} 빈 문자열이 입력되었습니다. 다시 입력해주세요.`,
  },
  INVALID_WORKERS_NUMBER: {
    name: 'InvalidWorkersNumberError',
    message: `${ERROR_TAG} 최소 5명 이상 최대 35명 이하의 근무자를 작성해주세요.`,
  },
  INVALID_DAY_OF_THE_WEEK: {
    name: 'InvalidDayOfTheWeekError',
    message: `${ERROR_TAG} 월 ~ 일 중 요일을 뜻하는 글자를 입력해주세요.`,
  },
  INVALID_MONTH: {
    name: 'InvalidMonthError',
    message: `${ERROR_TAG} 월은 1~12월까지만 입력할 수 있습니다. 숫자로만 입력해주세요.`,
  },
  NAN_MONTH: {
    name: 'NaNMonthError',
    message: `${ERROR_TAG} 월을 숫자로만 입력해주세요.`,
  },
  INVALID_WORKER_NAME_LENGTH: {
    name: 'InvalidWorkerNameLength',
    message: `${ERROR_TAG} 근무자 이름은 최대 5글자로 입력해주세요.`,
  },
  DUPLICATION_WORKER_NAME: {
    name: 'DuplicationWorkerNameLength',
    message: `${ERROR_TAG} 근무자는 중복으로 배정될 수 없습니다.`,
  },
});

export default ERROR;
