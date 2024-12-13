import { Console } from '@woowacourse/mission-utils';
import { HOLIDAY } from '../constants/config.js';

class OutputView {
  static printText(text) {
    Console.print(text);
  }

  static printDate(month, day, weekOfTheDay, worker) {
    if (HOLIDAY.includes(`${month}월 ${day}일`)) {
      Console.print(`${month}월 ${day}일 ${weekOfTheDay}(휴일) ${worker}`);
      return;
    }
    Console.print(`${month}월 ${day}일 ${weekOfTheDay} ${worker}`);
  }

  static printError(message) {
    Console.print(`${message}\n`);
  }
}

export default OutputView;
