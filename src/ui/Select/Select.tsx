import { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';
import { Component as Check_20 } from '../../assets/icons/check_20.svg?svgUse';
import { Component as TriangleDown_20 } from '../../assets/icons/triangle-down_20.svg?svgUse';
import { Component as CaretLeft_20 } from '../../assets/icons/caret-left_20.svg?svgUse';
import s from './Select.module.css';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
    return (
        <SelectPrimitive.Trigger ref={ref} className={clsx(s.trigger, className)} {...props}>
            {children}
            <SelectPrimitive.Icon asChild>
                <TriangleDown_20 className={s.icon} width={20} height={20} />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => {
    return (
        <SelectPrimitive.ScrollUpButton ref={ref} className={clsx(s['scroll-btn'], className)} {...props}>
            <CaretLeft_20 className="rotate-90" width={20} height={20} />
        </SelectPrimitive.ScrollUpButton>
    );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => {
    return (
        <SelectPrimitive.ScrollDownButton ref={ref} className={clsx(s['scroll-btn'], className)} {...props}>
            <CaretLeft_20 className="-rotate-90" width={20} height={20} />
        </SelectPrimitive.ScrollDownButton>
    );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => {
    const isPositionPopper = position === 'popper';

    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                ref={ref}
                className={clsx(s.content, isPositionPopper && s['popper-content'], className)}
                position={position}
                {...props}
            >
                <SelectScrollUpButton />
                <SelectPrimitive.Viewport className={clsx(s.viewport, isPositionPopper && s['viewport-popper'])}>
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton />
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
    return <SelectPrimitive.Label ref={ref} className={clsx(s.label, className)} {...props} />;
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
    return (
        <SelectPrimitive.Item ref={ref} className={clsx(s.item, className)} {...props}>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
            <span className={s['item-icon-wrap']}>
                <SelectPrimitive.ItemIndicator>
                    <Check_20 width={20} height={20} />
                </SelectPrimitive.ItemIndicator>
            </span>
        </SelectPrimitive.Item>
    );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => {
    return <SelectPrimitive.Separator ref={ref} className={clsx(s.separator, className)} {...props} />;
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
};
