import PQCOGridCds from "@app/components/UI/PQCOCDS/PQCOGrid";

export default function DashBoard(){
    return (
        <PQCOGridCds>
        <main style={{height:'50vh', background: 'blue'}} className="cds--css-grid-column cds--sm:col-span-3 cds--lg:col-span-4">  
            <p className="">
                dashboard hello
            </p>
        </main>
        <main style={{height:'50vh', background: 'green'}} className="cds--css-grid-column cds--sm:col-span-3 cds--lg:col-span-4">  
        <p className="">
            dashboard hello
        </p>
        </main>
        </PQCOGridCds>
    )
}