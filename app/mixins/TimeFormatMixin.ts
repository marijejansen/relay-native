import { Component, Vue } from 'vue-property-decorator';

@Component
class TimeFormatMixin extends Vue {
  public toSeconds(time: string): number {
    const split = time.split(/[,:.;]/);
    const length = split.length;

    let mil =
      length <= 1
        ? 0
        : split[length - 1].length === 1
          ? Number(split[length - 1] + '0')
          : Number(split[length - 1]);
    let sec = length === 1 ? Number(split[0]) : Number(split[length - 2]);
    let min = length > 2 ? Number(split[length - 3]) : 0;

    if (length === 2 && (time.includes(':') || Number(split[0]) < 10)) {
      mil = 0;
      sec = Number(split[1]);
      min = Number(split[0]);
    }

    return min * 60 + sec + mil / 100;
  }

  public toTimeString(time: number): string {
    if (!(time > 0)) {
      return '';
    }
    const secNum = time % 60;
    const sec = this.getSeconds(secNum);
    const min = ((time - secNum) / 60).toString();
    return min !== '0' ? `${min}:${sec}` : `${sec}`;
  }

  private getSeconds(num: number): string {
    const number = Number(num.toFixed(2));
    let numString = this.paddStart(number);

    numString.length === 2
      ? (numString += '.00')
      : numString.length === 4
        ? (numString += '0')
        : null;
    return numString;
  }

  private paddStart(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}

export default TimeFormatMixin;
