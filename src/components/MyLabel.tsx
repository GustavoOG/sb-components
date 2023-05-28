import './mylabel.css'

export interface MyLabelProps {
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

    backgroundColor?: string
}

/**
 * Componente Etiqueta
 */
export const MyLabel = ({
    label = "No label",
    size = 'normal',
    allCaps = false,
    color = "primary",
    fontColor,
    backgroundColor = "transparent"
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`}
            style={{ color: fontColor, backgroundColor}}>
            {allCaps ? label.toUpperCase() : label}
        </span >
    )
}
