import DisorderPage, { FormField } from "@/components/DisorderPage";
import { HeartPulse } from "lucide-react";

const fields: FormField[] = [
  { name: "age", label: "Age", type: "number", placeholder: "e.g. 28", unit: "years", min: 10, max: 60 },
  { name: "bmi", label: "BMI", type: "number", placeholder: "e.g. 24.5", unit: "kg/m²", min: 10, max: 60 },
  { name: "cycle_length", label: "Cycle Length", type: "number", placeholder: "e.g. 30", unit: "days", min: 15, max: 60 },
  { name: "amh", label: "AMH Level", type: "number", placeholder: "e.g. 4.5", unit: "ng/mL", min: 0, max: 20 },
  { name: "weight_gain", label: "Weight Gain", type: "select", options: [{ label: "Yes", value: "1" }, { label: "No", value: "0" }] },
  { name: "hair_growth", label: "Excessive Hair Growth", type: "select", options: [{ label: "Yes", value: "1" }, { label: "No", value: "0" }] },
  { name: "skin_darkening", label: "Skin Darkening", type: "select", options: [{ label: "Yes", value: "1" }, { label: "No", value: "0" }] },
  { name: "follicle_count", label: "Follicle Count", type: "number", placeholder: "e.g. 12", unit: "per ovary", min: 0, max: 40 },
];

const PCOSPage = () => (
  <DisorderPage
    title="PCOS Detection"
    description="Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age. Our ML model evaluates hormonal and metabolic markers to assess your risk."
    whyItMatters="Early detection can prevent infertility, diabetes, and cardiovascular complications"
    fields={fields}
    icon={<HeartPulse className="w-8 h-8" />}
  />
);

export default PCOSPage;
