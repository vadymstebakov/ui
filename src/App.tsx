import { faker } from '@faker-js/faker';
import type { SelectProps } from '@radix-ui/react-select';
import { Select as SelectPrimitive, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select';
import { useState } from 'react';

const MOCK_OPTIONS = new Array(50).fill('').map(() => {
    return {
        label: faker.person.fullName(),
        value: faker.string.uuid(),
    };
});

const Select: React.FC<SelectProps> = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | undefined>(undefined);

    return (
        <SelectPrimitive
            {...props}
            open={open}
            onOpenChange={(open) => {
                setOpen(open);
            }}
            value={value}
            onValueChange={(value) => {
                setValue(value);
            }}
        >
            <SelectTrigger className="max-w-[300px]">
                <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent sideOffset={2}>
                {MOCK_OPTIONS.map((option) => {
                    return (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </SelectPrimitive>
    );
};

function App() {
    return <div className="p-4">
        <Select />
    </div>;
}

export default App;
