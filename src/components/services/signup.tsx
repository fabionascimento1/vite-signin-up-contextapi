import { Api } from "../../services/api"

export async function SignupRequest(name: string, email: string, password: string) {
    await Api.post('signup', {name, email, password}).then(res => {
    }).catch (err => {
       console.log(err.errmsg)
    })
}
    
    