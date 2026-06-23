# Social Media Auto-Poster

Script Python pour poster automatiquement sur Reddit, Twitter et LinkedIn.

## Installation

```bash
pip install -r requirements.txt
```

## Utilisation

### Poster sur les 3 plateformes
```bash
python scripts/launch/social-poster.py
```

### Poster sur une plateforme spécifique
```bash
python scripts/launch/social-poster.py reddit
python scripts/launch/social-poster.py twitter
python scripts/launch/social-poster.py linkedin
```

### Première utilisation
Le script demande tes credentials une seule fois. Ils sont sauvegardés dans `credentials.json` (chiffré).

## Comment obtenir les credentials

### Reddit
1. Va sur https://www.reddit.com/prefs/apps
2. Clique "create another app..."
3. Type: **script**
4. Nom: neuraapi-bot
5. Redirect URI: http://localhost:8080
6. Copie Client ID et Client Secret

### Twitter
1. Va sur https://developer.twitter.com/en/portal/dashboard
2. Crée un projet avec permissions Read and Write
3. Génère les 4 clés

### LinkedIn
1. Va sur https://www.linkedin.com/developers/apps
2. Crée une app avec permission Share on LinkedIn
3. Copie Client ID, Client Secret, Access Token, Person ID

## Contenu posté

### Reddit (1 post)
- Subreddit: r/webdev
- Titre et contenu pré-écrits

### Twitter (3 tweets)
1. Produit + lien
2. Problème + solution
3. Chiffres clés

### LinkedIn (1 post)
- Post professionnel détaillé

## Fichiers

- `social-poster.py` — Script principal
- `requirements.txt` — Dépendances Python
- `credentials.json` — Credentials (généré automatiquement)
