import OrderButton from "../components/OrderButton";
import { OrderType } from "../utils/types";
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ComponentProps } from "react";


const exampleOrder: OrderType = {
    Time: "21:00",
    Capacity: 2,
    OriginalCapacity: 2
}

const meta: Meta = {
    title: 'Order/Button',
    component: OrderButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        order: exampleOrder,
    },
    argTypes: {
        order: {control: 'object'}
    }
}

export default meta;

type Story = StoryObj<typeof OrderButton>;

export const Normal: Story = {
    args: {
        order: exampleOrder
    }
}