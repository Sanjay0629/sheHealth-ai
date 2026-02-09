import DisorderPage, { FormField } from "@/components/DisorderPage";
import { Brain } from "lucide-react";

const fields: FormField[] = [
  { name: "tsh", label: "TSH Level", type: "number", placeholder: "e.g. 3.5", unit: "mIU/L", min: 0, max: 100 },
  { name: "t3", label: "T3 Level", type: "number", placeholder: "e.g. 1.2", unit: "ng/mL", min: 0, max: 5 },
  { name: "t4", label: "T4 Level", type: "number", placeholder: "e.g. 8.0", unit: "µg/dL", min: 0, max: 20 },
  { name: "age", label: "Age", type: "number", placeholder: "e.g. 35", unit: "years", min: 10, max: 100 },
  { name: "gender", label: "Sex", type: "select", options: [{ label: "Female", value: "female" }, { label: "Male", value: "male" }] },
  { name: "goiter", label: "Goiter Present", type: "select", options: [{ label: "Yes", value: "1" }, { label: "No", value: "0" }] },
  { name: "weight_change", label: "Unexplained Weight Change", type: "select", options: [{ label: "Gain", value: "gain" }, { label: "Loss", value: "loss" }, { label: "None", value: "none" }] },
  { name: "heart_rate", label: "Resting Heart Rate", type: "number", placeholder: "e.g. 72", unit: "bpm", min: 40, max: 200 },
];

const ThyroidPage = () => (
  <DisorderPage
    title="Thyroid Disorder Detection"
    description="Thyroid disorders affect hormone production from the thyroid gland. Our model screens for both hypothyroidism and hyperthyroidism using key thyroid function markers."
    whyItMatters="Thyroid dysfunction affects metabolism, energy levels, and reproductive health"
    fields={fields}
    icon={<Brain className="w-8 h-8" />}
  />
);

export default ThyroidPage;
