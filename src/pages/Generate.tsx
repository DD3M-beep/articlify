
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Generate = () => {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un sujet ou des instructions pour la génération.",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);
    // Simuler une génération de contenu (à remplacer par votre véritable appel API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setGeneratedContent(
        `Voici un article généré sur le sujet "${prompt}".\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
      );
      toast({
        title: "Succès",
        description: "Contenu généré avec succès !",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la génération du contenu.",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="container py-20">
      <h1 className="heading-1">Générer du Contenu</h1>
      <p className="mt-4 paragraph">
        Entrez votre sujet ou vos instructions ci-dessous, et notre IA générera du contenu adapté à vos besoins.
      </p>

      <div className="mt-8 space-y-6">
        <div className="space-y-2">
          <label htmlFor="prompt" className="text-sm font-medium">
            Sujet ou Instructions
          </label>
          <Textarea
            id="prompt"
            placeholder="Ex: Écrivez un article sur les bienfaits de la méditation..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="h-32"
          />
        </div>

        <Button
          onClick={handleGenerate}
          disabled={generating || !prompt.trim()}
          className="w-full sm:w-auto"
        >
          {generating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Génération en cours...
            </>
          ) : (
            "Générer le Contenu"
          )}
        </Button>

        {generatedContent && (
          <div className="p-4 mt-6 space-y-2 border rounded-lg">
            <h2 className="text-xl font-semibold">Contenu Généré</h2>
            <div className="whitespace-pre-wrap">{generatedContent}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generate;
