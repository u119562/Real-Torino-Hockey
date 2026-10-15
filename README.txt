REAL TORINO HOCKEY CLUB — PWA

CONTENUTO
- index.html: pagina HTML originale aggiornata con supporto PWA
- manifest.webmanifest: nome, icone e impostazioni installazione
- sw.js: service worker e cache offline di base
- icons/: icone dell'app

PUBBLICAZIONE SU GITHUB PAGES
1. Estrai tutti i file dello ZIP.
2. Carica index.html, manifest.webmanifest, sw.js e la cartella icons nella cartella principale (root) del repository.
3. Mantieni GitHub Pages su Deploy from a branch, branch main, cartella /(root).
4. Attendi la pubblicazione e apri il sito tramite HTTPS.
5. Su Chrome/Edge usa l'icona Installa nella barra degli indirizzi o il menu > Installa app. Su iPhone/iPad apri in Safari e scegli Condividi > Aggiungi alla schermata Home.

IMPORTANTE SUI DATI
Questa versione conserva la logica e il codice della pagina HTML originale. I dati salvati con localStorage restano nel singolo browser/dispositivo e non vengono sincronizzati automaticamente tra utenti o dispositivi. Prima di sostituire la versione online, esporta o fai una copia di sicurezza dei dati se la pagina offre tale funzione.

NOTA
L'installazione PWA richiede la pubblicazione tramite HTTPS (ad esempio GitHub Pages); l'apertura diretta del file HTML dal computer non è sufficiente per installare la PWA.
