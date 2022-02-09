import { Button, Col, Form, Input, message, Row, Space } from "antd"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../components/templates/logo"
import { useAuth } from "../context/AuthProvider/useAuth"
import { getUserLocalStore } from "../context/AuthProvider/util"

import './login.css'
import ImageLogin from '../assets/log.png'

export const PageLogin = () => {

    const auth = useAuth()
    const history = useNavigate()

    useEffect(() => {
        const user = getUserLocalStore()

        if(user) {
            history('/profile')
        }
    },[])


    async function onFinish(values: {email: string, password: string}){
        try {
            await auth.authenticate(values.email, values.password)
            history('/profile')
        } catch (error) {
            message.error('Invalid email or password')
        }
    }
    return(
        <Row justify="center">
            <Col xs={24} xl={12}>
                <div className="space-align-middle">
                    <div className="logo"><Logo /></div>
                    <h1 className="title">Faca seu login</h1>
                    <Form 
                        labelCol={{span: 6}}                   
                        name='singin' onFinish={onFinish}>
                        <Form.Item
                            label='Login'
                            name='email'
                        >
                            <Input autoFocus placeholder='Digite seu login' />
                        </Form.Item>

                        <Form.Item
                            label='Password'
                            name='password'
                        >
                            <Input.Password placeholder='Digite sua senha'/>
                        </Form.Item>

                        <Form.Item wrapperCol={{offset: 12, span: 12}}>
                            <Button type="primary" htmlType="submit">Acessar</Button>
                        </Form.Item>
                    </Form>
                    <div className="signup">
                        <p>Não possui uma conta? <Button><Link to="/signup">Cadastra-se</Link></Button></p>
                    </div>
                </div>
            </Col>
            <Col xs={0} xl={12}>
                <div className="ImageLogin"><img src={ImageLogin} alt="Login" /></div>
            </Col>
        </Row>
    )
}