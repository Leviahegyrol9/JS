import "dart:io";
import "dart:math";

void main() {
  // 1. feladat
  int height = 0;

  do {
    try {
      stdout.write("Téglalap magassága: ");
      height = int.parse(stdin.readLineSync()!);
    } catch (e) {
      continue;
    }
  } while (height <= 0);

  int width = 0;
  while (width <= 0) {
    try {
      stdout.write("Téglalap szélessége: ");
      width = int.parse(stdin.readLineSync()!);
    } catch (e) {
      continue;
    }
  }

  if (height != width) {
    print("A kisebb oldal: ${min(height, width)}");
    print("A nagyobb oldal: ${max(height, width)}");
    print("A négyszög egy hagyományos téglalap");
  } else {
    print("A két oldal egyenlő.");
    print("A négyszög egy négyzet.");
  }

  print("A négyszög kerülete: ${2 * (height + width)} egység.");
  print("A négyszög területe: ${height * width} egység^2.");

  // 2. feladat
  stdout.write("Az első szám: ");
  double a = double.parse(stdin.readLineSync()!);
  stdout.write("Az második szám: ");
  double b = double.parse(stdin.readLineSync()!);
  stdout.write("Az harmadik szám: ");
  double c = double.parse(stdin.readLineSync()!);

  if (a + b > c && a + c > b && b + c > a) {
    print("Az oldalak háromszöget alkothatnak.");
  } else
    print("Az oldalak nem alkothatnak háromszöget.");

  // 3. feladat
  int szam31 = 0;

  while (szam31 < 100) {
    try {
      stdout.write("Kérek egy legalább három jegyű egész számot: ");
      szam31 = int.parse(stdin.readLineSync()!);
    } catch (e) {
      szam31 = 0;
    }
  }

  if (szam31 < 0)
    print("A szám nem négyzetszám!");
  else {
    double szam31Atalakitott = sqrt(szam31);
    if (szam31Atalakitott.round() == szam31Atalakitott)
      print("A szám négyzetszám!");
    else
      print("A szám nem négyzetszám!");
  }

  bool vanE = false;

  if (szam31 > 0) {
    for (int i = 2; i < szam31; i++) {
      if (szam31 % i == 0) {
        vanE = true;
        break;
      }
    }
  } else
    vanE = true;

  if (vanE)
    print("A szám nem prímszám!");
  else
    print("A szám prímszám!");

  // 4. feladat
  stdout.write("Kérek egy számot: ");
  double szam41 = double.parse(stdin.readLineSync()!);
  if (szam41 == 0) throw Exception("Nulla bevitel");
  print("100/${szam41} = ${(100 / szam41).toStringAsFixed(2)}");
}
