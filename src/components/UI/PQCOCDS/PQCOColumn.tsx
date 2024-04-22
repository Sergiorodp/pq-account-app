import {type IPQCOChildren} from '@app/types/layout/children'

interface IColumnProps extends IPQCOChildren{
    sm?: string,
    md?: string,
    lg?: string,
    lg_start?: string
    md_start?: string
    sm_start?: string
}

export default function PQCOColumn({md_start = '1', sm_start = '1', lg_start = '1', sm = '4', md = '8', lg = '16', children}: Readonly<IColumnProps>){
    return(
        <div 
            className={`
            cds--css-grid-column 
            cds--sm:col-span-${sm}
            cds--md:col-span-${md} 
            cds--lg:col-span-${lg}
            cds--lg:col-start-${lg_start}
            cds--md:col-start-${md_start}
            cds--sm:col-start-${sm_start}
            `}
        >
            {children}
        </div>
    )
}