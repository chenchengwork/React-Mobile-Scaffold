/**
 * Created by chencheng on 2017/6/17.
 */
import { login } from '../webAPI/login';

/**
 * 执行登陆
 * @param email
 * @param password
 * @returns {*}
 */
export const doLoginAction = (email, password) => login(email, password);
