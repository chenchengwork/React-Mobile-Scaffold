/**
 * Created by chencheng on 2017/6/15.
 */
// import { Toast } from 'antd-mobile'
import lodash from 'lodash';
import prompt from './core/prompt';
import cookies from 'js-cookie';
import queryString from 'query-string';
import helper from './core/helper';
import Socket from './core/Socket';
import auth from './core/auth';
import { contextTypes, propTypes } from './core/decorator';

import { get, post, postJSON, upload, all, del, put, formatUrlParams } from './core/request';
import { setStorage, getStorage, clearStorage, keepStorage, removeStorage } from './core/storage';

/**
 *
 * @type {{prompt: Prompt, helper: Helper, Socket: Socket, auth: Auth, decorator: {contextTypes: contextTypes, propTypes: propTypes}, request: {get: get, post: post, postJSON: postJSON, upload: upload, all: all, del: del, put: put, formatUrlParams: formatUrlParams}, storage: {setStorage: setStorage, getStorage: getStorage, clearStorage: clearStorage, keepStorage: keepStorage, removeStorage: removeStorage}, lodash, cookies: *, queryString, onfire: *}}
 */
const T = {
	prompt,

	helper,
	// websocket类
    Socket,

	auth,

	decorator: { contextTypes, propTypes },

	request: { get, post, postJSON, upload, all, del, put, formatUrlParams },

	storage: { setStorage, getStorage, clearStorage, keepStorage, removeStorage },

	// 说明文档:http://www.css88.com/doc/lodash/
	lodash: lodash,

	// 说明文档:https://github.com/js-cookie/js-cookie
	cookies: cookies,

	// 说明文档:https://github.com/sindresorhus/query-string
    queryString: queryString,
};

export default T;

