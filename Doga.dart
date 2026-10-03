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
