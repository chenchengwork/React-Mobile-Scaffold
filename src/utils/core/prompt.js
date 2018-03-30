/**
 * Created by chencheng on 17-8-30.
 */
import Modal from 'antd-mobile/es/modal'
import Toast from 'antd-mobile/es/toast'

class Prompt {

    constructor(Toast) {

    }

    /**
     * 提示成功
     * @param {String} msg
     * @param {Number} duration
     * @param {Function} onClose
     */
    info(msg, duration = 2, onClose = () => {}) {
        Toast.info(msg, duration, onClose);
    }

    /**
     * 提示成功
     * @param {String} msg
     * @param {Number} duration
     * @param {Function} onClose
     */
    success(msg, duration = 2, onClose = () => {}) {
        Toast.success(msg, duration, onClose);
    }

    /**
     * 提示错误
     * @param {String} msg
     * @param {Number} duration
     * @param {Function} onClose
     */
    error(msg, duration = 2, onClose = () => {}) {
        Toast.fail(msg, duration, onClose);
    }

    /**
     * 提示警告
     * @param {String} msg
     * @param {Number} duration
     * @param {Function} onClose
     */
    warn(msg, duration = 2, onClose = () => {}) {
        Toast.warn(msg, duration, onClose);
    }

    /**
     * 提示警告
     * @param {String} msg
     * @param {Number} duration
     * @param {Function} onClose
     */
    offline(msg, duration = 2, onClose = () => {}) {
        Toast.offline(msg, duration, onClose);
    }

    /**
     * 确认提示框
     * @param {function} cbForOk return Promise对象
     * @param {Object} options
     * {
     *
     * }
     */
    confirm(cbForOk, options = {}) {
        options = Object.assign({
            title: '删除',
            content: '确定删除吗？',    // content可以是react节点实例
            okText: '确定',
            cancelText: '取消',
            onOk: cbForOk,
            onCancel() {
                return null;
            },
        }, options);

        return Modal.alert(options.title, options.content, [
            {
                text: options.cancelText,
                // onPress: () => console.log('cancel')
            },
            {
                text: options.okText,
                onPress: () => options.onOk(),
            },
        ])

    }

}

export default new Prompt();
