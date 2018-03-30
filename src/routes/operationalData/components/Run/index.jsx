import T from 'utils/T';
import { PureComponent } from 'react';
import {  List, InputItem, Button, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

class H5NumberInputExample extends PureComponent {
    state = {
        // type: 'money',
        type: 'text',
    }

    submit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
        });
    }

    render() {
    	let errors = [];
        const { getFieldProps, getFieldError } = this.props.form;

        return (
            <div>
                <List>
                    <InputItem
                        {...getFieldProps('user_email',{
                        	rules: [{required: true}]
                        })}
                        type="text"
                        placeholder="邮箱"
                        clear
                        moneyKeyboardAlign="left"
                    >邮箱</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_email',{
                            rules: [{required: true}]
                        })}
                        type="text"
                        placeholder="邮箱"
                        clear
                        moneyKeyboardAlign="left"
                    >邮箱</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_password')}
                        type="password"
                        placeholder="密码"
                        clear
                    >密码</InputItem>

                    <InputItem
                        {...getFieldProps('user_email',{
                            rules: [{required: true}]
                        })}
                        type="text"
                        placeholder="邮箱"
                        clear
                        moneyKeyboardAlign="left"
                    >邮箱</InputItem>

					<WhiteSpace />

                    <Button type="primary" onClick={this.submit}>登录</Button>
                </List>
            </div>
        );
    }
}

const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);


export default class Login extends PureComponent {
    render() {
		return (
            <H5NumberInputExampleWrapper />
        );
    }
}




