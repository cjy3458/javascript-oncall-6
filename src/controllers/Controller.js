import { HOLIDAY, WEEK } from '../constants/config.js';
import MESSAGE from '../constants/message.js';
import WeekdaysOnCall from '../models/WeekdaysOnCall.js';
import WeekendOnCall from '../models/WeekendOnCall.js';
import getDaysInMonth from '../utils/getDaysInMonth.js';
import getMonthAndDay from '../utils/getMonthAndDay.js';
import Validator from '../utils/Validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async start() {
    const { month, startDay } = await getMonthAndDay();
    const daysInMonth = getDaysInMonth(parseInt(month, 10));
    const { weekdaysOnCall, weekendOnCall } = await this.initializeWorkers();
    this.printWorkers(
      month,
      daysInMonth,
      startDay,
      weekdaysOnCall,
      weekendOnCall,
    );
  }

  async initializeWorkers() {
    try {
      const weekdaysWorkers = await InputView.readInput(
        MESSAGE.INPUT_WEEKDAYS_WORKERS,
      );
      const weekdaysOnCall = weekdaysWorkers
        .split(',')
        .map((element) => element.trim());
      Validator.validateWorkers(weekdaysOnCall);

      const weekendWorkers = await InputView.readInput(
        MESSAGE.INPUT_WEEKEND_WORKERS,
      );

      const weekendOnCall = weekendWorkers
        .split(',')
        .map((element) => element.trim());
      Validator.validateWorkers(weekendOnCall);

      return this.getOnCall(weekdaysOnCall, weekendOnCall);
    } catch (error) {
      OutputView.printError(error.message, error.name);
      return this.initializeWorkers();
    }
  }

  async getOnCall(weekdaysWorkers, weekendWorkers) {
    const weekdaysOnCall = new WeekdaysOnCall(weekdaysWorkers);
    const weekendOnCall = new WeekendOnCall(weekendWorkers);
    return { weekdaysOnCall, weekendOnCall };
  }

  getDayType(month, day, weekday) {
    if (
      [WEEK[5], WEEK[6]].includes(weekday) ||
      HOLIDAY.includes(`${month}월 ${day}일`)
    ) {
      return 'HOLIDAY';
    }
    return 'WEEKDAY';
  }

  async printWorkers(month, daysInMonth, startDay, workers1, workers2) {
    const startIndex = WEEK.indexOf(startDay);
    let previousWorker = '';
    daysInMonth.forEach((day) => {
      const dayOfTheWeek = WEEK[(startIndex + daysInMonth.indexOf(day)) % 7];
      const dayType = this.getDayType(month, day, dayOfTheWeek);
      const worker = this.getNextWorker(
        previousWorker,
        dayType,
        workers1,
        workers2,
      );
      previousWorker = worker;
      OutputView.printDate(month, day, dayOfTheWeek, worker);
    });
  }

  getNextWorker(previousWorker, dayType, workers1, workers2) {
    const workerClass = dayType === 'WEEKDAY' ? workers1 : workers2;
    let worker = workerClass.workers[workerClass.index];
    if (worker === previousWorker) {
      workerClass.switchWorkers(workerClass.index);
      worker = workerClass.workers[workerClass.index];
    }
    workerClass.increaseIndex();
    workerClass.index %= workerClass.workers.length;
    return worker;
  }
}

export default Controller;
