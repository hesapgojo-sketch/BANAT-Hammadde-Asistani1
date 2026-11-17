BANAT HAMMADDE ASISTANI - SURUM 1.2
Hazirlayan: Soner icin

BU SURUMDE DUZELTILENLER
- Is emri fotografi seciminde OCR artik otomatik baslatilir; onceki surumde dosya secimi ile OCR fonksiyonu arasinda onchange baglantisi eksikti.
- Turkce + Ingilizce OCR; makine, is emri no, urun kodu, urun tanimi, planlanan miktar ve cevrim alanlarini doldurmaya calisir.
- OCR ile bulunan hammadde satirlari kaydetmeden once duzenlenebilir liste halinde gosterilir. Miktar, birim, karisim orani ve raf no elle duzeltilebilir.
- Cokuntu onleyici ve hizlandirici ayri alanlarda tutulur; OCR bunlari tanimaya calisir.
- Urun fotografi, urun kodu/adiyla katalog kaydina baglanir. Ayni kod/urun diger makinede kullanilirsa fotograf otomatik eslestirilir.
- Arsiv, makine son durumunun yaninda kaydedilmis is emirlerini de listeler.
- Fotograf kayitlari IndexedDB'ye yazilmadan once 2000px sinirli JPEG olarak sikistirilir; OCR ise orijinal secilen dosyada calisir.
- Service worker uygulama kabugu ve paket icindeki ornek urun gorsellerini onbellege alir.
- Android icin GitHub Actions APK derleme akisi ve GitHub Pages HTTPS yayin akisi eklendi.
- Is emri ust bilgileri (lot, tarih, vardiya, kalip, seri basi), operatör, gerceklesen miktar, durus ve fire/yolluk alanlari da kayda eklenebilir.

OCR SINIRLARI
OCR Tesseract.js CDN ve tur+eng dil dosyalarini ilk kullanimda internetten indirir. Bu nedenle uygulamanin ana ekrani ve kayitlari cevrimdisi acilabilir; fakat OCR ilk indirme yapilmadiysa internet ister. Tablo kolonlari, ozellikle raf numarasi ve benzer hammadde adlari, fotograf acisi/isik/yansima nedeniyle yanlis okunabilir. Uretim oncesi her miktari, birimi, yuzdeyi, raf numarasini ve ozel katkilarini orijinal is emriyle karsilastirin.

PWA / HTTPS YAYINI (GITHUB PAGES)
1. ZIP'i bilgisayarda cikartin; banat_app klasorunu bulun.
2. GitHub Pages ile yayinlamak icin banat_app klasorunun icerigini GitHub'da yeni bir repository'nin ana dizinine yukleyin. GitHub > Settings > Pages bolumunde Build and deployment kaynagini GitHub Actions yapin. Actions sekmesinde Publish BANAT PWA to GitHub Pages akisinin bitmesini bekleyin. Pages adresi HTTPS olur.
3. Alternatif Netlify: GitHub reposunu Netlify'a baglayin; Build command npm install && npm run build, Publish directory dist. Manuel yuklemede once npm install && npm run build calistirip yalnizca dist klasorunu yukleyin.
4. HTTPS adresi olustuktan sonra Android Chrome ile acin.
5. Chrome menu > Uygulamayi yukle / Ana ekrana ekle.
6. IndexedDB kayitlari ayni cihazdaki ayni Chrome profilinde kalir. Tarayici verisini temizlemeyin; duzenli JSON yedegi indirin.

ANDROID APK (GITHUB ACTIONS)
Bu ZIP APK degildir; APK kaynak koddan derlenir. GitHub hesabi ve repo gerekir.
1. banat_app klasorunun icerigini GitHub'da yeni bir repository'ye yukleyin.
2. Actions sekmesini acin. Build BANAT Android APK akisinin tamamlanmasini bekleyin.
3. Basarili calisma sayfasindaki Artifacts bolumunden BANAT-Hammadde-Asistani-debug-apk dosyasini indirin.
4. ZIP artifact'i telefona indirip cikartin; app-debug.apk dosyasini Android'e kurun. Android, bilinmeyen uygulama kurulum izni sorabilir.
5. Bildirim iznini verin. Android 12+ cihazlarda kesin alarm izni ve pil optimizasyonu ayarlari gerekebilir. Ureticiye gore ayarlar degisir.
6. Debug APK test icindir; sirket geneli dagitim icin imzali release APK/AAB ve kurumsal onay gerekir.

BILDIRIMLER
PWA/tarayici surumunde uygulama tamamen kapaliyken dakikasi dakikasina alarm garanti edilmez. Android APK'da Capacitor Local Notifications kullanilir. Android bildirim izni, kesin alarm izni (cihazin destekledigi/izin verdigi durumda) ve pil kisitlamalari kontrol edilmelidir. Android uretici yazilimlari arka plan alarmlarini kisitlayabilir.

KALICI KAYIT VE YEDEK
Makine, urun, is emri, fotograf ve hatirlaticilar IndexedDB'de cihazda saklanir. JSON yedegi indirip guvenli bir yerde tutun; yeni cihazda Arsiv > Yedek yukle ile geri alin. Bu surum otomatik bulut senkronizasyonu yapmaz. Cihaz arizasi veya tarayici verisi silinmesi halinde yedek yoksa kayitlar kaybolabilir.

KURUMSAL NOT
Uygulama BANAT'in resmi kurumsal sunucusuna bagli degildir. Kisisel/yerel takip uygulamasidir. Is emirlerindeki uretim miktari ve hammadde degerleri icin tek resmi kaynak is emri ve isletme prosedurleridir; OCR sonucu tek basina uretim onayi sayilmaz.
