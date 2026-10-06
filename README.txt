# Real Torino PWA v1

Questa cartella contiene la prima versione PWA della pagina HTML originale.

## Cosa è stato mantenuto
- Interfaccia e logica della pagina originale.
- Calendario/raggruppamenti.
- Tornei e trasferte.
- Risultati.
- Marcatori.
- Statistiche.
- Impostazioni e dati locali.

## Protezione risultati e marcatori
Le modifiche a risultati e marcatori richiedono un PIN amministratore.

**PIN iniziale: 4826**

Il PIN viene verificato localmente nel browser. Questa è una protezione adatta alla v1 personale, ma **non è una sicurezza server-side**: il codice della PWA è scaricabile dal browser. Se in futuro vuoi che i dati siano pubblici e condivisi fra tutti gli utenti, con modifica consentita esclusivamente a te, servirà un database/backend con autenticazione.

## Installazione
La PWA deve essere pubblicata tramite HTTPS (per esempio GitHub Pages, Netlify o un altro hosting statico).

Una volta online:
1. apri il sito dal telefono;
2. usa "Aggiungi alla schermata Home" / "Installa app";
3. l'app verrà aperta in modalità standalone.

## Nota sui dati
La versione v1 continua a usare `localStorage`, come la pagina originale. Quindi risultati, marcatori, impostazioni e altri dati modificati sul tuo dispositivo non vengono automaticamente sincronizzati con altri telefoni.

## Struttura
- `index.html` — pagina/app originale con modifiche PWA e blocco amministratore.
- `manifest.webmanifest` — configurazione installazione.
- `sw.js` — service worker e cache offline.
- `icons/` — icone PWA.
