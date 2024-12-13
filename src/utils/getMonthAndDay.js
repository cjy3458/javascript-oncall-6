import MESSAGE from '../constants/message.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Validator from './Validator.js';

const getMonthAndDay = async () => {
  try {
    const input = await InputView.readInput(MESSAGE.INPUT_MONTH_AND_DAY);
    const [month, startDay] = input.split(',').map((element) => element.trim());
    Validator.validateMonth(month);
    Validator.validateDayOfTheWeek(startDay);
    return { month, startDay };
  } catch (error) {
    OutputView.printError(error.message);
    return await getMonthAndDay();
  }
};

export default getMonthAndDay;
