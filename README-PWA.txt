REAL TORINO – PWA
==================

CONTENUTO
- index.html: pagina originale predisposta per l'installazione PWA
- manifest.webmanifest: nome, icone e impostazioni di installazione
- service-worker.js: cache dell'applicazione per l'utilizzo offline
- icons/: icone PWA e Apple Touch Icon

PUBBLICAZIONE SU GITHUB PAGES
1. Estrai tutti i file mantenendo la struttura delle cartelle.
2. Carica index.html, manifest.webmanifest, service-worker.js e la cartella icons/
   nella cartella principale (root) del repository GitHub.
3. In Settings > Pages seleziona Deploy from a branch, branch main e folder /(root).
4. Attendi la pubblicazione. GitHub Pages fornisce HTTPS, necessario per la PWA.
5. Apri l'indirizzo GitHub Pages, attendi il primo caricamento online e poi installa:
   - Android/Chrome: menu ⋮ > Installa app / Aggiungi a schermata Home.
   - iPhone/iPad/Safari: Condividi > Aggiungi alla schermata Home.
   - PC/Chrome o Edge: icona Installa nella barra degli indirizzi, se disponibile.

AGGIORNAMENTI
Quando aggiorni i file dell'app, incrementa CACHE_NAME in service-worker.js
(es. real-torino-pwa-v2) per forzare il rinnovo della cache sui dispositivi.

NOTE
- La pagina e le sue funzioni esistenti sono state mantenute.
- La cache offline conserva l'app shell; collegamenti esterni come Google Maps
  e Google Calendar richiedono comunque una connessione Internet.
- I dati salvati nel browser restano locali a quel dispositivo/browser:
  la PWA non sincronizza automaticamente i dati tra dispositivi.
