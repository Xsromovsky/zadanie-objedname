import { Meta, StoryObj } from "@storybook/react/*";
import Navbar from "../components/Navbar";
import { fn } from "@storybook/test";

const meta: Meta = {
    title: 'Navbar',
    component: Navbar,
    parameters: {
        layout: 'top'
    },
    tags: ['autodocs'],
    args: {
    }
}
export default meta;

type Story = StoryObj<typeof Navbar>;

export const NavBar: Story = {

}