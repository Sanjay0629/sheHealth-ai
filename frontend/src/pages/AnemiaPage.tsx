import DisorderPage, { FormField } from "@/components/DisorderPage";
import { Droplets } from "lucide-react";

const fields: FormField[] = [
  { name: "hemoglobin", label: "Hemoglobin", type: "number", placeholder: "e.g. 12.5", unit: "g/dL", min: 3, max: 20 },
  { name: "rbc_count", label: "RBC Count", type: "number", placeholder: "e.g. 4.5", unit: "million/µL", min: 1, max: 8 },
  { name: "mcv", label: "MCV", type: "number", placeholder: "e.g. 85", unit: "fL", min: 50, max: 120 },
  { name: "mch", label: "MCH", type: "number", placeholder: "e.g. 28", unit: "pg", min: 15, max: 40 },
  { name: "iron_level", label: "Serum Iron", type: "number", placeholder: "e.g. 70", unit: "µg/dL", min: 10, max: 300 },
  { name: "ferritin", label: "Ferritin", type: "number", placeholder: "e.g. 50", unit: "ng/mL", min: 1, max: 500 },
  { name: "fatigue", label: "Chronic Fatigue", type: "select", options: [{ label: "Yes", value: "1" }, { label: "No", value: "0" }] },
  { name: "diet_type", label: "Diet Type", type: "select", options: [{ label: "Vegetarian", value: "veg" }, { label: "Non-Vegetarian", value: "non-veg" }, { label: "Vegan", value: "vegan" }] },
];

const AnemiaPage = () => (
  <DisorderPage
    title="Anemia Detection"
    description="Anemia occurs when your blood lacks enough healthy red blood cells. Our model uses hematological parameters to evaluate your risk of iron-deficiency anemia."
    whyItMatters="Untreated anemia can lead to severe fatigue, pregnancy complications, and heart problems"
    fields={fields}
    icon={<Droplets className="w-8 h-8" />}
  />
);

export default AnemiaPage;
