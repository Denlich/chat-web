/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";

export interface InputProps {
  label: string;
  name: string;
  control: Control<any, any>;
  isHidden?: boolean;
}
