import Database from "better-sqlite3";

const usersDb = new Database("./databases/users.db");

const bikesDb = new Database("./databases/bikes.db");

export const getAllBikes = () => bikesDb.prepare("SELECT * FROM bikes").all();

export const getAllUsers = () => usersDb.prepare("SELECT * FROM users").all();

export const getBikeById = (id) =>
  bikesDb.prepare("SELECT * FROM bikes WHERE id = ?").get(id);

export const createBike = (bike) =>
  bikesDb
    .prepare(
      "INSERT INTO bikes (brand, model, year, displacement, power, owner, category, topSpeed, price, description, image, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    )
    .run(
      bike.brand,
      bike.model,
      bike.year,
      bike.displacement,
      bike.power,
      bike.owner,
      bike.category,
      bike.topSpeed,
      bike.price,
      bike.description,
      bike.image,
      bike.userId,
    );

export const updateBike = (id, bike) =>
  bikesDb
    .prepare(
      `UPDATE bikes SET brand = ?, model = ?, year = ?, displacement = ?, power = ?,
        category = ?, topSpeed = ?, price = ?, description = ?, image = ?
       WHERE id = ?`,
    )
    .run(
      bike.brand,
      bike.model,
      bike.year,
      bike.displacement,
      bike.power,
      bike.category,
      bike.topSpeed,
      bike.price,
      bike.description,
      bike.image,
      id,
    );

export const deleteBike = (id) =>
  bikesDb.prepare("DELETE FROM bikes WHERE id = ?").run(id);

export const findUser = (email) =>
  usersDb.prepare("SELECT * FROM users WHERE email = ?").get(email);

export const createUser = (name, email, password) =>
  usersDb
    .prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)")
    .run(name, email, password);

