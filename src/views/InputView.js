import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async readInput(text) {
    const input = await Console.readLineAsync(text);
    return input;
  }
}

export default InputView;
