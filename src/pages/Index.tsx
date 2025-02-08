
import { ArrowRight, FileText, Search, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent-light text-accent-dark animate-fade-in">
              Propulsé par l'IA Avancée
            </span>
            <h1 className="heading-1 animate-slide-up">
              <span className="text-primary">Articlify</span> - Générez du Contenu de Qualité
              <span className="text-primary"> en Quelques Secondes</span>
            </h1>
            <p className="mt-6 paragraph animate-slide-up">
              Transformez vos idées en articles engageants, posts de blog et plus encore avec Articlify, votre plateforme de génération de contenu alimentée par l'IA.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10 animate-slide-up">
              <Link to="/generate" className="button-primary">
                Commencer <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/about" className="button-secondary">
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2">Fonctionnalités Principales</h2>
            <p className="mt-4 paragraph max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour générer du contenu de qualité efficacement
            </p>
          </div>
          <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Génération Polyvalente",
    description: "Créez une large gamme de contenus, des articles aux posts sur les réseaux sociaux.",
    icon: FileText,
  },
  {
    title: "Optimisation SEO",
    description: "Optimisez automatiquement votre contenu pour les moteurs de recherche.",
    icon: Search,
  },
  {
    title: "Support Multilingue",
    description: "Générez du contenu dans plusieurs langues pour toucher une audience mondiale.",
    icon: Globe,
  },
  {
    title: "Paramètres Personnalisés",
    description: "Adaptez le ton, le style et la longueur selon vos besoins.",
    icon: ArrowRight,
  },
  {
    title: "Rapide & Efficace",
    description: "Générez plusieurs contenus simultanément en quelques clics.",
    icon: ArrowRight,
  },
  {
    title: "Intégration Facile",
    description: "Intégrez facilement le contenu généré à votre workflow existant.",
    icon: ArrowRight,
  },
];

export default Index;
