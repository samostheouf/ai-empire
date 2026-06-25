# Politique de Sécurité — NeuraAPI

## Signalement de vulnérabilités

Si vous découvrez une faille de sécurité, merci de la signaler de manière responsable.

### Comment signaler

- **Email** : samilaboulette21@gmail.com
- **Sujet** : [SECURITY] Description courte du problème
- **Délai de réponse** : 48 heures ouvrées

### Ce qui est couvert

- Bypass d'authentification
- Exposition de données sensibles
- Injection de code (SQL, XSS, etc.)
- Fraude aux paiements
- Escalade de privilèges

### Ce qui n'est PAS couvert

- Les fonctionnalités prévues (ex: génération de contenu IA)
- Les bugs UI/cosmétiques
- Les problèmes de performance

## Processus

1. Vous signalez la vulnérabilité
2. Nous accusons réception sous 48h
3. Nous évaluons la sévérité (Critical/High/Medium/Low)
4. Nous corrigeons le problème
5. Nous vous créditons dans les remerciements (si vous le souhaitez)

## Environnements

- **Production** : https://ai-empire-steel.vercel.app
- **API** : https://ai-empire-steel.vercel.app/api/*
- **Admin** : https://ai-empire-steel.vercel.app/admin (auth requise)

## Bonnes pratiques

- Ne testez jamais sur la production sans autorisation
- Utilisez des données fictives pour les tests
- Ne partagez pas les vulnérabilités publiquement avant la correction
- Nous nous engageons à corriger les vulnérabilités critiques sous 72h
