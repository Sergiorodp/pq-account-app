export default function PQCONav(){
    
    const links = ['hello', 'chao']

    return(
        <nav>
            <ul>
                {
                    links.map( link => {
                        return(
                            <li key={link}>
                                <span>{link}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}