import { memo } from 'react'
import TemplateCard from './TemplateCard'

interface Template {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  screenshot: string;
  tags: unknown;
}

interface TemplateGridProps {
  templates: Template[];
}

const TemplateGrid = memo(function TemplateGridInner({ templates }: TemplateGridProps) {
  if (templates.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucun template disponible.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {templates.map((template) => (
        <TemplateCard key={template.id} {...template} />
      ))}
    </div>
  );
});

export default TemplateGrid;
