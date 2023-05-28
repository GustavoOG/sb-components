import type { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';


const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    },
    parameters: {
        label: "No label",
        size: "normal",
        allCaps: false
    },
} satisfies Meta<typeof MyLabel>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: "Basic",
        size: "normal"
    }
}

export const AllCaps: Story = {
    args: {
        label: "All Caps",
        allCaps: true
    }
}

export const Secondary: Story = {
    args: {
        label: "normal",
        allCaps: true,
        color: "secondary"
    }
}

export const Tertiary: Story = {
    args: {
        label: "Tertiary",
        color: "tertiary"
    }
}

export const CustomFontColor: Story = {
    args: {
        label: "Custom Font Color",
        size: "h1",
        fontColor: "#5517ac"
    }
}



// export const H1: Story = {
//     args: {
//         label: "Etiqueta",
//         size: "h1"
//     }
// }

// export const H2: Story = {
//     args: {
//         label: "Etiqueta",
//         size: "h2"
//     }
// }
// export const H3: Story = {
//     args: {
//         label: "Etiqueta",
//         size: "h3"
//     }
// }