export const resetBikes = () => {
  bikesDb.prepare("DELETE FROM bikes").run();

  const result = bikesDb
    .prepare(
      `INSERT INTO bikes (id, brand, model, year, displacement, power, owner, category, topSpeed, price, description, image, userId) VALUES
      (1, 'Yamaha', 'YZF-R1', 2022, 998, 200, 'admin', 'Sportmotor', 299, 5500000, 'Versenypályára hangolt szupersport crossplane motorral és fejlett elektronikával.', 'https://www.tenkateracingproducts.com/media/wysiwyg/tenkaterp/700x875-yzf-r1-race-2025.jpg', 1),
      (2, 'Honda', 'CBR1000RR-R Fireblade', 2022, 1000, 217, 'admin', 'Sportmotor', 299, 9500000, 'MotoGP-technológiára épülő csúcsmodell szárnyas idomokkal.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTzY60yUd5owz2CPT1Eh3gVP7stW9aJ8yV7N68IbJWtxdpqui6B04k1o&s=10', 1),
      (3, 'Kawasaki', 'Ninja ZX-10R', 2021, 998, 203, 'admin', 'Sportmotor', 299, 6800000, 'Superbike-világbajnoki háttérrel rendelkező literes sportmotor.', 'https://www.kawasaki.hu/content/dam/products/pim/gallery/Resource_325126_26ZX1003A_40TGN1ARFA00D_A.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.png', 1),
      (4, 'Suzuki', 'GSX-R1000R', 2020, 999, 202, 'admin', 'Sportmotor', 299, 6200000, 'Változó szelepvezérlésű klasszikus szupersport kiváló ár-érték aránnyal.', 'https://moxie-motor.suzuki.hu/data/files/Modellek/M6/GSX-R1000R/Main/SUZUKI_GSX-R1000R_M6_YT.webp', 1),
      (5, 'Ducati', 'Panigale V4', 2023, 1103, 216, 'admin', 'Sportmotor', 299, 10500000, 'Olasz V4-es szupersport lenyűgöző hanggal és prémium futóművel.', 'https://www.gpmotorbikes.com/wp-content/uploads/2025/12/AMR122-2.webp', 1),
      (6, 'BMW', 'S 1000 RR', 2023, 999, 210, 'admin', 'Sportmotor', 299, 8900000, 'ShiftCam vezérlésű német szupersport utcára és pályára egyaránt.', 'https://www.bmw-motorrad.hu/content/dam/bmwmotorradnsc/common/multiimages/images/models/sport/s1000rr/2027/productstage/nsc-s1000rr-P0N3H-multiimage-2560x1440.jpg.asset.1781170266335.jpg', 1),
      (7, 'Aprilia', 'RSV4 Factory', 2022, 1099, 217, 'admin', 'Sportmotor', 299, 9200000, 'Kompakt V4-es versenygép Öhlins futóművel és precíz kezelhetőséggel.', 'https://wlassets.aprilia.com/wlassets/aprilia/master/Range/RSV4/models_page/RSV4_FACTORY/2026/Gallery-premium/GAL-PREM-Aprilia-RSV4-Factory-D-3840x2560-07/original/GAL-PREM-Aprilia-RSV4-Factory-D-3840x2560-D.jpg?1774523929955', 1),
      (8, 'Kawasaki', 'Ninja H2', 2021, 998, 231, 'admin', 'Sportmotor', 299, 11500000, 'Kompresszoros feltöltésű hipersport brutális gyorsulással.', 'https://www.kawasaki.hu/content/dam/europe/master/news/embargo-items/ninja-h2-carbon/27_ZX1002X_40T_GY1_LA_RF_K.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.png', 1),
      (9, 'Suzuki', 'Hayabusa', 2022, 1340, 190, 'admin', 'Sporttúra', 299, 7400000, 'Legendás nagy sebességű sporttúra motor stabil futással és erős nyomatékkal.', 'https://suzukimotorcycles.com.au/wp-content/uploads/2024/07/hayabusa-m7-hero-main-mob-3.jpg', 1),
      (10, 'KTM', '1290 Super Duke R', 2021, 1301, 180, 'admin', 'Naked', 270, 6900000, 'Nagy nyomatékú V2-es csupasz motor agresszív karakterrel.', 'https://s7g10.scene7.com/is/image/ktm/377981_video:Small?wid=1050&hei=1050&dpr=off', 1),
      (11, 'Yamaha', 'MT-07', 2022, 689, 73, 'admin', 'Naked', 205, 3100000, 'Könnyű és játékos kéthengeres naked kezdőknek és haladóknak is.', 'https://kalmarmotor.hu/wp-content/uploads/2025/10/2025-Yamaha-MT07AS-EU-Ice_Storm-Static-004-03.jpg', 1),
      (12, 'Honda', 'CB650R', 2021, 649, 95, 'admin', 'Naked', 215, 3300000, 'Neo Sports Café stílusú sornégyes középkategóriás motor.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgHsDAEadWYZ2lGZpQ-JcdrpmwhWH0KREnWrCFss3LtMKHVwrpK6NLhRJ&s=10', 1),
      (13, 'Kawasaki', 'Z900', 2023, 948, 125, 'admin', 'Naked', 240, 4000000, 'Erős sornégyes naked sugomi formatervvel és barátságos kezelhetőséggel.', 'https://www.team-bhp.com/sites/default/files/pictures/2025-07/PHOTO20250710194740%202-2776665.jpg', 1),
      (14, 'Triumph', 'Street Triple RS', 2023, 765, 130, 'admin', 'Naked', 250, 5200000, 'Háromhengeres brit naked pályanapokra is alkalmas futóművel.', 'https://media.triumphmotorcycles.co.uk/image/upload/t_/c_limit,w_3840/f_auto/q_auto:eco/v1/MY26_Street_Triple_R_0007_MP_hckink.jpg?_a=BAVMn6ID0', 1),
      (15, 'Ducati', 'Monster', 2022, 937, 111, 'admin', 'Naked', 225, 4600000, 'Könnyű és modern olasz naked ikonikus formavilággal.', 'https://sm.cdnadcom.net/sm/img_news/s/w1024/2020/12/09/3697/ducatimonster2021.jpg', 1),
      (16, 'BMW', 'R 1250 GS', 2022, 1254, 136, 'admin', 'Túraenduro', 220, 8200000, 'A kalandtúrázás etalonja boxermotorral és kardánhajtással.', 'https://www.cyclenews.com/wp-content/uploads/2023/09/2023-BMW-R-1250-GS-Trophy-Adventure-Review.jpg', 1),
      (17, 'Honda', 'CRF1100L Africa Twin', 2022, 1084, 102, 'admin', 'Túraenduro', 200, 5900000, 'Terepen is megbízható túraenduro Dakar-örökséggel.', 'https://images5.1000ps.net/b-f_W3012354-honda-crf1100l-africa-twin-im-langzeittest-staerken-und-schwaechen-638748831077003960.jpg?format=webp&quality=80&scale=both&width=2816&height=1584&mode=crop', 1),
      (18, 'Yamaha', 'Ténéré 700', 2021, 689, 73, 'admin', 'Túraenduro', 190, 4200000, 'Egyszerű és strapabíró kalandmotor valódi terepképességekkel.', 'https://www.yamaha-motor.eu/content/dam/yamaha-motor-europe-migrated/news/2021/2020-t%C3%A9n%C3%A9r%C3%A9-700-rally-edition/2020_YAM_XTZ700SP_EU_SYB_ACT_002_03.jpg', 1),
      (19, 'Harley-Davidson', 'Fat Boy 114', 2022, 1868, 94, 'admin', 'Cruiser', 180, 9000000, 'Ikonikus amerikai cruiser tömör kerekekkel és Milwaukee-Eight motorral.', 'https://www.harley-davidson.com/ctfasset/5vy1mse9fkav/87p0KPBwkFn2ivbSWhdB1/024203e91141a709d7f55fa1686416ff/2026-fat-boy-beauty-pt-1.jpg', 1),
      (20, 'Indian', 'Scout Bobber', 2021, 1133, 95, 'admin', 'Cruiser', 190, 5300000, 'Alacsony építésű minimalista bobber folyadékhűtéses V2-es motorral.', 'https://www.indianhungary.hu/fileadmin/templates/model_26/features26/scout-1250/scout-bobber/f2-1.jpg', 1)`,
    )
    .run();

  return result.changes;
};
