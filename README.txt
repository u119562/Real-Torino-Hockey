REAL TORINO HOCKEY CLUB — PWA

CONTENUTO
- index.html: la pagina HTML caricata dall'utente, con supporto PWA aggiunto
- manifest.webmanifest: nome e impostazioni di installazione
- sw.js: cache/offline e aggiornamento della pagina
- icons/: icone PWA

PUBBLICAZIONE SU GITHUB PAGES
1. Estrai tutti i file ZIP.
2. Nel repository GitHub carica index.html, manifest.webmanifest e sw.js nella cartella principale (root), insieme alla cartella icons.
3. Se GitHub mostra file con lo stesso nome, usa il caricamento/commit per aggiornare quelli esistenti.
4. In Settings > Pages seleziona main e /(root).
5. Attendi il completamento del deploy. Apri il sito con HTTPS.

INSTALLAZIONE
- Android/Chrome: apri il sito e scegli “Installa app” dal menu del browser, se disponibile.
- iPhone/iPad: apri in Safari, Condividi > Aggiungi alla schermata Home.
- Desktop Chrome/Edge: usa l'icona Installa nella barra indirizzi o il menu del browser.

DATI E LIMITI IMPORTANTI
La pagina mantiene il salvataggio locale del file originale tramite localStorage. I dati inseriti su un dispositivo/browser non vengono automaticamente condivisi con altri utenti o dispositivi. Il service worker abilita la pagina offline dopo il primo caricamento online. La PWA non introduce un database condiviso né un'autenticazione amministratore.
