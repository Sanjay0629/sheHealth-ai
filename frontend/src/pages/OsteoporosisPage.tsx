import DisorderPage, { FormField } from "@/components/DisorderPage";
import { Bone } from "lucide-react";

const fields: FormField[] = [
  { name: "age", label: "Age", type: "number", placeholder: "e.g. 55", unit: "years", min: 20, max: 100 },
  { name: "bmd", label: "Bone Mineral Density (T-score)", type: "number", placeholder: "e.g. -1.5", unit: "T-score", min: -5, max: 5 },
  { name: "calcium", label: "Serum Calcium", type: "number", placeholder: "e.g. 9.2", unit: "mg/dL", min: 5, max: 15 },
  { name: "vitamin_d", label: "Vitamin D Level", type: "number", placeholder: "e.g. 30", unit: "ng/mL", min: 0, max: 100 },
  { name: "menopause", label: "Menopausal Status", type: "select", options: [{ label: "Pre-menopausal", value: "pre" }, { label: "Post-menopausal", value: "post" }] },
  { name: "physical_activity", label: "Physical Activity Level", type: "select", options: [{ label: "Sedentary", value: "sedentary" }, { label: "Moderate", value: "moderate" }, { label: "Active", value: "active" }] },
  { name: "family_history", label: "Family History of Osteoporosis", type: "select", options: [{ label: "Yes", value: "1" }, { label: "No", value: "0" }] },
  { name: "smoking", label: "Smoking Status", type: "select", options: [{ label: "Current Smoker", value: "current" }, { label: "Former Smoker", value: "former" }, { label: "Never", value: "never" }] },
];

const OsteoporosisPage = () => (
  <DisorderPage
    title="Osteoporosis Risk Detection"
    description="Osteoporosis weakens bones, making them fragile and more likely to fracture. Our model evaluates demographic and clinical factors to predict your risk level."
    whyItMatters="Early detection reduces fracture risk by up to 50% with proper treatment"
    fields={fields}
    icon={<Bone className="w-8 h-8" />}
  />
);

export default OsteoporosisPage;
