# 🚀 Démarrer ton Storybook

Bienvenue ! Ce guide est fait pour les designers, pas besoin d'être développeur.

---

## Étape 1 — Installer Node.js (une seule fois)

Node.js est le moteur qui fait tourner Storybook. Tu n'as besoin de l'installer qu'une seule fois.

1. Va sur **https://nodejs.org**
2. Télécharge la version **LTS** (le bouton vert)
3. Installe-le normalement (suivre le wizard d'installation)
4. Redémarre ton terminal / ta console

**Pour vérifier que c'est bien installé**, ouvre ton terminal et tape :
```
node --version
```
Tu devrais voir quelque chose comme `v20.11.0`

---

## Étape 2 — Ouvrir le terminal dans ce dossier

### Sur Mac :
1. Ouvre le **Finder**
2. Navigue jusqu'à ce dossier (le dossier `storybook`)
3. Fais un **clic droit** sur le dossier → "Nouveau terminal au dossier"

### Sur Windows :
1. Ouvre l'**Explorateur de fichiers**
2. Navigue jusqu'à ce dossier
3. Clique dans la barre d'adresse en haut, tape `cmd` et appuie sur Entrée

---

## Étape 3 — Installer les dépendances (une seule fois)

Dans le terminal, tape cette commande et appuie sur Entrée :

```
npm install
```

⏳ Attends que c'est terminé (ça peut prendre 1-2 minutes la première fois).
Tu verras un message `added XXX packages`.

---

## Étape 4 — Lancer Storybook

```
npm run storybook
```

🎉 Storybook va s'ouvrir automatiquement dans ton navigateur à l'adresse :
**http://localhost:6006**

---

## Comment personnaliser avec tes couleurs Figma

### Changer les couleurs :
1. Ouvre le fichier `src/tokens/colors.js`
2. Les valeurs `#XXXXXX` sont les codes couleur hexadécimaux
3. Dans Figma → clique sur une couleur → copie le code hex
4. Remplace la valeur dans le fichier
5. Storybook se met à jour automatiquement !

### Changer la typographie :
1. Ouvre `src/tokens/typography.js`
2. Change `fontFamily.sans` par le nom de ta police
3. Ajuste les tailles selon ton design

---

## Structure du projet

```
mon-design-system/
├── 📄 package.json          — Configuration du projet
├── .storybook/
│   ├── main.js              — Configuration de Storybook
│   └── preview.js           — Paramètres d'affichage
└── src/
    ├── tokens/
    │   ├── colors.js        ← 🎨 TES COULEURS (à personnaliser)
    │   └── typography.js    ← 📝 TA TYPO (à personnaliser)
    ├── stories/
    │   ├── Colors.stories.jsx     — Page couleurs
    │   └── Typography.stories.jsx — Page typographie
    └── components/
        └── Button/
            ├── Button.jsx          — Le composant bouton
            └── Button.stories.jsx  — La documentation du bouton
```

---

## Arrêter Storybook

Dans le terminal, appuie sur `Ctrl + C`

---

## Problèmes courants

**"npm n'est pas reconnu"** → Node.js n'est pas installé, reprends l'étape 1

**Le navigateur ne s'ouvre pas** → Va manuellement sur http://localhost:6006

**Erreur après `npm install`** → Essaie de supprimer le dossier `node_modules` et relance `npm install`
