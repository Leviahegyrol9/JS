import "dart:io";
import "dart:math";

void main() {
  // 1. feladat
  int szam11 = 0;
  while (szam11 <= 0) {
    try {
      stdout.write("Téglalap magassága: ");
      szam11 = int.parse(stdin.readLineSync()!);
    } catch (e) {
      szam11 = 0;
    }
  }

  int szam12 = 0;
  while (szam12 <= 0) {
    try {
      stdout.write("Téglalap szélessége: ");
      szam12 = int.parse(stdin.readLineSync()!);
    } catch (e) {
      szam12 = 0;
    }
  }

  if (szam11 != szam12) {
    print("A kisebb oldal: " + min(szam11, szam12).toString());
    print("A nagyobb oldal: " + max(szam11, szam12).toString());
    print("A négyszög egy hagyományos téglalap");
  } else {
    print("A két oldal egyenlő.");
    print("A négyszög egy négyzet.");
  }

  print(
    "A négyszög kerülete: " + (2 * (szam11 + szam12)).toString() + " egys.",
  );
  print("A négyszög területe: " + (szam11 * szam12).toString() + " egys^2.");

  // 2. feladat
  stdout.write("Az első szám: ");
  double szam21 = double.parse(stdin.readLineSync()!);
  stdout.write("Az második szám: ");
  double szam22 = double.parse(stdin.readLineSync()!);
  stdout.write("Az harmadik szám: ");
  double szam23 = double.parse(stdin.readLineSync()!);

  if (szam21 > szam22 + szam23 &&
      szam22 > szam21 + szam23 &&
      szam23 > szam21 + szam22) {
    print("Az oldalak háromszöget alkothatnak.");
  } else
    print("Az oldalak nem alkothatnak háromszöget.");

  // 3. feladat
  int szam31 = 0;
  while (szam31 > -100 && szam31 < 100) {
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
  print("100/" + szam41.toString() + " = " + (100 / szam41).toStringAsFixed(2));
}
