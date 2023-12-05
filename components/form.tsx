interface FormProps {
  action: (formData: FormData) => Promise<void>;
  inputs: {
    name: string;
    label: string;
    button: string;
  };
  id?: string;
}

//UI Imports
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';

export default function Form({ action, inputs, id }: FormProps) {
  return (
    <form action={action} method="POST" className="space-y-4 w-full">
      <div className="flex w-full  items-center space-x-2 ">
        <Label htmlFor={inputs.name} className="sr-only">
          {inputs.label}
        </Label>
        <Input type="text" name={inputs.name} required />
        {id && <input type="text" name="id" value={id} hidden readOnly />}
        <Button type="submit">{inputs.button}</Button>
      </div>
    </form>
  );
}
