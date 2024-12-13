const ERROR_TAG = '[ERROR]';

const ERROR = Object.freeze({
  EMPTY_WORKERS: {
    name: 'EmptyWorkersError',
    message: `${ERROR_TAG} 최소 5명 이상의 근무자를 작성해주세요.`,
  },
});

export default ERROR;
