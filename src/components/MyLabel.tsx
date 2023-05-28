import './mylabel.css'

interface MyLabelProps {
    /**
    * Este es el mensaje a nostrar en la etiqueta
    */
    label: string,
    /**
    * Este es el tamaño de la etiqueta
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3',
    /**
    * Capitalizar la etiquet
    */
    allCaps?: boolean,
    /**
    * Este es el color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary',
    /**
    * Color de la fuente
    */
    fontColor?: string,
}

/**
 * Componente Etiqueta
 */
export const MyLabel = ({
    label = "No label",
    size = 'normal',
    allCaps = false,
    color = "primary",
    fontColor = '' }: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`}
            style={{ color: fontColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span >
    )
}
