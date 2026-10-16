import 'dart:io';
import 'dart:math';

num negyzet(num x) => pow(x, 2);

num kob(num x) => pow(x, 3);

double gyok(num x) => sqrt(x);

num kisebb(num a, num b) => min(a, b);

num nagyobb(num a, num b) => max(a, b);

int veletlenSzam(int a) {
  num minVal = min(0, a);
  num maxVal = max(0, a);
  int range = (maxVal - minVal).toInt();
  if (range == 0) return minVal.toInt();
  return minVal.toInt() + Random().nextInt(range + 1);
}

int veletlenSzam2(int b) {
  num minVal = min(b, 100);
  num maxVal = max(b, 100);
  int range = (maxVal - minVal).toInt();
  if (range == 0) return minVal.toInt();
  return minVal.toInt() + Random().nextInt(range + 1);
}

double atfogo(num a, num b) => sqrt(pow(a, 2) + pow(b, 2));

void main() {
  stdout.write('Kérlek, add meg az első egész számot (a): ');
  int? a = int.tryParse(stdin.readLineSync() ?? '');

  stdout.write('Kérlek, add meg a második egész számot (b): ');
  int? b = int.tryParse(stdin.readLineSync() ?? '');

  if (a == null || b == null) {
    print('Hiba: Kérlek, érvényes egész számokat adj meg!');
    return;
  }

  print('\n--- Eredmények ---');
  print('1. Az első szám ($a) négyzete: ${negyzet(a)}');
  print('2. A második szám ($b) köbe: ${kob(b)}');

  if (a < 0) {
    print(
      '3a. Az első szám ($a) gyöke: Negatív számból a valós számok körében nem vonható gyök.',
    );
  } else {
    print('3a. Az első szám ($a) gyöke: ${gyok(a).toStringAsFixed(4)}');
  }

  if (b < 0) {
    print(
      '3b. A második szám ($b) gyöke: Negatív számból a valós számok körében nem vonható gyök.',
    );
  } else {
    print('3b. A második szám ($b) gyöke: ${gyok(b).toStringAsFixed(4)}');
  }

  print('4. A kisebb szám: ${kisebb(a, b)}');
  print('5. A nagyobb szám: ${nagyobb(a, b)}');
  print('6. Véletlenszám 0 és $a között: ${veletlenSzam(a)}');
  print('7. Véletlenszám $b és 100 között: ${veletlenSzam2(b)}');
  print(
    '8. Derékszögű háromszög átfogója (c), ha az oldalak $a és $b: ${atfogo(a, b).toStringAsFixed(4)}',
  );
}
