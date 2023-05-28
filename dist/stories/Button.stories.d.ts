import type { StoryObj } from '@storybook/react';
declare const metaButton: {
    title: string;
    component: ({ primary, size, backgroundColor, label, ...props }: import("./Button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: string;
        };
    };
};
export default metaButton;
type Story = StoryObj<typeof metaButton>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
