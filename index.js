const cities = {
    "Абаза": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Abaza_(Khakassia).png?uselang=ru"
    },
    "Абакан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Abakan_(Khakassia).png?uselang=ru"
    },
    "Абдулино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Abdulino_Rayon_Coat_of_Arms.jpg?uselang=ru"
    },
    "Абинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Abinsk_(Krasnodar_krai,_2009).png?uselang=ru"
    },
    "Агидель": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Agidel_(Bashkortostan).png?uselang=ru"
    },
    "Агрыз": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Agryz_rayon_(Tatarstan).png?uselang=ru"
    },
    "Адыгейск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Adygeysk.png?uselang=ru"
    },
    "Азнакаево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Aznakeevskii_rayon_gerb.png?uselang=ru"
    },
    "Азов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Azov.svg?uselang=ru"
    },
    "Ак-Довурак": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Akdovurak_coat_of_arms.png?uselang=ru"
    },
    "Аксай": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Aksai_(Rostov_oblast).png?uselang=ru"
    },
    "Алагир": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Алапаевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Alapaevsk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Алатырь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Alatyr_(Chuvashia).svg?uselang=ru"
    },
    "Алдан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Aldan_rayon_(Yakutia).png?uselang=ru"
    },
    "Алейск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:RUS_%D0%90%D0%BB%D0%B5%D0%B9%D1%81%D0%BA_COA.gif?uselang=ru"
    },
    "Александров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Alexandrov_(2016).gif?uselang=ru"
    },
    "Александровск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Aleksandrovsky_rayon_(Perm_krai).png?uselang=ru"
    },
    "Александровск-Сахалинский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Aleksandrovsk.png?uselang=ru"
    },
    "Алексеевка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Alekseevka_(Belgorod_oblast).svg?uselang=ru"
    },
    "Алексин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Aleksin_(Tula_oblast).png?uselang=ru"
    },
    "Алзамай": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Alzamayskoe_(Irkutsk_oblast).png?uselang=ru"
    },
    "Алупка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Alupka_gerb_new.png?uselang=ru"
    },
    "Алушта": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Alushta.png?uselang=ru"
    },
    "Альметьевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%90%D0%BB%D1%8C%D0%BC%D0%B5%D1%82%D1%8C%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BC%D1%83%D0%BD%D0%B8%D1%86%D0%B8%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0.gif?uselang=ru"
    },
    "Амурск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Amursk_(Khabarovsk_krai)_2011.png?uselang=ru"
    },
    "Анадырь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Anadyr_(Chukotka).png?uselang=ru"
    },
    "Анапа": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Anapa_(Krasnodar_krai).svg?uselang=ru"
    },
    "Ангарск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Angarsk.svg?uselang=ru"
    },
    "Андреаполь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Andreapol_(Tver_oblast).png?uselang=ru"
    },
    "Анжеро-Судженск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Anzhero-Sudzhensk_(Kemerovo_oblast).png?uselang=ru"
    },
    "Анива": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Aniva_COA_(2011).gif?uselang=ru"
    },
    "Апатиты": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Apatity_COA_(2013).png?uselang=ru"
    },
    "Апрелевка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb_Aprelevka.gif?uselang=ru"
    },
    "Апшеронск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Apsheronsk_(2012).png?uselang=ru"
    },
    "Арамиль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Aramil_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Аргун": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Argun_(Chechnya).svg?uselang=ru"
    },
    "Ардатов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ardatov_(2011).gif?uselang=ru"
    },
    "Ардон": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Арзамас": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Arzamas_COA_(1993).svg?uselang=ru"
    },
    "Аркадак": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Arkadak_(Saratov_oblast).png?uselang=ru"
    },
    "Армавир": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Armavir_(Krasnodar_krai).png?uselang=ru"
    },
    "Армянск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Armyansk-COA.jpg?uselang=ru"
    },
    "Арсеньев": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Arseniev_(Primorsky_kray).png?uselang=ru"
    },
    "Арск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Arsk_(Tatarstan).png?uselang=ru"
    },
    "Артём": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Artyom_(Primorsky_kray).png?uselang=ru"
    },
    "Артёмовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Артёмовский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Artyomovsky_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Архангельск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Arkhangelsk.svg?uselang=ru"
    },
    "Асбест": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Asbest_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Асино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Астрахань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Astrakhan.png?uselang=ru"
    },
    "Аткарск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Atkarsk_(Saratov_oblast).png?uselang=ru"
    },
    "Ахтубинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb-Akhtubinsk-new.jpg?uselang=ru"
    },
    "Ачинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Achinsk_(2006).png?uselang=ru"
    },
    "Аша": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Asha_COA_(2007).jpg?uselang=ru"
    },
    "Бабаево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Babayevo_(town),_Vologda_Oblast_(from_2011-03-28).gif?uselang=ru"
    },
    "Бабушкин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Babushkin_(Buryatia).png?uselang=ru"
    },
    "Бавлы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bavly_(Tatarstan).png?uselang=ru"
    },
    "Багратионовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bagrationovsk_(Kaliningrad_oblast).png?uselang=ru"
    },
    "Байкальск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Baykalsk_COA_(2011).gif?uselang=ru"
    },
    "Баймак": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Baimak_rayon_(Bashkortostan).png?uselang=ru"
    },
    "Бакал": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bakal_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Баксан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb-Baksan-1968.gif?uselang=ru"
    },
    "Балабаново": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Balabanovo_(Kaluga_oblast).png?uselang=ru"
    },
    "Балаково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Balakovsky_District_(Saratov_oblast).png?uselang=ru"
    },
    "Балахна": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Balakhna_COA_(Nizhny_Novgorod_Governorate)_(1781).png?uselang=ru"
    },
    "Балашиха": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0_%D0%91%D0%B0%D0%BB%D0%B0%D1%88%D0%B8%D1%85%D0%B8.gif?uselang=ru"
    },
    "Балашов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Balashov_(Saratov_oblast).png?uselang=ru"
    },
    "Балей": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arm_baley.jpg?uselang=ru"
    },
    "Балтийск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Baltiysk_(Kaliningrad_oblast).png?uselang=ru"
    },
    "Барабинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Barabinsk_COA_(2009).gif?uselang=ru"
    },
    "Барнаул": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Barnaul_(2016).png?uselang=ru"
    },
    "Барыш": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Barysh.png?uselang=ru"
    },
    "Батайск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bataisk_(Rostov_oblast)_(2003).png?uselang=ru"
    },
    "Бахчисарай": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%91%D0%B0%D1%85%D1%87%D0%B8%D1%81%D0%B0%D1%80%D0%B0%D1%8F.jpg?uselang=ru"
    },
    "Бежецк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bezhetsk_(Tver_oblast)_2006.gif?uselang=ru"
    },
    "Белая Калитва": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Belaya_Kalitva_(Rostov_oblast).png?uselang=ru"
    },
    "Белая Холуница": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Belaya_Holunitsa.png?uselang=ru"
    },
    "Белгород": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Belgorod.svg?uselang=ru"
    },
    "Белебей": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Belebei_(Bashkortostan).png?uselang=ru"
    },
    "Белёв": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Belyov_(Tula_oblast).png?uselang=ru"
    },
    "Белинский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Belinsky_(Penza_oblast).png?uselang=ru"
    },
    "Белово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Belovo_(Kemerovo_oblast).png?uselang=ru"
    },
    "Белогорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Bilogirsk_big_gerb.png?uselang=ru"
    },
    "Белозерск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Belozersky_District,_Vologda_Oblast.png?uselang=ru"
    },
    "Белокуриха": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Belokurikha.svg?uselang=ru"
    },
    "Беломорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Belomorsk_COA_(2019).png?uselang=ru"
    },
    "Белоозёрский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Beloozyorsky_(Moscow_oblast).png?uselang=ru"
    },
    "Белорецк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Beloretsk_(Bashkortostan).png?uselang=ru"
    },
    "Белореченск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Belorechensk_(Krasnodar_krai),_coat_of_arms.png?uselang=ru"
    },
    "Белоусово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Belousovo_(Kaluga_oblast).png?uselang=ru"
    },
    "Белоярский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Beloyarsky_(Khanty-Mansia).png?uselang=ru"
    },
    "Белый": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Bely_COA_(Smolensk_Governorate)_(1780).png?uselang=ru"
    },
    "Бердск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Berdsk_(Novosibirsk_oblast).png?uselang=ru"
    },
    "Березники": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Berezniki_(Perm_krai)_(1981).png?uselang=ru"
    },
    "Берёзовский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Berezovsky_(Sverdlovsk_oblast).svg?uselang=ru"
    },
    "Беслан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Beslan_coat.jpg?uselang=ru"
    },
    "Бийск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Biysk_COA_(1804).gif?uselang=ru"
    },
    "Бикин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Bikinsky_raion.png?uselang=ru"
    },
    "Билибино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bilibino_(Chukotka).png?uselang=ru"
    },
    "Биробиджан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Birobidzhan.svg?uselang=ru"
    },
    "Бирск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Birsk_(Bashkortostan).png?uselang=ru"
    },
    "Бирюсинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Biryusinsk_COA_(2012).gif?uselang=ru"
    },
    "Бирюч": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Biryuch.svg?uselang=ru"
    },
    "Благовещенск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Blagoveshchensk_(Amur_oblat).png?uselang=ru"
    },
    "Благодарный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Blagodarny.png?uselang=ru"
    },
    "Бобров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bobrov_(Voronezh_oblast).png?uselang=ru"
    },
    "Богданович": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bogdanovich_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Богородицк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bogoroditsk_(Tula_oblast).png?uselang=ru"
    },
    "Богородск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coats_of_arms_of_Bogorodsk.gif?uselang=ru"
    },
    "Боготол": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Bogotol_city_gerb.png?uselang=ru"
    },
    "Богучар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Boguchar_(Voronezh_oblast).png?uselang=ru"
    },
    "Бодайбо": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bodaibo_(Irkutsk_oblast).svg?uselang=ru"
    },
    "Бокситогорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Boksitogorsk_(2014).gif?uselang=ru"
    },
    "Болгар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Spassk_COA_(Kazan_Governorate)_(1781).png?uselang=ru"
    },
    "Бологое": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bologoe_(Tver_oblast).png?uselang=ru"
    },
    "Болотное": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bolotnoe_(Novosibirsk_oblast).png?uselang=ru"
    },
    "Болохово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Bolohovo_city_coa.gif?uselang=ru"
    },
    "Болхов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Bolkhov_COA_(Oryol_Governorate)_(1781).png?uselang=ru"
    },
    "Большой Камень": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bolshoy_Kamen_(Primorsky_kray).png?uselang=ru"
    },
    "Бор": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bor_(Nizhny_Novgorod_oblast).png?uselang=ru"
    },
    "Борзя": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Borzya_(Chita_oblast).png?uselang=ru"
    },
    "Борисоглебск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Borisoglebsk_COA_(Tambov_Governorate)_(1781).png?uselang=ru"
    },
    "Боровичи": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Borovichi_COA_(2012).png?uselang=ru"
    },
    "Боровск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Borovsk_COA_(2006).gif?uselang=ru"
    },
    "Бородино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Borodino_(Krasnoyarsk_krai)_(2006).png?uselang=ru"
    },
    "Братск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bratsk_(Irkutsk_oblast).png?uselang=ru"
    },
    "Бронницы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bronnitsy_(Moscow_oblast)_(2005).png?uselang=ru"
    },
    "Брянск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Bryansk_COA_(2016).png?uselang=ru"
    },
    "Бугульма": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bugulminsky_rayon_(Tatarstan).gif?uselang=ru"
    },
    "Бугуруслан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Buguruslan_coat_of_arms.gif?uselang=ru"
    },
    "Будённовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Budyonnovsk_(Stavropol_krai).png?uselang=ru"
    },
    "Бузулук": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Buzuluk_COA_(1998).gif?uselang=ru"
    },
    "Буинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Buinsk_COA_(Simbirsk_Governorate)_(1780).png?uselang=ru"
    },
    "Буй": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Buy_(Kostroma_oblast).svg?uselang=ru"
    },
    "Буйнакск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Dagestan_Oblast_1878.svg?uselang=ru"
    },
    "Бутурлиновка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Buturlinovka_(Voronezh_oblast).png?uselang=ru"
    },
    "Валдай": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Valday_COA.png?uselang=ru"
    },
    "Валуйки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Valuyki_(Belgorod_oblast).png?uselang=ru"
    },
    "Велиж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Velizh_COA_(Vitebsk_Governorate)_(1781).gif?uselang=ru"
    },
    "Великие Луки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Velikie_Luki_COA_(Pskov_Governorate).png?uselang=ru"
    },
    "Великий Новгород": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%A1oat_of_Arms_of_Veliky_Novgorod.svg?uselang=ru"
    },
    "Великий Устюг": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Velikiy_Ustyug_(Vologda_oblast)_(2000).png?uselang=ru"
    },
    "Вельск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Velsk_(Vologda_Governorate)_(1780).png?uselang=ru"
    },
    "Венёв": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Venyov_(Tula_oblast).png?uselang=ru"
    },
    "Верещагино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Vereshchagino_COA_(2006).gif?uselang=ru"
    },
    "Верея": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vereya_(Moscow_oblast).png?uselang=ru"
    },
    "Верхнеуральск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Verkhneuralsk_COA.gif?uselang=ru"
    },
    "Верхний Тагил": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Verkhniy_Tagil_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Верхний Уфалей": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Verkhny_Ufaley_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Верхняя Пышма": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Verkhnyaya_Pyshma_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Верхняя Салда": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Verkhnyaya_Salda_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Верхняя Тура": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Verkhnyaya_Tura_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Верхотурье": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Verkhotursky_District_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Верхоянск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Verkhoyansk_(Yakutia)_soviet.png?uselang=ru"
    },
    "Весьегонск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vesegonsk_(Tver_oblast).png?uselang=ru"
    },
    "Ветлуга": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Vetluga_COA_(Kostroma_Governorate)_(1779).png?uselang=ru"
    },
    "Видное": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Vidnoe_COA_(2008).gif?uselang=ru"
    },
    "Вилюйск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Viluysk_(Yakutia).png?uselang=ru"
    },
    "Вилючинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coats_of_Arms_of_Viluchinsk.svg?uselang=ru"
    },
    "Вихоревка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Вичуга": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vichuga.png?uselang=ru"
    },
    "Владивосток": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vladivostok.svg?uselang=ru"
    },
    "Владикавказ": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Vladikavkaz.png?uselang=ru"
    },
    "Владимир": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Vladimir_COA.gif?uselang=ru"
    },
    "Волгоград": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Volgograd_city.svg?uselang=ru"
    },
    "Волгодонск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Volgodonsk_(Rostov_oblast).png?uselang=ru"
    },
    "Волгореченск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Volgorechensk_(Kostroma_oblast).png?uselang=ru"
    },
    "Волжск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Volzhsk_COA_(2002).gif?uselang=ru"
    },
    "Волжский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Volzhsky_(Volgograd_oblast).png?uselang=ru"
    },
    "Вологда": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Vologda_COA_(2003).gif?uselang=ru"
    },
    "Володарск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Volodarsk_(Seyma)_COA_(2011).png?uselang=ru"
    },
    "Волоколамск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Volokolamsk_(Moscow_oblast).png?uselang=ru"
    },
    "Волосово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Volosovo_(Leningrad_oblast).png?uselang=ru"
    },
    "Волхов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Volkhov_(Leningrad_oblast).png?uselang=ru"
    },
    "Волчанск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Volchansk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Вольск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Volsk_(Saratov_oblast).png?uselang=ru"
    },
    "Воркута": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vorkuta.svg?uselang=ru"
    },
    "Воронеж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Small_Coat_of_Arms_of_Voronezh.png?uselang=ru"
    },
    "Ворсма": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat-of-arms-Vorsma.png?uselang=ru"
    },
    "Воскресенск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Voskresensk.png?uselang=ru"
    },
    "Воткинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Votkinsk_(Udmurtia).png?uselang=ru"
    },
    "Всеволожск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Vsevolozhsk_COA.gif?uselang=ru"
    },
    "Вуктыл": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vuktyl.png?uselang=ru"
    },
    "Выборг": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Vyborg.svg?uselang=ru"
    },
    "Выкса": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Vyksa_COA_(2017).png?uselang=ru"
    },
    "Высоковск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vysokovsk_(Moscow_oblast)_(1997).png?uselang=ru"
    },
    "Высоцк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vysotskoe_GP.png?uselang=ru"
    },
    "Вытегра": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Vytegra_(2007).gif?uselang=ru"
    },
    "Вышний Волочёк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vyshny_Volochek_(Tver_oblast).png?uselang=ru"
    },
    "Вяземский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Вязники": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Vyazniki_COA_(Vladimir_Governorate)_(1781).png?uselang=ru"
    },
    "Вязьма": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Vyazma.gif?uselang=ru"
    },
    "Вятские Поляны": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Vyatskie_Polyany_(Kirov_oblast).png?uselang=ru"
    },
    "Гаврилов Посад": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Gavrilov_Posad.gif?uselang=ru"
    },
    "Гаврилов-Ям": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Gavrilov-Yam_(2008).gif?uselang=ru"
    },
    "Гагарин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gagarin_city.png?uselang=ru"
    },
    "Гаджиево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gadzhievo.png?uselang=ru"
    },
    "Гай": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gay_Coat_of_Arms.png?uselang=ru"
    },
    "Галич": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Galich_(Kostroma_oblast).png?uselang=ru"
    },
    "Гатчина": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gatchina_COA.png?uselang=ru"
    },
    "Гвардейск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gvardeisk_(Kaliningrad_oblast).png?uselang=ru"
    },
    "Гдов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gdov_(Pskov_oblast).png?uselang=ru"
    },
    "Геленджик": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gelendzhik.svg?uselang=ru"
    },
    "Георгиевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Georgievsk_(Stavropol_krai)_(2009).png?uselang=ru"
    },
    "Глазов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Glazov_(Udmurtia).png?uselang=ru"
    },
    "Голицыно": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Golitsyno_(Moscow_oblast).png?uselang=ru"
    },
    "Горбатов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gorbatov_COA_(Nizhny_Novgorod_Governorate)_(1781).png?uselang=ru"
    },
    "Горно-Алтайск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gornoaltaysk_(Altai_Republic).png?uselang=ru"
    },
    "Горнозаводск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gornozavodsky_rayon_(Perm_krai)_(2008).png?uselang=ru"
    },
    "Горняк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gornyak_Coat_of_Arms.png?uselang=ru"
    },
    "Городец": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gorodets_(Nizhny_Novgorod).png?uselang=ru"
    },
    "Городище": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gorodishe_(Penza_oblast).png?uselang=ru"
    },
    "Городовиковск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Gorodovikovsk.png?uselang=ru"
    },
    "Гороховец": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gorokhovets_(Vladimirskaya_oblast).png?uselang=ru"
    },
    "Горячий Ключ": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Goryachy_Klyuch_(Krasnodar_krai).png?uselang=ru"
    },
    "Грайворон": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Grayvoron_(Belgorod_oblast).svg?uselang=ru"
    },
    "Гремячинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gremyachinsk_COA_(2010).gif?uselang=ru"
    },
    "Грозный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Grozny_(Chechnya).svg?uselang=ru"
    },
    "Грязи": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Gryazi_(2008).gif?uselang=ru"
    },
    "Грязовец": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Gryazovets_(2001).gif?uselang=ru"
    },
    "Губаха": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gubahinsky_rayon_(2010).gif?uselang=ru"
    },
    "Губкин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gubkin_(Belgorod_oblast).svg?uselang=ru"
    },
    "Губкинский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gubkinsky_(Yamal_Nenetsia).png?uselang=ru"
    },
    "Гудермес": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Гуково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gukovo_gerb.gif?uselang=ru"
    },
    "Гулькевичи": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gulkevichi_(Krasnodar_kray).png?uselang=ru"
    },
    "Гурьевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Guryevsk_COA_(2006).gif?uselang=ru"
    },
    "Гусев": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gusev_(Kaliningrad_oblast).png?uselang=ru"
    },
    "Гусиноозёрск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Гусь-Хрустальный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gus-Khrustalny_(Vladimir_oblast).png?uselang=ru"
    },
    "Давлеканово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Davlekanovo_rayon_(Bashkortostan).png?uselang=ru"
    },
    "Дагестанские Огни": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dagestanskie_Ogni.png?uselang=ru"
    },
    "Далматово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dalmatovo_(2006).png?uselang=ru"
    },
    "Дальнегорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dalnegorsk_(Primorsky_kray).png?uselang=ru"
    },
    "Дальнереченск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dalnerechensk_(Primorsky_kray).png?uselang=ru"
    },
    "Данилов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Danilov_(Yaroslavl_oblast)_(2007).png?uselang=ru"
    },
    "Данков": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dankov_rayon_(Lipetsk_oblast).png?uselang=ru"
    },
    "Дегтярск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Degtyarsk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Дедовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Dedovsk.gif?uselang=ru"
    },
    "Демидов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Demidov_rayon_(2005).gif?uselang=ru"
    },
    "Дербент": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Derbent_(Dagestan)_(1843).png?uselang=ru"
    },
    "Десногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Desnogorsk.gif?uselang=ru"
    },
    "Джанкой": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Dzhankoy-arms.jpg?uselang=ru"
    },
    "Дзержинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%94%D0%B7%D0%B5%D1%80%D0%B6%D0%B8%D0%BD%D1%81%D0%BA%D0%B0_(%D0%9D%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C).svg?uselang=ru"
    },
    "Дзержинский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dzerzhinsky_(Moscow_oblast).png?uselang=ru"
    },
    "Дивногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Divnogorsk_COA.svg?uselang=ru"
    },
    "Дигора": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Димитровград": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dimitrovgrad.png?uselang=ru"
    },
    "Дмитриев": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Dmitriev_COA_(Kursk_Governorate)_(1780).png?uselang=ru"
    },
    "Дмитров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_Dmitrov.png?uselang=ru"
    },
    "Дмитровск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dmitrovsk-Olgovsky_(Oryol_oblast).png?uselang=ru"
    },
    "Дно": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dno_(Pskov_oblast).png?uselang=ru"
    },
    "Добрянка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Dobryanka_City_Coat_(Perm_Krai,_2006).png?uselang=ru"
    },
    "Долгопрудный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dolgoprudny_(Moscow_oblast)_(2003).png?uselang=ru"
    },
    "Долинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dolinsky_rayon_(Sakhalin_oblast).png?uselang=ru"
    },
    "Домодедово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Domodedovo_(Moscow_oblast).png?uselang=ru"
    },
    "Донецк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Donetsk_(Rostov_Oblast).png?uselang=ru"
    },
    "Донской": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Donskoy_gerb.svg?uselang=ru"
    },
    "Дорогобуж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Dorogobuzh_COA_(2000).png?uselang=ru"
    },
    "Дрезна": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Drezna_(Moscow_oblast).png?uselang=ru"
    },
    "Дубна": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Dubna_COA_(2003).gif?uselang=ru"
    },
    "Дубовка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Dubovka_coat_of_arms_(Volgograd_region).png?uselang=ru"
    },
    "Дудинка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Dudinka_(Taimyria).png?uselang=ru"
    },
    "Духовщина": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Dukhovshchina_COA_(Smolensk_Governorate)_(1780).png?uselang=ru"
    },
    "Дюртюли": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Durtuli.png?uselang=ru"
    },
    "Дятьково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Dyatkovsky_rayon_COA_(2019).gif?uselang=ru"
    },
    "Евпатория": {
        "emblem": "https://commons.wikimedia.org/wiki/File:COA_of_Evpatoria.svg?uselang=ru"
    },
    "Егорьевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Yegorievsk_COA_(2015).gif?uselang=ru"
    },
    "Ейск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0_%D0%95%D0%B9%D1%81%D0%BA%D0%B0.png?uselang=ru"
    },
    "Екатеринбург": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yekaterinburg_(Sverdlovsk_oblast).svg?uselang=ru"
    },
    "Елабуга": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Elabuga_(Tatarstan)_(2006).png?uselang=ru"
    },
    "Елец": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Elets_(2004).gif?uselang=ru"
    },
    "Елизово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Elizovo_(2009)_(Kamchatka_krai).png?uselang=ru"
    },
    "Ельня": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Elnya.gif?uselang=ru"
    },
    "Еманжелинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Emanzhelinsk_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Емва": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Knjazhpogostskiy_rayon_(Komi).gif?uselang=ru"
    },
    "Енисейск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Eniseisk.svg?uselang=ru"
    },
    "Ермолино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ermolino_(Kaluga_oblast).png?uselang=ru"
    },
    "Ершов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Ershov.png?uselang=ru"
    },
    "Ессентуки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Essentuki_(Stavropol_krai).png?uselang=ru"
    },
    "Ефремов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Efremov_(Tula_oblast).png?uselang=ru"
    },
    "Железноводск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zheleznovodsk_(Stavropol_kray).png?uselang=ru"
    },
    "Железногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zheleznogorsk_(Kursk_oblast).png?uselang=ru"
    },
    "Железногорск-Илимский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zheleznogorsk-Ilimsky_COA_(2012).gif?uselang=ru"
    },
    "Жердевка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zherdevka_(Tambov_oblast).png?uselang=ru"
    },
    "Жигулёвск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zhigulyovsk_(Samara_oblast).png?uselang=ru"
    },
    "Жиздра": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zhizdra_(Kaluga_oblast).png?uselang=ru"
    },
    "Жирновск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93_%D0%96%D0%B8%D1%80%D0%BD%D0%BE%D0%B2%D1%81%D0%BA_%D0%B3%D0%B5%D1%80%D0%B1.jpg?uselang=ru"
    },
    "Жуков": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zhukov_(Kaluga_oblast).png?uselang=ru"
    },
    "Жуковка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_Zhukovka.gif?uselang=ru"
    },
    "Жуковский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0_%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8).svg?uselang=ru"
    },
    "Завитинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zavitinskii_rayon_(Amur_oblast).gif?uselang=ru"
    },
    "Заводоуковск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zavodoukovsk_(Tyumen_oblast).png?uselang=ru"
    },
    "Заволжск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zavolzhsk.png?uselang=ru"
    },
    "Заволжье": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zavolzh.png?uselang=ru"
    },
    "Задонск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zadonsk_COA_(2008).gif?uselang=ru"
    },
    "Заинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zainsky_rayon_(Tatarstan).gif?uselang=ru"
    },
    "Закаменск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%97%D0%B0%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0.gif?uselang=ru"
    },
    "Заозёрный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zaozyorny_(Krasnoyarsk_krai).png?uselang=ru"
    },
    "Заозёрск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Zaozersk_(2001).gif?uselang=ru"
    },
    "Западная Двина": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zapadnodvinsky_rayon_(Tver_oblast).png?uselang=ru"
    },
    "Заполярный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zapolyarny_(Murmansk_oblast).jpg?uselang=ru"
    },
    "Зарайск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BE%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%97%D0%B0%D1%80%D0%B0%D0%B9%D1%81%D0%BA.gif?uselang=ru"
    },
    "Заречный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zarechny_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Заринск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zarinsk_coat_of_arms.png?uselang=ru"
    },
    "Звенигово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb-Zvenigovsky-region.gif?uselang=ru"
    },
    "Звенигород": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zvenigorod_(Moscow_oblast).png?uselang=ru"
    },
    "Зверево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zverevo_(Rostov_oblast).png?uselang=ru"
    },
    "Зеленогорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zelenogorsk_(Krasnoyarsk_krai).png?uselang=ru"
    },
    "Зеленоградск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zelenogradsk_COA_(2015).gif?uselang=ru"
    },
    "Зеленодольск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zelenodolsk_(Tatarstan).png?uselang=ru"
    },
    "Зеленокумск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zelenokumsk.png?uselang=ru"
    },
    "Зерноград": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zernograd_COA_(2011).gif?uselang=ru"
    },
    "Зея": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zeya_(Amur_oblast).png?uselang=ru"
    },
    "Зима": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zima_g.gif?uselang=ru"
    },
    "Златоуст": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zlatoust_COA_(2000).gif?uselang=ru"
    },
    "Злынка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zlynka_rayon_COA_(2019).png?uselang=ru"
    },
    "Змеиногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Zmeinogorsk_COA_(2012).gif?uselang=ru"
    },
    "Знаменск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:RUS_%D0%97%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA_COA.gif?uselang=ru"
    },
    "Зубцов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zubtsov_(Tver_oblast).png?uselang=ru"
    },
    "Зуевка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Zuevka_(Kirov_region).png?uselang=ru"
    },
    "Ивангород": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ivangorod_(Leningrad_oblast).png?uselang=ru"
    },
    "Иваново": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat-of-Arms-of-Ivanovo-(Ivanovskaya_oblast).svg?uselang=ru"
    },
    "Ивантеевка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ivanteevka_(Moscow_oblast).png?uselang=ru"
    },
    "Ивдель": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Ivdel_COA_(2007).gif?uselang=ru"
    },
    "Игарка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Igarka.svg?uselang=ru"
    },
    "Ижевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Izhevsk_(Udmurtia).svg?uselang=ru"
    },
    "Избербаш": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Izberbash.png?uselang=ru"
    },
    "Изобильный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Izobilnensky_rayon.svg?uselang=ru"
    },
    "Иланский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Инза": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Inza_COA_(2006).gif?uselang=ru"
    },
    "Иннополис": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Инсар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Insar_COA_(Penza_Governorate)_(1781).png?uselang=ru"
    },
    "Инта": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Inta_(Komi)_(1982).svg?uselang=ru"
    },
    "Ипатово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Ipatovsky_rayon_(Stavropol_krai).svg?uselang=ru"
    },
    "Ирбит": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Irbit_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Иркутск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Irkutsk.png?uselang=ru"
    },
    "Исилькуль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Isilkul_COA_(2008).jpg?uselang=ru"
    },
    "Искитим": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Iskitim.png?uselang=ru"
    },
    "Истра": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Istra_(2008).png?uselang=ru"
    },
    "Ишим": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ishim_(Tyumen_oblast).png?uselang=ru"
    },
    "Ишимбай": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ishimbai_(Bashkortostan).png?uselang=ru"
    },
    "Йошкар-Ола": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yoshkar-Ola_(Mariy-El).png?uselang=ru"
    },
    "Кадников": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kadnikov_(Vologda_Governorate)_(1781).png?uselang=ru"
    },
    "Казань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kazan_(Tatarstan)_(2004).png?uselang=ru"
    },
    "Калач": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kalach.png?uselang=ru"
    },
    "Калач-на-Дону": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kalach-na-Donu_COA_(2013).png?uselang=ru"
    },
    "Калачинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0_%D0%9A%D0%B0%D0%BB%D0%B0%D1%87%D0%B8%D0%BD%D1%81%D0%BA.gif?uselang=ru"
    },
    "Калининград": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Kaliningrad.svg?uselang=ru"
    },
    "Калининск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kalininsk_(Saratov_oblast).png?uselang=ru"
    },
    "Калтан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kaltan_(Kemerovo_oblast).png?uselang=ru"
    },
    "Калуга": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kaluga_COA_(2000).gif?uselang=ru"
    },
    "Калязин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kalyazin_(Tver_oblast).png?uselang=ru"
    },
    "Камбарка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kambarka_rayon_(Udmurtia).svg?uselang=ru"
    },
    "Каменка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kamenka_(Penza_oblast).png?uselang=ru"
    },
    "Каменногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kamennogorskoe_GP.png?uselang=ru"
    },
    "Каменск-Уральский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kamensk-Uralsky_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Каменск-Шахтинский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kamensk-Shakhtinsky_(Rostov_oblast).png?uselang=ru"
    },
    "Камень-на-Оби": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kamen-na-Obi_(Altai_kray).png?uselang=ru"
    },
    "Камешково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kamechkovo_(Vladimir_oblast).gif?uselang=ru"
    },
    "Камызяк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%9A%D0%B0%D0%BC%D1%8B%D0%B7%D1%8F%D0%BA.svg?uselang=ru"
    },
    "Камышин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kamyshin_(Volgograd_oblast).png?uselang=ru"
    },
    "Камышлов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kamyshlov_city_coa.png?uselang=ru"
    },
    "Канаш": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%9A%D0%B0%D0%BD%D0%B0%D1%88%D0%B0_2017.png?uselang=ru"
    },
    "Кандалакша": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kandalaksha_COA_1_(2008).gif?uselang=ru"
    },
    "Канск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kansk_COA_(2010).gif?uselang=ru"
    },
    "Карабаново": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Karabanovo.gif?uselang=ru"
    },
    "Карабаш": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Karabash_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Карабулак": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Karabulak.png?uselang=ru"
    },
    "Карасук": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Karasuk_COA_(1998).gif?uselang=ru"
    },
    "Карачаевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:1779_bi.png?uselang=ru"
    },
    "Карачев": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Karachev_COA_(Oryol_Governorate)_(1781).png?uselang=ru"
    },
    "Каргат": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kargat_(Novosibirsk_oblast).png?uselang=ru"
    },
    "Каргополь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kargopol_coat_of_arms.png?uselang=ru"
    },
    "Карпинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Karpinsk_COA_(2004).gif?uselang=ru"
    },
    "Карталы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kartaly_COA_(2007).gif?uselang=ru"
    },
    "Касимов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kasimov_COA_(1998).png?uselang=ru"
    },
    "Касли": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kasli_COA_(2011).jpg?uselang=ru"
    },
    "Каспийск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb_kaspiska.gif?uselang=ru"
    },
    "Катав-Ивановск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Katav-Ivanovsk_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Катайск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kataysk_(Kurgan_oblast).png?uselang=ru"
    },
    "Качканар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kachkanar_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Кашин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kashin_(Tver_oblast).png?uselang=ru"
    },
    "Кашира": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kashira_(Moscow_oblast)_(1998).png?uselang=ru"
    },
    "Кедровый": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Kedrovy_(Tomsk_oblast).jpg?uselang=ru"
    },
    "Кемерово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Kemerovo_(2019).svg?uselang=ru"
    },
    "Кемь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kem_COA_(Arkhangelsk_Governorate)_(1788).png?uselang=ru"
    },
    "Керчь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kerch-COA.png?uselang=ru"
    },
    "Кизел": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kizel_(Perm_krai).png?uselang=ru"
    },
    "Кизилюрт": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kiziljurt.png?uselang=ru"
    },
    "Кизляр": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kizlyar_(Dagestan)_(1842).png?uselang=ru"
    },
    "Кимовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kimovsk_gerb.gif?uselang=ru"
    },
    "Кимры": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kimry_(Tver_Oblast).png?uselang=ru"
    },
    "Кингисепп": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kingisepp_(Leningrad_oblast).png?uselang=ru"
    },
    "Кинель": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kinel_(Samara_oblast).png?uselang=ru"
    },
    "Кинешма": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kineshma_(2004).gif?uselang=ru"
    },
    "Киреевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kireevsk_(Tula_oblast)_(1990).png?uselang=ru"
    },
    "Киренск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kirensk_(Irkutsk_oblast)_(1790).png?uselang=ru"
    },
    "Киржач": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kirzhach_(Vladimirskaya_oblast).png?uselang=ru"
    },
    "Кириллов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kirillov_COA_(1996).gif?uselang=ru"
    },
    "Кириши": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kirishi_(Leningrad_oblast).png?uselang=ru"
    },
    "Киров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Kirov.svg?uselang=ru"
    },
    "Кировград": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kirovgrad_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Кирово-Чепецк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kirovo-Chepetsk_(2004).png?uselang=ru"
    },
    "Кировск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kirovsk_coa.png?uselang=ru"
    },
    "Кирс": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Кирсанов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Kirsanov_(2018).gif?uselang=ru"
    },
    "Киселёвск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kiselyovsk_(Kemerovo_oblast).png?uselang=ru"
    },
    "Кисловодск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kislovodsk_COA_(2013).gif?uselang=ru"
    },
    "Клин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Gorodskoe_poselenie_Klin_(Moscow_oblast).png?uselang=ru"
    },
    "Клинцы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Klintsy.svg?uselang=ru"
    },
    "Княгинино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Knyaginin_COA_(Nizhny_Novgorod_Governorate)_(1781).png?uselang=ru"
    },
    "Ковдор": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kovdor_(Murmansk_oblast).png?uselang=ru"
    },
    "Ковров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kovrov_COA_(2012).png?uselang=ru"
    },
    "Ковылкино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kovylkino_(Mordovia).png?uselang=ru"
    },
    "Когалым": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kogalym.png?uselang=ru"
    },
    "Кодинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kodinsk_city.gif?uselang=ru"
    },
    "Козельск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kozelsk_COA_(Kaluga_Governorate)_(1777).png?uselang=ru"
    },
    "Козловка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kozlovka_COA_(2020).png?uselang=ru"
    },
    "Козьмодемьянск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kozmodemiansk_(Mariy_El)_(2005).png?uselang=ru"
    },
    "Кола": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kola_(Murmansk_oblast)_(2016).png?uselang=ru"
    },
    "Кологрив": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kologriv_(Kostroma_oblast).png?uselang=ru"
    },
    "Коломна": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kolomna_(Moscow_oblast).png?uselang=ru"
    },
    "Колпашево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kolpashevsky_district_(Tomsk_oblast).png?uselang=ru"
    },
    "Кольчугино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kolchuginkskiy_rayon_COA_(2002).gif?uselang=ru"
    },
    "Коммунар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kommunar_(Leningrad_oblast).png?uselang=ru"
    },
    "Комсомольск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Komsomolsky_rayon_(Ivanovo_oblast).png?uselang=ru"
    },
    "Комсомольск-на-Амуре": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Komsomolsk-na-Amure_(Khabarovsk_kray)_(1999).png?uselang=ru"
    },
    "Конаково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_Konakovo_(Tver_oblast)_Russia_2007.png?uselang=ru"
    },
    "Кондопога": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kondopoga_rayon_COA_(2019).png?uselang=ru"
    },
    "Кондрово": {
        "emblem": "https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:%D0%93%D0%B5%D1%80%D0%B1_%D0%9A%D0%BE%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BE.PNG"
    },
    "Константиновск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Konstantinovsk_COA_(2018).png?uselang=ru"
    },
    "Копейск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kopeysk_(Chelyabinsk_oblast)_(2002).png?uselang=ru"
    },
    "Кораблино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Korablino_COA_(2015).gif?uselang=ru"
    },
    "Кореновск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%9A%D0%BE%D1%80%D0%B5%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0.png?uselang=ru"
    },
    "Коркино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Korkino_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Королёв": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Korolyov_(Moscow_Oblast).svg?uselang=ru"
    },
    "Короча": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Korocha_(Belgorod_oblast).svg?uselang=ru"
    },
    "Корсаков": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Korsakov_(Sakhalin_oblast).png?uselang=ru"
    },
    "Коряжма": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Koryazhma_(Arkhangelsk_oblast).png?uselang=ru"
    },
    "Костерёво": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kosteryovo.png?uselang=ru"
    },
    "Костомукша": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kostomuksha_(2013).gif?uselang=ru"
    },
    "Кострома": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kostroma.svg?uselang=ru"
    },
    "Котельники": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kotelniki_(Moscow_oblast).png?uselang=ru"
    },
    "Котельниково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kotelnikovo_COA_(2008).gif?uselang=ru"
    },
    "Котельнич": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kotelnich_(Kirov_oblast).png?uselang=ru"
    },
    "Котлас": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kotlas_(Arkhangelsk_oblast)_2007.png?uselang=ru"
    },
    "Котово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kotovo_COA_(2007).gif?uselang=ru"
    },
    "Котовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kotovsk.png?uselang=ru"
    },
    "Кохма": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kokhma_(Ivanovo_oblast).png?uselang=ru"
    },
    "Красавино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Krasavino_COA.gif?uselang=ru"
    },
    "Красноармейск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnoarmeysk_(Saratov_oblast).png?uselang=ru"
    },
    "Красновишерск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Krasnovishersk_COA_(2000).gif?uselang=ru"
    },
    "Красногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Krasnogorsky_rayon_(Moscow_oblast).png?uselang=ru"
    },
    "Краснодар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnodar_(Krasnodar_krai).png?uselang=ru"
    },
    "Краснозаводск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnozavodsk_(Moscow_oblast).gif?uselang=ru"
    },
    "Краснознаменск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnoznamensk_(Moscow_oblast).png?uselang=ru"
    },
    "Краснокаменск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnokamensk_(Chita_oblast).png?uselang=ru"
    },
    "Краснокамск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Krasnokamsk_COA_(2008).gif?uselang=ru"
    },
    "Красноперекопск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb_of_Krasnoperekopsk.jpg?uselang=ru"
    },
    "Краснослободск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Krasnoslobodsk_(2012).gif?uselang=ru"
    },
    "Краснотурьинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnoturinsk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Красноуральск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnouralsk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Красноуфимск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnoufimsk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Красноярск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnoyarsk_(Krasnoyarsk_krai).svg?uselang=ru"
    },
    "Красный Кут": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasnokutsky_rayon_(Saratov_oblast).png?uselang=ru"
    },
    "Красный Сулин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasny_Sulin.png?uselang=ru"
    },
    "Красный Холм": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krasny_Kholm_(Tver_oblast).png?uselang=ru"
    },
    "Кремёнки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kremenki_(Kaluga_oblast).png?uselang=ru"
    },
    "Кропоткин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kropotkin_(Krasnodar_krai).png?uselang=ru"
    },
    "Крымск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Krymsk_(Krasnodar_krai,_2007).png?uselang=ru"
    },
    "Кстово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kstovo_(Nizhny_Novgorod_oblast).png?uselang=ru"
    },
    "Кубинка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kubinka.png?uselang=ru"
    },
    "Кувандык": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kuvandyk_(Orenburg_oblast).png?uselang=ru"
    },
    "Кувшиново": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kuvshinovo_(Tver_oblast).png?uselang=ru"
    },
    "Кудрово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Кудымкар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kudymkar_COA_(2008).gif?uselang=ru"
    },
    "Кузнецк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kuznetsk_(Penza_oblast).png?uselang=ru"
    },
    "Куйбышев": {
        "emblem": "https://commons.wikimedia.org/wiki/File:RUS_%D0%9A%D1%83%D0%B9%D0%B1%D1%8B%D1%88%D0%B5%D0%B2_COA.gif?uselang=ru"
    },
    "Кукмор": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb-Kukmorsky-region.gif?uselang=ru"
    },
    "Кулебаки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kulebaki_1997_(Nizhny_Novgorod_oblast).png?uselang=ru"
    },
    "Кумертау": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kumertau_(Bashkortostan).png?uselang=ru"
    },
    "Кунгур": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kungur_COA_(1994).gif?uselang=ru"
    },
    "Купино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kupino_COA_(2011).gif?uselang=ru"
    },
    "Курган": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kurgan_coat_of_arms.png?uselang=ru"
    },
    "Курганинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kurganinsk_(Krasnodar_krai).png?uselang=ru"
    },
    "Курильск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kurilsk_(Sakhalin_oblast).png?uselang=ru"
    },
    "Курлово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kurlovo_(Vladimir_oblast).png?uselang=ru"
    },
    "Куровское": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kurovskoye_(Moscow_oblast).png?uselang=ru"
    },
    "Курск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kursk.png?uselang=ru"
    },
    "Куртамыш": {
        "emblem": "https://commons.wikimedia.org/wiki/File:COA_of_Kurtamysh.png?uselang=ru"
    },
    "Курчалой": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Курчатов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kurchatov_(Kursk_oblast).png?uselang=ru"
    },
    "Куса": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kusa_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Кушва": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kushva_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Кызыл": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kyzyl_COA_(2016).gif?uselang=ru"
    },
    "Кыштым": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kyshtym_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Кяхта": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kyakhta_(Buryatia)_(1861).png?uselang=ru"
    },
    "Лабинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Labinsk.png?uselang=ru"
    },
    "Лабытнанги": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Labytnangi_(Yamal_Nenetsia).png?uselang=ru"
    },
    "Лагань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Lagan.gif?uselang=ru"
    },
    "Ладушкин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ladushkin_(Kaliningrad_oblast).png?uselang=ru"
    },
    "Лаишево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Laishev_COA_(Kazan_Governorate)_(1781).png?uselang=ru"
    },
    "Лакинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lakinsk_(Vladimir_oblast).png?uselang=ru"
    },
    "Лангепас": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Langepas.svg?uselang=ru"
    },
    "Лахденпохья": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lakhdenpokhsky_District.svg?uselang=ru"
    },
    "Лебедянь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lebedyan_(Lipetsk_oblast).png?uselang=ru"
    },
    "Лениногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Leninogorsk_(Tatarstan).png?uselang=ru"
    },
    "Ленинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Leninsk.gif?uselang=ru"
    },
    "Ленинск-Кузнецкий": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA-%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BA%D0%B8%D0%B9.gif?uselang=ru"
    },
    "Ленск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lensk_(Yakutia).gif?uselang=ru"
    },
    "Лермонтов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lermontov.png?uselang=ru"
    },
    "Лесной": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lesnoy_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Лесозаводск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lesozavodsk_(Primorsky_kray)_(2006).png?uselang=ru"
    },
    "Лесосибирск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lesosibirsk_(Krasnoyarsk_krai).png?uselang=ru"
    },
    "Ливны": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Livny.gif?uselang=ru"
    },
    "Ликино-Дулёво": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Orekhovo-Zuevo_rayon_(Moscow_oblast).png?uselang=ru"
    },
    "Липецк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb_lip.png?uselang=ru"
    },
    "Липки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Лиски": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Liski_(1997).gif?uselang=ru"
    },
    "Лихославль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Likhoslavl_(Tver_oblast).png?uselang=ru"
    },
    "Лобня": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lobnya_(Moscow_oblast).png?uselang=ru"
    },
    "Лодейное Поле": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lodeinoe_Pole_(Leningrad_oblast).png?uselang=ru"
    },
    "Лосино-Петровский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Losino-Petrovsky_(Moscow_oblast).png?uselang=ru"
    },
    "Луга": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Luga_(Leningrad_oblast).png?uselang=ru"
    },
    "Луза": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Luzsky_district.png?uselang=ru"
    },
    "Лукоянов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Lukoyanov_COA_(Nizhny_Novgorod_Governorate)_(1781).png?uselang=ru"
    },
    "Луховицы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lukhovitsy_(Moscow_oblast).png?uselang=ru"
    },
    "Лысково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Lyskovo_COA_(2006).png?uselang=ru"
    },
    "Лысьва": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lysva_(Perm_krai).png?uselang=ru"
    },
    "Лыткарино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lytkarino_(Moscow_oblast).png?uselang=ru"
    },
    "Льгов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Lgov_COA_(Kursk_Governorate)_(1780).png?uselang=ru"
    },
    "Любань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Luban.gif?uselang=ru"
    },
    "Люберцы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Lyubertsy_district.png?uselang=ru"
    },
    "Любим": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Lyubim_(2005).gif?uselang=ru"
    },
    "Людиново": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Lyudinovo_town_(Kaluga_oblast).png?uselang=ru"
    },
    "Лянтор": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Lyantor_COA_(2006).gif?uselang=ru"
    },
    "Магадан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:COA_Magadan,_Russian_Federation.svg?uselang=ru"
    },
    "Магас": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Magas_(Ingushetia).png?uselang=ru"
    },
    "Магнитогорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Magnitogorsk_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Майкоп": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Maykop.svg?uselang=ru"
    },
    "Майский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coats_of_arms_of_Mayskiy_(Kabardino-Balkaria).gif?uselang=ru"
    },
    "Макаров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Makarov_(Sakhalinskaya_oblast)_2013.png?uselang=ru"
    },
    "Макарьев": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Makariev_(Kostroma_oblast).png?uselang=ru"
    },
    "Макушино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%9C%D0%B0%D0%BA%D1%83%D1%88%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0.jpg?uselang=ru"
    },
    "Малая Вишера": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Malaya_Vishera.svg?uselang=ru"
    },
    "Малгобек": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Malgobek.png?uselang=ru"
    },
    "Малмыж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Malmyzh.png?uselang=ru"
    },
    "Малоархангельск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Maloarkhangelsk_COA_(Oryol_Governorate)_(1781).png?uselang=ru"
    },
    "Малоярославец": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Maloyaroslavets_(Kaluga_region).svg?uselang=ru"
    },
    "Мамадыш": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Mamadysh_COA_(Kazan_Governorate)_(1781).png?uselang=ru"
    },
    "Мамоново": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mamonovo_(Kaliningrad_oblast).png?uselang=ru"
    },
    "Мантурово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Manturovo_(Kostroma_oblast)_coat_fof_arms.png?uselang=ru"
    },
    "Мариинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Mariinsk-herb.png?uselang=ru"
    },
    "Мариинский Посад": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mariinsky_Posad_(Chuvashia).png?uselang=ru"
    },
    "Маркс": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Marks_(Saratov_oblast).png?uselang=ru"
    },
    "Махачкала": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Makhachkala.png?uselang=ru"
    },
    "Мглин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Mglin_COA_(Chernigov_Governorate)_(1782).png?uselang=ru"
    },
    "Мегион": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Megion.svg?uselang=ru"
    },
    "Медвежьегорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Medvezhyegorsky_District.svg?uselang=ru"
    },
    "Медногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Mednogorsk_COA_(2008).gif?uselang=ru"
    },
    "Медынь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Medyn_COA_(2006).gif?uselang=ru"
    },
    "Межгорье": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mezhgorie_(Bashkortostan).png?uselang=ru"
    },
    "Междуреченск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mezhdurechensk_(Kemerovo_oblast).png?uselang=ru"
    },
    "Мезень": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Mezen_COA_(Arkhangelsk_Governorate)_(1780).png?uselang=ru"
    },
    "Меленки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Melenki.gif?uselang=ru"
    },
    "Мелеуз": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Meleuz.gif?uselang=ru"
    },
    "Менделеевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mendeleyevsk_(Tatarstan).png?uselang=ru"
    },
    "Мензелинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Menzelinsk_(Tatarstan).png?uselang=ru"
    },
    "Мещовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Meshchovsk_(Kaluga_oblast).png?uselang=ru"
    },
    "Миасс": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Miass_(Chelyabinsk_oblast)_(2002).png?uselang=ru"
    },
    "Микунь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%95%D0%BC%D0%B4%D1%96%D0%BD_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD_%D0%BF%D0%B0%D1%81.gif?uselang=ru"
    },
    "Миллерово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:COA_of_Millerovsky_rayon_(Rostov_oblast).png?uselang=ru"
    },
    "Минеральные Воды": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Caucasian_Mineral_Waters_region_(Stavropol_Kray).png?uselang=ru"
    },
    "Минусинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Minusinsk_(1854).png?uselang=ru"
    },
    "Миньяр": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Minyar_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Мирный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mirny_(Arkhangelsk_oblast).png?uselang=ru"
    },
    "Михайлов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mikhailovo_rayon_(Ryazan_oblast).png?uselang=ru"
    },
    "Михайловка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mikhaylovka_(Volgograd_Oblast)_2009.png?uselang=ru"
    },
    "Михайловск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mihaylovsk_(SK).png?uselang=ru"
    },
    "Мичуринск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Michurinsk_(Tambov_oblast).png?uselang=ru"
    },
    "Могоча": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Mogochinsky_rayon_COA_(2015).gif?uselang=ru"
    },
    "Можайск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Mozhaysk_COA_(2007).png?uselang=ru"
    },
    "Можга": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mozhga_(Udmurtia)_(1980).png?uselang=ru"
    },
    "Моздок": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mozdok_(North_Ossetia).png?uselang=ru"
    },
    "Мончегорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Monchegorsk_(Murmansk_oblast).png?uselang=ru"
    },
    "Морозовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Morozovsk_(Rostov_oblast).png?uselang=ru"
    },
    "Моршанск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Morshansk_(Tambov_oblast)_(2012).gif?uselang=ru"
    },
    "Мосальск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mosalsk_(Kaluga_oblast).png?uselang=ru"
    },
    "Москва": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Moscow.svg?uselang=ru"
    },
    "Муравленко": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Muravlenko_(Yamal_Nenetsia).png?uselang=ru"
    },
    "Мураши": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Murashinsky_district_(Kirov_oblast).png?uselang=ru"
    },
    "Мурино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Murino_gerb.gif?uselang=ru"
    },
    "Мурманск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:RUS_Murmansk_COA.svg?uselang=ru"
    },
    "Муром": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Murom_COA_(Vladimir_Governorate)_(1781).png?uselang=ru"
    },
    "Мценск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mtsensk_(2011).png?uselang=ru"
    },
    "Мыски": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Myski_COA_(2012).gif?uselang=ru"
    },
    "Мытищи": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Mytishchi_rural_settlement_(Moscow_Oblast).png?uselang=ru"
    },
    "Мышкин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Myshkin_COA_(Yaroslavl_Governorate)_(1778).png?uselang=ru"
    },
    "Набережные Челны": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Naberezhnye_Chelny_(Tatarstan).svg?uselang=ru"
    },
    "Навашино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Navashino_COA_(2020).png?uselang=ru"
    },
    "Наволоки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Navoloki_(Ivanovo_oblast).png?uselang=ru"
    },
    "Надым": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nadym_and_Nadymsky_rayon_(Yamal_Nenetsia).png?uselang=ru"
    },
    "Назарово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nazarovo_(Krasnoyarsk_krai).gif?uselang=ru"
    },
    "Назрань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nazran.svg?uselang=ru"
    },
    "Называевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%9D%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD_2.gif?uselang=ru"
    },
    "Нальчик": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nalchik_since_2011.png?uselang=ru"
    },
    "Нариманов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Narimanov_rayon_COA.jpg?uselang=ru"
    },
    "Наро-Фоминск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Naro-Fominsk_COA_(2018).gif?uselang=ru"
    },
    "Нарткала": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Нарьян-Мар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Naryan-Mar.png?uselang=ru"
    },
    "Находка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nakhodka_(Primorsky_kray).png?uselang=ru"
    },
    "Невель": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nevel_(Pskov_oblast).png?uselang=ru"
    },
    "Невельск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nevelsk_(Sakhalin_oblast).png?uselang=ru"
    },
    "Невинномысск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nevinnomysk_(Stavropol_kray).png?uselang=ru"
    },
    "Невьянск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nevyansk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Нелидово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nelidovo_(Tver_oblast).png?uselang=ru"
    },
    "Неман": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1-%D0%9D%D0%B5%D0%BC%D0%B0%D0%BD%D0%B0.svg?uselang=ru"
    },
    "Нерехта": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nerekhta_(Kostroma_oblast).png?uselang=ru"
    },
    "Нерчинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nerchinsk_(Chita_oblast)_(1790).png?uselang=ru"
    },
    "Нерюнгри": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Neryungri_(Yakutia).png?uselang=ru"
    },
    "Нестеров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb_nesterov.jpg?uselang=ru"
    },
    "Нефтегорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:63neftegorsk_g.png?uselang=ru"
    },
    "Нефтекамск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Neftekamsk_(Bashkortostan).png?uselang=ru"
    },
    "Нефтекумск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Neftekumsky_district_(2006).png?uselang=ru"
    },
    "Нефтеюганск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nefteyugansk.png?uselang=ru"
    },
    "Нея": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Neya_(Kostroma_oblast).png?uselang=ru"
    },
    "Нижневартовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nizhnevartovsk.svg?uselang=ru"
    },
    "Нижнекамск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nizhnekamsk_rayon_(Tatarstan).png?uselang=ru"
    },
    "Нижнеудинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Nizhneudinsk_COA_(2019).jpg?uselang=ru"
    },
    "Нижние Серги": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nizhnie_Sergi_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Нижний Ломов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nizhny_Lomov_(Penza_oblast).png?uselang=ru"
    },
    "Нижний Новгород": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Small_Coat_of_arms_Nizhny_Novgorod.svg?uselang=ru"
    },
    "Нижний Тагил": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nizhny_Tagil_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Нижняя Салда": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nizhnyaya_Salda_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Нижняя Тура": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nizhnyaya_Tura_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Николаевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Nikolayevsky_district_2007_02.png?uselang=ru"
    },
    "Николаевск-на-Амуре": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nikolaevsk-na-Amure_(Khabarovsk_kray)_(2002).png?uselang=ru"
    },
    "Никольск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nikolsk_(Penza_oblast).png?uselang=ru"
    },
    "Никольское": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Nikolskoe_(Tosno).gif?uselang=ru"
    },
    "Новая Ладога": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novaya_Ladoga_(Leningrad_oblast)_-_2.png?uselang=ru"
    },
    "Новая Ляля": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Novolyalinsky_GO_COA.gif?uselang=ru"
    },
    "Новоалександровск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novoaleksandrovsk_(Stavropol_kray).png?uselang=ru"
    },
    "Новоалтайск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Novoaltaisk_Coat_of_Arms.png?uselang=ru"
    },
    "Новоаннинский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Нововоронеж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novovoronezh_(Voronezh_oblast).png?uselang=ru"
    },
    "Новодвинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Novodvinsk.gif?uselang=ru"
    },
    "Новозыбков": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novozybkov.png?uselang=ru"
    },
    "Новокубанск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novokubansk_(Krasnodar_krai).png?uselang=ru"
    },
    "Новокузнецк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%9D%D0%BE%D0%B2%D0%BE%D0%BA%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BA%D0%B0_2018.png?uselang=ru"
    },
    "Новокуйбышевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Novokuybyshevsk.gif?uselang=ru"
    },
    "Новомичуринск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Novomichurinsk_(Ryazan_oblast).png?uselang=ru"
    },
    "Новомосковск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novomoskovsk_(Tula_oblast).png?uselang=ru"
    },
    "Новопавловск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novopavlovsk.png?uselang=ru"
    },
    "Новоржев": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Novorzhev_COA_(2001).gif?uselang=ru"
    },
    "Новороссийск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novorossiysk_(Krasnodar_kray)_(2006).png?uselang=ru"
    },
    "Новосибирск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novosibirsk.svg?uselang=ru"
    },
    "Новосиль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Novosil_(2010).gif?uselang=ru"
    },
    "Новосокольники": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novosokolniki_(Pskov_oblast).png?uselang=ru"
    },
    "Новотроицк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novotroitsk_(Orenburg_oblast).png?uselang=ru"
    },
    "Новоузенск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novouzensk_(Saratov_oblast).png?uselang=ru"
    },
    "Новоульяновск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Novoulyanovsk.png?uselang=ru"
    },
    "Новоуральск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Novouralsk_COA_(2010).gif?uselang=ru"
    },
    "Новохопёрск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Novohopersk_(2008).gif?uselang=ru"
    },
    "Новочебоксарск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novocheboksarsk_(Chuvashia).svg?uselang=ru"
    },
    "Новочеркасск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Novocherkassk_COA_(2008).png?uselang=ru"
    },
    "Новошахтинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novoshakhtinsk_(Rostov_oblast).png?uselang=ru"
    },
    "Новый Оскол": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novy_Oskol_(Belgorod_oblsat).png?uselang=ru"
    },
    "Новый Уренгой": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Novy_Urengoy_(Yamal_Nenetsia).png?uselang=ru"
    },
    "Ногинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Noginsky_rayon_(Moscow_oblast).svg?uselang=ru"
    },
    "Нолинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Nolinsk_COA_(2018).gif?uselang=ru"
    },
    "Норильск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Norilsk_(Krasnoyarsk_kray).png?uselang=ru"
    },
    "Ноябрьск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Noyabrsk_(Yamal_Nenetsia).png?uselang=ru"
    },
    "Нурлат": {
        "emblem": "https://commons.wikimedia.org/wiki/File:NurlatCoa2006.gif?uselang=ru"
    },
    "Нытва": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Nytva_COA_(2007).png?uselang=ru"
    },
    "Нюрба": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Nyurba_COA_(2016).gif?uselang=ru"
    },
    "Нягань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Nyagan_COA_(2009).jpg?uselang=ru"
    },
    "Нязепетровск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nyazepetrovsk_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Няндома": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Nyandoma_city_(Arkhangelsk_oblast).png?uselang=ru"
    },
    "Облучье": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%9E%D0%B1%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0.png?uselang=ru"
    },
    "Обнинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Obninsk_(Kaluga_oblast)_proposal_(2003_N2).png?uselang=ru"
    },
    "Обоянь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Oboyan_COA_(2020).gif?uselang=ru"
    },
    "Обь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Ob_COA_(2004).gif?uselang=ru"
    },
    "Одинцово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Odintsovo_COA_(2019).gif?uselang=ru"
    },
    "Озёрск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ozyorsk_(Chelyabinsk_oblast).svg?uselang=ru"
    },
    "Озёры": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ozyory_rayon_(Moscow_oblast).png?uselang=ru"
    },
    "Октябрьск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Oktyabrsk_(Samara_oblast).png?uselang=ru"
    },
    "Октябрьский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Oktyabrsky_(Bashkortostan).png?uselang=ru"
    },
    "Окуловка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Okulov.png?uselang=ru"
    },
    "Олёкминск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Olyokminsk_city_coa.gif?uselang=ru"
    },
    "Оленегорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Olenegorsk_(Murmansk_oblast).png?uselang=ru"
    },
    "Олонец": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Olonets_COA_(Olonets_Governorate)_(1781).png?uselang=ru"
    },
    "Омск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Omsk_coat_of_arms_2014.png?uselang=ru"
    },
    "Омутнинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Omutninsk.png?uselang=ru"
    },
    "Онега": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Onega_(Arkhangelsk_oblast)_(1998).gif?uselang=ru"
    },
    "Опочка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Opochka_city_coa_n7839.png?uselang=ru"
    },
    "Орёл": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Oryol.svg?uselang=ru"
    },
    "Оренбург": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Orenburg.png?uselang=ru"
    },
    "Орехово-Зуево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Orekhovo-Zuevo_(Moscow_oblast).png?uselang=ru"
    },
    "Орлов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Orlov_COA_(Vyatka_Governorate)_(1781).png?uselang=ru"
    },
    "Орск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Orsk_COA_(2008).gif?uselang=ru"
    },
    "Оса": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Osa_COA_(2008).gif?uselang=ru"
    },
    "Осинники": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Osinniki_COA_(2019).gif?uselang=ru"
    },
    "Осташков": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Ostashkov_COA.png?uselang=ru"
    },
    "Остров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ostrov_(Pskov_oblast).png?uselang=ru"
    },
    "Островной": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Ostrovnoj_gerb.png?uselang=ru"
    },
    "Острогожск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ostrogozhsk_(Voronezh_oblast).png?uselang=ru"
    },
    "Отрадное": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Otradnoe_(Leningrad_oblast).png?uselang=ru"
    },
    "Отрадный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Blason_Otradny.png?uselang=ru"
    },
    "Оха": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Okha_(Sakhalin_oblast).png?uselang=ru"
    },
    "Оханск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Okhansk_(Perm_krai)_(2009).png?uselang=ru"
    },
    "Очёр": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Ochyor_COA_(2011).gif?uselang=ru"
    },
    "Павлово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pavlovo_(Nizhny_Novgorod_oblast).png?uselang=ru"
    },
    "Павловск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pavlovsk_(Voronezh_oblast).png?uselang=ru"
    },
    "Павловский Посад": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pavlovsky_Posad_(Moscow_oblast)_(2002).png?uselang=ru"
    },
    "Палласовка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Pallasovka_2008_(official).png?uselang=ru"
    },
    "Партизанск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Partizansk_COA_(2008).gif?uselang=ru"
    },
    "Певек": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pevek_COA_(2002).gif?uselang=ru"
    },
    "Пенза": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Penza_(Penza_oblast)_(2001).png?uselang=ru"
    },
    "Первомайск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pervomaysk_(Tashino)_COA_(2016).gif?uselang=ru"
    },
    "Первоуральск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pervouralsk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Перевоз": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Perevoz_COA_(2019).png?uselang=ru"
    },
    "Пересвет": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Peresvet_(Moscow_oblast).svg?uselang=ru"
    },
    "Переславль-Залесский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pereslavl-Zalessky_(Yaroslavl_oblast).png?uselang=ru"
    },
    "Пермь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Perm.svg?uselang=ru"
    },
    "Пестово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE,_%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.png?uselang=ru"
    },
    "Петров Вал": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Петровск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Petrovsk_(Saratov_oblast).png?uselang=ru"
    },
    "Петровск-Забайкальский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Petrovsk-Zabaikalsky_(Chita_oblast)_(1984).png?uselang=ru"
    },
    "Петрозаводск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Petrozavodsk_(Karelia).png?uselang=ru"
    },
    "Петропавловск-Камчатский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb_Petropavlovsk-Kamchatsky.jpg?uselang=ru"
    },
    "Петухово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%9F%D0%B5%D1%82%D1%83%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0.gif?uselang=ru"
    },
    "Петушки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Petushki_(Vladimir_oblast).gif?uselang=ru"
    },
    "Печора": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pechora_(Komia)_(1983).png?uselang=ru"
    },
    "Печоры": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pechory_(Pskov_oblast).png?uselang=ru"
    },
    "Пикалёво": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pikalyovo_(Leningrad_oblast).png?uselang=ru"
    },
    "Пионерский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pionersky_COA_(2016).gif?uselang=ru"
    },
    "Питкяранта": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Pitkyaranta_(2016).gif?uselang=ru"
    },
    "Плавск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb-Plavsky-region.gif?uselang=ru"
    },
    "Пласт": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Plast_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Плёс": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Plyos_(Ivanovo_oblast)_(1779).png?uselang=ru"
    },
    "Поворино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Povorino_(Voronezh_oblast).png?uselang=ru"
    },
    "Подольск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Podolsk_(Moscow_oblast).svg?uselang=ru"
    },
    "Подпорожье": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Podporozhie_COA_(2010).gif?uselang=ru"
    },
    "Покачи": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pokachi_COA_(2013).jpg?uselang=ru"
    },
    "Покров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pokrov_COA_(Vladimir_Governorate)_(1781).png?uselang=ru"
    },
    "Покровск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pokrovsk_(Yakutia).gif?uselang=ru"
    },
    "Полевской": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Polevskoy.svg?uselang=ru"
    },
    "Полесск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Polessk_COA_(2008).gif?uselang=ru"
    },
    "Полысаево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Polysaevo_(Kemerovo_oblast).png?uselang=ru"
    },
    "Полярные Зори": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Polyarnye_Zori_(Murmansk_oblast)_(1995).png?uselang=ru"
    },
    "Полярный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Polyarny_(Murmansk_oblast).png?uselang=ru"
    },
    "Поронайск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Poronaysk_(Sakhalinskaya_oblast).gif?uselang=ru"
    },
    "Порхов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Porkhov_COA_(Pskov_Governorate)_(1781).png?uselang=ru"
    },
    "Похвистнево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pokhvistnevo_(Samara_oblast).png?uselang=ru"
    },
    "Почеп": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Pochep_(1984).gif?uselang=ru"
    },
    "Починок": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pochinkovskiy_rayon_COA_(2010).gif?uselang=ru"
    },
    "Пошехонье": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Poshekhonye_COA_(Yaroslavl_Governorate)_(1778).png?uselang=ru"
    },
    "Правдинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pravdinsk_COA_(2007).jpg?uselang=ru"
    },
    "Приволжск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Privolzsk_(2011).gif?uselang=ru"
    },
    "Приморск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Primorsk_(Leningrad_oblast)_(2007).png?uselang=ru"
    },
    "Приморско-Ахтарск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Primorsko-Akhtarsk_(Krasnodar_krai).png?uselang=ru"
    },
    "Приозерск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Priozersk_(Kexholm)_(Vyborg_Governorate)_(1788).png?uselang=ru"
    },
    "Прокопьевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Prokopievsk_COA_2020.jpg?uselang=ru"
    },
    "Пролетарск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Proletarsk_rayon_(Rostov_oblast).png?uselang=ru"
    },
    "Протвино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Protvino_(Moscow_oblast).png?uselang=ru"
    },
    "Прохладный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coats_of_arms_of_Prokhladny_(Kabardino-Balkaria).png?uselang=ru"
    },
    "Псков": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pskovgfull.svg?uselang=ru"
    },
    "Пугачёв": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pugachyov_(Saratov_oblast).png?uselang=ru"
    },
    "Пудож": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Pudozh_(2016).gif?uselang=ru"
    },
    "Пустошка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Pustoshkinsky_District.svg?uselang=ru"
    },
    "Пучеж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Puchezh_(Ivanovo_oblast).png?uselang=ru"
    },
    "Пушкино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pushkino_COA_(2010).gif?uselang=ru"
    },
    "Пущино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pushchino_(Moscow_oblast).png?uselang=ru"
    },
    "Пыталово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Pytalovskiy_rayon_COA_(2004).gif?uselang=ru"
    },
    "Пыть-Ях": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Pyt-Yakh.png?uselang=ru"
    },
    "Пятигорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%9F%D1%8F%D1%82%D0%B8%D0%B3%D0%BE%D1%80%D1%81%D0%BA%D0%B0.svg?uselang=ru"
    },
    "Радужный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Raduzhnyj_gerb.jpg?uselang=ru"
    },
    "Райчихинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Raychikhinsk_(Amur_oblast).png?uselang=ru"
    },
    "Раменское": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Ramenskoye_COA_(1995).gif?uselang=ru"
    },
    "Рассказово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Rasskazovo_(Tambov_oblast).gif?uselang=ru"
    },
    "Ревда": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Revda_and_revdinski_rayon_coa.png?uselang=ru"
    },
    "Реж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Rezh_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Реутов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Reutov_(Moscow_oblast).png?uselang=ru"
    },
    "Ржев": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Rzhev_COA.gif?uselang=ru"
    },
    "Родники": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Rodnikovsky_rayon_(Ivanovo_oblast).png?uselang=ru"
    },
    "Рославль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Roslavlskiy_rayon.gif?uselang=ru"
    },
    "Россошь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Rossosh_(Voronezh_oblast).png?uselang=ru"
    },
    "Ростов-на-Дону": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Rostov-on-Don.svg?uselang=ru"
    },
    "Ростов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Rostov.png?uselang=ru"
    },
    "Рошаль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Roshal_(Moscow_oblast).png?uselang=ru"
    },
    "Ртищево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Rtishchevo_(Saratov_oblast).png?uselang=ru"
    },
    "Рубцовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Rubtsovsk_coat_of_arms.png?uselang=ru"
    },
    "Рудня": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Rudnya_rayon_(Smolensk_oblast).png?uselang=ru"
    },
    "Руза": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ruza_(Moscow_oblast).png?uselang=ru"
    },
    "Рузаевка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Ruzaevka_COA_(2020).png?uselang=ru"
    },
    "Рыбинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Rybinsk_(2001).gif?uselang=ru"
    },
    "Рыбное": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Rybnoye_(Ryazan_obl).png?uselang=ru"
    },
    "Рыльск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Rylsk_COA_(Kursk_Governorate)_(1893).png?uselang=ru"
    },
    "Ряжск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ryazhsk_rayon_(Ryazan_oblast).png?uselang=ru"
    },
    "Рязань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ryazan_large.png?uselang=ru"
    },
    "Саки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:COA_Saky,_Crimea,_Ukraine.svg?uselang=ru"
    },
    "Салават": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Salavat.png?uselang=ru"
    },
    "Салаир": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Салехард": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Salekhard_(Yamal_Nenetsia).png?uselang=ru"
    },
    "Сальск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Salsk_(2020).png?uselang=ru"
    },
    "Самара": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Samara_(Samara_oblast).png?uselang=ru"
    },
    "Санкт-Петербург": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Saint_Petersburg_(2003).svg?uselang=ru"
    },
    "Саранск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Saransk.svg?uselang=ru"
    },
    "Сарапул": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sarapul_COA_(Vyatka_Governorate)_(1781).png?uselang=ru"
    },
    "Саратов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Saratov.png?uselang=ru"
    },
    "Саров": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sarov_COA_(2004).png?uselang=ru"
    },
    "Сасово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sasovo_(Ryazan_oblast).png?uselang=ru"
    },
    "Сатка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Satka_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Сафоново": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%A1%D0%B0%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D0%BE.gif?uselang=ru"
    },
    "Саяногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sayanogorsk_COA_(2008).gif?uselang=ru"
    },
    "Саянск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sayansk_(Irkutsk_oblast).png?uselang=ru"
    },
    "Светлогорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Svetlogorsk_(Kaliningrad_oblast).png?uselang=ru"
    },
    "Светлоград": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Svetlograd_(Stavropol_krai).png?uselang=ru"
    },
    "Светлый": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Svetly_(Kaliningrad_oblast).png?uselang=ru"
    },
    "Светогорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Svetogorsk_(Leningrad_oblast).png?uselang=ru"
    },
    "Свирск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Svirsk_g.gif?uselang=ru"
    },
    "Свободный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Svobodny_(Amur_oblast).png?uselang=ru"
    },
    "Себеж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sebezh_COA_(1781).png?uselang=ru"
    },
    "Севастополь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:COA_of_Sevastopol.svg?uselang=ru"
    },
    "Северо-Курильск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Severo-Kurilsk_rayon_(Sakhalin_oblast).png?uselang=ru"
    },
    "Северобайкальск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B0.gif?uselang=ru"
    },
    "Северодвинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Severodvinsk.svg?uselang=ru"
    },
    "Североморск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Severomorsk_(Murmansk_oblast).png?uselang=ru"
    },
    "Североуральск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%A1oat_of_Arms_Severouralsk_municipality_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Северск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Seversk.svg?uselang=ru"
    },
    "Севск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sevsk_COA_(Oryol_Governorate)_(1781).png?uselang=ru"
    },
    "Сегежа": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Segezha_(2013).gif?uselang=ru"
    },
    "Сельцо": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Seltco_(Bryansk_oblast).gif?uselang=ru"
    },
    "Семёнов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Semyonov_COA_(Nizhny_Novgorod_Governorate)_(1781).png?uselang=ru"
    },
    "Семикаракорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Semikarakorsk_2016.png?uselang=ru"
    },
    "Семилуки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Semiluki_(2008).gif?uselang=ru"
    },
    "Сенгилей": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Sengiley_urban_settlement.png?uselang=ru"
    },
    "Серафимович": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Serafimovich_COA_(2008).png?uselang=ru"
    },
    "Сергач": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Sergach_rayon.gif?uselang=ru"
    },
    "Сергиев Посад": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sergiev_Posad_(Moscow_oblast).png?uselang=ru"
    },
    "Сердобск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Serdobsk_(Penza_oblast).png?uselang=ru"
    },
    "Серов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Serov_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Серпухов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Vector_coat_of_arms_Serpukhov.svg?uselang=ru"
    },
    "Сертолово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sertolovo_(Leningrad_oblast).png?uselang=ru"
    },
    "Сибай": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sibai_(Bashkortostan).png?uselang=ru"
    },
    "Сим": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sim_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Симферополь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:COA_Simferopol.svg?uselang=ru"
    },
    "Сковородино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:RUS_%D0%A1%D0%BA%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD_COA.gif?uselang=ru"
    },
    "Скопин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Skopin_(Ryazan_oblast).png?uselang=ru"
    },
    "Славгород": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Slavgorod_(Altai_krai).png?uselang=ru"
    },
    "Славск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Slavsk_(Kaliningrad_oblast).png?uselang=ru"
    },
    "Славянск-на-Кубани": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Slavyansk-na-Kubani_(Krasnodar_krai)_(12-2006).png?uselang=ru"
    },
    "Сланцы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Slantsevo_(Leningrad_oblast).png?uselang=ru"
    },
    "Слободской": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Slobodskoy_(town).png?uselang=ru"
    },
    "Слюдянка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:The_coat_of_arms_of_the_city_of_Slyudyanka.jpg?uselang=ru"
    },
    "Смоленск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Smolensk_(Smolensk_oblast)_(2001).png?uselang=ru"
    },
    "Снежинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb_Snezhinsk.svg?uselang=ru"
    },
    "Снежногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Snezhnogorsk_(Murmansk_oblast).png?uselang=ru"
    },
    "Собинка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sobinka.gif?uselang=ru"
    },
    "Советск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sovetsk_COA_(2014).gif?uselang=ru"
    },
    "Советская Гавань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sovietskaya_Gavan_(Khabarovsk_krai).png?uselang=ru"
    },
    "Советский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sovetsky_(Khanty-Mansyisky_AO).png?uselang=ru"
    },
    "Сокол": {
        "emblem": "https://commons.wikimedia.org/wiki/File:35_sokol.png?uselang=ru"
    },
    "Солигалич": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Soligalich_COA_(Kostroma_Governorate)_(1779).png?uselang=ru"
    },
    "Соликамск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Solikamsk_COA_(1999).gif?uselang=ru"
    },
    "Солнечногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Solnechnogorsk.svg?uselang=ru"
    },
    "Соль-Илецк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Sol-Iletsk.svg?uselang=ru"
    },
    "Сольвычегодск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Solvychegodsk_(Vologda_Governorate)_(1780).png?uselang=ru"
    },
    "Сольцы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Soltsy.png?uselang=ru"
    },
    "Сорочинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sorochinsk_(Orenburg_oblast).gif?uselang=ru"
    },
    "Сорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sorsk_(Khakassia).png?uselang=ru"
    },
    "Сортавала": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sortavala_COA_(2020).gif?uselang=ru"
    },
    "Сосенский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sosensky_(Kaluga_oblast).png?uselang=ru"
    },
    "Сосновка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Сосновоборск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sosnovoborsk_COA_(2019).jpg?uselang=ru"
    },
    "Сосновый Бор": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sosnovy_Bor_(Leningrad_oblast).png?uselang=ru"
    },
    "Сосногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sosnogorsk_(Komia).png?uselang=ru"
    },
    "Сочи": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sochi_(Krasnodar_krai).svg?uselang=ru"
    },
    "Спас-Деменск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Spas-Demensk_(Kaluga_oblast)_(2008).png?uselang=ru"
    },
    "Спас-Клепики": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Spas-Klepiki_COA_(2013).gif?uselang=ru"
    },
    "Спасск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Bednodemianovsk_(Penza_oblast)_(2001).png?uselang=ru"
    },
    "Спасск-Дальний": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Blason_de_Spassk_2003_(Primorsky_kray).png?uselang=ru"
    },
    "Спасск-Рязанский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Spassk_rayon_(Ryazan_oblast).png?uselang=ru"
    },
    "Среднеколымск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Srednekolymsk_(Yakutia).png?uselang=ru"
    },
    "Среднеуральск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sredneuralsk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Сретенск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sretenskoe_(Zabaykalskiy_kray)_(2011).png?uselang=ru"
    },
    "Ставрополь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Stavropol_(1994).png?uselang=ru"
    },
    "Старая Купавна": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Staraya_Kupavna_COA_(2016).gif?uselang=ru"
    },
    "Старая Русса": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Staraya_Russa.svg?uselang=ru"
    },
    "Старица": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Staritsa_COA_(Tver_Governorate)_(1780).png?uselang=ru"
    },
    "Стародуб": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Starodub_COA_(Chernigov_Governorate)_(1782).png?uselang=ru"
    },
    "Старый Крым": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Former_coat_of_arms_of_Staryi_Krym.gif?uselang=ru"
    },
    "Старый Оскол": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Stary_Oskol_(Belgorod_oblast)2008.svg?uselang=ru"
    },
    "Стерлитамак": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sterlitamak_(Bashkortostan).png?uselang=ru"
    },
    "Стрежевой": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Strezhevoy_coat_of_arms.png?uselang=ru"
    },
    "Строитель": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_Yakovlevo.svg?uselang=ru"
    },
    "Струнино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Strunino_city.gif?uselang=ru"
    },
    "Ступино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%A1%D1%82%D1%83%D0%BF%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0.gif?uselang=ru"
    },
    "Суворов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Suvorov_(2014).gif?uselang=ru"
    },
    "Судак": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Russian_COA_of_Sudak_(2015).png?uselang=ru"
    },
    "Суджа": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sudzha_COA_(Kursk_Governorate)_(1780).png?uselang=ru"
    },
    "Судогда": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sudogda_COA_(Vladimir_Governorate)_(1781).png?uselang=ru"
    },
    "Суздаль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Suzdal.png?uselang=ru"
    },
    "Сунжа": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Суоярви": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Suoyarvi_(2017).gif?uselang=ru"
    },
    "Сураж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Surazh_COA_(Chernigov_Governorate)_(1782).png?uselang=ru"
    },
    "Сургут": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Surgut.png?uselang=ru"
    },
    "Суровикино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Surovikino_without_a_crown_(2008).png?uselang=ru"
    },
    "Сурск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Сусуман": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb-Susumansky-region.gif?uselang=ru"
    },
    "Сухиничи": {
        "emblem": "https://commons.wikimedia.org/wiki/File:RUS_Sukhinichi_COA_(2019).gif?uselang=ru"
    },
    "Сухой Лог": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sukhoi_Log_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Сызрань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Syzran_coa.png?uselang=ru"
    },
    "Сыктывкар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Syktyvkar_(Komi)_(2005).png?uselang=ru"
    },
    "Сысерть": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sysert_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Сычёвка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_Sychevka_(2001).gif?uselang=ru"
    },
    "Сясьстрой": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Sjasstroy_city_coa.gif?uselang=ru"
    },
    "Тавда": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tavda_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Таганрог": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Taganrog.png?uselang=ru"
    },
    "Тайга": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Taiga_COA_(2020).jpg?uselang=ru"
    },
    "Тайшет": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_tayshet.png?uselang=ru"
    },
    "Талдом": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Taldomsky_rayon_(Moscow_oblast).png?uselang=ru"
    },
    "Талица": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Talitsa_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Тамбов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tambov_(2008).svg?uselang=ru"
    },
    "Тара": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Tara_COA_(2009).gif?uselang=ru"
    },
    "Тарко-Сале": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tarko-Sale_(Yamalo-Nenetsky_AO).png?uselang=ru"
    },
    "Таруса": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Tarusa_COA_(2020).png?uselang=ru"
    },
    "Татарск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Tatarsk_COA_(2010).gif?uselang=ru"
    },
    "Таштагол": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Tashtagol_COA_(1998).gif?uselang=ru"
    },
    "Тверь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tver_(Tver_oblast).png?uselang=ru"
    },
    "Теберда": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Тейково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Teykovo_COA.gif?uselang=ru"
    },
    "Темников": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Temnikov_COA_(Tambov_Governorate)_(1781).png?uselang=ru"
    },
    "Темрюк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Temryuk_(Krasnodar_krai).png?uselang=ru"
    },
    "Терек": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb-Terek.gif?uselang=ru"
    },
    "Тетюши": {
        "emblem": "https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Coat_of_Arms_of_Tetiushi_(Tatarstan)_(1781).gif"
    },
    "Тимашёвск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Timashevsk.png?uselang=ru"
    },
    "Тихвин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tikhvin_(Leningrad_oblast).png?uselang=ru"
    },
    "Тихорецк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tikhoretsk_(Krasnodar_krai).png?uselang=ru"
    },
    "Тобольск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%A2%D0%BE%D0%B1%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0.svg?uselang=ru"
    },
    "Тогучин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Toguchin_(Novosibirsk_oblast).png?uselang=ru"
    },
    "Тольятти": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Togliatti_(Samara_oblast)_ceremonial.png?uselang=ru"
    },
    "Томари": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tomarinsky_rayon_(Sakhalin_oblast).png?uselang=ru"
    },
    "Томмот": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Tommot_city_coa.gif?uselang=ru"
    },
    "Томск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%A2%D0%BE%D0%BC%D1%81%D0%BA%D0%B0_2019.png?uselang=ru"
    },
    "Топки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Topki_coat_of_arms.png?uselang=ru"
    },
    "Торжок": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Torzhok_(Tver_oblast).png?uselang=ru"
    },
    "Торопец": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Toropets_(Tver_oblast).png?uselang=ru"
    },
    "Тосно": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tosno.gif?uselang=ru"
    },
    "Тотьма": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Totma_(Vologda_oblast).png?uselang=ru"
    },
    "Трёхгорный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tryokhgorny_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Троицк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Troitsk_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Трубчевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Trubchevsk_COA_(Oryol_Governorate)_(1781).png?uselang=ru"
    },
    "Туапсе": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tuapse_(Krasnodar_krai).png?uselang=ru"
    },
    "Туймазы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tuimazy_rayon_(Bashkortostan).png?uselang=ru"
    },
    "Тула": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tula.png?uselang=ru"
    },
    "Тулун": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tulun.png?uselang=ru"
    },
    "Туран": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Туринск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Turinsk_(Sverdlovsk_oblast).png?uselang=ru"
    },
    "Тутаев": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Tutaev_gerb_vector.svg?uselang=ru"
    },
    "Тында": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tynda_(Amur_oblast)_(2006).png?uselang=ru"
    },
    "Тырныауз": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Тюкалинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tyukalinsk.png?uselang=ru"
    },
    "Тюмень": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Tyumen_(Tyumen_oblast)_(2005).png?uselang=ru"
    },
    "Уварово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Uvarovo_(Tambov_oblast)_2012.gif?uselang=ru"
    },
    "Углегорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Uglegorski_(Sakhalin_oblast).gif?uselang=ru"
    },
    "Углич": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Uglich_(Yaroslavl_oblast).png?uselang=ru"
    },
    "Удачный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Udachny_coat_of_arms_(2009).png?uselang=ru"
    },
    "Удомля": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Udomlya_(Tver_oblast).png?uselang=ru"
    },
    "Ужур": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Uzhur_(2010).png?uselang=ru"
    },
    "Узловая": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Uzlovaya_(Tula_oblast).png?uselang=ru"
    },
    "Улан-Удэ": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Ulan-Ude_COA_(2005).gif?uselang=ru"
    },
    "Ульяновск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Ulyanovsk.png?uselang=ru"
    },
    "Унеча": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Unecha_(1986).gif?uselang=ru"
    },
    "Урай": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Uray.svg?uselang=ru"
    },
    "Урень": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Uren_rayon_COA_(2019).png?uselang=ru"
    },
    "Уржум": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Urzhum.png?uselang=ru"
    },
    "Урус-Мартан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Урюпинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Uryupinsk_COA_(2020).png?uselang=ru"
    },
    "Усинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Usinsk_(Komia).png?uselang=ru"
    },
    "Усмань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Usman_(2012).gif?uselang=ru"
    },
    "Усолье-Сибирское": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Usolye-Sibirskoe_COA_(2014).gif?uselang=ru"
    },
    "Усолье": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Usolye_COA_(2009).png?uselang=ru"
    },
    "Уссурийск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ussuriysk_(Primorsky_kray).png?uselang=ru"
    },
    "Усть-Джегута": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Усть-Илимск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ust-Ilimsk_(Irkutsk_oblast).png?uselang=ru"
    },
    "Усть-Катав": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ust-Katav_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Усть-Кут": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ust-Kut_2009.png?uselang=ru"
    },
    "Усть-Лабинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Ust_labinsk_city_coa_2010.gif?uselang=ru"
    },
    "Устюжна": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Ustyuzhna_and_Ustugnovsky_District_(Vologda_Region).png?uselang=ru"
    },
    "Уфа": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Ufa.svg?uselang=ru"
    },
    "Ухта": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ukhta_(Komia)_(1979).png?uselang=ru"
    },
    "Учалы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Uchaly_COA_(2013).jpg?uselang=ru"
    },
    "Уяр": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Uyar_(Uyarsky_District,_2011).png?uselang=ru"
    },
    "Фатеж": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Fatezh_COA_(Kursk_Governorate)_(1780).png?uselang=ru"
    },
    "Феодосия": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Feodosiya_coat_of_arms.svg?uselang=ru"
    },
    "Фокино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Fokino_(Primorsky_kray).png?uselang=ru"
    },
    "Фролово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Frolovo_02.png?uselang=ru"
    },
    "Фрязино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Fryazino_(Moscow_oblast).svg?uselang=ru"
    },
    "Фурманов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Furmanov_(Ivanovo_oblast).png?uselang=ru"
    },
    "Хабаровск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Khabarovsk_Coat_of_Arms.png?uselang=ru"
    },
    "Хадыженск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Khadyzhensk_(2012).png?uselang=ru"
    },
    "Ханты-Мансийск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Khanty-Mansiysk.svg?uselang=ru"
    },
    "Харабали": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kharabali_(Astrakhan_oblast).png?uselang=ru"
    },
    "Харовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kharovskiy_rayon_COA.gif?uselang=ru"
    },
    "Хасавюрт": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Khasavyurt_(2017).png?uselang=ru"
    },
    "Хвалынск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Khvalynsk_(Saratov_oblast).png?uselang=ru"
    },
    "Хилок": {
        "emblem": "https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:%D0%93%D0%B5%D1%80%D0%B1_%D0%B3._%D0%A5%D0%B8%D0%BB%D0%BE%D0%BA.gif"
    },
    "Химки": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%A5%D0%B8%D0%BC%D0%BE%D0%BA.svg?uselang=ru"
    },
    "Холм": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Kholm_COA_(Pskov_Governorate)_(1781).png?uselang=ru"
    },
    "Холмск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Kholmsk_(Sakhalin_oblast)_coat_fof_arms.png?uselang=ru"
    },
    "Хотьково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Hotkovo.png?uselang=ru"
    },
    "Цивильск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Civilsk_(Chuvashia).svg?uselang=ru"
    },
    "Цимлянск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Cimlyansk_COA_(2020).png?uselang=ru"
    },
    "Циолковский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%A6%D0%B8%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE.jpg?uselang=ru"
    },
    "Чадан": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Чайковский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chaykovsky_(2000).png?uselang=ru"
    },
    "Чапаевск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chapaevsk_(Samara_oblast).png?uselang=ru"
    },
    "Чаплыгин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chaplygin_(Lipetsk_oblast)_(2005).png?uselang=ru"
    },
    "Чебаркуль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chebarkul_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Чебоксары": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Cheboksary_(Chuvashia).svg?uselang=ru"
    },
    "Чегем": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Чекалин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Likhvin_(Tula_oblast).png?uselang=ru"
    },
    "Челябинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:CoA_of_Chelyabinsk_(2000).svg?uselang=ru"
    },
    "Чердынь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Cherdyn_COA_(2009).png?uselang=ru"
    },
    "Черемхово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Cheremkhovo_(Irkutsk_oblast).png?uselang=ru"
    },
    "Черепаново": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Cherepanovo_(Novosibirsk_oblast).png?uselang=ru"
    },
    "Череповец": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Cherepovets_COA_(Novgorod_Governorate)_(1811).png?uselang=ru"
    },
    "Черкесск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Cherkessk_(Karachay-Cherkessia).png?uselang=ru"
    },
    "Чёрмоз": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Chermoz_COA_(2009).gif?uselang=ru"
    },
    "Черноголовка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chernogolovka_(Moscow_oblast)_(2001).png?uselang=ru"
    },
    "Черногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chernogorsk_(Khakassia).png?uselang=ru"
    },
    "Чернушка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Chernushka_COA_(2011).gif?uselang=ru"
    },
    "Черняховск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:RUS_Chernyakhovsk_COA_(achievement).svg?uselang=ru"
    },
    "Чехов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:RUS_%D0%A7%D0%B5%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD_COA.gif?uselang=ru"
    },
    "Чистополь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Chistopol_COA_(Kazan_Governorate)_(1781).png?uselang=ru"
    },
    "Чита": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chita_(Chita_oblast).png?uselang=ru"
    },
    "Чкаловск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Chkalovsk_(Vasilyovo)_COA_(2013).gif?uselang=ru"
    },
    "Чудово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chudovsky_district.png?uselang=ru"
    },
    "Чулым": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chulym_rayon_(Novosibirsk_oblast).png?uselang=ru"
    },
    "Чусовой": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Chusovoy_COA_(2007).png?uselang=ru"
    },
    "Чухлома": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Chukhloma_(Kostroma_oblast).png?uselang=ru"
    },
    "Шагонар": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Шадринск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Shadrinsk_(Kurgan_oblast).png?uselang=ru"
    },
    "Шали": {
        "emblem": "https://commons.wikimedia.org/wiki/File:FR_Coats-of-arms-of-None.svg?uselang=ru"
    },
    "Шарыпово": {
        "emblem": "https://commons.wikimedia.org/wiki/File:SHR00-GERB.png?uselang=ru"
    },
    "Шарья": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Sharya_(Kostroma_oblast).png?uselang=ru"
    },
    "Шатура": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Shatura_city_coa.gif?uselang=ru"
    },
    "Шахты": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Shakhty.png?uselang=ru"
    },
    "Шахунья": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Shakhunya_COA_(2013).png?uselang=ru"
    },
    "Шацк": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Gerb-Shatski-region.gif?uselang=ru"
    },
    "Шебекино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Lob_Coats_of_arms_Shebekino.svg?uselang=ru"
    },
    "Шелехов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Shelehov_(Irkutsk_oblast).png?uselang=ru"
    },
    "Шенкурск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Shenkursk_COA_(Arkhangelsk_Governorate)_(1780).png?uselang=ru"
    },
    "Шилка": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Shilka_(Chita_oblast).png?uselang=ru"
    },
    "Шимановск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Shimanovsk_(2017).gif?uselang=ru"
    },
    "Шиханы": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Shikhany_(Saratov_oblast).svg?uselang=ru"
    },
    "Шлиссельбург": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Shlisselburg_(Leningrad_oblast).png?uselang=ru"
    },
    "Шумерля": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Shumerlya_COA_(2019).png?uselang=ru"
    },
    "Шумиха": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Shumikha_(2005).png?uselang=ru"
    },
    "Шуя": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Shuya_(Ivanovo_oblast).svg?uselang=ru"
    },
    "Щёкино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Schyokino_(Tula_oblast).png?uselang=ru"
    },
    "Щёлкино": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Shcholkine.jpg?uselang=ru"
    },
    "Щёлково": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Shchelkovo_(Moscow_oblast)_(2001).png?uselang=ru"
    },
    "Щигры": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Shchigry_COA_(Kursk_Governorate)_(1780).png?uselang=ru"
    },
    "Щучье": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Schuche_(2013).jpg?uselang=ru"
    },
    "Электрогорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Elektrogorsk_(Moscow_oblast).png?uselang=ru"
    },
    "Электросталь": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Elektrostal_(Moscow_oblast).svg?uselang=ru"
    },
    "Электроугли": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Elektrougli_(Moscow_oblast).png?uselang=ru"
    },
    "Элиста": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Elista_(Kalmykia)_(2004).png?uselang=ru"
    },
    "Энгельс": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Engels_(Saratov_oblast).png?uselang=ru"
    },
    "Эртиль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Ertil.gif?uselang=ru"
    },
    "Югорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Yugorsk_COA_(2004).gif?uselang=ru"
    },
    "Южа": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yuzhsky_rayon_(Ivanovo_oblast).png?uselang=ru"
    },
    "Южно-Сахалинск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yuzhno-Sakhalinsk.png?uselang=ru"
    },
    "Южно-Сухокумск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Jujno-Sukhokumsk.png?uselang=ru"
    },
    "Южноуральск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yuzhnouralsk_(Chelyabinsk_oblast).png?uselang=ru"
    },
    "Юрга": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yurga_(Kemerovo_oblast).png?uselang=ru"
    },
    "Юрьев-Польский": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Yuriev-Polskiy_COA_(2019).png?uselang=ru"
    },
    "Юрьевец": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yurievets_(Ivanovo_oblast).png?uselang=ru"
    },
    "Юрюзань": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Yuryuzan_COA.gif?uselang=ru"
    },
    "Юхнов": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Yukhnov_COA_(Smolensk_Governorate)_(1780).png?uselang=ru"
    },
    "Ядрин": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yadrinsky_rayon_(Chuvashia).gif?uselang=ru"
    },
    "Якутск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yakuts_(Yakutia)_2012_2.jpg?uselang=ru"
    },
    "Ялта": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Yalta.svg?uselang=ru"
    },
    "Ялуторовск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Yalutorovsk_COA_(2010).gif?uselang=ru"
    },
    "Янаул": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yanaul_rayon_(Bashkortostan).png?uselang=ru"
    },
    "Яранск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yaransk.png?uselang=ru"
    },
    "Яровое": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yarovoe_(Altai_krai).png?uselang=ru"
    },
    "Ярославль": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yaroslavl_(1995).png?uselang=ru"
    },
    "Ярцево": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yartsevo_(Smolensk_oblast).png?uselang=ru"
    },
    "Ясногорск": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yasnogorsk_(Tula_oblast)_(1987).png?uselang=ru"
    },
    "Ясный": {
        "emblem": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_Yasnyi_Rayon.gif?uselang=ru"
    },
    "Яхрома": {
        "emblem": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1_%D0%AF%D1%85%D1%80%D0%BE%D0%BC%D1%8B.png?uselang=ru"
    }
}

// table = document.querySelector("#mw-content-text > div.mw-parser-output > table:nth-child(7)")
// cities = {}
// for (let i = 2; i < table.rows.length; i++) {
//     cities[table.rows[i].cells[2].childNodes[0].innerHTML] = {
//         "emblem": table.rows[i].cells[1].childNodes[0].href 
//     }
//  }

