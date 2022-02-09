import { Button, Col, Form, Input, Row, message } from "antd"
import { useNavigate } from "react-router-dom"
import { Api } from "../services/api"

export const PageSignup = () => {

    const history = useNavigate()


    async function onFinish(values: {name: string, email: string, password: string, repassword: string}) {
       

        const { name, email, password, repassword } = values
        
        if(password !== repassword){
            message.error('Senhas não coincidem')
        } else {
    
            await Api.post('signup', {name, email, password}).then(res => {
                message.success('Seu cadastro foi realizado com sucesso!')
                history("/login")
            }).catch (err => {
                message.error('Esse endereço de email já está em uso')
              //  console.log(err.response.data.error.errmsg)
            })
            
        }
            
    }
    
    return (
        <Row>
            <Col span={24}>
                <h1 className="title">Faça seu cadastro</h1>
                <Form onFinish={onFinish}>
                    <Form.Item
                        label='Nome Completo'
                        name='name'
                        rules={[{ required: true, message: 'Preencha com seu nome completo' }]}
                    >   
                        <Input autoFocus placeholder="Nome Completo" />
                    </Form.Item>
                    <Form.Item
                        label="Digite seu E-mail"
                        name="email"
                        rules={[{ required: true, message: 'Preencha com seu E-mail' }]}
                    >
                        <Input placeholder="Digite seu E-mail" />
                    </Form.Item>
                    <Form.Item
                        label="Digite sua senha"
                        name="password"
                        rules={[{ required: true, message: 'Digite uma senha' }]}
                    >
                        <Input.Password placeholder="Digite sua senha" />
                    </Form.Item>
                    <Form.Item
                        label='Confirme sua senha'
                        name="repassword"
                        rules={[{ required: true, message: 'Confirme sua senha' }]}
                    >
                        <Input.Password placeholder="Confirme sua senha" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Cadastrar</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}