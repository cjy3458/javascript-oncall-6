import { WEEK } from '../constants/config.js';
import ERROR from '../constants/error.js';
import CustomError from './CustomError.js';

class Validator {
  static validateWorkers(workers) {
    this.validateInputEmpty(workers);
    this.validateWorkersNumber(workers);
    this.validateWorkerNameLength(workers);
    this.validateDuplicateWorkerName(workers);
  }

  static validateMonth(month) {
    this.validateInputEmpty(month);
    this.validateMonthRange(month);
    this.validateMonthType(month);
  }

  static validateDayOfTheWeek(dayOfTheWeek) {
    this.validateInputEmpty(dayOfTheWeek);
    this.validateDayOfTheWeekType(dayOfTheWeek);
  }

  static validateInputEmpty(input) {
    if (input === '') {
      throw new CustomError(ERROR.EMPTY_INPUT);
    }
  }

  static validateWorkersNumber(workers) {
    if (workers.length < 5 || workers.length > 35) {
      throw new CustomError(ERROR.INVALID_WORKERS_NUMBER);
    }
  }

  static validateWorkerNameLength(workers) {
    workers.forEach((worker) => {
      if (worker.length > 5) {
        throw new CustomError(ERROR.INVALID_WORKER_NAME_LENGTH);
      }
    });
  }

  static validateDuplicateWorkerName(workers) {
    const set = new Set(workers);
    if (workers.length !== set.size) {
      throw new CustomError(ERROR.DUPLICATION_WORKER_NAME);
    }
  }

  static validateMonthRange(month) {
    if (Number(month) > 12 || Number(month) < 1) {
      throw new CustomError(ERROR.INVALID_MONTH);
    }
  }

  static validateMonthType(month) {
    if (Number.isNaN(Number(month))) {
      throw new CustomError(ERROR.NAN_MONTH);
    }
  }

  static validateDayOfTheWeekType(dayOfTheWeek) {
    if (!WEEK.includes(dayOfTheWeek)) {
      throw new CustomError(ERROR.INVALID_DAY_OF_THE_WEEK);
    }
  }
}

export default Validator;
