# Real Torino PWA

## Contenuto
- `index.html`: applicazione originale convertita per l'installazione come app web.
- `manifest.webmanifest`: nome, icone e modalità standalone.
- `sw.js`: service worker per memorizzare la shell e consentire l'avvio offline.
- `icons/`: icone dell'app.

## Pubblicazione
Una PWA deve essere servita da **HTTPS** (oppure da `localhost` durante lo sviluppo). Non basta aprire `index.html` direttamente dal file manager.

Carica tutti i file mantenendo questa struttura su un hosting statico HTTPS, per esempio GitHub Pages, Netlify o un tuo server. Poi apri l'URL sul telefono e scegli:
- **Android/Chrome:** menu ⋮ → *Installa app* / *Aggiungi a schermata Home*.
- **iPhone/iPad/Safari:** Condividi → *Aggiungi alla schermata Home*.

I dati applicativi continuano a essere salvati nel browser del dispositivo, come nella versione originale; non vengono sincronizzati automaticamente tra dispositivi. Il service worker memorizza la shell dell'app per l'uso offline. Collegamenti esterni (Maps/Google Calendar) richiedono internet.
