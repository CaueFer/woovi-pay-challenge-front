import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface PinInputProps {
  id: string;
  name: string;
  required: true;
  disabled: boolean;
}
export function PinInput({ id, name, required, disabled }: PinInputProps) {
  return (
    <InputOTP
      id={id}
      name={name}
      required={required}
      disabled={disabled}
      maxLength={4}
      minLength={4}
      pattern={REGEXP_ONLY_DIGITS}
    >
      <InputOTPGroup>
        <InputOTPSlot className="w-14" index={0} />
        <InputOTPSlot className="w-14" index={1} />
        <InputOTPSlot className="w-14" index={2} />
        <InputOTPSlot className="w-14" index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}
