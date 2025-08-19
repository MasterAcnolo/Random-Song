# NF Random Song

Ce projet est un site web minimaliste permettant de découvrir aléatoirement des chansons de **NF** (Nathan Feuerstein). Il est conçu pour être rapide, responsive et agréable à utiliser. Le site ne propose que des titres de l'artiste NF.

## Fonctionnement

- Chargement : Lorsqu'un utilisateur arrive sur le site, une animation subtile signale le chargement de la page. Et une première requête est envoyé à l'API pour réveiller le serveur.
- Génération aléatoire : En cliquant sur le bouton principal, le site sélectionne une chanson de NF au hasard via l'API. La Première requête peut être un peu longue à arriver car le serveur se met en veille automatiquement lorsque il n'y a pas de requête
- Affichage : Le titre, l'artiste(s) s'affichent dans un conteneur animé, avec un style sobre et responsive.
- Gestion des erreurs : Si aucune chanson n'est trouvée ou en cas de problème, un message d'erreur s'affiche avec une image adaptée.

## Utilisation de l'API

Le site utilise une API dédiée pour récupérer dynamiquement les titres de NF. Lorsqu'un utilisateur clique sur le bouton, une requête est envoyée à l'endpoint suivant :

```
https://nf-api-c24p.onrender.com/api/musiques/random
```

Si jamais vous souhaitez utiliser l'API, voici le [Repositories](https://github.com/MasterAcnolo/NF-API) associé :

L'API retourne un objet contenant les informations du morceau :

```json
{
  "id": 801,
  "titre": "Hope",
  "album": "Hope",
  "date_sortie": "07/04/2023",
  "duree": "4:25",
  "cover_url": "Hope.webp"
}
```

En cas d'erreur ou d'absence de réponse, le site affiche un message d'erreur adapté. L'ajout ou la modification de titres se fait côté serveur, via le fichier `musiques.json` de l'API.

## Pour contribuer

- Forkez le projet
- Proposez vos améliorations (nouvelles chansons, nouveaux styles, etc.)
- Ouvrez une Pull Request

---

Ce site est open-source et vise à offrir une expérience musicale simple et agréable à tous.
