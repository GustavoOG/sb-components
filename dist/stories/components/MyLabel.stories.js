"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var metaLabel = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
        allCaps: { control: 'boolean' },
        backgroundColor: { control: 'color' }
    },
    parameters: {
        label: "No label",
        size: "normal",
        allCaps: false
    },
};
exports.default = metaLabel;
exports.Basic = {
    args: {
        label: "Basic",
        size: "normal"
    }
};
exports.AllCaps = {
    args: {
        label: "All Caps",
        allCaps: true
    }
};
exports.Secondary = {
    args: {
        label: "normal",
        allCaps: true,
        color: "secondary"
    }
};
exports.Tertiary = {
    args: {
        label: "Tertiary",
        color: "tertiary"
    }
};
exports.CustomFontColor = {
    args: {
        label: "Custom Font Color",
        size: "h1",
        fontColor: "#5517ac"
    }
};
exports.CustomBackgroundColor = {
    args: {
        label: "Custom Font Color",
        size: "h1",
        backgroundColor: "black"
    }
};
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
