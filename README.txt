REAL TORINO HOCKEY CLUB — PWA
================================

Contenuto:
- index.html: pagina originale, con aggiunta dei metadati PWA e registrazione del service worker
- manifest.json: nome, colori, modalità standalone e icone dell'app
- service-worker.js: cache dell'app per avvio offline dopo la prima visita
- icons/: icone di avvio

PUBBLICAZIONE CON GITHUB PAGES
1. Estrai tutti i file mantenendo questa struttura.
2. Carica index.html, manifest.json, service-worker.js e la cartella icons/ nella root del repository GitHub Pages (branch main, folder / (root)).
3. In Settings > Pages verifica che GitHub Pages sia attivo.
4. Apri il sito pubblicato tramite HTTPS.
5. Visita la pagina una prima volta online; il service worker memorizzerà i file dell'app.
6. Dal browser usa “Installa app” o “Aggiungi alla schermata Home”, se disponibile.

NOTE IMPORTANTI
- La PWA richiede un indirizzo HTTPS (GitHub Pages va bene); non è installabile aprendo il file HTML direttamente dal disco.
- I dati applicativi originali continuano a essere salvati nel localStorage del browser e non si sincronizzano automaticamente tra dispositivi.
- L'uso offline riguarda la pagina e i file locali; Google Maps e Google Calendar richiedono internet.
- Per aggiornare la cache in futuro, incrementa CACHE_NAME in service-worker.js (es. real-torino-pwa-v2).
- Le icone incluse sono un monogramma RT generico, non il logo ufficiale del club.
