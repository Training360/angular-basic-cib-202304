import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

const fibonacci = (n: number, c: number): number => {
  var indent = "";
  for (var i = 0; i < c; i++) {
      indent += " ";
  }
  console.log(indent + "fibonacci(" + n + ")");
  if (n < 2) {
      return 1;
  } else {
      return fibonacci(n - 2, c + 4) + fibonacci(n - 1, c + 4);
  }
};

@Pipe({
  name: 'fibonacci'
})
export class FibonacciPipe implements PipeTransform {

  @memo()
  transform(value: number): number {
    if (!value || typeof value !== 'number') {
      return value;
    }

    return fibonacci(value, 0);
  }

}
