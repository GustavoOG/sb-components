import type { StoryObj } from '@storybook/react';
declare const metaLabel: {
    title: string;
    component: ({ label, size, allCaps, color, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: string;
        };
        color: {
            control: string;
        };
        fontColor: {
            control: string;
        };
        allCaps: {
            control: string;
        };
        backgroundColor: {
            control: string;
        };
    };
    parameters: {
        label: string;
        size: string;
        allCaps: boolean;
    };
};
export default metaLabel;
type Story = StoryObj<typeof metaLabel>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const CustomFontColor: Story;
export declare const CustomBackgroundColor: Story;
