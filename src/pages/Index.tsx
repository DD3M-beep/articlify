
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent-light text-accent-dark animate-fade-in">
              Powered by Advanced AI
            </span>
            <h1 className="heading-1 animate-slide-up">
              Generate High-Quality Content
              <span className="text-primary"> In Seconds</span>
            </h1>
            <p className="mt-6 paragraph animate-slide-up">
              Transform your ideas into engaging articles, blog posts, and more with our AI-powered content generation platform. Save time and resources while maintaining quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10 animate-slide-up">
              <button className="button-primary">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="button-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2">Key Features</h2>
            <p className="mt-4 paragraph max-w-2xl mx-auto">
              Everything you need to generate high-quality content efficiently
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
    title: "AI-Powered Generation",
    description: "Leverage advanced AI models to generate high-quality content instantly.",
    icon: ArrowRight,
  },
  {
    title: "SEO Optimization",
    description: "Automatically optimize your content for search engines.",
    icon: ArrowRight,
  },
  {
    title: "Multiple Formats",
    description: "Generate various types of content from blog posts to product descriptions.",
    icon: ArrowRight,
  },
  {
    title: "Custom Parameters",
    description: "Customize tone, style, and length to match your needs.",
    icon: ArrowRight,
  },
  {
    title: "Fast & Efficient",
    description: "Generate multiple pieces of content simultaneously.",
    icon: ArrowRight,
  },
  {
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing workflow.",
    icon: ArrowRight,
  },
];

export default Index;
