import DisorderPage, { FormField } from "@/components/DisorderPage";
import { Ribbon } from "lucide-react";

const fields: FormField[] = [
  { name: "age", label: "Age", type: "number", placeholder: "e.g. 50", unit: "years", min: 18, max: 100 },
  { name: "tumor_size", label: "Tumor Size (if known)", type: "number", placeholder: "e.g. 2.1", unit: "cm", min: 0, max: 20 },
  { name: "lymph_nodes", label: "Lymph Nodes Examined", type: "number", placeholder: "e.g. 3", min: 0, max: 40 },
  { name: "bmi", label: "BMI", type: "number", placeholder: "e.g. 26.4", unit: "kg/m²", min: 10, max: 60 },
  { name: "family_history", label: "Family History of Breast Cancer", type: "select", options: [{ label: "Yes", value: "1" }, { label: "No", value: "0" }] },
  { name: "hormone_therapy", label: "Hormone Replacement Therapy", type: "select", options: [{ label: "Yes", value: "1" }, { label: "No", value: "0" }] },
  { name: "menopause", label: "Menopausal Status", type: "select", options: [{ label: "Pre-menopausal", value: "pre" }, { label: "Post-menopausal", value: "post" }] },
  { name: "breastfeeding", label: "History of Breastfeeding", type: "select", options: [{ label: "Yes", value: "1" }, { label: "No", value: "0" }] },
];

const BreastCancerPage = () => (
  <DisorderPage
    title="Breast Cancer Risk Detection"
    description="Breast cancer is the most common cancer among women globally. Our machine learning model evaluates clinical and demographic features to provide an early risk assessment."
    whyItMatters="When detected early, the 5-year survival rate for breast cancer exceeds 99%"
    fields={fields}
    icon={<Ribbon className="w-8 h-8" />}
  />
);

export default BreastCancerPage;
