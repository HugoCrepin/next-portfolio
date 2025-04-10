/** @type {import('next').NextConfig} */
const nextConfig = {
    // Active le mode strict de React afin d'aider à détecter les problèmes potentiels
    reactStrictMode: true,
    // Utilise le compilateur SWC pour minifier le code et améliorer les performances
    swcMinify: true,
    // Configuration pour la gestion des images optimisées par Next.js
    images: {
      domains: ['exemple.com'],  // Remplacez 'exemple.com' par les domaines nécessaires ou supprimez cette option si non utilisée
    },
    // Options expérimentales qui peuvent être utiles selon vos fonctionnalités
    experimental: {
      // Exemple: Activer la restauration automatique de la position de défilement lors de la navigation
      scrollRestoration: true,
    },
  };
  
  module.exports = nextConfig;
  