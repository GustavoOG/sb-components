import './mylabel.css';
export interface MyLabelProps {
    /**
    * Este es el mensaje a nostrar en la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Capitalizar la etiquet
    */
    allCaps?: boolean;
    /**
    * Este es el color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Color de la fuente
    */
    fontColor?: string;
    backgroundColor?: string;
}
/**
 * Componente Etiqueta
 */
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
