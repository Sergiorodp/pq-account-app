import PQCOGridCds from '@app/components/UI/PQCOCDS/PQCOGrid'
import PQCOColumn from '@app/components/UI/PQCOCDS/PQCOColumn'
import styles from './login-styles.module.scss'

export default function LogIn(){
    return(
        <PQCOGridCds>
            <PQCOColumn lg='4' lg_start='7'>
                <div>
                    Log In
                </div>
            </PQCOColumn>
        </PQCOGridCds>
    )
}