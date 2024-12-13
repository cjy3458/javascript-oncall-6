import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printText(text) {
    Console.print(text);
  }

  static printError(error) {
    Console.print(`${error.message} (${error.name})\n`);
  }
}

export default OutputView;
